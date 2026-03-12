import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://chromastyle.evtsoy.com'),
  title: {
    default: 'ChromaStyle — Discover Your Personal Color Palette',
    template: '%s | ChromaStyle',
  },
  description:
    'ChromaStyle analyses your skin tone to reveal your perfect seasonal color palette. Try colors on live, scan any shade, and build a wardrobe that always works.',
  keywords: ['color analysis', 'seasonal color', 'personal palette', 'style app', 'iOS'],
  openGraph: {
    type: 'website',
    url: 'https://chromastyle.evtsoy.com',
    siteName: 'ChromaStyle',
    title: 'ChromaStyle — Discover Your Personal Color Palette',
    description:
      'AI-powered color season analysis for iPhone. Discover your palette, scan colors, and build a wardrobe you love.',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
