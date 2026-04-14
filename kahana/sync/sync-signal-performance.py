"""
sync-signal-performance.py

Aggregates performance metrics across all campaign results-sync.json files
and writes a summary to context/signal-performance-sync.json.

The weekly-update skill reads this file to draft updated signal performance
log entries without manual metric transcription.

Oasis GTM stack: HubSpot (sequences), Clay (enrichment), Warmly (intent)

Usage:
    python3 sync/sync-signal-performance.py

Requirements:
    pip install python-dotenv
"""

import json
import os
from datetime import datetime
from pathlib import Path
from collections import defaultdict

CAMPAIGNS_DIR = Path("outputs/campaigns")
OUTPUT_PATH = Path("context/signal-performance-sync.json")

# Map campaign folder name patterns to signal names from the signal library.
# Keep this in sync with CAMPAIGN_FOLDER_TO_SEQUENCE_NAME in sync-campaign-results.py
# and the signal names in context/signal-library.md.
CAMPAIGN_TO_SIGNAL_MAP = {
    "esa-hire": "ESA or Solutions Engineer Hire at Target Account",
    "series-b": "Series A or B Funding Announcement",
    "paywall-hit": "Paywall Hit",
    "warmly-pricing": "Pricing Page Visit (Warmly / HubSpot)",
    "multi-user": "3+ Users From Same Company Domain Active",
    "demo-request": "Demo Request or Contact Sales Form Submitted",
    "core-feature": "Core Feature Activation (Product Usage)",
}


def infer_signal(campaign_name: str) -> str:
    """Map a campaign folder name to a signal name from the signal library."""
    campaign_lower = campaign_name.lower()
    for key, signal in CAMPAIGN_TO_SIGNAL_MAP.items():
        if key in campaign_lower:
            return signal
    return "Unknown Signal"


def aggregate():
    signal_data = defaultdict(lambda: {
        "sends": 0,
        "replies": 0,
        "meetings": 0,
        "enrollments": 0,
        "opens": 0,
        "campaigns": []
    })

    if not CAMPAIGNS_DIR.exists():
        print(f"No campaigns directory at {CAMPAIGNS_DIR}")
        return

    synced_count = 0
    for campaign_dir in CAMPAIGNS_DIR.iterdir():
        if not campaign_dir.is_dir():
            continue

        sync_file = campaign_dir / "results-sync.json"
        if not sync_file.exists():
            continue

        try:
            with open(sync_file) as f:
                data = json.load(f)

            signal = infer_signal(campaign_dir.name)
            signal_data[signal]["sends"] += data.get("sends", 0)
            signal_data[signal]["replies"] += data.get("replies", 0)
            signal_data[signal]["meetings"] += data.get("meetings_booked") or 0
            signal_data[signal]["enrollments"] += data.get("enrollments", 0)
            signal_data[signal]["opens"] += data.get("opens", 0)
            signal_data[signal]["campaigns"].append(campaign_dir.name)
            synced_count += 1

        except Exception as e:
            print(f"  Error reading {sync_file}: {e}")

    if synced_count == 0:
        print("No results-sync.json files found. Run sync-campaign-results.py first.")
        return

    # Build output
    output = {
        "synced_at": datetime.utcnow().isoformat(),
        "signals": {}
    }

    for signal, data in signal_data.items():
        sends = data["sends"]
        replies = data["replies"]
        meetings = data["meetings"]
        opens = data["opens"]

        output["signals"][signal] = {
            "enrollments_90d": data["enrollments"],
            "sends_90d": sends,
            "opens": opens,
            "replies": replies,
            "meetings_booked": meetings,
            "reply_rate": round(replies / sends, 4) if sends > 0 else 0,
            "open_rate": round(opens / sends, 4) if sends > 0 else 0,
            "meeting_rate": round(meetings / sends, 4) if sends > 0 else 0,
            "source_campaigns": data["campaigns"],
        }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w") as f:
        json.dump(output, f, indent=2)

    print(f"Signal performance summary written to {OUTPUT_PATH}")
    print(f"\nSummary ({synced_count} campaign(s) aggregated):\n")

    for signal, stats in output["signals"].items():
        print(f"  {signal}")
        print(f"    Sends: {stats['sends_90d']} | "
              f"Reply rate: {stats['reply_rate']:.1%} | "
              f"Open rate: {stats['open_rate']:.1%} | "
              f"Meeting rate: {stats['meeting_rate']:.1%}")

    print("\n--- PLG Signal Check ---")
    plg_signals = ["Paywall Hit", "3+ Users From Same Company Domain Active", "Core Feature Activation"]
    for sig in plg_signals:
        if sig in output["signals"]:
            stats = output["signals"][sig]
            print(f"  {sig}: {stats['sends_90d']} outreaches | {stats['reply_rate']:.1%} reply | {stats['meeting_rate']:.1%} meeting")
        else:
            print(f"  {sig}: No data yet")

    print("\nRun the weekly-update skill to incorporate these into the signal performance log.")


if __name__ == "__main__":
    aggregate()
