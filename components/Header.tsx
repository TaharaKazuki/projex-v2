'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { ThemeToggle } from './ThemeToggle';

type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        `bg-background/95 supports-[backdrop-filter]:bg-background/60 top-0 flex w-full border-b backdrop-blur`,
        className
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="hover:text-primary flex items-center space-x-2 text-xl font-bold transition-colors"
        >
          Projex
        </Link>
        <div className="border-l pl-4 dark:border-gray-800">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
