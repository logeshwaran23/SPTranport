import React from 'react';
import { Sprout, Tractor, Store, Truck, Package, Route } from 'lucide-react';
import { Container } from '../components/common/Container';
import { SERVICES } from '../data/companyInfo';

const iconMap: Record<string, React.ReactNode> = {
  Sprout: <Sprout className="w-6 h-6 text-emerald-700" />,
  Tractor: <Tractor className="w-6 h-6 text-emerald-700" />,
  Store: <Store className="w-6 h-6 text-emerald-700" />,
  Truck: <Truck className="w-6 h-6 text-emerald-700" />,
  Package: <Package className="w-6 h-6 text-emerald-700" />,
  Route: <Route className="w-6 h-6 text-emerald-700" />
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Our Transport Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Tailored Transport Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We offer specialized pickup vehicle transport with experienced drivers to meet all your agricultural and local freight requirements.
          </p>
        </div>

        {/* Service Cards Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 hover:bg-white hover:border-emerald-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                  {iconMap[service.iconName]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
