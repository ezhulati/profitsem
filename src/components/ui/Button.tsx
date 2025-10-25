import type { ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'href'> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Full width button */
  fullWidth?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** URL to navigate to (renders as <a> tag) */
  href?: string;
}

/**
 * Primary button component for CTAs and actions
 *
 * @example
 * <Button variant="primary" size="lg">Get Started</Button>
 * <Button variant="secondary" href="/about">Learn More</Button>
 * <Button variant="ghost" size="sm">Cancel</Button>
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  className = '',
  children,
  disabled,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white hover:text-white focus:ring-emerald-500 shadow-lg hover:shadow-xl magnetic-hover',
    secondary: 'bg-white/10 hover:bg-white/20 active:bg-white/30 text-white hover:text-white backdrop-blur border border-white/20 focus:ring-white/50 glass magnetic-hover-sm',
    ghost: 'bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-900 hover:text-gray-900 focus:ring-gray-300 smooth-transition',
    danger: 'bg-error-500 hover:bg-error-600 active:bg-error-700 text-white hover:text-white focus:ring-error-500',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`.trim();

  const content = isLoading ? (
    <>
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Loading...
    </>
  ) : (
    children
  );

  // Render as link if href is provided
  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        {...(props as any)}
      >
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
