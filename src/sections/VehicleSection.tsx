import React from 'react';
import { Truck, Check, Info, UserCheck, Shield } from 'lucide-react';
import { Container } from '../components/common/Container';
import { VEHICLE_INFO } from '../data/companyInfo';

export const VehicleSection: React.FC = () => {
  return (
    <section id="vehicle" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-200">
            {VEHICLE_INFO.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {VEHICLE_INFO.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {VEHICLE_INFO.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Vehicle Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950 group">
              <img
                src={VEHICLE_INFO.imageUrl}
                alt="Commercial pickup vehicle carrying fresh agricultural produce"
                className="w-full h-80 sm:h-96 object-cover opacity-95 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <Truck className="w-4 h-4" />
                  <span>Commercial Pickup + Driver</span>
                </div>
                <p className="text-xs text-slate-300">
                  Ready for local farm pickups, mandis, and inter-city agricultural transport.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Key Points */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900">
                Transport Features & Capabilities
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {VEHICLE_INFO.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Drivers & Safety Notice */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5 shadow-xs">
                <UserCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Experienced Driver</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5 shadow-xs">
                <Shield className="w-5 h-5 text-amber-700 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Safe Goods Transport</span>
              </div>
            </div>

            {/* Note / Placeholder Notice */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-slate-700 flex items-start gap-3 text-xs leading-relaxed">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 font-bold">Vehicle Notice:</strong>{' '}
                {VEHICLE_INFO.placeholderNotice}
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};
