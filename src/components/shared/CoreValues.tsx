import { LucideIcon } from 'lucide-react';
import Container from '@/components/layout/Container';
import Image from 'next/image';

interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

interface CoreValuesProps {
  title: string;
  description: string;
  values: CoreValue[];
  className?: string;
}

/**
 * CoreValues Component
 * 
 * A modern, responsive section displaying company core values with icons, images, and hover effects.
 * Features a dark theme with accent colors and parallax-like image effects.
 * 
 * @example
 * ```tsx
 * <CoreValues
 *   title="Our Core Values"
 *   description="The principles that guide everything we do"
 *   values={[
 *     {
 *       title: "Integrity",
 *       description: "Operating with the highest ethical standards",
 *       icon: Award,
 *       image: "/images/core-values/integrity.jpg"
 *     },
 *     // ... more values
 *   ]}
 * />
 * ```
 */
export default function CoreValues({ title, description, values, className = '' }: CoreValuesProps) {
  return (
    <section className={`py-24 bg-gradient-to-br from-[var(--color-bg-gradient-from)] to-[var(--color-bg-gradient-to)] relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b728015_1px,transparent_1px),linear-gradient(to_bottom,#6b728015_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark-transparent)] via-transparent to-[var(--color-bg-dark-transparent)]"></div>
      </div>
      
      <Container>
        <div className="max-w-3xl mx-auto text-center relative mb-16">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[var(--color-accent)]"></div>
            <span className="text-[var(--color-accent)] font-semibold uppercase tracking-[0.2em] text-xs">Our Foundation</span>
            <div className="h-px w-12 bg-[var(--color-accent)]"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-white/[0.03] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-[var(--color-accent)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-accent)]/5 flex flex-col"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={value.image || `/images/core-values/${value.title.toLowerCase().split(',')[0]}.jpg`}
                  alt={value.title}
                  fill
                  className="object-cover opacity-5 group-hover:opacity-10 transition-all duration-700 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-gradient-from)]/90 to-[var(--color-bg-gradient-to)] backdrop-blur-sm"></div>
              </div>

              <div className="relative p-6 md:p-8 flex-grow">
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/10">
                    <value.icon className="h-6 w-6 text-[var(--color-accent)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-4 tracking-tight">
                    {value.title}
                    <div className="h-px flex-grow bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent"></div>
                  </h3>
                  <p className="text-[15px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors font-light">
                    {value.description}
                  </p>
                </div>

                {/* Number Label */}
                <div className="absolute top-6 right-6">
                  <div className="font-bold text-4xl text-white/[0.02] group-hover:text-[var(--color-accent)]/5 transition-colors tracking-tighter">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="relative h-px w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] group-hover:w-full transition-all duration-700"></div>
              </div>

              {/* Hover Accent */}
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </Container>

      {/* Background Accents */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <div className="relative w-full max-w-[1140px] mx-auto">
          <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2">
            <div className="w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
          </div>
          <div className="absolute top-1/4 right-0">
            <div className="w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 