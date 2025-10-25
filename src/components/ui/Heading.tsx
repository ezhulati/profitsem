import type { ReactNode } from 'react';

export interface HeadingProps {
  /** Heading content */
  children: ReactNode;
  /** Semantic HTML level */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Visual size (can differ from semantic level) */
  size?: '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Heading component with semantic HTML and flexible visual sizing
 *
 * @example
 * <Heading as="h1" size="6xl">Main Title</Heading>
 * <Heading as="h2" size="3xl" align="center">Section Title</Heading>
 */
export function Heading({
  children,
  as: Tag = 'h2',
  size = '3xl',
  align = 'center',
  className = '',
}: HeadingProps) {
  const sizeStyles = {
    '6xl': 'text-4xl sm:text-5xl lg:text-6xl',
    '5xl': 'text-3xl sm:text-4xl lg:text-5xl',
    '4xl': 'text-2xl sm:text-3xl lg:text-4xl',
    '3xl': 'text-xl sm:text-2xl lg:text-3xl',
    '2xl': 'text-lg sm:text-xl lg:text-2xl',
    xl: 'text-base sm:text-lg lg:text-xl',
    lg: 'text-base sm:text-lg',
  };

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <Tag className={`font-bold ${sizeStyles[size]} ${alignStyles[align]} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
