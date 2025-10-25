import type { ReactNode } from 'react';

export interface StatCounterProps {
  /** Statistic value */
  value: string | number;
  /** Statistic label */
  label: string;
  /** Optional icon */
  icon?: ReactNode;
  /** Value prefix (e.g., $, +) */
  prefix?: string;
  /** Value suffix (e.g., %, x) */
  suffix?: string;
  /** Highlight variant */
  variant?: 'default' | 'success' | 'primary';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Stat counter component for displaying metrics and KPIs
 *
 * @example
 * <StatCounter value="247" suffix="%" label="Average ROI" variant="success" />
 * <StatCounter value="90" label="Days to Profit" variant="primary" />
 * <StatCounter prefix="$" value="2.4M" label="Client Revenue Generated" />
 */
export function StatCounter({
  value,
  label,
  icon,
  prefix,
  suffix,
  variant = 'default',
  className = '',
}: StatCounterProps) {
  const variantStyles = {
    default: 'text-gray-900',
    success: 'text-green-500',
    primary: 'text-blue-500',
  };

  return (
    <div className={`flex flex-col ${className}`.trim()}>
      <div className="flex items-center gap-2 mb-1">
        {icon && <div className="text-gray-500">{icon}</div>}
        <div className={`text-4xl font-bold ${variantStyles[variant]}`}>
          {prefix}
          {value}
          {suffix}
        </div>
      </div>
      <div className="text-base text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}
