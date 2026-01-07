"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";

// Project preview images
const projectsPreview = [
  { image: "/porject-images/e1.png" },
  { image: "/porject-images/e2.png" },
  { image: "/porject-images/e3.png" },
  { image: "/porject-images/e4.png" },
  { image: "/porject-images/e5.png" },
  { image: "/porject-images/e6.png" },
  { image: "/porject-images/e7.png" },
  { image: "/porject-images/e9.png" },
];

export default function ProjectsPreviewSection() {
  return (
    <section className="section-gap bg-tertiary">
      <div className="container-custom">
        <SectionHeading 
          eyebrow="Our Portfolio"
          title="See Our Work Across Hyderabad" 
          subtitle="Browse through our recently completed residential and commercial projects" 
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projectsPreview.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.4, delay: index * 0.05 }} 
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/3]">
                <Image 
                  src={project.image} 
                  alt={`Dream Home Infrastructures project ${index + 1}`} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-primary hover:border-primary hover:text-white"
            >
              View All Projects 
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
