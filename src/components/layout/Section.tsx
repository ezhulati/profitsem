import type { ReactNode } from 'react';

export interface SectionProps {
  /** Section content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Background variant */
  background?: 'white' | 'gray' | 'navy' | 'gradient';
  /** Vertical padding size */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** HTML id for anchor links */
  id?: string;
}

/**
 * Section component for page sections with consistent spacing
 *
 * @example
 * <Section background="navy" spacing="lg">
 *   <Container>Your content</Container>
 * </Section>
 */
export function Section({
  children,
  className = '',
  background = 'white',
  spacing = 'lg',
  id,
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    navy: 'bg-navy-950',
    gradient: 'bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800',
  };

  const spacingStyles = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32',
  };

  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${spacingStyles[spacing]} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
