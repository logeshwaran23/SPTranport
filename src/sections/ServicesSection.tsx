import React from 'react';
import {
  Truck,
  Tractor,
  UserCheck,
  Store,
  PhoneCall,
  MessageCircle,
  Sprout,
  ShieldCheck
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { SERVICES, SERVICE_TRUST_HIGHLIGHTS, BUSINESS_CONFIG } from '../data/companyInfo';

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-5 h-5 text-emerald-800" />,
  Tractor: <Tractor className="w-5 h-5 text-emerald-800" />,
  UserCheck: <UserCheck className="w-5 h-5 text-emerald-800" />,
  Store: <Store className="w-5 h-5 text-emerald-800" />,
  Sprout: <Sprout className="w-5 h-5 text-emerald-800" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-800" />
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <Container>
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-200/80">
            Services & Vehicles
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Reliable Transport for Your Agricultural Needs
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From farm pickup to market delivery, we provide dependable vehicles with experienced drivers for transporting agricultural products and goods.
          </p>
        </div>

        {/* 3 Professional Vehicle / Service Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const whatsappMessage = encodeURIComponent(
              `Hello ${BUSINESS_CONFIG.name}, I am interested in your ${service.title} service for transporting my goods.`
            );
            const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${whatsappMessage}`;
            const callUrl = `tel:${BUSINESS_CONFIG.phoneRaw}`;

            return (
              <div
                key={service.id}
                className="bg-slate-50/80 rounded-3xl border border-slate-200/90 hover:bg-white hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image / Header Container */}
                <div>
                  {service.imageUrl && (
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                      <img
                        src={service.imageUrl}
                        alt={`${service.title} - SP Transport Service`}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width="400"
                        height="300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      {service.badge && (
                        <span className="absolute top-3 right-3 text-[11px] font-bold text-white bg-emerald-700/90 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs border border-emerald-500/30">
                          {service.badge}
                        </span>
                      )}

                      <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md">
                        {iconMap[service.iconName]}
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6 text-left space-y-2.5">
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* CTAs Footer */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/70">
                    <a
                      href={callUrl}
                      aria-label={`Call us regarding ${service.title}`}
                      className="py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs hover:shadow flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-center"
                    >
                      <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                      <span>Call Us</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp us regarding ${service.title}`}
                      className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-xs hover:shadow flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-slate-800 text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Small Trust / Value Area Below Cards */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {SERVICE_TRUST_HIGHLIGHTS.map((item) => (
                <div key={item.id} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                    {iconMap[item.iconName]}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};
