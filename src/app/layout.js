import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "ColorSnap: Extract Colors from Image Online | Free Color Picker Tool",
  description:
    "Upload any image to extract color palette instantly. Get hex codes, RGB values, and matching Tailwind CSS classes. Free online color picker tool for developers and designers.",
  keywords: [
    "image to color palette",
    "extract colors from image",
    "color picker online",
    "hex code from image",
    "tailwind colors",
    "photo color extractor",
    "online color tool",
    "image color generator"
  ],
  authors: [{ name: "ColorSnap" }],
  creator: "ColorSnap",
  publisher: "ColorSnap",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://color-snap-five.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ColorSnap: Extract Colors from Image Online | Free Color Picker Tool",
    description: "Upload any image to extract color palette instantly. Get hex codes, RGB values, and matching Tailwind CSS classes.",
    url: 'https://color-snap-five.vercel.app',
    siteName: 'ColorSnap',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ColorSnap - Extract Colors from Any Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ColorSnap: Extract Colors from Image Online",
    description: "Upload any image to extract color palette instantly. Get hex codes, RGB values, and matching Tailwind CSS classes.",
    images: ['/og-image.png'],
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'ColorSnap',
    description: 'Extract color palettes from images and get hex codes, RGB values, and matching Tailwind CSS classes instantly.',
    url: 'https://color-snap-five.vercel.app',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web Browser',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Extract dominant colors from images',
      'Get hex color codes',
      'Get RGB values',
      'Match Tailwind CSS classes',
      'Download color palettes',
      'Drag and drop image upload'
    ],
    screenshot: 'https://color-snap-five.vercel.app/og-image.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150'
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="//vercel.live" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
