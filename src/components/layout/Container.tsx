import styles from '@/styles/Container.module.css';
import { forwardRef } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = '' }, ref) => {
    return (
      <div ref={ref} className={`${styles.container} ${className}`}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container; 