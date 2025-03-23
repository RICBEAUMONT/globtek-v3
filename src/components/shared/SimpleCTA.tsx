import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '../layout/Container';

interface SimpleCTAProps {
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
  className?: string;
}

/**
 * SimpleCTA Component
 * 
 * A clean, focused call-to-action section that emphasizes the main message
 * and clear next steps. Features subtle animations and improved typography.
 * Can be used across different pages for consistent CTAs.
 * 
 * @example
 * ```tsx
 * <SimpleCTA
 *   title="Let's Create"
 *   titleAccent="Something Great"
 *   description="Take the first step towards your project's success. Our team is ready to help."
 *   primaryButton={{
 *     text: "Start Your Project",
 *     href: "/contact"
 *   }}
 *   secondaryButton={{
 *     text: "Explore Our Work",
 *     href: "/portfolio"
 *   }}
 * />
 * ```
 */
export default function SimpleCTA({
  title,
  titleAccent,
  description,
  primaryButton,
  secondaryButton,
  className = '',
}: SimpleCTAProps) {
  return (
    <section className={`py-24 bg-white relative overflow-hidden ${className}`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#e43d30_0%,_transparent_70%)] opacity-[0.03]"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative line */}
          <div className="w-24 h-px bg-[#e43d30] opacity-20 mx-auto mb-12"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#231f20] mb-6 tracking-tight">
            {title}
            {titleAccent && (
              <span className="text-[#e43d30] block mt-2"> {titleAccent}</span>
            )}
          </h2>
          <p className="text-xl text-[#4a4a4a] mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href={primaryButton.href}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#e43d30] text-white font-medium rounded-lg hover:bg-[#c63529] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {primaryButton.text}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={secondaryButton.href}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-[#231f20] font-medium hover:text-[#e43d30] transition-all duration-300 hover:bg-gray-50 rounded-lg"
            >
              {secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 