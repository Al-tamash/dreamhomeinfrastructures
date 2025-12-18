"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Building2, Home, Building, CheckCircle, ArrowRight, Phone } from "lucide-react";

const subServices = [
  { icon: Home, title: "Residential & Apartment Construction", description: "We build comfortable, modern homes and apartment complexes that cater to the needs of families.", features: ["Individual Houses & Villas", "Apartment Buildings", "Gated Communities", "Duplex & Triplex Homes"], image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=867" },
  { icon: Building2, title: "Commercial Construction", description: "From office buildings to retail spaces, we deliver commercial projects that meet modern business demands.", features: ["Office Buildings", "Shopping Complexes", "Industrial Buildings", "Warehouses"], image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=870" },
  { icon: Building, title: "Villa & Farm House Construction", description: "Create your dream retreat with our villa and farmhouse construction services featuring premium finishes.", features: ["Luxury Villas", "Farm Houses", "Weekend Homes", "Resort-style Properties"], image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871" },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "Free initial consultation" },
  { step: "02", title: "Planning", description: "Detailed architectural design" },
  { step: "03", title: "Approval", description: "Obtaining permits" },
  { step: "04", title: "Construction", description: "Quality construction" },
  { step: "05", title: "Handover", description: "Final inspection" },
];

export default function BuildingConstructionPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0"><Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=876" alt="Building construction" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-tertiary/95 via-tertiary/80 to-tertiary/60" /></div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6"><Building2 size={18} className="text-secondary" /><span className="text-secondary text-sm font-medium">Building Construction Services</span></div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Building <span className="text-primary">Construction</span> Services</h1>
            <p className="text-xl text-white/70 mb-8">From residential homes to commercial complexes, we build structures that stand the test of time.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"><Button size="lg">Get Free Quote <ArrowRight size={18} className="ml-2" /></Button></Link>
              <a href="tel:+918008044008"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tertiary"><Phone size={18} className="mr-2" />Call Now</Button></a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <SectionHeading title="Our Construction Services" subtitle="Comprehensive building solutions for all your needs" />
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
                  <Link href="/contact"><Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-tertiary">Learn More <ArrowRight size={16} className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'rgb(35, 35, 35)' }}>
        <div className="container-custom">
          <SectionHeading title="Our Construction Process" subtitle="A systematic approach to delivering quality projects" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                  <div className="font-heading text-4xl font-bold text-primary/30 mb-3">{step.step}</div>
                  <h4 className="font-heading font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-white/60">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Dream Structure?</h2>
          <Link href="/contact"><Button size="lg" className="bg-white text-secondary hover:bg-white/90">Get Started <ArrowRight size={18} className="ml-2" /></Button></Link>
        </div>
      </section>
    </>
  );
}
