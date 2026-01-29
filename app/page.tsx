import React from "react";
import Hero from "@/components/hero";


import ProblemsSection from "@/components/problems-section";
import ServicesSection from "@/components/home/services-section";
import WhyChooseUsSection from "@/components/home/why-choose-us";
import StatsSection from "@/components/home/stats-section";
import OngoingProjectsSection from "@/components/home/ongoing-projects-section";
import ProjectsPreviewSection from "@/components/home/projects-preview";
import TestimonialsSection from "@/components/home/testimonials-section";
import GoogleReviewsSection from "@/components/home/google-reviews";
import CtaSection from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section - Key trust signals */}
      <StatsSection />

      {/* Problems Section - Pain points */}
      <ProblemsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />



      {/* Ongoing Projects Section */}
      <OngoingProjectsSection />

      {/* Portfolio - Completed Projects */}
      <ProjectsPreviewSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Google Reviews Section */}
      <GoogleReviewsSection />

      {/* CTA Section */}
      <CtaSection />
    </>
  );
}

