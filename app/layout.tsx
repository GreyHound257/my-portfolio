import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Eniolaoluwa Dayo-Obatewose | Full-Stack Engineer',
  description: 'The portfolio of Eniolaoluwa Dayo-Obatewose. Full-Stack Engineer building scalable, production-ready applications.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="font-sans">
        <div className="min-h-screen flex flex-col relative selection:bg-brand-accent/20">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
