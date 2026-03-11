import type { Metadata, Viewport } from 'next'


import './globals.css'

import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/inter.ttf",
  variable: "--font-inter",
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk.ttf",
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: {
    default: "AN Solutions | IT Solutions & Software Development",
    template: "%s | AN Solutions Solutions",
  },
  description:
    "AN Solutions Solutions delivers cutting-edge website development, mobile app development, UI/UX design, and custom software solutions for modern businesses.",
  keywords: [
    "IT solutions",
    "web development",
    "mobile app development",
    "software development",
    "UI/UX design",
    "custom software",
  ],
  openGraph: {
    title: "AN Solutions Solutions | IT Solutions & Software Development",
    description:
      "Cutting-edge website development, mobile app development, UI/UX design, and custom software solutions.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1570EF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
