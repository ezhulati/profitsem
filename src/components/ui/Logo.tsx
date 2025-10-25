export interface LogoProps {
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show text or icon only */
  variant?: 'full' | 'icon';
  /** Additional CSS classes */
  className?: string;
}

/**
 * ProfitSEM Logo Component
 * Classic bullseye/target representing precision and hitting the mark
 */
export function Logo({ size = 'md', variant = 'full', className = '' }: LogoProps) {
  const sizes = {
    sm: { container: 'h-8', icon: 'w-6 h-6', text: 'text-lg' },
    md: { container: 'h-12', icon: 'w-8 h-8', text: 'text-2xl' },
    lg: { container: 'h-16', icon: 'w-12 h-12', text: 'text-3xl' },
  };

  const { container, icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${container} ${className}`}>
      {/* Bullseye target icon */}
      <div className={`${icon} relative drop-shadow-lg`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6' }} />
              <stop offset="100%" style={{ stopColor: '#10b981' }} />
            </linearGradient>
          </defs>
          {/* Outer ring */}
          <circle cx="24" cy="24" r="22" fill="url(#logoGradient)" stroke="#1e40af" strokeWidth="2" />
          {/* Second ring - White */}
          <circle cx="24" cy="24" r="16" fill="#FFFFFF" />
          {/* Third ring - Gradient */}
          <circle cx="24" cy="24" r="11" fill="url(#logoGradient)" />
          {/* Fourth ring - White */}
          <circle cx="24" cy="24" r="6" fill="#FFFFFF" />
          {/* Center - Gradient */}
          <circle cx="24" cy="24" r="3" fill="url(#logoGradient)" />
        </svg>
      </div>

      {/* Text */}
      {variant === 'full' && (
        <div className={`${text} tracking-tight leading-none`}>
          <span className="text-gray-900 font-extrabold">Profit</span>
          <span className="text-blue-500 font-bold">SEM</span>
        </div>
      )}
    </div>
  );
}
