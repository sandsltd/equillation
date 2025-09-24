# Images Directory

This directory contains all image assets for the Equillation website.

## Recommended Image Structure

```
images/
├── hero/
│   ├── hero-background.jpg     # Main hero section background
│   └── horses-grazing.jpg      # Natural herd imagery
├── philosophy/
│   ├── horse-connection.jpg    # Images showing respectful connection
│   └── natural-behavior.jpg    # Horses in natural state
├── training/
│   ├── distance-work.jpg       # Distance-based training imagery
│   └── herd-environment.jpg    # Natural herd environment
├── about/
│   └── team-photo.jpg          # Team or founder photos
└── logos/
    ├── logo.svg                # Main logo (vector)
    ├── logo.png                # Logo for various uses
    └── favicon.ico             # Website favicon
```

## Image Guidelines

- **Format**: Use WebP for modern browsers, with JPG/PNG fallbacks
- **Hero Images**: Recommended 1920x1080 minimum resolution
- **Philosophy/Training**: 800x600 or 1200x800 for section images  
- **Logos**: SVG preferred for scalability
- **Alt Text**: Always include descriptive alt text for accessibility

## Usage in Components

Images in the public folder can be referenced directly:

```jsx
import Image from 'next/image'

<Image 
  src="/images/hero/hero-background.jpg"
  alt="Horses grazing peacefully in natural herd environment"
  width={1920}
  height={1080}
  priority
/>
```

## Optimization

- Use Next.js Image component for automatic optimization
- Consider using `next-optimized-images` for advanced optimization
- Compress images before uploading (TinyPNG, ImageOptim)
