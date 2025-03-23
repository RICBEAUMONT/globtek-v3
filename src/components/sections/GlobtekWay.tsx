'use client';

import { ChevronRight, Target, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useCallback, useEffect, useMemo } from 'react';

interface GlobtekWayPillar {
  title: string;
  description: string;
  focus: string;
  impact: string;
}

interface GlobtekWayProps {
  /**
   * Array of pillars that define the Globtek Way
   */
  pillars: GlobtekWayPillar[];
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * GlobtekWay Component
 * 
 * A section component that displays the core pillars of Globtek's operational philosophy.
 * Features a dark theme with accent colors, hover effects, and animated elements.
 * 
 * @component
 * @example
 * ```tsx
 * const pillars = [
 *   {
 *     title: "Get it Right the First Time",
 *     description: "Emphasizing precision and accuracy",
 *     focus: "Quality and efficiency",
 *     impact: "Reduced revisions, optimized timelines"
 *   },
 *   // ... more pillars
 * ];
 * 
 * <GlobtekWay pillars={pillars} />
 * ```
 */
export default function GlobtekWay({ pillars, className = '' }: GlobtekWayProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Memoize the toggle function
  const toggleCard = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setExpandedCard(prev => prev === index ? null : index);
  }, [isTransitioning]);

  // Handle transition end
  useEffect(() => {
    if (!isTransitioning) return;
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isTransitioning]);

  // Memoize the pillars grid
  const pillarsGrid = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {pillars.map((pillar, index) => (
        <div
          key={pillar.title}
          className={`group relative bg-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            expandedCard === index
              ? 'bg-white/[0.03] ring-1 ring-white/10 lg:row-span-2' 
              : 'hover:bg-white/[0.03] h-[280px]'
          }`}
        >
          {/* Card content */}
          <button
            onClick={() => toggleCard(index)}
            className={`relative w-full px-8 pb-8 pt-6 text-left flex flex-col ${
              expandedCard === index ? 'h-auto' : 'h-full'
            }`}
            disabled={isTransitioning}
          >
            <div className="flex flex-col flex-grow">
              <div className="flex items-start justify-between">
                <div className="flex-grow space-y-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-accent)]/5 text-lg font-semibold text-[var(--color-accent)]">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors duration-500">
                      {pillar.title}
                    </h3>
                    <p className={`text-[13px] text-gray-400 mt-1.5 leading-[1.6] transition-all duration-500 ${
                      expandedCard === index ? 'opacity-90' : 'line-clamp-2 opacity-70'
                    }`}>
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <ChevronDown 
                  className={`flex-shrink-0 w-5 h-5 text-[var(--color-accent)]/80 transition-all duration-500 transform ${
                    expandedCard === index ? 'rotate-180' : 'group-hover:translate-y-0.5'
                  }`}
                />
              </div>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 transform origin-top ${
                  expandedCard === index 
                    ? 'max-h-[800px] opacity-100 mt-5 scale-y-100' 
                    : 'max-h-0 opacity-0 scale-y-95'
                }`}
              >
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-4"></div>
                
                <div className={`space-y-3 transition-all duration-500 transform origin-top ${
                  expandedCard === index ? 'translate-y-0 opacity-100 scale-y-100' : 'translate-y-2 opacity-0 scale-y-95'
                }`}>
                  <h4 className="flex items-center gap-2.5 text-[13px] font-medium text-[var(--color-accent)]/90 tracking-wide">
                    <Target className="h-4 w-4" />
                    Focus Areas
                  </h4>
                  <p className="text-[13px] text-gray-300/90 leading-[1.6] ml-6">
                    {pillar.focus}
                  </p>
                </div>
                
                <div className={`space-y-3 mt-6 transition-all duration-500 transform origin-top delay-100 ${
                  expandedCard === index ? 'translate-y-0 opacity-100 scale-y-100' : 'translate-y-2 opacity-0 scale-y-95'
                }`}>
                  <h4 className="flex items-center gap-2.5 text-[13px] font-medium text-[var(--color-accent)]/90 tracking-wide">
                    <ChevronRight className="h-4 w-4" />
                    Impact
                  </h4>
                  <p className="text-[13px] text-gray-300/90 leading-[1.6] ml-6">
                    {pillar.impact}
                  </p>
                </div>
              </div>
            </div>
          </button>

          <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-[var(--color-accent)]/40 via-[var(--color-accent)]/40 to-transparent transition-all duration-500 transform ${
            expandedCard === index ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-95'
          }`}></div>
        </div>
      ))}
    </div>
  ), [pillars, expandedCard, isTransitioning, toggleCard]);

  return (
    <section className={`relative py-24 overflow-hidden bg-[var(--color-bg-gradient-from)] ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-gradient-from)] to-[var(--color-bg-gradient-to)]">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b728015_1px,transparent_1px),linear-gradient(to_bottom,#6b728015_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark-transparent)] via-transparent to-[var(--color-bg-dark-transparent)]"></div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1140px] px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[var(--color-accent)]"></div>
            <span className="text-[var(--color-accent)] font-medium uppercase tracking-wider text-sm">Our Philosophy</span>
            <div className="h-px w-12 bg-[var(--color-accent)]"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6">
            The Globtek Way
          </h2>
          <p className="text-xl text-gray-300">
            Our operational philosophy drives excellence and innovation in everything we do, setting new standards in engineering excellence.
          </p>
        </div>

        {pillarsGrid}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-all duration-300"
            title="Contact Globtek Engineering Team"
            aria-label="Learn more about Globtek's engineering approach and contact our team"
            rel="nofollow"
          >
            <span className="relative">
              Learn more about our engineering approach
              <span className="sr-only"> - Contact Globtek Engineering</span>
            </span>
            <ChevronRight 
              className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 transform -translate-x-1/2">
        <div className="w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
      </div>
      <div className="absolute bottom-1/4 right-0 transform translate-x-1/2">
        <div className="w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
      </div>
    </section>
  );
} 