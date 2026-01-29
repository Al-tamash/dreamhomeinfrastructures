// Plotting & Venture Service Page
// Uses component-based architecture for maintainability

import {
  PlottingHero,
  PlottingServices,
  PlottingWhyChoose,
  PlottingProcess,
  PlottingProjects,
  PlottingInfrastructure,
  PlottingComparison,
  PlottingTestimonials,
  PlottingFAQ,
  PlottingCTA,
} from "@/components/plotting";

export default function PlottingVenturePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <PlottingHero />

      {/* Section 2: Development Services with Learn More */}
      <PlottingServices />

      {/* Section 3: Why Landowners Choose Us */}
      <PlottingWhyChoose />

      {/* Section 4: Development Process Timeline */}
      <PlottingProcess />

      {/* Section 5: Completed Projects Gallery */}
      <PlottingProjects />

      {/* Section 6: Infrastructure We Build */}
      <PlottingInfrastructure />

      {/* Section 7: Investment Comparison */}
      <PlottingComparison />

      {/* Section 8: Testimonials */}
      <PlottingTestimonials />

      {/* Section 9: FAQ */}
      <PlottingFAQ />

      {/* Section 10: CTA */}
      <PlottingCTA />
    </>
  );
}
