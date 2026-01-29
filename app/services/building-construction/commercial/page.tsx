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
  Building2, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  ArrowLeft, 
  Clock, 
  Shield, 
  Award, 
  Users, 
  ChevronDown,
  Briefcase,
  Hammer,
  FileCheck,
  Wallet,
  Wrench,
  HardHat,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Types of commercial construction
const commercialTypes = [
  { 
    title: "Corporate Office Buildings", 
    description: "Modern workspaces with smart building technology, efficient floor plans, and employee-centric design.", 
    image: "/commercial/OfficeBuildings.jpg" 
  },
  { 
    title: "Shopping Malls & Retail", 
    description: "High-footfall retail spaces designed to maximize customer experience and tenant visibility.", 
    image: "/commercial/ShoppingComplexes.png" 
  },
  { 
    title: "Industrial & Manufacturing", 
    description: "Heavy-duty construction for factories, production units, and industrial operations.", 
    image: "/commercial/ModernindustrialwarehouseinHyderabad.png" 
  },
  { 
    title: "Warehouses & Logistics", 
    description: "Large-scale storage facilities optimized for inventory management and distribution.", 
    image: "/commercial/WarehouseinteriorinHyderabadwarehouse.png" 
  },
  { 
    title: "Showrooms & Brand Stores", 
    description: "Premium retail spaces that showcase your products and elevate brand experience.", 
    image: "/commercial/LuxuriousretailshowroominHyderabad.png" 
  },
  { 
    title: "Hotels & Hospitality", 
    description: "Guest-focused spaces designed for comfort, efficiency, and memorable experiences.", 
    image: "/commercial/TwilightataluxuriousHyderabadrestaurant.png" 
  },
];

// Why choose us for commercial construction
const whyChooseUs = [
  { 
    icon: Shield, 
    title: "GHMC & Fire NOC Licensed", 
    description: "Fully compliant with all building regulations, fire safety codes, and accessibility standards." 
  },
  { 
    icon: Clock, 
    title: "On-Time Project Delivery", 
    description: "100% track record of meeting deadlines. Penalties clause included in our contracts." 
  },
  { 
    icon: Wallet, 
    title: "Fixed-Price Contracts", 
    description: "Detailed BOQ with itemized costs. No hidden charges or escalation clauses." 
  },
  { 
    icon: HardHat, 
    title: "ISO-Certified Quality", 
    description: "Rigorous quality management with third-party inspections at every milestone." 
  },
  { 
    icon: Wrench, 
    title: "Turnkey Solutions", 
    description: "Complete design-build service including MEP, interiors, and facility setup." 
  },
  { 
    icon: Users, 
    title: "Dedicated Project Team", 
    description: "Experienced project manager with weekly progress reports and site meetings." 
  },
];

// Construction process steps
const processSteps = [
  { 
    step: "01", 
    title: "Feasibility Analysis", 
    description: "Site evaluation, zoning compliance, and project viability assessment.", 
    icon: Briefcase 
  },
  { 
    step: "02", 
    title: "Design & Engineering", 
    description: "Architectural, structural, and MEP design with 3D visualization.", 
    icon: Building2 
  },
  { 
    step: "03", 
    title: "Permits & Approvals", 
    description: "GHMC, Fire NOC, environmental clearances, and all regulatory approvals.", 
    icon: FileCheck 
  },
  { 
    step: "04", 
    title: "Construction", 
    description: "Quality construction with milestone tracking and regular client updates.", 
    icon: Hammer 
  },
  { 
    step: "05", 
    title: "Commissioning", 
    description: "Final inspection, testing, documentation, and handover with warranty.", 
    icon: Award 
  },
];

// Completed projects
const projects = [
  { 
    title: "Corporate Tech Park", 
    image: "/commercial/OfficeBuildings.jpg", 
    sqft: "75,000", 
    type: "Office",
    location: "HITEC City"
  },
  { 
    title: "Retail Mall & Multiplex", 
    image: "/commercial/ShoppingComplexes.png", 
    sqft: "1,50,000", 
    type: "Retail",
    location: "Gachibowli"
  },
  { 
    title: "Logistics Warehouse", 
    image: "/commercial/WarehouseinteriorinHyderabadwarehouse.png", 
    sqft: "2,00,000", 
    type: "Warehouse",
    location: "Shamshabad"
  },
  { 
    title: "Boutique Hotel", 
    image: "/commercial/TwilightataluxuriousHyderabadrestaurant.png", 
    sqft: "45,000", 
    type: "Hotel",
    location: "Banjara Hills"
  },
];



