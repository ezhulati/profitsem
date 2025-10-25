import type { ReactNode } from 'react';

export interface CardProps {
  /** Card content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Card variant */
  variant?: 'default' | 'bordered' | 'elevated' | 'interactive';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Card component for content containers
 *
 * @example
 * <Card variant="elevated" padding="lg">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 */
export function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
}: CardProps) {
  const baseStyles = 'rounded-xl bg-white';

  const variantStyles = {
    default: '',
    bordered: 'border border-gray-200',
    elevated: 'shadow-lg',
    interactive: 'border border-gray-200 hover:shadow-lg hover:border-blue-500 transition-all duration-base cursor-pointer',
  };

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`.trim();

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
}
