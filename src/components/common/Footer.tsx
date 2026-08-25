import React from 'react';
import { Phone, MessageSquare, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { Container } from './Container';
import { Logo } from './Logo';
import { NAV_ITEMS, SERVICES } from '../../data/companyInfo';
import { BUSINESS_CONFIG } from '../../data/business';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4 lg:col-span-1">
            <Logo variant="light" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {BUSINESS_CONFIG.shortDescription}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                Farm to Market Transport
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group text-slate-400 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {SERVICES.map((service) => (
                <li key={service.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  <span className="truncate">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Details</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Phone</span>
                  <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="text-white hover:text-emerald-400 font-medium">
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">WhatsApp</span>
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-amber-400 font-medium"
                  >
                    {BUSINESS_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Email</span>
                  <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-white hover:text-emerald-400 font-medium">
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Location</span>
                  <span className="text-slate-300">{BUSINESS_CONFIG.locationFull}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>© 2026 {BUSINESS_CONFIG.name}. All rights reserved.</p>
          <p className="text-slate-500">
            Agricultural Pickup Vehicle & Driver Transport Services
          </p>
        </div>
      </Container>
    </footer>
  );
};
