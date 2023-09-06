import { Footer, NavBar } from '@/components';

import './globals.css';

// import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Car hub',
  description: 'Discover the best cars in the world',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
