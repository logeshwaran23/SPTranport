import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { Logo } from './Logo';
import { Button } from './Button';
import { NAV_ITEMS } from '../../data/companyInfo';
import { BUSINESS_CONFIG } from '../../data/business';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/80'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Quick Contact (Desktop) */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
            <Button
              asAnchor
              href="#contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              asAnchor
              href="#contact"
              variant="primary"
              size="sm"
              className="sm:hidden text-xs px-3 py-1.5"
            >
              Get Quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-200 pb-3 bg-white">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5 px-3">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 py-2.5 rounded-lg"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-700" />
                  <span>Call Us: {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
                <Button
                  asAnchor
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};
