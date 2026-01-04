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

## Deployment

### Deploy to Vercel (Recommended)

**Option 1: Via Vercel Dashboard**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Set the **Root Directory** to `financial-dashboard`
5. Vercel will auto-detect Vite - click "Deploy"
6. Your app will be live in ~2 minutes!

**Option 2: Via Vercel CLI**
```bash
npm i -g vercel
cd financial-dashboard
vercel
```

### Deploy to Heroku

1. Create a `Procfile` in the `financial-dashboard` directory:
```
web: npm run preview
```

2. Add a `static.json` for static file serving:
```json
{
  "root": "dist",
  "clean_urls": true,
  "routes": {
    "/**": "index.html"
  }
}
```

3. Install Heroku CLI and deploy:
```bash
heroku create your-app-name
git subtree push --prefix financial-dashboard heroku main
```

**Note**: For Heroku, you'll need to build locally first or use a buildpack that runs `npm run build`.

## Next Steps for Full Interactive Site

Consider adding:
- Navigation/routing (React Router) ✅ Already implemented
- Multiple scenario views (Conservative, Base, Aggressive) ✅ Already implemented
- Interactive charts (Chart.js, Recharts, or D3.js) ✅ Recharts already included
- Data fetching from API or JSON files
- User authentication for staff vs investor views
- Export functionality (PDF, Excel)
- Sensitivity analysis visualizations ✅ Already implemented
- Monthly breakdown views ✅ Already implemented
- Comparison tools between scenarios ✅ Already implemented

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Recharts** - Chart library for data visualization
- **CSS3** - Styling with modern features



