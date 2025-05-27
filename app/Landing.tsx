'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

const features = [
  'Intuitive Kanban boards',
  'Real-time collaboration',
  'Custom workflows',
  'Advanced task tracking',
];

const LandingPage = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="from-background to-background/95 min-h-screen bg-gradient-to-b">
      {/* Hero Section */}
      <div className="container mx-auto pt-32 pb-20">
        {/* Content */}
        <div className="mx-auto mb-20 max-w-[800px] space-y-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Organize your work,
              <br />
              <span className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
                One task at a time
              </span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[600px] text-xl">
              Goes beyond basic to-do lists, offering intuitive tools for
              prioritizing and managing projects and tasks with ease.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {/* {user ? (
              <Button size="lg" asChild>
                <Link href="/projects" className="gap-2">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : ( */}
            <>
              <Button size="lg" asChild>
                <Link href="/create-account" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
            </>
            {/* )} */}
          </div>

          <div className="mx-auto grid max-w-[600px] gap-4 pt-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle2 className="text-primary h-5 w-5" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* App Screenshot with Fade Effect */}
        <div className="relative mx-auto mt-20 w-full max-w-[1200px]">
          <div className="relative">
            <div className="bg-background/95 relative rounded-lg shadow-2xl backdrop-blur">
              <Image
                src={
                  resolvedTheme === 'dark'
                    ? '/projex-dark.png'
                    : '/projex-light.png'
                }
                alt="App preview"
                width={1824}
                height={1080}
                className="w-full rounded-lg"
                priority
              />
              <div className="to-background absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient Effect */}
      <div className="bg-background fixed inset-0 -z-10 h-full w-full">
        <div className="from-primary/10 via-primary/5 to-background absolute inset-0 bg-gradient-to-tr"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary/5 h-[40rem] w-[40rem] rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
