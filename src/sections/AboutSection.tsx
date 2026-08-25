import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, UserCheck } from 'lucide-react';
import { Container } from '../components/common/Container';
import { ABOUT_INFO } from '../data/companyInfo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photorealistic Mahindra Vehicle Produce Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white group">
              <img
                src={ABOUT_INFO.imageUrl}
                alt="SP TRANSPORT pickup truck carrying fresh agricultural vegetables"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="800"
                height="600"
              />
              
              {/* Floating Highlight Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-slate-950/90 backdrop-blur-md text-white border border-slate-700/80 shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Vehicle & Driver Package</p>
                    <p className="text-xs text-slate-200 mt-0.5 font-medium">Commercial pickup vehicle complete with experienced driver</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Bullet Features */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-200/80">
              {ABOUT_INFO.subtitle}
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {ABOUT_INFO.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {ABOUT_INFO.description}
            </p>

            <div className="space-y-3.5 pt-2">
              {ABOUT_INFO.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Safe Produce Handling</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 font-bold">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Punctual Dispatch</span>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
