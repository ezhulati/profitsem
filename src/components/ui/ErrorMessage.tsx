import type { ReactNode } from 'react';

export interface ErrorMessageProps {
  /** Error message content */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Show error icon */
  showIcon?: boolean;
}

/**
 * Error message component for form validation and error states
 *
 * @example
 * <ErrorMessage>This field is required</ErrorMessage>
 * <ErrorMessage showIcon={false}>Invalid email format</ErrorMessage>
 */
export function ErrorMessage({
  children,
  className = '',
  showIcon = true,
}: ErrorMessageProps) {
  return (
    <div className={`flex items-start gap-2 text-error-500 ${className}`.trim()}>
      {showIcon && (
        <svg
          className="w-5 h-5 flex-shrink-0 mt-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <span className="text-sm">{children}</span>
    </div>
  );
}
