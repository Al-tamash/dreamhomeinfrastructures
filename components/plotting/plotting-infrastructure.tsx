// Server Component - Infrastructure Section
import { infrastructureData } from "@/lib/plotting-data";

export default function PlottingInfrastructure() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-white/10">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
            Infrastructure We Develop
          </h3>
          <p className="text-white/60">Every layout comes with complete, ready-to-use infrastructure</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {infrastructureData.map((item) => (
            <div
              key={item.name}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10 hover:border-secondary/30 transition-all"
            >
              <item.icon size={28} className="text-primary mx-auto mb-2" />
              <div className="text-white font-semibold text-sm mb-1">{item.name}</div>
              <div className="text-white/50 text-xs">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
