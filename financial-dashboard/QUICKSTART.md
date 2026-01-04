# Quick Start Guide

## Install and Run

```bash
# Navigate to the dashboard directory
cd financial-dashboard

# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

The app will automatically open in your browser at `http://localhost:3000`

## What You'll See

- **Key Highlights Section**: 6 cards showing:
  - ARR: $105,163
  - B2C Subscribers: 461
  - B2B Contracts: 5
  - Gross Margin: 81.0%
  - Cash Balance: $509,587
  - Cash Flow: Positive

- **Financial Summary Table**: Complete table with all 9 metrics and their notes

## Updating Data

To update the financial data, edit:
- `src/components/KeyHighlights.jsx` - Update the `highlights` array
- `src/components/FinancialSummary.jsx` - Update the `metrics` array

## Next Steps

This is a foundation you can extend with:
- React Router for navigation
- Charts and visualizations
- Multiple scenario views
- Data fetching from APIs
- User authentication
- Export functionality



