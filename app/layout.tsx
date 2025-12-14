// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Particles from '@/components/visuals/Particles';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google'; // Assuming you kept the fonts


export const metadata = {
  title: 'Eniolaoluwa Dayo-Obatewose — Portfolio',
  description: 'My little corner of the internet where I showcase my projects and share my thoughts on web development and technology.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning is added here to prevent 
        errors from browser extensions like Grammarly/LastPass 
        that inject attributes into the body tag.
      */}
      <body suppressHydrationWarning>
        <Particles />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 container mx-auto px-6 py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}