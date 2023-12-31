import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer/Footer';
// import TanstackProvider from '@/providers/TanstackProvider'
import Navbar from '@/components/Navbar/Navbar';
import ReduxProvider from '@/services/providers/ReduxProvider';

// const inter = Inter({ subsets: ['latin'] })
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'OPS 2.0',
  description: 'Generated by Ops',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <TanstackProvider> */}
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
        {/* </TanstackProvider> */}
      </body>
    </html>
  );
}
