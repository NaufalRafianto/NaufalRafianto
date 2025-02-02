'use client';
import React, { forwardRef, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useCombinedRefs } from '@/lib/ref'; // Assuming you have this utility for combining refs

type FadeUpProps = {
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export const FadeUp = forwardRef<HTMLDivElement, FadeUpProps>(
  ({ children = null, className = '', delay = 0, duration = 0.5 }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const combinedRef = useCombinedRefs(innerRef, ref);
    const isInView = useInView(innerRef, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
      if (isInView) {
        mainControls.start('visible');
      }
    }, [isInView, mainControls]);

    const variants = {
      hidden: { opacity: 0, y: 75 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
        },
      },
    };

    return (
      <motion.div initial="hidden" animate={mainControls} variants={variants} className={className} ref={combinedRef}>
        {children}
      </motion.div>
    );
  }
);

FadeUp.displayName = 'FadeUp';
