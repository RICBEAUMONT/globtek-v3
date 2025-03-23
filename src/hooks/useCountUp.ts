/**
 * A custom hook that animates a number counting up from a start value to an end value.
 * Uses requestAnimationFrame for smooth animation with an easing function.
 * 
 * @param {Object} props - The hook parameters
 * @param {number} props.end - The final number to count up to
 * @param {number} [props.duration=2000] - Duration of the animation in milliseconds
 * @param {number} [props.start=0] - Starting number for the animation
 * @param {number} [props.delay=0] - Delay before starting the animation in milliseconds
 * @returns {number} The current count value during animation
 * 
 * @example
 * ```tsx
 * const count = useCountUp({
 *   end: 100,
 *   duration: 2000,
 *   start: 0,
 *   delay: 500
 * });
 * ```
 */
import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  start?: number;
  delay?: number;
}

export const useCountUp = ({ end, duration = 2000, start = 0, delay = 0 }: UseCountUpProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp: number;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation (easeOutQuart)
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, start, delay]);

  return count;
}; 