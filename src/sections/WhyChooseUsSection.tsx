import React from 'react';
import { UserCheck, Sprout, MapPin, PhoneCall } from 'lucide-react';
import { Container } from '../components/common/Container';
import { WHY_CHOOSE_US_ITEMS } from '../data/companyInfo';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6 text-emerald-700" />,
  Sprout: <Sprout className="w-6 h-6 text-emerald-700" />,
  MapPin: <MapPin className="w-6 h-6 text-emerald-700" />,
  PhoneCall: <PhoneCall className="w-6 h-6 text-emerald-700" />
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-200">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Reliable Agricultural Transport Partner
          </h2>
          <p className="text-base text-slate-600">
            We focus on practical, safe, and efficient pickup transportation connecting your farm directly to your required destinations.
          </p>
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs agri-card-hover flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
