// Server Component - Development Process Section
import { developmentProcessData } from "@/lib/plotting-data";
import SectionHeading from "@/components/section-heading";

export default function PlottingProcess() {
  return (
    <section className="section-padding bg-tertiary border-t border-white/5">
      <div className="container-custom">
        <SectionHeading 
          title="Our Development Process" 
          subtitle="From land evaluation to plot handover - a streamlined 5-step journey" 
        />
        
        <div className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[22px] left-0 w-full h-[2px] bg-gradient-to-r from-white/5 via-white/20 to-white/5" />

          <div className="grid md:grid-cols-5 gap-8 relative">
            {developmentProcessData.map((step, index) => (
              <div key={step.step} className="group relative flex flex-col items-center text-center">
                
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full bg-dark-200 border border-white/10 group-hover:border-primary/50 text-white font-bold text-lg flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white mb-6 relative shadow-lg shadow-black/50">
                  {step.step}
                  
                  {/* Pulsing BG Effect on Hover */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="px-2">
                  <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
