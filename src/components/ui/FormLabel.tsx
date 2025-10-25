import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface FormLabelProps extends ComponentPropsWithoutRef<'label'> {
  /** Label content */
  children: ReactNode;
  /** Mark as required */
  required?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Form label component with optional required indicator
 *
 * @example
 * <FormLabel htmlFor="email" required>Email Address</FormLabel>
 * <FormLabel htmlFor="phone">Phone Number (Optional)</FormLabel>
 */
export function FormLabel({
  children,
  required = false,
  className = '',
  ...props
}: FormLabelProps) {
  return (
    <label
      className={`block text-sm font-medium text-gray-700 mb-1.5 ${className}`.trim()}
      {...props}
    >
      {children}
      {required && (
        <span className="text-error-500 ml-1" aria-label="required">
          *
        </span>
      )}
    </label>
  );
}
