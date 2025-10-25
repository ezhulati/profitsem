import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Link } from '../ui/Link';
import { Logo } from '../ui/Logo';

export interface FooterProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Site footer with links, newsletter, and social media
 *
 * @example
 * <Footer />
 */
export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Google Ads Management', href: '/services/google-ads' },
      { label: 'PPC Audit', href: '/services/audit' },
      { label: 'Landing Page Optimization', href: '/services/landing-pages' },
      { label: 'Conversion Tracking', href: '/services/conversion-tracking' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Process', href: '/process' },
      { label: 'Pricing', href: '/pricing' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Google Ads Guide', href: '/resources/google-ads-guide' },
      { label: 'ROI Calculator', href: '/resources/roi-calculator' },
      { label: 'FAQs', href: '/faqs' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/profitsem',
      icon: (
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/profitsem',
      icon: (
        <path
          fillRule="evenodd"
          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
          clipRule="evenodd"
        />
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@profitsem',
      icon: (
        <path
          fillRule="evenodd"
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
          clipRule="evenodd"
        />
      ),
    },
  ];

  return (
    <footer className={`bg-navy-950 text-white ${className}`.trim()}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <a href="/" className="mb-6 inline-block group">
              <Logo size="md" theme="dark" className="group-hover:scale-105 transition-transform" />
            </a>
            <p className="text-gray-400 mb-6">
              Turn Google Ads into pure profit. Data-driven campaigns that deliver measurable ROI in 90 days.
            </p>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Stay Updated</h3>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  size="sm"
                  fullWidth
                  className="bg-navy-900 border-navy-800 text-white placeholder:text-gray-500"
                />
                <Button variant="primary" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    variant="secondary"
                    className="text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    variant="secondary"
                    className="text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    variant="secondary"
                    className="text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    variant="secondary"
                    className="text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} ProfitSEM. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
