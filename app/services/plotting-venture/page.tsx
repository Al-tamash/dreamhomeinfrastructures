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
import StatCard from "@/components/stat-card";
import { companyStats } from "@/lib/stats-data";

export default function PlottingVenturePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <PlottingHero />

      {/* Stats Section */}
      <section className="section-gap-sm bg-tertiary border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <StatCard 
                key={stat.label} 
                value={stat.value} 
                suffix={stat.suffix} 
                label={stat.label} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Development Services with Learn More */}
      <PlottingServices />

      {/* Section 3: Why Landowners Choose Us */}
      <PlottingWhyChoose />

      {/* Section 4: Development Process Timeline */}
      <PlottingProcess />

      {/* Section 5: Completed Projects Gallery */}
      <PlottingProjects />

      {/* Section 6: Infrastructure We Build */}
      {/* <PlottingInfrastructure /> */}

      {/* Section 7: Investment Comparison */}
      {/* <PlottingComparison /> */}

      {/* Section 8: Testimonials */}
      <PlottingTestimonials />

      {/* Section 9: FAQ */}
      <PlottingFAQ />

      {/* Section 10: CTA */}
      <PlottingCTA />
    </>
  );
}
