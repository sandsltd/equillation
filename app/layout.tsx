import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://equillation.vercel.app'),
  title: 'Equillation - Equine Facilitated Constellations',
  description: 'Fostering authentic connection and collaboration with horses through respectful, distance-based equine facilitated constellations training.',
  keywords: 'equine facilitated, horse training, constellation work, natural horsemanship, horse therapy',
  authors: [{ name: 'Equillation Team' }],
  creator: 'Equillation',
  publisher: 'Equillation',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://equillation.vercel.app',
    siteName: 'Equillation',
    title: 'Equillation - Equine Facilitated Constellations',
    description: 'Fostering authentic connection and collaboration with horses through respectful, distance-based equine facilitated constellations training.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Equillation Logo - Equine Facilitated Constellations',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@equillation',
    creator: '@equillation',
    title: 'Equillation - Equine Facilitated Constellations',
    description: 'Fostering authentic connection and collaboration with horses through respectful, distance-based equine facilitated constellations training.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome', url: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/favicons/android-chrome-512x512.png', sizes: '512x512' }
    ]
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
