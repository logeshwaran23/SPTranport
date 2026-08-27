import React from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { HeroSection } from '../sections/HeroSection';
import { TrustHighlightsSection } from '../sections/TrustHighlightsSection';
import { ServicesSection } from '../sections/ServicesSection';
import { VehicleSection } from '../sections/VehicleSection';
import { ServiceAreaSection } from '../sections/ServiceAreaSection';
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';
import { FinalCtaSection } from '../sections/FinalCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Trust Highlights */}
        <TrustHighlightsSection />

        {/* 4. Services Section */}
        <ServicesSection />

        {/* 5. Vehicle Capabilities Section */}
        <VehicleSection />

        {/* 6. Service Area / Destinations */}
        <ServiceAreaSection />

        {/* 7. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 8. About Section */}
        <AboutSection />

        {/* 9. Contact Section */}
        <ContactSection />

        {/* 10. Final CTA */}
        <FinalCtaSection />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};
