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
    title: "Residential Construction", 
    description: "Build your dream home in Hyderabad with GHMC-licensed contractors. Quality materials, transparent pricing, on-time delivery.", 
    icon: Home, 
    href: "/services/building-construction/residential", 
    image: "/services-image/residentialconstruction.png" 
  },
  { 
    title: "Commercial Construction", 
    description: "Professional commercial building solutions for offices, retail spaces, and industrial facilities across Telangana.", 
    icon: Building2, 
    href: "/services/building-construction/commercial", 
    image: "/services-image/commercialconstruction.png" 
  },
  { 
    title: "Villa & Farm House", 
    description: "Premium villa and farmhouse construction with contemporary designs. Perfect for weekend retreats near Hyderabad.", 
    icon: Building, 
    href: "/services/building-construction/villa", 
    image: "/services-image/villafarmhouse.png" 
  },
  { 
    title: "Architectural Planning", 
    description: "Complete architectural services including floor plans, structural designs, and GHMC approval documentation.", 
    icon: PenTool, 
    href: "/services/interior-design/architectural-planning", 
    image: "/services-image/Architecturalplanning.png" 
  },
  { 
    title: "3D Perspective", 
    description: "Visualize your future home with photorealistic 3D renderings before construction begins.", 
    icon: Box, 
    href: "/services/interior-design/3d-perspective", 
    image: "/services-image/3DPerspective.png" 
  },
  { 
    title: "3D Walkthrough", 
    description: "Experience immersive virtual tours of your future space with cutting-edge visualization technology.", 
    icon: Video, 
    href: "/services/interior-design/3d-walkthrough", 
    image: "/services-image/3DWalkthrough.png" 
  },
  { 
    title: "HMDA Plots", 
    description: "Government approved HMDA plots in prime Hyderabad locations. 100% legal titles, bank loan eligible.", 
    icon: MapPin, 
    href: "/services/plotting-venture/hmda", 
    image: "/services-image/HMDAPlots.png" 
  },
  { 
    title: "DTCP Plots", 
    description: "Affordable DTCP approved plots in emerging areas with high appreciation potential for smart investors.", 
    icon: FileCheck, 
    href: "/services/plotting-venture/dtcp", 
    image: "/services-image/DTCPPlots.png" 
  },
  { 
    title: "Farm Plots", 
    description: "Premium agricultural land near Hyderabad. Ideal for farm houses, weekend getaways, and long-term investment.", 
    icon: TreePine, 
    href: "/services/plotting-venture/farm-plots", 
    image: "/services-image/FarmPlots.png" 
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
