# Equillation - Equine Facilitated Constellations

A beautiful, modern website for Equillation, showcasing their unique approach to equine facilitated constellation training that honors horses' natural wisdom and autonomy.

## About Equillation

Equillation specializes in equine facilitated constellations with a deep respect for horses as sentient beings. Their approach emphasizes:

- **Distance-based work** that doesn't intrude on horses' natural lives
- **Herd-based environment** where horses remain in their natural state
- **Freedom of choice** for horses to engage or not
- **Authentic connection** through respectful partnership

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Color Palette** - Earth tones reflecting natural harmony

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd equillation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
equillation/
├── app/
│   ├── components/
│   │   ├── Header.tsx      # Navigation with mobile menu
│   │   ├── Hero.tsx        # Landing section
│   │   ├── Philosophy.tsx  # Core values and approach
│   │   ├── Training.tsx    # Training methodology
│   │   ├── Contact.tsx     # Contact form and info
│   │   └── Footer.tsx      # Footer with links
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Homepage
├── tailwind.config.js      # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json          # Dependencies and scripts
```

## Features

- **Responsive Design** - Beautiful on all devices
- **Modern UI/UX** - Clean, professional design with nature-inspired colors
- **Smooth Navigation** - Fixed header with smooth scrolling
- **Contact Form** - Integrated contact form for inquiries
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Accessibility** - WCAG compliant design patterns

## Color Palette

- **Primary**: Sage greens (#459688 family)
- **Earth**: Warm browns (#b08d54 family) 
- **Sage**: Muted greens (#748562 family)

## Customization

The design uses a custom Tailwind configuration with nature-inspired colors. You can modify:

- Colors in `tailwind.config.js`
- Typography in `app/globals.css`
- Component styling in individual component files

## License

© 2024 Equillation. All rights reserved.
