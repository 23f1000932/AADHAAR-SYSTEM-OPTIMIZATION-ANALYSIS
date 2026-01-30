# Aadhaar System Optimization Analysis Website

A stunning, interactive Next.js website showcasing analysis of India's Aadhaar system revealing ₹370 Crore inefficiencies with 6 strategic solutions delivering 8-10X ROI.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Interactive Components**: 3D flip cards, animated charts, count-up metrics
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Lazy loading, code splitting, optimized animations
- **SEO Ready**: Meta tags, Open Graph, structured data
- **Production Ready**: Ready to deploy to Vercel in one click

## 📋 Prerequisites

- Node.js 18+ and npm
- Git (optional, for version control)

## 🛠️ Setup Instructions

1. **Navigate to the project directory**:
   ```bash
   cd website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 📄 Replacing the PDF Report

1. Replace the placeholder file at `public/report.pdf` with your actual UIDAI analysis report
2. Ensure the file is named exactly `report.pdf`
3. The download button will automatically serve your report

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  primary: "#1E3A8A",    // Deep Blue
  secondary: "#F97316",  // Vibrant Orange
  accent: "#10B981",     // Emerald Green
  danger: "#EF4444",     // Bold Red
}
```

### Content

Edit `lib/data.ts` to update:
- Key metrics and statistics
- Problem statements
- Findings data
- Solutions roadmap
- Impact metrics
- Team information

### Components

Individual sections are in `components/`:
- `Hero.tsx` - Hero section with animated metrics
- `ProblemStatement.tsx` - Challenge overview
- `FindingsCards.tsx` - Interactive flip cards
- `DataVisualization.tsx` - Charts and graphs
- `SolutionsTimeline.tsx` - Recommendations timeline
- `ImpactMetrics.tsx` - Impact statistics
- `Team.tsx` - Team and methodology
- `CallToAction.tsx` - CTA and footer

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Or use Vercel Dashboard**:
   - Push code to GitHub
   - Import repository in Vercel
   - Deploy automatically

### Build for Production

```bash
npm run build
npm run start
```

## 🧪 Testing

Run the production build locally:

```bash
npm run build
npm run start
```

Check Lighthouse scores:
- Open Chrome DevTools
- Run Lighthouse audit
- Target: 95+ on all metrics

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono

## 📁 Project Structure

```
website/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/          # All section components
│   ├── Hero.tsx
│   ├── ProblemStatement.tsx
│   ├── FindingsCards.tsx
│   ├── DataVisualization.tsx
│   ├── SolutionsTimeline.tsx
│   ├── ImpactMetrics.tsx
│   ├── Team.tsx
│   └── CallToAction.tsx
├── lib/
│   ├── data.ts          # All content data
│   └── utils.ts         # Utility functions
├── public/
│   └── report.pdf       # PDF report (replace this)
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.mjs      # Next.js configuration
└── package.json         # Dependencies
```

## 🎯 Performance Optimization

- Lazy loading for images and charts
- Code splitting for each component
- Optimized animations with Framer Motion
- Responsive images
- Minimal bundle size

## 📝 License

Built for Government of India Digital Infrastructure Hackathon.
© 2026 IIT Madras Data Science Team

## 🤝 Support

For questions or issues, please contact the IIT Madras Data Science Team.

## 🌟 Acknowledgments

- IIT Madras Data Science Program
- UIDAI for providing the dataset
- Government of India Digital Infrastructure Initiative
