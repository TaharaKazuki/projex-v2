'use client';

import dynamic from 'next/dynamic';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import type { ThemeProviderProps } from 'next-themes';

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
};

export default dynamic(() => Promise.resolve(ThemeProvider), {
  ssr: false,
});
