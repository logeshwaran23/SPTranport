import React from 'react';
import { Truck, UserCheck, Sprout, MapPin } from 'lucide-react';
import { Container } from '../components/common/Container';
import { TRUST_HIGHLIGHTS } from '../data/companyInfo';

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-6 h-6 text-emerald-700" />,
  UserCheck: <UserCheck className="w-6 h-6 text-emerald-700" />,
  Sprout: <Sprout className="w-6 h-6 text-emerald-700" />,
  MapPin: <MapPin className="w-6 h-6 text-emerald-700" />
};

export const TrustHighlightsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 border border-emerald-200/80 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                {iconMap[item.iconName]}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-emerald-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
