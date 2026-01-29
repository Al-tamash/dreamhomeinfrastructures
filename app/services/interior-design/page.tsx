"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import StatCard from "@/components/stat-card";
import TestimonialCard from "@/components/testimonial-card";
import { companyStats } from "@/lib/stats-data";
import { 
  ArrowRight, 
  Phone, 
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle
} from "lucide-react";

import {
  heroData,
  mainServices,
  whyChooseUsData,
  processData,
  deliverablesData,
  portfolioData,
  walkthroughShowcaseData,
  testimonialsData,
  faqsData,
  ctaData
} from "@/lib/interior-design-data";

export default function InteriorDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <>
      {/* ==========================================
          1. HERO SECTION
      ========================================== */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto" 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroData.videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/40 to-dark/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-4xl"
          >
            {/* Service Badge */}
            <div className="trust-badge mb-6">
              <CheckCircle size={18} className="text-primary" />
              <span className="text-white text-sm font-medium">{heroData.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {heroData.title} <br />
              <span className="text-primary">{heroData.titleHighlight}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl">
              {heroData.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary text-lg">
                  {heroData.ctaPrimary}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+918008044008">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white hover:text-dark text-lg"
                >
                  <Phone size={18} className="mr-2" />
                  {heroData.ctaSecondary}
                </Button>
              </a>
            </div>

            {/* Trust Indicators - Removed as per request */}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-gap-sm bg-tertiary border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <StatCard 
                key={stat.label} 
                value={stat.value} 
                suffix={stat.suffix} 
                label={stat.label} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          2. THREE MAIN SERVICES - Plotting Style Cards
      ========================================== */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Services"
            title="Complete Design & Visualization Package" 
            subtitle="Everything you need from blueprints to 3D walkthroughs – all under one roof" 
          />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-white/70 mb-4">{service.description}</p>
                  
                  {/* Learn More Accordion */}
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="w-full flex items-center justify-between text-secondary hover:text-primary transition-colors mb-4"
                  >
                    <span className="font-semibold">Learn More</span>
                    <ChevronDown size={20} className={`transition-transform duration-300 ${expandedService === service.id ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <h4 className="text-white font-semibold text-sm mb-2">What's Included:</h4>
                        <ul className="space-y-1.5 mb-4">
                          {service.features.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                              <CheckCircle size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Link href="/contact">
                    <Button className="w-full bg-primary/20 hover:bg-primary text-white border border-primary/30">
                      Get Free Consultation <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          3. WHY CHOOSE US - Clean Card Design
      ========================================== */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Why Dream Home"
            title="Why Hyderabad Trusts Us for Design Services" 
            subtitle="15+ years of delivering exceptional architectural plans and stunning visualizations" 
          />
          
          {/* Cards Grid - 3x2 Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUsData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative pl-5 py-4"
              >
                {/* Left Accent Border - Short */}
                <div className="absolute left-0 top-1 w-1 h-10 bg-primary rounded-full group-hover:bg-secondary transition-colors duration-300" />
                
                {/* Icon */}
                <div className="mb-4">
                  <item.icon size={28} className="text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <Link href="/contact">
              <Button size="lg" className="btn-global-primary px-10">
                Start Your Project Today
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          4. PROCESS TIMELINE - Horizontal Design
      ========================================== */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Process"
            title="From Concept to Reality – Step by Step" 
            subtitle="A systematic, transparent approach from initial consultation to final delivery, ensuring your vision is built with precision." 
          />
          
          {/* Timeline Container */}
          <div className="relative mt-16">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[22px] left-0 w-full h-[2px] bg-gradient-to-r from-white/5 via-white/20 to-white/5" />
            
            {/* Steps Grid */}
            <div className="grid md:grid-cols-5 gap-8 relative">
              {processData.map((step, index) => (
                <div key={step.step} className="group relative flex flex-col items-center text-center">
                  
                  {/* Number Circle */}
                  <div className="w-12 h-12 rounded-full bg-dark-200 border border-white/10 group-hover:border-primary/50 text-white font-bold text-lg flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white mb-6 relative shadow-lg shadow-black/50">
                    {step.step}
                    
                    {/* Pulsing BG Effect on Hover */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="px-2">
                    <h4 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* ==========================================
          5. DELIVERABLES - Numbered Watermark Style
      ========================================== */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="What You Get"
            title="Complete Deliverables Package" 
            subtitle="Every document, design, and visualization you need for your project, delivered with precision and architectural excellence." 
          />
          
          {/* Deliverables Grid - 3 Column */}
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
            {deliverablesData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Header Row - Number, Icon, Category */}
                <div className="flex items-start justify-between mb-4">
                  {/* Left: Watermark Number + Icon */}
                  <div className="relative">
                    {/* Large Watermark Number */}
                    <span className="absolute -top-4 -left-2 text-7xl font-bold text-white/5 font-heading select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {/* Icon */}
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon size={24} className="text-primary" />
                    </div>
                  </div>
                  
                  {/* Right: Category Label */}
                  <span className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                    {item.category}
                  </span>
                </div>
                
                {/* Content with Left Border */}
                <div className="relative pl-4 border-l-2 border-primary group-hover:border-secondary transition-colors">
                  <h4 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* ==========================================
          6. PORTFOLIO GALLERY
      ========================================== */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Work"
            title="Portfolio – Plans & Visualizations" 
            subtitle="Explore examples of our architectural work and 3D visualizations" 
          />

          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.map((sample, index) => (
              <motion.div
                key={sample.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image 
                    src={sample.image} 
                    alt={sample.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/projects">
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-primary hover:border-primary hover:text-white"
              >
                View All Projects 
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          7. 3D WALKTHROUGH SHOWCASE
      ========================================== */}
      <section className="section-gap bg-tertiary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
              onClick={() => setShowVideo(!showVideo)}
            >
              {showVideo ? (
                <video 
                  autoPlay 
                  controls 
                  className="w-full h-full object-cover"
                >
                  <source src={walkthroughShowcaseData.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <>
                  <Image
                    src={walkthroughShowcaseData.thumbnailUrl}
                    alt="3D Walkthrough Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-dark/40 flex items-center justify-center group-hover:bg-dark/20 transition-colors">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play size={36} className="text-white ml-1" />
                    </div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 block">
                Featured Service
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                {walkthroughShowcaseData.title}
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                {walkthroughShowcaseData.subtitle}
              </p>

              <ul className="space-y-3 mb-8">
                {walkthroughShowcaseData.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button size="lg" className="btn-global-primary">
                  Get Walkthrough Quote
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          8. TESTIMONIALS - Home Page Style (No Card Feel)
      ========================================== */}
      <section className="section-gap bg-tertiary overflow-hidden">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Client Stories"
            title="What Clients Say About Our Services" 
            subtitle="Real feedback from homeowners, builders, and developers across Hyderabad" 
          />

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows - Hidden on mobile */}
            <button
              onClick={() => setTestimonialIndex(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-primary rounded-full items-center justify-center text-white transition-all duration-300 hidden md:flex"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
            </button>
            
            <button
              onClick={() => setTestimonialIndex(prev => (prev + 1) % testimonialsData.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-primary rounded-full items-center justify-center text-white transition-all duration-300 hidden md:flex"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="lg:w-6 lg:h-6" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden px-2 sm:px-4 md:px-8 lg:px-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                  {/* Show 3 testimonials at a time */}
                  {[0, 1, 2].map((offset) => {
                    const index = (testimonialIndex + offset) % testimonialsData.length;
                    const testimonial = testimonialsData[index];
                    return (
                      <motion.div
                        key={`${testimonial.name}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: offset * 0.1 }}
                        className={`group p-5 sm:p-6 transition-all duration-300 relative h-full flex flex-col ${
                          offset > 0 ? 'hidden md:flex' : ''
                        } ${offset > 1 ? 'lg:flex md:hidden' : ''}`}
                      >
                        {/* Quote Icon - Watermark */}
                        <div className="absolute top-0 right-0 text-primary/10">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-3 sm:mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          ))}
                        </div>

                        {/* Content */}
                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic flex-1">
                          "{testimonial.content}"
                        </p>

                        {/* Author - No border, just spacing */}
                        <div className="flex items-center gap-3 mt-auto pt-4">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/80 flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-white font-semibold text-xs sm:text-sm truncate">{testimonial.name}</h4>
                            <p className="text-primary text-[10px] sm:text-xs truncate">{testimonial.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Navigation Arrows - Below cards */}
            <div className="flex justify-center gap-4 mt-6 md:hidden">
              <button
                onClick={() => setTestimonialIndex(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setTestimonialIndex(prev => (prev + 1) % testimonialsData.length)}
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          9. FAQ SECTION
      ========================================== */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Common Questions"
            title="Frequently Asked Questions" 
            subtitle="Answers to common questions about our design and visualization services" 
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqsData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-global overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="font-heading font-bold text-white pr-4 group-hover:text-primary transition-colors duration-200">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-secondary flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-white/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          10. CTA SECTION
      ========================================== */}
      <section className="py-24 bg-tertiary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              {ctaData.eyebrow}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {ctaData.title}
            </h2>
            <p className="text-white/80 mb-2 max-w-2xl mx-auto text-lg">
              {ctaData.subtitle}
            </p>
            <p className="text-primary font-semibold mb-8">{ctaData.highlight}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary text-lg">
                  {ctaData.ctaPrimary}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+918008044008">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white hover:text-dark text-lg"
                >
                  <Phone size={18} className="mr-2" />
                  {ctaData.ctaSecondary}
                </Button>
              </a>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-white/60 text-sm"
            >
              {ctaData.footerNote}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
