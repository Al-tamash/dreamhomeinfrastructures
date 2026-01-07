"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Clock, Users, Shield, BadgeCheck, Hammer } from "lucide-react";
import SectionHeading from "@/components/section-heading";

// Why Choose Us data with improved copy
const whyChooseUs = [
  { 
    icon: Award, 
    title: "GHMC Licensed Since 2009", 
    description: "Fully licensed contractor with government approval. License No: BL/2149/2009" 
  },
  { 
    icon: Clock, 
    title: "On-Time Project Delivery", 
    description: "We honor deadlines. 95% of our projects are completed within the promised timeline." 
  },
  { 
    icon: Users, 
    title: "Expert In-House Team", 
    description: "Skilled architects, engineers, and craftsmen working together under one roof." 
  },
  { 
    icon: Shield, 
    title: "Quality Guaranteed", 
    description: "Premium materials from trusted brands with rigorous quality checks at every stage." 
  },
  { 
    icon: BadgeCheck, 
    title: "Transparent Pricing", 
    description: "No hidden costs. Get detailed quotations upfront with itemized breakdowns." 
  },
  { 
    icon: Hammer, 
    title: "End-to-End Service", 
    description: "From planning to handover, we manage everything so you don't have to." 
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section-gap bg-dark-200">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=876" 
                alt="Dream Home Infrastructures construction team working on site" 
                fill 
                className="object-cover" 
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
              <div className="font-heading text-4xl font-bold">{new Date().getFullYear() - 2009}+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div>
            <SectionHeading 
              eyebrow="Why Choose Us"
              title="Why 300+ Hyderabad Families Trust Us" 
              subtitle="We're not just contractors. We're your partners in building dreams." 
              centered={false} 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }} 
                  viewport={{ once: true }} 
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
