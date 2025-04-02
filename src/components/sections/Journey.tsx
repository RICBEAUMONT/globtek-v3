'use client';

import { motion } from 'framer-motion';

interface JourneyEvent {
  year: string;
  title: string;
  description: string;
}

interface JourneyProps {
  /**
   * Array of timeline events
   */
  events: JourneyEvent[];
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * Journey Component
 * 
 * A section component that displays company history in an interactive timeline.
 * Features animated cards, hover effects, and a visual timeline.
 * 
 * @component
 */
export default function Journey({ events, className = '' }: JourneyProps) {
  return (
    <section className={`py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20 ${className}`}>
      <div className="mx-auto w-full max-w-[1140px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[var(--color-accent)]"></div>
            <span className="text-[var(--color-accent)] font-medium uppercase tracking-wider text-sm">Our History</span>
            <div className="h-px w-12 bg-[var(--color-accent)]"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-500">
            A decade of engineering excellence and continuous growth, shaping the future of industry.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[var(--color-accent)]/20"></div>

          {/* Timeline Events */}
          <div className="space-y-16 relative">
            {events.map((event, index) => (
              <div 
                key={event.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-end pr-[calc(50%+2rem)]' : 'justify-start pl-[calc(50%+2rem)]'
                }`}
              >
                {/* Event Card */}
                <div className={`w-7/12 group`}>
                  <div className="relative bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                    {/* Content */}
                    <div className="relative">
                      <span className="inline-block text-[var(--color-accent)] font-bold text-3xl mb-3">{event.year}</span>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Bottom Color Animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-[var(--color-accent)] blur-[6px] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Dot */}
                    <div className="relative w-3 h-3 rounded-full bg-[var(--color-accent)] group-hover:scale-150 transition-transform duration-500 shadow-[0_0_10px_rgba(var(--color-accent-rgb),0.5)]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 