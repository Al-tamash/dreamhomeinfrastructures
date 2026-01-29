// Server Component - Why Choose Us Section
import { whyChooseUsData } from "@/lib/plotting-data";
import SectionHeading from "@/components/section-heading";

export default function PlottingWhyChoose() {
  return (
    <section className="section-padding bg-dark-200">
      <div className="container-custom">
        <SectionHeading 
          title="Why Landowners Trust Us" 
          subtitle="100+ layouts developed across Hyderabad with complete transparency" 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsData.map((item) => (
            <div
              key={item.title}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-secondary/30 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={28} className="text-secondary" />
              </div>
              <h4 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-white/60 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
