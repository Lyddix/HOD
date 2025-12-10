# House of Degens

A modern casino streamer affiliate website showcasing exclusive casino bonuses and offers.

## Features

- 🎰 Interactive casino card grid with detailed popups
- 🎨 Modern light blue design with complex animated backgrounds
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🔗 Social media integration (Kick & Discord)
- 🎯 Clickable casino cards with individual URLs

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for deployment on:
- **Vercel**: Automatic deployment from GitHub
- **GitHub Pages**: Build and deploy static export
- **Strato**: Upload build files to hosting

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── HeaderBanner.tsx # Hero banner section
│   ├── CasinoGrid.tsx   # Grid of casino cards
│   ├── CasinoCard.tsx   # Individual casino card
│   ├── CasinoModal.tsx  # Popup modal for casino details
│   └── Footer.tsx       # Footer with social links
└── types/
    └── casino.ts        # TypeScript types for casino data
```

## Customization

### Adding Casino Data

To add your casino data, edit the `placeholderCasinos` array in `components/CasinoGrid.tsx`. Each casino object should include:

```typescript
{
  id: string,
  name: string,
  logo: string,        // Path to logo image
  rating: number,      // 0-5 rating
  bonus: string,       // Bonus description
  features: string[],  // Array of feature strings
  url: string,         // Affiliate link URL
  welcomeOffer?: string,
  license?: string,
  description?: string
}
```

### Updating Social Links

Update the Kick and Discord links in:
- `components/Header.tsx` (header social buttons)
- `components/HeaderBanner.tsx` (banner CTA buttons)
- `components/Footer.tsx` (footer social links)

### Styling

The color scheme is defined in `tailwind.config.js` and uses a light blue theme. The complex background animations are in `app/globals.css`.

## Building for Production

```bash
npm run build
npm start
```

For static export (GitHub Pages, Strato):
```bash
npm run build
# Output will be in the 'out' directory
```

