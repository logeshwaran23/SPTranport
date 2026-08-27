import React from 'react';
import { PhoneCall, MessageCircle, Truck, UserCheck, Sprout, MapPin } from 'lucide-react';
import { Container } from '../components/common/Container';
import { BUSINESS_CONFIG } from '../data/business';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-950 text-white overflow-hidden py-20 sm:py-28 lg:py-36">
      
      {/* Static Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${BUSINESS_CONFIG.heroBgImage})` }}
      />

      {/* Modern Gradient Overlay for Contrast & Clarity */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50 lg:to-slate-950/40 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl lg:max-w-4xl space-y-6 text-left">
          
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Pickup Vehicle & Driver Service</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
            Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Farm-to-Market</span> Transport
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
            {BUSINESS_CONFIG.heroSupportingText}
          </p>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-2xl">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-sm">
              <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-200">Pickup Vehicle</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-sm">
              <UserCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-200">Driver Included</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-sm">
              <Sprout className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-200">Agri Produce</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-sm">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-200">Farm to Mandi</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 sm:max-w-md">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              aria-label={`Call ${BUSINESS_CONFIG.name} at ${BUSINESS_CONFIG.phoneDisplay}`}
              className="py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-base shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <PhoneCall className="w-5 h-5 shrink-0" />
              <span>Call Us</span>
            </a>
            
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello ' + BUSINESS_CONFIG.name + ', I need a transport quote for agricultural goods.')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Send WhatsApp message to ${BUSINESS_CONFIG.name}`}
              className="py-3.5 px-6 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 font-extrabold text-base backdrop-blur-md shadow-md transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
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
