import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anish Prashun',
  description: 'Software Development Engineer & Team Lead with 4+ years of experience building scalable web applications and AI-powered platforms. Currently leading development at XAMTAC CONSULTING LLC.',
  keywords: ['Anish Prashun', 'Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'AI/ML'],
  authors: [{ name: 'Anish Prashun', url: 'https://www.anishprashun.me' }],
  creator: 'Anish Prashun',
  publisher: 'Anish Prashun',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.anishprashun.me',
    title: 'Anish Prashun',
    description: 'Software Development Engineer & Team Lead with 4+ years of experience building scalable web applications and AI-powered platforms.',
    siteName: 'Anish Prashun',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Anish Prashun',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anish Prashun',
    description: 'Software Development Engineer & Team Lead with 4+ years of experience building scalable web applications and AI-powered platforms.',
    creator: '@APrashun',
    images: ['/og.png'],
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
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className="min-h-screen bg-navy text-slate font-sans text-xl leading-normal antialiased">
        <div id="root" className="min-h-screen grid grid-rows-[1fr_auto] grid-cols-full">
          {children}
        </div>
      </body>
    </html>
  )
} 