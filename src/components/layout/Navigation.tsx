import { useState } from 'react';
import { Button } from '../ui/Button';
import { Link } from '../ui/Link';

export interface NavigationProps {
  /** Make navigation sticky */
  sticky?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Main navigation component with desktop and mobile menus
 *
 * @example
 * <Navigation sticky />
 */
export function Navigation({ sticky = true, className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const stickyStyles = sticky ? 'sticky top-0 z-40' : '';

  return (
    <nav className={`bg-white/95 backdrop-blur-md border-b border-gray-200 ${stickyStyles} ${className}`.trim()}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Profit<span className="text-blue-500">SEM</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                variant="secondary"
                className="hover:text-blue-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="primary" size="md">
              Get Free Audit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-500 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button variant="primary" size="md" fullWidth>
                  Get Free Audit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
