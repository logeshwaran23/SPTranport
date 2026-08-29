import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { Container } from './Container';
import { Logo } from './Logo';
import { BUSINESS_CONFIG } from '../../data/business';

const FOOTER_NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];

export const Footer: React.FC = () => {
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(BUSINESS_CONFIG.locationFull)}`;
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.name}, I would like to inquire about transport services.`
  )}`;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800/80">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Description (lg:col-span-5) */}
          <div className="space-y-4 lg:col-span-5 text-left">
            <Logo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed font-medium max-w-md">
              Reliable transport support for agricultural products and goods, from farm pickup to market delivery.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-800/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Farm-to-Market Transport Service
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-3) */}
          <div className="space-y-4 text-left lg:col-span-3">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {FOOTER_NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group text-slate-300"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us (lg:col-span-4) */}
          <div className="space-y-4 text-left lg:col-span-4">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm font-medium">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    Phone
                  </span>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                    aria-label={`Call ${BUSINESS_CONFIG.name} at ${BUSINESS_CONFIG.phoneDisplay}`}
                    className="text-white hover:text-emerald-400 transition-colors font-semibold"
                  >
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>
                </div>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    WhatsApp
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Send WhatsApp message to ${BUSINESS_CONFIG.name}`}
                    className="text-white hover:text-emerald-400 transition-colors font-semibold"
                  >
                    {BUSINESS_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    Location
                  </span>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open location map for ${BUSINESS_CONFIG.locationFull}`}
                    className="text-slate-300 hover:text-emerald-400 transition-colors font-medium flex items-center gap-1 group"
                  >
                    <span>{BUSINESS_CONFIG.locationFull}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left font-medium">
          <p>© 2026 SPL Transports. All rights reserved.</p>
          <p className="text-slate-500">
            Agricultural Produce & Local Goods Transportation
          </p>
        </div>
      </Container>
    </footer>
  );
};
