"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import TestimonialCard from "@/components/testimonial-card";

// Testimonials with authentic-feeling content
const testimonials = [
  { 
    name: "Mohammed Hussain", 
    role: "Homeowner, Banjara Hills", 
    content: "Dream Home Infrastructures built our family home exactly as we envisioned. The team was professional, communicated well throughout, and delivered on time. The quality of work exceeded our expectations.", 
    rating: 5 
  },
  { 
    name: "Fatima Khan", 
    role: "Business Owner, Jubilee Hills", 
    content: "They transformed our office space with incredible attention to detail. What impressed me most was their transparency - no hidden costs, no surprises. Highly recommend for commercial projects.", 
    rating: 5 
  },
  { 
    name: "Syed Rahman", 
    role: "Villa Owner, Shamshabad", 
    content: "From the 3D walkthrough to final construction, the team made the entire process smooth and stress-free. They handled all the GHMC approvals too. Best decision we made for our farmhouse.", 
    rating: 5 
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-gap bg-dark-200">
      <div className="container-custom">
        <SectionHeading 
          eyebrow="Client Stories"
          title="Real Experiences from Real Homeowners" 
          subtitle="Don't just take our word for it - hear from families who trusted us with their dream homes" 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
