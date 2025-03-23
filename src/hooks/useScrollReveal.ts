'use client';

import { useEffect, useRef, useCallback } from 'react';

// Single global observer instance
let globalObserver: IntersectionObserver | null = null;

interface ElementWithObserver extends Element {
  observer?: IntersectionObserver | null;
}

export function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animate-in class to the target element
        entry.target.classList.add('animate-in');
        
        // If the target has stagger-children class, add animate-in to it as well
        if (entry.target.classList.contains('stagger-children')) {
          entry.target.classList.add('animate-in');
        }

        // Unobserve the element after animation
        const element = entry.target as ElementWithObserver;
        if (element.observer) {
          element.observer.unobserve(entry.target);
        }
      }
    });
  }, []);

  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '-50px 0px -50px 0px',
    };

    // Create or get global observer
    if (!globalObserver) {
      globalObserver = new IntersectionObserver(handleIntersection, options);
    }

    // Function to observe elements
    const observeElements = () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll('.scroll-reveal');
      
      elements.forEach((element) => {
        // Store observer reference on element for cleanup
        (element as ElementWithObserver).observer = globalObserver;
        globalObserver?.observe(element);
      });
    };

    // Debounce the observation
    const timeoutId = setTimeout(observeElements, 100);

    return () => {
      clearTimeout(timeoutId);
      // Only disconnect if this is the last instance
      if (globalObserver) {
        globalObserver.disconnect();
        globalObserver = null;
      }
    };
  }, [handleIntersection]);

  return { ref: containerRef };
} 