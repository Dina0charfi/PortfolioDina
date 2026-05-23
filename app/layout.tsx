import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Dina Charfi | AI Engineer & Startup Builder',
  description: 'AI engineer building premium startup-grade products across Generative AI, RAG systems, computer vision, and full-stack applications.',
  generator: 'v0.app',
  keywords: ['AI Engineer', 'Generative AI', 'RAG Systems', 'Computer Vision', 'LLM', 'Deep Learning', 'Full Stack', 'ESPRIT'],
  authors: [{ name: 'Dina Charfi' }],
  openGraph: {
    title: 'Dina Charfi | AI Engineer & Startup Builder',
    description: 'AI engineer building premium startup-grade products across Generative AI, RAG systems, computer vision, and full-stack applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dina Charfi | AI Engineer & Startup Builder',
    description: 'AI engineer building premium startup-grade products across Generative AI, RAG systems, computer vision, and full-stack applications.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#f97316',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
