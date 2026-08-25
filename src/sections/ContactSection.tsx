import React from 'react';
import { Phone, MessageSquare, MapPin, Mail, Clock, Building2 } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { BUSINESS_CONFIG } from '../data/business';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <Container>
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-200">
            Contact Information
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Contact us directly via phone or WhatsApp to discuss your pickup location, destination, and transport requirement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Direct Call & WhatsApp Action Cards */}
          <div className="space-y-6">
            
            {/* Call Us Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 agri-card-hover">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Call Us Directly</h3>
                  <p className="text-xs text-slate-500">Speak with us for trip availability</p>
                </div>
              </div>
              <p className="text-xl font-extrabold text-emerald-800">{BUSINESS_CONFIG.phoneDisplay}</p>
              <Button
                asAnchor
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                variant="primary"
                size="md"
                className="w-full text-center"
                icon={<Phone className="w-4 h-4" />}
              >
                Call Us
              </Button>
            </div>

            {/* WhatsApp Us Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 agri-card-hover">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">WhatsApp Us</h3>
                  <p className="text-xs text-slate-500">Send transport requirement on WhatsApp</p>
                </div>
              </div>
              <p className="text-xl font-extrabold text-amber-900">{BUSINESS_CONFIG.whatsappDisplay}</p>
              <Button
                asAnchor
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw}?text=${encodeURIComponent('Hello ' + BUSINESS_CONFIG.name + ', I would like to get a quote for transporting agricultural produce.')}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                className="w-full text-center"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                WhatsApp Us
              </Button>
            </div>

          </div>

          {/* Right Column: Business Contact Card */}
          <div className="p-8 rounded-2xl bg-slate-900 text-white space-y-6 flex flex-col justify-between shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <Building2 className="w-6 h-6 text-emerald-400" />
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">Business Name</span>
                  <p className="text-xl font-extrabold text-white">{BUSINESS_CONFIG.name}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-400 uppercase text-[10px]">Location</span>
                    <span className="text-slate-200 text-sm font-medium">{BUSINESS_CONFIG.locationFull}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-400 uppercase text-[10px]">Email</span>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-slate-200 hover:text-emerald-300 text-sm font-medium transition-colors">
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-400 uppercase text-[10px]">Availability</span>
                    <span className="text-slate-200 text-sm font-medium">{BUSINESS_CONFIG.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};
