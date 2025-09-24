import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Equillation - Equine Facilitated Constellations',
  description: 'Fostering authentic connection and collaboration with horses through respectful, distance-based equine facilitated constellations training.',
  keywords: 'equine facilitated, horse training, constellation work, natural horsemanship, horse therapy',
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
