import React from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { HeroSection } from '../sections/HeroSection';
import { TrustHighlightsSection } from '../sections/TrustHighlightsSection';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { VehicleSection } from '../sections/VehicleSection';
import { ServiceAreaSection } from '../sections/ServiceAreaSection';
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection';
import { ContactSection } from '../sections/ContactSection';
import { FinalCtaSection } from '../sections/FinalCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Highlights */}
        <TrustHighlightsSection />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Vehicle Section */}
        <VehicleSection />

        {/* Service Area / Destinations */}
        <ServiceAreaSection />

        {/* Why Choose Us */}
        <WhyChooseUsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Final CTA */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
