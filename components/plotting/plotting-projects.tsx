// Server Component - Completed Projects Section
import Image from "next/image";
import { MapPin } from "lucide-react";
import { completedProjectsData } from "@/lib/plotting-data";
import SectionHeading from "@/components/section-heading";

export default function PlottingProjects() {
  return (
    <section className="section-padding bg-tertiary">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
