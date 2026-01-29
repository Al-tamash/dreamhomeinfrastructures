// Server Component - Completed Projects Section
import Image from "next/image";
import { MapPin } from "lucide-react";
import { completedProjectsData } from "@/lib/plotting-data";
import SectionHeading from "@/components/section-heading";

export default function PlottingProjects() {
  return (
    <section className="section-padding bg-dark-200">
      <div className="container-custom">
        <SectionHeading 
          title="Layouts We've Delivered" 
          subtitle="A glimpse of our completed projects across Hyderabad" 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {completedProjectsData.map((project) => (
            <div
              key={project.name}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all"
            >
              <div className="relative h-48">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
                  {project.type}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-heading font-bold text-white mb-1">{project.name}</h4>
                <div className="flex items-center gap-1 text-white/60 text-sm mb-2">
                  <MapPin size={12} />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary">{project.plots} Plots</span>
                  <span className="text-white/60">{project.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
