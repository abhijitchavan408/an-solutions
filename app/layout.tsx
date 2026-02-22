import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: {
    default: 'AN Solutions | IT Solutions & Software Development',
    template: '%s | AN Solutions Solutions',
  },
  description:
    'AN Solutions Solutions delivers cutting-edge website development, mobile app development, UI/UX design, and custom software solutions for modern businesses.',
  keywords: [
    'IT solutions',
    'web development',
    'mobile app development',
    'software development',
    'UI/UX design',
    'custom software',
  ],
  openGraph: {
    title: 'AN Solutions Solutions | IT Solutions & Software Development',
    description:
      'Cutting-edge website development, mobile app development, UI/UX design, and custom software solutions.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1570EF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
