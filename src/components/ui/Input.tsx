import type { ComponentPropsWithoutRef } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  /** Input label */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Full width input */
  fullWidth?: boolean;
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
}

export interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  /** Textarea label */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Full width textarea */
  fullWidth?: boolean;
  /** Textarea size */
  size?: 'sm' | 'md' | 'lg';
}

export interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  /** Select label */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Full width select */
  fullWidth?: boolean;
  /** Select size */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Input component for forms
 *
 * @example
 * <Input label="Email" type="email" placeholder="you@example.com" />
 * <Input label="Name" error="Name is required" />
 */
export function Input({
  label,
  error,
  helperText,
  fullWidth = false,
  size = 'md',
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  const baseStyles = 'border rounded-lg transition-all duration-base focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3.5 text-lg',
  };

  const stateStyles = error
    ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400';

  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${stateStyles} ${widthStyles} ${className}`.trim();

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={combinedClassName}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-error-500">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}

/**
 * Textarea component for multi-line text input
 *
 * @example
 * <TextArea label="Message" rows={4} placeholder="Tell us about your needs..." />
 */
export function TextArea({
  label,
  error,
  helperText,
  fullWidth = false,
  size = 'md',
  className = '',
  id,
  ...props
}: TextAreaProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  const baseStyles = 'border rounded-lg transition-all duration-base focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed resize-vertical';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3.5 text-lg',
  };

  const stateStyles = error
    ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400';

  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${stateStyles} ${widthStyles} ${className}`.trim();

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={combinedClassName}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-error-500">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}

/**
 * Select component for dropdown menus
 *
 * @example
 * <Select label="Industry">
 *   <option value="">Select an industry</option>
 *   <option value="ecommerce">E-commerce</option>
 *   <option value="saas">SaaS</option>
 * </Select>
 */
export function Select({
  label,
  error,
  helperText,
  fullWidth = false,
  size = 'md',
  className = '',
  id,
  children,
  ...props
}: SelectProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  const baseStyles = 'border rounded-lg transition-all duration-base focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed bg-white';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-5 py-3.5 text-lg',
  };

  const stateStyles = error
    ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400';

  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${stateStyles} ${widthStyles} ${className}`.trim();

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
        </label>
      )}
      <select
        id={inputId}
        className={combinedClassName}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="mt-1.5 text-sm text-error-500">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
