import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Navbar from '@/components/Navbar/Navbar';
import ReduxProvider from '@/services/providers/ReduxProvider';

const myFont = localFont({
  src: '../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_regular.woff2',
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
      <body className={myFont.className}>
        <ReduxProvider>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
