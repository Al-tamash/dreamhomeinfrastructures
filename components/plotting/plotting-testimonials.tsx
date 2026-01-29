// Server Component - Testimonials Section
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonialsData } from "@/lib/plotting-data";
import SectionHeading from "@/components/section-heading";

export default function PlottingTestimonials() {
  return (
    <section className="section-padding bg-dark-200">
      <div className="container-custom">
        <SectionHeading 
          title="What Landowners Say" 
          subtitle="Real experiences from landowners who trusted us with their development" 
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-white/80 mb-6 italic">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white">{testimonial.name}</div>
                  <div className="text-secondary text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