// Testimonials
const testimonials = [
  { 
    name: "Arun Reddy", 
    role: "CEO, TechCorp Solutions", 
    rating: 5, 
    content: "Dream Home Infrastructures delivered our 75,000 sq.ft office building ahead of schedule. The quality of construction and attention to our corporate requirements was exceptional. They handled everything from approvals to final fit-out." 
  },
  { 
    name: "Sunita Patel", 
    role: "Director, Retail Ventures Pvt Ltd", 
    rating: 5, 
    content: "Our shopping complex was a massive 1.5 lakh sq.ft project with multiple stakeholders. They managed it with utmost professionalism, meeting every milestone without compromising on quality." 
  },
  { 
    name: "Mohammed Imran", 
    role: "MD, Logistics Hub India", 
    rating: 5, 
    content: "We needed a 2 lakh sq.ft warehouse delivered in 18 months. They delivered in 16 months with zero defects. Their project management is world-class and their team truly understands commercial construction." 
  },
];

// FAQs with SEO-optimized content
const faqs = [
  { 
    question: "What types of commercial construction projects do you handle?", 
    answer: "We handle all types of commercial construction including corporate office buildings, shopping malls, retail stores, industrial facilities, warehouses, hotels, hospitals, educational institutions, and mixed-use developments. Our portfolio includes projects ranging from 10,000 sq.ft showrooms to 5 lakh sq.ft industrial facilities." 
  },
  { 
    question: "What is the cost of commercial construction in Hyderabad?", 
    answer: "Commercial construction costs in Hyderabad range from ₹2,500 to ₹5,000 per sq.ft depending on the building type, specifications, and finishes. Office buildings typically cost ₹3,000-4,000/sq.ft, warehouses ₹2,500-3,000/sq.ft, and premium retail spaces ₹4,000-5,000/sq.ft. We provide detailed BOQ with transparent pricing." 
  },
  { 
    question: "How do you ensure commercial projects are completed on time?", 
    answer: "We use advanced project management tools with milestone tracking, maintain buffer stocks of critical materials, and have dedicated teams for each project phase. We also include penalty clauses in our contracts for any delays on our end, demonstrating our commitment to timely delivery." 
  },
  { 
    question: "Do you offer turnkey commercial construction services?", 
    answer: "Yes, we offer complete turnkey solutions including architectural design, structural engineering, MEP (mechanical, electrical, plumbing), interior fit-out, landscaping, and facility management setup. This single-point responsibility ensures better coordination and faster project completion." 
  },
  { 
    question: "What safety and quality standards do you follow?", 
    answer: "We strictly adhere to IS codes, National Building Code (NBC), and OSHA safety standards. Our sites undergo weekly safety audits and quality inspections at every milestone. We use only branded materials from approved vendors and provide third-party test reports for all critical components." 
  },
  { 
    question: "Can you work with our architects and consultants?", 
    answer: "Absolutely. We regularly collaborate with client-appointed architects, structural consultants, and MEP consultants. Our project management team ensures smooth coordination between all stakeholders while bringing our construction expertise to execute their designs efficiently." 
  },
];

