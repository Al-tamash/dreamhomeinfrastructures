"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Paintbrush, PenTool, Box, Video, CheckCircle, ArrowRight, Phone } from "lucide-react";

const subServices = [
  { icon: PenTool, title: "2D Design", description: "Our 2D design services include detailed floor plans, elevations, and sections that help you visualize space.", features: ["Floor Plans & Layouts", "Elevation Drawings", "Section Drawings", "Electrical & Plumbing Plans"], image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=831", href: "/services/interior-design/2d-design" },
  { icon: Box, title: "3D Design", description: "See your dream space come to life with our realistic 3D visualizations before construction begins.", features: ["Realistic 3D Rendering", "Interior Visualization", "Exterior Visualization", "Material Mapping"], image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800", href: "/services/interior-design/3d-design" },
  { icon: Video, title: "3D Walkthrough", description: "Experience your future space before construction with our immersive 3D walkthrough videos.", features: ["Virtual Tours", "Animated Walkthroughs", "Interactive Presentations", "360° Views"], image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=870", href: "/services/interior-design/3d-walkthrough" },
];

const benefits = [
  { title: "Visualize Before Building", description: "See your space before construction" },
  { title: "Cost Effective", description: "Make changes in design phase" },
  { title: "Better Planning", description: "Accurate space utilization" },
  { title: "Client Approval", description: "Easy stakeholder approval" },
];

export default function InteriorDesignPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0"><Image src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800" alt="Interior design" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-tertiary/95 via-tertiary/80 to-tertiary/60" /></div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6"><Paintbrush size={18} className="text-secondary" /><span className="text-secondary text-sm font-medium">Interior Design Services</span></div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Interior <span className="text-primary">Design</span> Services</h1>
            <p className="text-xl text-white/70 mb-8">Transform your spaces with our innovative interior design services. From 2D plans to immersive 3D walkthroughs.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"><Button size="lg">Get Free Quote <ArrowRight size={18} className="ml-2" /></Button></Link>
              <a href="tel:+918008044008"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tertiary"><Phone size={18} className="mr-2" />Call Now</Button></a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <SectionHeading title="Our Interior Design Services" subtitle="Comprehensive design solutions for residential and commercial spaces" />
          <div className="space-y-16">
            {subServices.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={`grid lg:grid-cols-2 gap-12 items-center`}>
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]"><Image src={service.image} alt={service.title} fill className="object-cover" /><div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-xl p-3"><service.icon size={28} className="text-primary" /></div></div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (<div key={feature} className="flex items-center gap-2 text-white/70"><CheckCircle size={16} className="text-secondary flex-shrink-0" /><span className="text-sm">{feature}</span></div>))}
                  </div>
                  <Link href={service.href}><Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-tertiary">Learn More <ArrowRight size={16} className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <SectionHeading title="Why Choose Our Design Services?" subtitle="Benefits of professional interior design" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4"><CheckCircle size={28} className="text-secondary" /></div>
                <h4 className="font-heading font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Ready to Design Your Perfect Space?</h2>
          <Link href="/contact"><Button size="lg" className="bg-white text-primary hover:bg-white/90">Get Started <ArrowRight size={18} className="ml-2" /></Button></Link>
        </div>
      </section>
    </>
  );
}
