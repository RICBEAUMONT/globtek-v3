import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '../layout/Container';

interface CallToActionProps {
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
  stats?: Array<{
    number: string;
    label: string;
  }>;
}

/**
 * CallToAction Component
 * 
 * A versatile call-to-action section that can be used across different pages.
 * Features a two-column layout with content and optional statistics.
 * 
 * @example
 * ```tsx
 * <CallToAction
 *   title="Let's Build Something"
 *   titleAccent="Extraordinary"
 *   description="From concept to completion, our team of experts is ready to bring your engineering vision to life."
 *   primaryButton={{
 *     text: "Start Your Project",
 *     href: "/contact"
 *   }}
 *   secondaryButton={{
 *     text: "View Our Services",
 *     href: "/services"
 *   }}
 *   stats={[
 *     { number: "150+", label: "Technical Experts" },
 *     { number: "20k+", label: "Projects Completed" }
 *   ]}
 * />
 * ```
 */
export default function CallToAction({
  title,
  titleAccent,
  description,
  primaryButton,
  secondaryButton,
  stats
}: CallToActionProps) {
  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
              {title}
              {titleAccent && (
                <span className="text-[var(--color-accent)]"> {titleAccent}</span>
              )}
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={primaryButton.href}
                className="inline-flex items-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-light)] font-medium rounded hover:bg-[var(--color-accent-dark)] transition-colors"
              >
                {primaryButton.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href={secondaryButton.href}
                className="inline-flex items-center px-6 py-3 text-[var(--color-text-primary)] font-medium hover:text-[var(--color-accent)] transition-colors"
              >
                {secondaryButton.text}
              </Link>
            </div>
          </div>

          {/* Right Column - Stats/Info */}
          {stats && (
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[var(--color-bg-primary)] p-6 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
} 