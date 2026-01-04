# Oasis Browser Financial Dashboard

A React-based dashboard for displaying Oasis Browser's 2026 financial projections and key metrics.

## Features

- **Key Highlights**: Visual cards showing ARR, subscribers, contracts, margins, and cash position
- **Financial Summary Table**: Complete breakdown of 2026 financial metrics with notes
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Clean UI**: Modern gradient design with hover effects

## Quick Start

### Prerequisites

- Node.js 16+ and npm (or yarn)

### Installation

```bash
cd financial-dashboard
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
financial-dashboard/
├── src/
│   ├── components/
│   │   ├── FinancialSummary.jsx    # Financial metrics table
│   │   ├── FinancialSummary.css
│   │   ├── KeyHighlights.jsx       # Highlight cards
│   │   └── KeyHighlights.css
│   ├── App.jsx                     # Main app component
│   ├── App.css
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Updating Financial Data

Edit the data in:
- `src/components/KeyHighlights.jsx` - Update the `highlights` array
- `src/components/FinancialSummary.jsx` - Update the `metrics` array

### Styling

- Global styles: `src/index.css`
- App styles: `src/App.css`
- Component styles: Individual CSS files in `src/components/`

### Adding New Components

1. Create component file in `src/components/`
2. Import and use in `App.jsx`
3. Add corresponding CSS file

## Next Steps for Full Interactive Site

Consider adding:
- Navigation/routing (React Router)
- Multiple scenario views (Conservative, Base, Aggressive)
- Interactive charts (Chart.js, Recharts, or D3.js)
- Data fetching from API or JSON files
- User authentication for staff vs investor views
- Export functionality (PDF, Excel)
- Sensitivity analysis visualizations
- Monthly breakdown views
- Comparison tools between scenarios

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features



