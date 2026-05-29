'use client';

import { useEffect, useRef, useState } from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function Section({ children, id, className = "" }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`snap-section p-8 md:p-16 overflow-hidden ${className}`}
    >
      <div
        className={`w-full max-w-6xl mx-auto transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 [transform:rotateX(0deg)]' 
            : 'opacity-0 translate-y-24 [transform:rotateX(15deg)]'
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
    </section>
  );
}
