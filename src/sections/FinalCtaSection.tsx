import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { COMPANY_INFO } from '../data/companyInfo';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/50 via-emerald-950 to-slate-950 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Need a Vehicle for Your Next Trip?
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto">
            Contact us with your pickup location, destination and transport requirement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asAnchor
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get a Quote
            </Button>

            <Button
              asAnchor
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello ' + COMPANY_INFO.name + ', I need a transport quote for agricultural goods.')}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              icon={<MessageSquare className="w-5 h-5 text-emerald-900" />}
            >
              WhatsApp Us
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};
