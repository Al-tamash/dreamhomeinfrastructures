// Server Component - Development Process Section
import { developmentProcessData } from "@/lib/plotting-data";
import SectionHeading from "@/components/section-heading";

export default function PlottingProcess() {
  return (
    <section className="section-padding bg-tertiary">
      <div className="container-custom">
        <SectionHeading 
          title="Our Development Process" 
          subtitle="From land evaluation to plot handover - a streamlined 5-step journey" 
        />
        
        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary" />
          <div className="grid lg:grid-cols-5 gap-6">
            {developmentProcessData.map((step) => (
              <div
                key={step.step}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon size={24} className="text-white" />
                </div>
                <div className="font-heading text-3xl font-bold text-primary/30 mb-2">{step.step}</div>
                <h4 className="font-heading font-bold text-white mb-2">{step.title}</h4>
                <p className="text-white/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
