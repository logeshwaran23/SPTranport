import React from 'react';
import { MapPin, Info, ArrowUpRight } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SERVICE_AREA_INFO } from '../data/companyInfo';
import { BUSINESS_CONFIG } from '../data/business';

export const ServiceAreaSection: React.FC = () => {
  return (
    <section id="service-area" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-200">
            {SERVICE_AREA_INFO.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {SERVICE_AREA_INFO.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {SERVICE_AREA_INFO.description}
          </p>
          <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 inline-block px-3 py-1 rounded-md border border-emerald-200/60 mt-1">
            Primary Base Location: {BUSINESS_CONFIG.location}
          </p>
        </div>

        {/* Example Destination Cards Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {SERVICE_AREA_INFO.exampleDestinations.map((dest, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between text-slate-800 hover:border-emerald-500 hover:text-emerald-800 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">{dest}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </div>
            ))}
          </div>

          {/* Important Example Destinations Notice */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-700 text-xs leading-relaxed flex items-start gap-3">
            <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 font-bold">Example Destinations Notice:</strong>{' '}
              {SERVICE_AREA_INFO.disclaimer}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};
