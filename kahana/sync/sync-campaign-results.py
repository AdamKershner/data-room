"""
sync-campaign-results.py

Pulls sequence enrollment and engagement metrics from HubSpot and writes them
to outputs/campaigns/[campaign]/results-sync.json for the weekly-update skill to read.

Oasis GTM stack: HubSpot (CRM + sequences), Clay (enrichment), Warmly (intent)

Usage:
    python3 sync/sync-campaign-results.py
    python3 sync/sync-campaign-results.py --campaign "esa-series-b-tier2"

Requirements:
    pip install requests python-dotenv
"""

import os
import json
import argparse
from datetime import datetime
from pathlib import Path

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    print("python-dotenv not installed. Run: pip install python-dotenv")

# --- Configuration -----------------------------------------------------------
# Set these in your .env file. Never hardcode API keys here.

HUBSPOT_API_KEY = os.getenv("HUBSPOT_API_KEY")
CAMPAIGNS_DIR = Path("outputs/campaigns")

# Map local campaign folder names to HubSpot sequence name patterns.
# Update this as you create new campaigns in HubSpot.
CAMPAIGN_FOLDER_TO_SEQUENCE_NAME = {
    "esa-hire-tier2": "ESA Hire Signal",
    "series-b-esa-tier2": "Series B ESA Outreach",
    "paywall-hit-enterprise": "Paywall Hit Enterprise",
    "warmly-pricing-tier3": "Warmly Pricing Page",
    "multi-user-domain": "Multi-User Domain Signal",
}

# -----------------------------------------------------------------------------


def get_hubspot_headers() -> dict:
    if not HUBSPOT_API_KEY:
        raise ValueError(
            "HUBSPOT_API_KEY not set in .env. "
            "Create a HubSpot Private App with CRM + sales-email-read scopes."
        )
    return {
        "Authorization": f"Bearer {HUBSPOT_API_KEY}",
        "Content-Type": "application/json",
    }


def fetch_sequence_stats(sequence_name_pattern: str) -> dict:
    """
    Fetch enrollment and engagement stats for a HubSpot sequence matching the pattern.
    HubSpot Sequences API: https://developers.hubspot.com/docs/api/crm/sequences
    """
    import requests

    headers = get_hubspot_headers()

    # Step 1: List all sequences and find the matching one
    resp = requests.get(
        "https://api.hubapi.com/automation/v4/sequences",
        headers=headers,
        params={"limit": 100},
    )
    resp.raise_for_status()
    sequences = resp.json().get("results", [])

    # Find closest match
    match = next(
        (s for s in sequences if sequence_name_pattern.lower() in s.get("name", "").lower()),
        None,
    )
    if not match:
        print(f"  No HubSpot sequence found matching: '{sequence_name_pattern}'")
        return {}

    seq_id = match["id"]
    seq_name = match["name"]

    # Step 2: Fetch sequence stats
    stats_resp = requests.get(
        f"https://api.hubapi.com/automation/v4/sequences/{seq_id}/stats",
        headers=headers,
    )

    if stats_resp.status_code == 404:
        print(f"  Stats endpoint not available for sequence: {seq_name}")
        print("  Note: HubSpot sequence stats may require Sales Hub Professional or Enterprise.")
        return {}

    stats_resp.raise_for_status()
    stats = stats_resp.json()

    enrollments = stats.get("totalEnrollments", 0)
    sends = stats.get("totalEmailsSent", 0)
    opens = stats.get("totalEmailsOpened", 0)
    replies = stats.get("totalReplied", 0)
    # HubSpot sequences don't natively track meeting bookings — this would
    # come from a separate meetings integration or deal creation workflow.
    # Set to None and track via HubSpot deals created from sequence contacts.
    meetings = None

    return {
        "tool": "hubspot",
        "sequence_id": seq_id,
        "campaign_name": seq_name,
        "synced_at": datetime.utcnow().isoformat(),
        "enrollments": enrollments,
        "sends": sends,
        "opens": opens,
        "replies": replies,
        "meetings_booked": meetings,
        "reply_rate": round(replies / sends, 4) if sends > 0 else 0,
        "open_rate": round(opens / sends, 4) if sends > 0 else 0,
        "meeting_rate": None,  # Requires additional HubSpot deal/meeting correlation
    }


def sync_all_campaigns():
    """Sync results for all campaign folders found in outputs/campaigns/."""
    if not CAMPAIGNS_DIR.exists():
        print(f"No campaigns directory found at {CAMPAIGNS_DIR}")
        return

    campaign_dirs = [d for d in CAMPAIGNS_DIR.iterdir() if d.is_dir()]
    if not campaign_dirs:
        print("No campaign folders found in outputs/campaigns/")
        return

    print(f"Found {len(campaign_dirs)} campaign(s). Syncing from HubSpot...\n")

    for campaign_dir in campaign_dirs:
        folder_name = campaign_dir.name
        print(f"  Syncing: {folder_name}")

        # Look up the HubSpot sequence name for this campaign folder
        sequence_pattern = CAMPAIGN_FOLDER_TO_SEQUENCE_NAME.get(folder_name)
        if not sequence_pattern:
            print(f"  No sequence mapping found for '{folder_name}'. Add it to CAMPAIGN_FOLDER_TO_SEQUENCE_NAME.")
            continue

        try:
            metrics = fetch_sequence_stats(sequence_pattern)
            if not metrics:
                continue

            output_path = campaign_dir / "results-sync.json"
            with open(output_path, "w") as f:
                json.dump(metrics, f, indent=2)

            print(f"  Wrote {output_path}")
            print(f"    Enrollments: {metrics.get('enrollments')} | "
                  f"Sends: {metrics.get('sends')} | "
                  f"Replies: {metrics.get('replies')} | "
                  f"Reply rate: {metrics.get('reply_rate', 0):.1%} | "
                  f"Open rate: {metrics.get('open_rate', 0):.1%}")

        except Exception as e:
            print(f"  Error syncing {folder_name}: {e}")

    print("\nSync complete. Run the weekly-update skill to incorporate these numbers.")
    print("Note: Meeting rate requires a separate HubSpot deal/meeting correlation query.")


def sync_single_campaign(campaign_folder: str):
    """Sync results for a single campaign folder."""
    campaign_dir = CAMPAIGNS_DIR / campaign_folder
    if not campaign_dir.exists():
        print(f"Campaign folder not found: {campaign_dir}")
        return

    sequence_pattern = CAMPAIGN_FOLDER_TO_SEQUENCE_NAME.get(campaign_folder)
    if not sequence_pattern:
        print(f"No sequence mapping for '{campaign_folder}'. Add it to CAMPAIGN_FOLDER_TO_SEQUENCE_NAME.")
        return

    print(f"Syncing single campaign: {campaign_folder}")
    metrics = fetch_sequence_stats(sequence_pattern)
    if metrics:
        output_path = campaign_dir / "results-sync.json"
        with open(output_path, "w") as f:
            json.dump(metrics, f, indent=2)
        print(f"Wrote {output_path}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Sync HubSpot sequence results to campaign folders")
    parser.add_argument("--campaign", help="Sync a specific campaign folder name only")
    args = parser.parse_args()

    if args.campaign:
        sync_single_campaign(args.campaign)
    else:
        sync_all_campaigns()