export default function CommercialConstructionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
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
            <source src="/videos/Premium_Construction_Company_Portfolio_Montage.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
        </div>

        <div className="container-custom relative z-10 py-20">
          {/* Breadcrumb */}
          <Link 
            href="/services/building-construction" 
            className="inline-flex items-center gap-2 text-secondary hover:text-primary mb-6 transition-colors duration-200 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Building Construction</span>
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            {/* Service Badge */}
            <div className="trust-badge mb-6">
              <Building2 size={18} className="text-primary" />
              <span className="text-white text-sm font-medium">Commercial Construction in Hyderabad</span>
            </div>

            {/* Main Headline - SEO Optimized */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Commercial <span className="text-primary">Construction</span> That Builds Your Business
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              GHMC-licensed commercial contractors with 15+ years experience building offices, 
              malls, warehouses, and industrial facilities across Hyderabad. 
              On-time delivery with fixed-price contracts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary">
                  Get Project Quote 
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+918008044008">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white hover:text-dark"
                >
                  <Phone size={18} className="mr-2" />
                  +91 8008 044 008
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">GHMC Licensed</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">150+ Commercial Projects</span>
              </div>
            </div>
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

      {/* Commercial Spaces We Build */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Expertise"
            title="Types of Commercial Construction We Deliver" 
            subtitle="From corporate offices to industrial facilities, we build commercial spaces that drive business success" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[280px] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2 group-hover:text-white/90 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Redesigned Dark Theme */}
      <section className="py-20 bg-tertiary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Image & Stat Card */}
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
              <Image 
                src="/commercial/OfficeBuildings.jpg" 
                alt="Commercial Construction Excellence" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
              
              {/* Glass Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
                <div className="font-heading text-5xl font-bold mb-2 text-primary">150+</div>
                <div className="text-sm font-medium tracking-wider uppercase opacity-90">Commercial Projects <br/>Delivered On-Time</div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:py-8 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Why Choose Dream Home</span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                The Trusted Partner for <span className="text-primary">Commercial Excellence</span>
              </h2>
              <p className="text-white/70 mb-10 text-lg leading-relaxed">
                We redefine commercial construction through transparency, compliance, and an unwavering commitment to your project timeline. We understand that in business, time is money.
              </p>

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {whyChooseUs.map((item, index) => (
                  <div key={item.title} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="text-secondary">
                        <item.icon size={26} strokeWidth={2} />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Timeline Redesign */}
      <section className="py-24 bg-tertiary border-t border-white/5">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Process</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
              How We Build Your Vision - <span className="text-primary">Step by Step</span>
            </h2>
            <p className="text-white/60 text-lg">
              A transparent, systematic approach to delivering high-performance commercial spaces.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[22px] left-0 w-full h-[2px] bg-gradient-to-r from-white/5 via-white/20 to-white/5" />

            <div className="grid md:grid-cols-5 gap-8 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="group relative flex flex-col items-center text-center">
                  
                  {/* Number Circle */}
                  <div className="w-12 h-12 rounded-full bg-dark-200 border border-white/10 group-hover:border-primary/50 text-white font-bold text-lg flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white mb-6 relative shadow-lg shadow-black/50">
                    {String(index + 1).padStart(2, '0')}
                    
                    {/* Pulsing BG Effect on Hover */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="px-2">
                    <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Portfolio"
            title="Commercial Projects We've Delivered in Hyderabad" 
            subtitle="Explore our portfolio of successfully completed offices, malls, and industrial facilities" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image 
                    src={project.image} 
                    alt={`${project.title} - ${project.location}`} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.type}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-secondary text-sm">{project.sqft} sq.ft • {project.location}</p>
                  </div>
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

      {/* Testimonials - Refined Carousel Style */}
      <section className="section-gap bg-tertiary overflow-hidden">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Client Success Stories"
            title="What Business Owners Say About Our Work" 
            subtitle="Real feedback from companies who trusted us to build their commercial spaces" 
          />
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows - Hidden on mobile */}
            <button
              onClick={() => setTestimonialIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-primary rounded-full items-center justify-center text-white transition-all duration-300 hidden md:flex"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
            </button>
            
            <button
              onClick={() => setTestimonialIndex(prev => (prev + 1) % testimonials.length)}
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
                    const index = (testimonialIndex + offset) % testimonials.length;
                    const testimonial = testimonials[index];
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

                        {/* Author */}
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
                onClick={() => setTestimonialIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setTestimonialIndex(prev => (prev + 1) % testimonials.length)}
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Common Questions"
            title="Commercial Construction FAQs" 
            subtitle="Answers to frequently asked questions about commercial building construction in Hyderabad" 
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-24 bg-tertiary relative overflow-hidden">
        {/* Background decorative elements */}
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
              Let's Build Together
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Commercial Space in Hyderabad?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get a detailed project quote with transparent pricing. 
              <span className="block mt-2 text-primary font-semibold">Free site visit. No hidden costs.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary text-lg">
                  Request Project Quote 
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
                  Call: +91 8008 044 008
                </Button>
              </a>
            </div>
            
            {/* Urgency element */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-white/60 text-sm"
            >
              🏢 Currently accepting new commercial projects for Q2 2026. Book your consultation today.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
