# sync/

Scripts that pull live data from HubSpot and Warmly into the repo. Run these before the weekly-update skill to give Claude fresh numbers without manual data entry.

---

## Stack

| Tool | Role |
|------|------|
| **HubSpot** | CRM, lead scoring, sequence tracking, pipeline |
| **Clay** | Account and contact enrichment |
| **Warmly** | Website visitor identification, company-level intent |

---

## Scripts

| Script | What it pulls | Source |
|--------|--------------|--------|
| `sync-campaign-results.py` | Sequence reply rates, meeting rates, enrollment counts by campaign | HubSpot Sequences API |
| `sync-signal-performance.py` | Signal performance aggregated from campaign results | Local campaign data |
| `sync-warmly-intent.py` | Company-level intent signals (website visits, pricing page views) | Warmly API → HubSpot |

---

## Setup

```bash
cp .env.example .env
# Fill in your API keys — never commit .env to git
pip install -r sync/requirements.txt
```

Required `.env` values:
```
HUBSPOT_API_KEY=your_hubspot_private_app_token
WARMLY_API_KEY=your_warmly_api_key
```

Run manually:
```bash
python3 sync/sync-campaign-results.py       # Pull HubSpot sequence results
python3 sync/sync-signal-performance.py     # Aggregate signal-level performance
```

Then run the weekly-update skill:
```
Read skills/weekly-update/SKILL.md and run the weekly context update.
```

---

## Output Format

Each script writes structured data that the weekly-update skill reads:

- `sync-campaign-results.py` → `outputs/campaigns/[campaign-name]/results-sync.json`
- `sync-signal-performance.py` → `context/signal-performance-sync.json`

These JSON files are gitignored by default (they contain live data).

### results-sync.json schema

```json
{
  "tool": "hubspot",
  "campaign_id": "string",
  "campaign_name": "string",
  "synced_at": "ISO 8601 datetime",
  "enrollments": 0,
  "sends": 0,
  "opens": 0,
  "replies": 0,
  "meetings_booked": 0,
  "reply_rate": 0.0,
  "meeting_rate": 0.0,
  "open_rate": 0.0
}
```

### signal-performance-sync.json schema

```json
{
  "synced_at": "ISO 8601 datetime",
  "signals": {
    "Signal Name": {
      "sends_90d": 0,
      "replies": 0,
      "meetings_booked": 0,
      "reply_rate": 0.0,
      "meeting_rate": 0.0,
      "source_campaigns": ["campaign-folder-name"]
    }
  }
}
```

---

## Troubleshooting

| Error | Likely cause | Fix |
|-------|-------------|-----|
| `HUBSPOT_API_KEY not set` | Missing `.env` entry | Copy `.env.example` to `.env` and add your HubSpot private app token |
| `HTTP 401` | API key invalid or expired | Regenerate in HubSpot Settings → Integrations → Private Apps |
| `No sequence found matching...` | Sequence name mismatch | Update `CAMPAIGN_TO_SIGNAL_MAP` in `sync-signal-performance.py` |
| `No results-sync.json files found` | Campaign sync hasn't run | Run `sync-campaign-results.py` first |
| Warmly data not appearing | Warmly integration not configured | Confirm Warmly → HubSpot sync is active in Warmly dashboard |

---

## HubSpot Private App Setup

The sync scripts use HubSpot's Private Apps (not legacy API keys).

1. In HubSpot: Settings → Integrations → Private Apps → Create a private app
2. Required scopes: `crm.objects.contacts.read`, `crm.objects.companies.read`, `crm.objects.deals.read`, `sales-email-read`, `crm.schemas.contacts.read`
3. Copy the token to `.env` as `HUBSPOT_API_KEY`
