import type { ReactNode } from 'react';

export interface ContainerProps {
  /** Content to be contained */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Container size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Responsive container component for page content
 *
 * @example
 * <Container>Your content here</Container>
 * <Container size="sm">Narrow content</Container>
 */
export function Container({
  children,
  className = '',
  size = 'xl',
}: ContainerProps) {
  const sizeStyles = {
    sm: 'max-w-2xl',    // 672px
    md: 'max-w-4xl',    // 896px
    lg: 'max-w-6xl',    // 1152px
    xl: 'max-w-7xl',    // 1280px
    full: 'max-w-full',
  };

  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`.trim()}>
      {children}
    </div>
  );
}
