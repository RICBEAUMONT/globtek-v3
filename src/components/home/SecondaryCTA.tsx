import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '../layout/Container';

interface SecondaryCTAProps {
  title: string;
  titleAccent?: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
}

/**
 * SecondaryCTA Component
 * 
 * A clean, focused call-to-action section that emphasizes the main message
 * and clear next steps. Features subtle animations and improved typography.
 */
export default function SecondaryCTA({
  title,
  titleAccent,
  description,
  primaryButton,
  secondaryButton,
}: SecondaryCTAProps) {
  return (
    <section className="py-24 bg-[var(--color-bg-primary)] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-[0.03]"></div>
      
      <Container>
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative line */}
          <div className="w-24 h-px bg-[var(--color-accent)] opacity-20 mx-auto mb-12"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
            {title}
            {titleAccent && (
              <span className="text-[var(--color-accent)] block mt-2"> {titleAccent}</span>
            )}
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href={primaryButton.href}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-text-light)] font-medium rounded-lg hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {primaryButton.text}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={secondaryButton.href}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-[var(--color-text-primary)] font-medium hover:text-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-bg-secondary)] rounded-lg"
            >
              {secondaryButton.text}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
} 