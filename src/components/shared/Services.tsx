import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  href: string;
  image?: string;
}

interface ServicesProps {
  title: string;
  description: string;
  services: Service[];
  className?: string;
}

/**
 * Services component that displays a grid of service cards with hover effects
 * 
 * @example
 * ```tsx
 * <Services
 *   title="Our Services"
 *   description="Comprehensive engineering solutions for your needs"
 *   services={[
 *     {
 *       title: "Engineering Design",
 *       description: "Comprehensive engineering solutions for complex projects",
 *       href: "/services/engineering-design",
 *       image: "/images/services/engineering-design.jpg"
 *     },
 *     // ... more services
 *   ]}
 * />
 * ```
 */
export default function Services({ title, description, services, className }: ServicesProps) {
  return (
    <section className={cn("py-24 bg-gradient-to-b from-white to-gray-50/50", className)}>
      <Container>
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[var(--color-accent)]"></div>
            <span className="text-[var(--color-accent)] font-semibold uppercase tracking-[0.2em] text-xs">Our Solutions</span>
            <div className="h-px w-12 bg-[var(--color-accent)]"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4 tracking-tight leading-[1.1]">
            {title}
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-gray-900/30 rounded-2xl p-8 overflow-hidden border border-white/10 hover:border-[var(--color-accent)]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-accent)]/5 aspect-[1.5/1]"
            >
              {/* Background Image */}
              {service.image && (
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-70 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-[1px]"></div>
                </div>
              )}

              {/* Content */}
              <div className="relative h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-gray-300 leading-relaxed mt-3 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Learn More - Positioned at bottom */}
                <div className="flex items-center text-[var(--color-accent)] font-medium mt-auto">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
} 