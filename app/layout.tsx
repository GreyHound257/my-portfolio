import './globals.css';
import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Manrope, IBM_Plex_Mono } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Particles from '@/components/visuals/Particles';
import { site } from '@/lib/site';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${site.shortName} — Full-Stack & Systems Engineer`,
  description: `${site.name} (${site.alias}) — Full-Stack & Systems Engineer building reliable web applications, enterprise tools, and high-performance APIs with a security-first foundation. Engineering Logic. Scalable Code.`,
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: `${site.name} — Full-Stack & Systems Engineer`,
    description: 'Engineering Logic. Scalable Code. Resilient web applications, enterprise tools, and high-performance backend systems.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#080b11',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Particles />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}