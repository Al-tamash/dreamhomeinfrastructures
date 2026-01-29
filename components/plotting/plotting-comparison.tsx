// Server Component - Investment Comparison Section
import { investmentComparisonData } from "@/lib/plotting-data";
import SectionHeading from "@/components/section-heading";

export default function PlottingComparison() {
  return (
    <section className="section-padding bg-tertiary">
      <div className="container-custom">
        <SectionHeading 
          title="Which Layout Type Suits Your Land?" 
          subtitle="Compare development options to make the right choice" 
        />
        
        <div className="grid lg:grid-cols-3 gap-6">
          {investmentComparisonData.map((item) => (
            <div
              key={item.type}
              className={`rounded-2xl p-6 border ${item.highlight ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30' : 'bg-white/5 border-white/10'} hover:border-primary/50 transition-all`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${item.highlight ? 'bg-primary/30' : 'bg-white/10'} rounded-xl flex items-center justify-center`}>
                  <item.icon size={24} className={item.highlight ? 'text-primary' : 'text-secondary'} />
                </div>
                <h4 className="font-heading text-xl font-bold text-white">{item.type}</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/60 text-sm">Best For</span>
                  <span className="text-white text-sm font-medium">{item.bestFor}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/60 text-sm">Appreciation</span>
                  <span className="text-secondary text-sm font-medium">{item.appreciation}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white/60 text-sm">Bank Loans</span>
                  <span className="text-white text-sm">{item.bankLoan}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60 text-sm">Timeline</span>
                  <span className="text-primary text-sm font-medium">{item.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
