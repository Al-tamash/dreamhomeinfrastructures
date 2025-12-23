"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Compass, CheckCircle, ArrowRight, Phone, ArrowLeft, Star, FileText, Ruler, Building, Shield, ChevronDown, Home, PenTool } from "lucide-react";
import { useState } from "react";

const features = [
  { title: "Site Analysis & Survey", description: "Comprehensive land survey with topographical mapping and soil testing", icon: Compass, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=831" },
  { title: "Floor Plan Design", description: "Detailed 2D floor plans optimized for space utilization and flow", icon: FileText, image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=870" },
  { title: "Elevation Design", description: "Beautiful front, side, and rear elevation drawings for your building", icon: Building, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=870" },
  { title: "Structural Planning", description: "RCC structural design with column, beam, and foundation layouts", icon: Ruler, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=876" },
  { title: "MEP Planning", description: "Electrical, plumbing, and HVAC system layouts and specifications", icon: PenTool, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=870" },
  { title: "Approval Drawings", description: "GHMC/HMDA compliant drawings for building permissions", icon: Shield, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870" },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "Understanding your requirements" },
  { step: "02", title: "Site Visit", description: "Land survey and analysis" },
  { step: "03", title: "Concept Design", description: "Initial layout and ideas" },
  { step: "04", title: "Documentation", description: "Detailed drawings & plans" },
  { step: "05", title: "Approval", description: "Help with permissions" },
];

const stats = [
  { value: "500+", label: "Plans Designed" },
  { value: "100%", label: "Approval Rate" },
  { value: "12+", label: "Years Experience" },
  { value: "GHMC", label: "Licensed" },
];

const samples = [
  { title: "Residential Floor Plan", image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=870", type: "Floor Plan" },
  { title: "Villa Elevation", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871", type: "Elevation" },
  { title: "Commercial Layout", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=870", type: "Commercial" },
  { title: "Structural Drawing", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=876", type: "Structural" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Homeowner, Madhapur", rating: 5, text: "Their architectural planning was exceptional. Every detail was considered, and the approval process was smooth thanks to their GHMC-compliant drawings." },
  { name: "Sunita Reddy", role: "Builder, LB Nagar", rating: 5, text: "We've worked with Dream Home on multiple projects. Their structural planning and documentation quality is unmatched in Hyderabad." },
];

const faqs = [
  { question: "What is included in architectural planning?", answer: "Our architectural planning includes site analysis, floor plans, elevation designs, section drawings, structural layouts, electrical and plumbing plans, and all documentation needed for building approvals." },
  { question: "How long does the planning process take?", answer: "Typically 2-4 weeks for residential projects and 4-8 weeks for commercial projects, depending on complexity and revision requirements." },
  { question: "Do you help with GHMC/HMDA approvals?", answer: "Yes! We prepare all drawings as per GHMC/HMDA guidelines and assist you through the entire approval process. Our approval success rate is 100%." },
  { question: "Can I make changes to the plans?", answer: "Absolutely! We include multiple revision rounds in our packages. We work closely with you until you're completely satisfied with the design." },
  { question: "Do you provide structural design as well?", answer: "Yes, we provide complete structural design including RCC design, foundation details, column-beam layouts, and all structural calculations certified by licensed engineers." },
];

const benefits = [
  { title: "Save Money", description: "Proper planning prevents costly construction mistakes" },
  { title: "Faster Approvals", description: "GHMC-compliant drawings mean quick permissions" },
  { title: "Better Space Usage", description: "Optimized layouts maximize your built-up area" },
  { title: "Future Ready", description: "Plans consider future expansion possibilities" },
];

export default function ArchitecturalPlanningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=831"
            alt="Architectural Planning Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        </div>
        <div className="container-custom relative z-10">
          <Link href="/services/interior-design" className="inline-flex items-center gap-2 text-secondary hover:text-white mb-6 transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Design Services</span>
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Compass size={18} className="text-primary" />
              <span className="text-primary text-sm font-medium">Professional Planning</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Expert <span className="text-primary">Architectural</span> Planning
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Transform your vision into detailed architectural plans. From floor layouts to GHMC approvals, we handle every aspect of building planning with precision and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Planning Quote <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+918008044008">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  <Phone size={18} className="mr-2" />+91 8008044008
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary/10 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Planning Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Comprehensive architectural planning for residential and commercial projects</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[280px] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{feature.description}</p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Why Professional Planning Matters</h2>
            <p className="text-white/70 max-w-2xl mx-auto">The foundation of every successful construction project</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-primary" />
                </div>
                <h4 className="font-heading font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Works */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Planning Portfolio</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Sample architectural plans and designs from our projects</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {samples.map((sample, index) => (
              <motion.div
                key={sample.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={sample.image} alt={sample.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{sample.type}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-lg font-bold text-white">{sample.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">
                View All Projects <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Planning Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">A systematic approach to architectural planning</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center w-full sm:w-auto sm:flex-1 max-w-[200px]"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">{step.step}</div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">{step.title}</h4>
                <p className="text-xs text-white/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-white/70 max-w-2xl mx-auto">What our clients say about our planning services</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="font-heading font-bold text-white">{testimonial.name}</div>
                  <div className="text-primary text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Common questions about architectural planning</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-heading font-bold text-white pr-4">{faq.question}</span>
                  <ChevronDown size={20} className={`text-primary flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-white/70">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/20 to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/50" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Plan Your Dream Project?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get professional architectural plans that bring your vision to life. Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Free Consultation <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+918008044008">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  <Phone size={18} className="mr-2" />Call: +91 8008044008
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
