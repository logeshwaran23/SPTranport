import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { Container } from '../components/common/Container';
import { BUSINESS_CONFIG } from '../data/business';

export const FinalCtaSection: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    `Hello ${BUSINESS_CONFIG.name}, I am interested in booking transport for my agricultural produce/goods.`
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${whatsappMessage}`;
  const callUrl = `tel:${BUSINESS_CONFIG.phoneRaw}`;

  return (
    <section className="py-16 sm:py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/60 via-emerald-950 to-slate-950 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Move Your Goods?
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto font-medium">
            Contact SP Transport for reliable vehicle and driver support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={callUrl}
              aria-label="Call SP Transport"
              className="w-full sm:w-auto py-3.5 px-8 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-base font-extrabold transition-all shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <PhoneCall className="w-5 h-5 shrink-0" />
              <span>Call Us</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp SP Transport"
              className="w-full sm:w-auto py-3.5 px-8 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-base font-extrabold backdrop-blur-md border border-white/20 transition-all shadow-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <MessageCircle className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
};
