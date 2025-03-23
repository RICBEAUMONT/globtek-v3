/**
 * A component that displays an animated statistic with a counting animation.
 * Supports both regular numbers and 'k+' format numbers (e.g., '20k+').
 * 
 * @param {Object} props - The component props
 * @param {string} props.number - The number to animate to (can include 'k+' suffix)
 * @param {string} props.label - The label text to display below the number
 * @param {number} [props.delay=0] - Delay before starting the animation in milliseconds
 * 
 * @example
 * ```tsx
 * <AnimatedStat
 *   number="20k+"
 *   label="PROJECTS COMPLETED"
 *   delay={200}
 * />
 * ```
 */
import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedStatProps {
  number: string;
  label: string;
  delay?: number;
}

export default function AnimatedStat({ number, label, delay = 0 }: AnimatedStatProps) {
  // Convert string number to actual number, handling 'k+' format
  const numericValue = number.includes('k') 
    ? parseFloat(number.replace('k', '')) * 1000 
    : parseInt(number);

  const count = useCountUp({
    end: numericValue,
    duration: 2000,
    delay
  });

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-[#e43d30] mb-2">
        {number.includes('k') ? `${Math.floor(count / 1000)}k+` : count}
      </div>
      <div className="text-sm md:text-base font-semibold text-[#4a4a4a]">
        {label}
      </div>
    </div>
  );
} 