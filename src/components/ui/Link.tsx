import type { ComponentPropsWithoutRef } from 'react';

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'underline';
  /** Link size */
  size?: 'sm' | 'md' | 'lg';
  /** Show external link icon */
  external?: boolean;
}

/**
 * Link component with consistent styling
 *
 * @example
 * <Link href="/about" variant="primary">Learn More</Link>
 * <Link href="https://example.com" variant="underline" external>External Link</Link>
 */
export function Link({
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  children,
  ...props
}: LinkProps) {
  const baseStyles = 'inline-flex items-center gap-1 font-medium transition-all duration-base focus:outline-none focus:ring-2 focus:ring-offset-2 rounded';

  const variantStyles = {
    primary: 'text-blue-500 hover:text-blue-600 focus:ring-blue-500',
    secondary: 'text-gray-700 hover:text-gray-900 focus:ring-gray-500',
    ghost: 'text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-2 py-1 focus:ring-gray-300',
    underline: 'text-blue-500 hover:text-blue-600 underline underline-offset-2 focus:ring-blue-500',
  };

  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  // Add external link attributes if external
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a className={combinedClassName} {...externalProps} {...props}>
      {children}
      {external && (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </a>
  );
}
