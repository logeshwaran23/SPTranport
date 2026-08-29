import React from 'react';
import { UserCheck, Truck, Sprout, Route, ShieldCheck } from 'lucide-react';
import { Container } from '../components/common/Container';
import { WHY_CHOOSE_US_ITEMS } from '../data/companyInfo';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6 text-emerald-800" />,
  Truck: <Truck className="w-6 h-6 text-emerald-800" />,
  Sprout: <Sprout className="w-6 h-6 text-emerald-800" />,
  Route: <Route className="w-6 h-6 text-emerald-800" />
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <Container>
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-200/80">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Choose SPL Transports?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Reliable local transport support designed to make farm pickup and goods delivery simple.
          </p>
        </div>

        {/* 4 Advantage Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors shadow-2xs">
                  <div className="group-hover:text-white transition-colors">
                    {iconMap[item.iconName]}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement Below Cards */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-900 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-800/80 border border-emerald-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-300" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  Your goods. Our responsibility.
                </h4>
                <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                  We focus on dependable pickup, safe transportation, and timely delivery.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-900/90 px-4 py-2 rounded-full border border-emerald-700/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Trusted Transport
              </span>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};
