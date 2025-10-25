import { useState, type ReactNode } from 'react';

export interface TooltipProps {
  /** Tooltip content */
  content: ReactNode;
  /** Element to trigger tooltip */
  children: ReactNode;
  /** Tooltip position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Tooltip component for helpful hints and additional information
 *
 * @example
 * <Tooltip content="This will help you grow your revenue">
 *   <Button>Learn More</Button>
 * </Tooltip>
 */
export function Tooltip({
  content,
  children,
  position = 'top',
  className = '',
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const arrowStyles = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-900 border-x-transparent border-b-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 border-x-transparent border-t-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-900 border-y-transparent border-r-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-gray-900 border-y-transparent border-l-transparent',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute z-50 ${positionStyles[position]} animate-fade-in`}
          role="tooltip"
        >
          <div className={`bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap ${className}`.trim()}>
            {content}
            {/* Arrow */}
            <div
              className={`absolute w-0 h-0 border-4 ${arrowStyles[position]}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
