'use client';

import Link from 'next/link';
import Container from '@/components/layout/Container';

interface SimpleCTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonHref: string;
  className?: string;
}

export default function SimpleCTA({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHref,
  secondaryButtonHref,
  className = ''
}: SimpleCTAProps) {
  return (
    <section className={`bg-[var(--color-bg-secondary)] py-16 ${className}`}>
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonHref}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-colors duration-300"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
} 