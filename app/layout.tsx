import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';

import { cn } from '@/lib/utils';

import { AppProvider } from './AppProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ProjeX',
  description: 'Project Management System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'bg-background min-h-screen font-sans antialiased'
        )}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
