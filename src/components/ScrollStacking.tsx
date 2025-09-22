import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollStackingProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollStacking: React.FC<ScrollStackingProps> = ({ children, className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const section = sectionRef.current;
    const content = contentRef.current;

    // Set initial styles
    gsap.set(content, {
      y: 100,
      opacity: 0,
      scale: 0.8
    });

    // Create scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        markers: false // Set to true for debugging
      }
    });

    tl.to(content, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.out'
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={`min-h-screen relative ${className}`}>
      <div ref={contentRef} className="h-full w-full">
        {children}
      </div>
    </section>
  );
};

export default ScrollStacking;