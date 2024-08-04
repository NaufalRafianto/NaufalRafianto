import { cn } from '@/lib';
import Link from 'next/link';
import * as React from 'react';

export const BentoGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto grid h-[48rem] w-[20rem] grid-cols-1 gap-4 sm:h-[40rem] sm:w-[50rem] sm:grid-cols-4 sm:grid-rows-4">
      {children}
    </div>
  );
};

export const BentoGridComponent = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'group/bento relative flex min-h-[8rem] flex-col items-start justify-between overflow-hidden rounded-md border border-white/[0.1] transition duration-200 hover:shadow-xl',
        className
      )}
    >
      {children}
    </Link>
  );
};
