import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QHSS Hackathon',
  description: "QHSS Hackathon brings students together to build ideas, products, and solutions that strengthen the school community.",
  icons: {
    icon: '/qhss-hackathon-logo.png',
    apple: '/qhss-hackathon-logo.png',
  },
  openGraph: {
    title: 'QHSS Hackathon',
    description: 'Students building ideas that strengthen the school community.',
    siteName: 'QHSS Hackathon',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'QHSS Hackathon logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QHSS Hackathon',
    description: 'Students building ideas that strengthen the school community.',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
