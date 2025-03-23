import Link from 'next/link';

interface SimpleCTAProps {
  title: string;
  titleAccent?: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function SimpleCTA({ 
  title, 
  titleAccent,
  description, 
  primaryButton,
  secondaryButton
}: SimpleCTAProps) {
  return (
    <div className="bg-[var(--color-bg-secondary)] rounded-lg p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">
        {title}
        {titleAccent && <span className="text-[var(--color-accent)]"> {titleAccent}</span>}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={primaryButton.href}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors duration-300"
        >
          {primaryButton.text}
        </Link>
        {secondaryButton && (
          <Link
            href={secondaryButton.href}
            className="inline-flex items-center px-6 py-3 border border-[var(--color-accent)] text-base font-medium rounded-md text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
          >
            {secondaryButton.text}
          </Link>
        )}
      </div>
    </div>
  );
} 