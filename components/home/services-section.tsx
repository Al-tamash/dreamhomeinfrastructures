"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import { 
  Building2, 
  Home, 
  Building, 
  PenTool, 
  Box, 
  Video, 
  MapPin, 
  TreePine, 
  FileCheck,
} from "lucide-react";

// Services data with SEO-friendly descriptions
const services = [
  { 
    title: "Building Construction", 
    description: "Expert residential, commercial, and villa construction services. We build high-quality structures with transparent pricing and on-time delivery.", 
    icon: Home, 
    href: "/services/building-construction", 
    image: "/services-image/residentialconstruction.png" 
  },
  { 
    title: "Interior Design", 
    description: "Transform your space with our comprehensive interior design services, including architectural planning, 3D perspectives, and immersive walkthroughs.", 
    icon: PenTool, 
    href: "/services/interior-design", 
    image: "/services-image/3DPerspective.png" 
  },
  { 
    title: "Plotting Venture", 
    description: "Secure your future with our premium HMDA, DTCP, and Farm plots in prime locations. Legal titles and excellent appreciation potential guaranteed.", 
    icon: MapPin, 
    href: "/services/plotting-venture", 
    image: "/services-image/HMDAPlots.png" 
  },
];

export default function ServicesSection() {
  return (
    <section className="section-gap bg-tertiary">
      <div className="container-custom">
        <SectionHeading 
          eyebrow="Our Expertise"
          title="Complete Construction & Interior Solutions" 
          subtitle="From architectural planning to final handover - everything you need under one roof" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
