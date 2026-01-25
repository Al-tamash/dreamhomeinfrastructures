"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import StatCard from "@/components/stat-card";
import TestimonialCard from "@/components/testimonial-card";
import { companyStats } from "@/lib/stats-data";
import { 
  Compass, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  ArrowLeft, 
  FileText, 
  Ruler, 
  Building, 
  Shield, 
  ChevronDown,
  PenTool,
  Clock,
  Users,
  BadgeCheck,
  Boxes,
  Zap
} from "lucide-react";

// Planning services we offer
const planningServices = [
  { 
    title: "Site Analysis & Survey", 
    description: "Comprehensive land survey with topographical mapping, soil testing, and site feasibility assessment.", 
    icon: Compass, 
    image: "/architectural-planning/ultra_realistic_photograph_of_an_architect_working.jpeg" 
  },
  { 
    title: "Floor Plan Design", 
    description: "Detailed 2D floor plans optimized for space utilization, natural light, and functional flow.", 
    icon: FileText, 
    image: "/architectural-planning/ultra_realistic_photograph_of_an_architect_performing.jpeg" 
  },
  { 
    title: "Elevation Design", 
    description: "Beautiful front, side, and rear elevation drawings that define your building's visual identity.", 
    icon: Building, 
    image: "/architectural-planning/Modernbuildingelevationswithdesigntools.png" 
  },
  { 
    title: "Structural Engineering", 
    description: "Complete RCC design with column, beam, slab, and foundation layouts by licensed structural engineers.", 
    icon: Ruler, 
    image: "/architectural-planning/Engineersreviewingplansonsite.png" 
  },
  { 
    title: "MEP Planning", 
    description: "Electrical, plumbing, and HVAC system layouts with load calculations and specifications.", 
    icon: PenTool, 
    image: "/architectural-planning/ArchitectsworkingonMEPlayouts.png" 
  },
  { 
    title: "GHMC Approval Drawings", 
    description: "Fully compliant drawings for GHMC, HMDA, and other regulatory bodies with 100% approval rate.", 
    icon: Shield, 
    image: "/architectural-planning/GHMCApprovalDrawings.png" 
  },
];

// Why choose us for architectural planning
const whyChooseUs = [
  { 
    icon: BadgeCheck, 
    title: "100% Approval Rate", 
    description: "All our drawings are GHMC/HMDA compliant. We've never had a plan rejection in 15+ years." 
  },
  { 
    icon: Clock, 
    title: "Fast Turnaround", 
    description: "Residential plans in 2-3 weeks, commercial in 4-6 weeks. Rush delivery available." 
  },
  { 
    icon: Users, 
    title: "In-House Experts", 
    description: "Licensed architects and structural engineers on staff. No outsourcing, no delays." 
  },
  { 
    icon: Boxes, 
    title: "Complete Documentation", 
    description: "All drawings in AutoCAD format with detailed specifications and BOQ ready for construction." 
  },
  { 
    icon: Zap, 
    title: "Unlimited Revisions", 
    description: "We work with you until you're 100% satisfied. No extra charges for reasonable changes." 
  },
  { 
    icon: Shield, 
    title: "Approval Assistance", 
    description: "We handle the complete GHMC/HMDA approval process on your behalf at no extra cost." 
  },
];

// Planning process
const processSteps = [
  { 
    step: "01", 
    title: "Consultation", 
    description: "Understanding your requirements, budget, and vision for the project.", 
    icon: Users 
  },
  { 
    step: "02", 
    title: "Site Visit", 
    description: "Land survey, soil testing, and site analysis by our technical team.", 
    icon: Compass 
  },
  { 
    step: "03", 
    title: "Concept Design", 
    description: "Initial floor plan layouts and elevation concepts for your approval.", 
    icon: PenTool 
  },
  { 
    step: "04", 
    title: "Detailed Drawings", 
    description: "Complete architectural, structural, and MEP drawings with specifications.", 
    icon: FileText 
  },
  { 
    step: "05", 
    title: "Approvals", 
    description: "GHMC/HMDA submission and obtaining building permits on your behalf.", 
    icon: Shield 
  },
];

// Portfolio samples
const portfolioSamples = [
  { 
    title: "Modern Villa Floor Plan", 
    image: "/architectural-planning/ultra_realistic_photograph_of_an_architect_working.jpeg", 
    type: "Residential",
    size: "3,500 sq.ft"
  },
  { 
    title: "Contemporary Elevation", 
    image: "/architectural-planning/Modernbuildingelevationswithdesigntools.png", 
    type: "Villa",
    size: "4,200 sq.ft"
  },
  { 
    title: "Commercial Office Layout", 
    image: "/architectural-planning/GHMCApprovalDrawings.png", 
    type: "Commercial",
    size: "25,000 sq.ft"
  },
  { 
    title: "Structural Design", 
    image: "/architectural-planning/Engineersreviewingplansonsite.png", 
    type: "Engineering",
    size: "G+3 Building"
  },
];



// Testimonials
const testimonials = [
  { 
    name: "Rajesh Kumar", 
    role: "Homeowner, Madhapur", 
    rating: 5, 
    content: "Dream Home's architectural planning was exceptional. Every detail was considered, and the GHMC approval came through in just 2 weeks. Their drawings were so detailed that construction was smooth." 
  },
  { 
    name: "Sunita Reddy", 
    role: "Builder, LB Nagar", 
    rating: 5, 
    content: "We've worked with Dream Home on 15+ projects. Their structural planning and documentation quality is unmatched. They understand Hyderabad's building codes inside out." 
  },
  { 
    name: "Venkat Rao", 
    role: "Commercial Developer, HITEC City", 
    rating: 5, 
    content: "Our 50,000 sq.ft commercial project needed complex MEP planning. Their team delivered comprehensive drawings that saved us lakhs in construction costs through smart optimization." 
  },
];

// FAQs with SEO-optimized content
const faqs = [
  { 
    question: "What is included in architectural planning services?", 
    answer: "Our architectural planning includes: comprehensive site analysis, 2D floor plans, elevation designs (front, side, rear), section drawings, structural layouts with RCC design, electrical and plumbing plans, HVAC layouts, door-window schedules, detailed specifications, and all documentation needed for GHMC/HMDA building approvals." 
  },
  { 
    question: "How much does architectural planning cost in Hyderabad?", 
    answer: "Architectural planning costs typically range from ₹15-25 per sq.ft for residential projects and ₹20-35 per sq.ft for commercial projects. This includes all drawings, structural design, and approval documentation. We provide detailed quotes after understanding your specific requirements." 
  },
  { 
    question: "How long does the architectural planning process take?", 
    answer: "For residential projects, the complete planning process takes 2-4 weeks. Commercial projects typically take 4-8 weeks depending on complexity. GHMC approval adds another 2-3 weeks. We offer rush delivery for urgent projects at additional cost." 
  },
  { 
    question: "Do you help with GHMC/HMDA building approvals?", 
    answer: "Yes! We prepare all drawings as per GHMC/HMDA guidelines and handle the complete approval process on your behalf. This includes plan submission, responding to queries, and obtaining the building permit. Our approval success rate is 100% with zero rejections in 15+ years." 
  },
  { 
    question: "Can I make changes to the plans during the process?", 
    answer: "Absolutely! We include unlimited revision rounds for reasonable changes. We work closely with you until you're completely satisfied with the design. Major structural changes after approval may require re-submission fees, which we discuss upfront." 
  },
  { 
    question: "Do you provide structural design and engineering?", 
    answer: "Yes, we provide complete structural engineering services including RCC design, foundation details, column-beam layouts, slab design, staircase details, and all structural calculations. All designs are certified by licensed structural engineers and comply with IS codes." 
  },
];

export default function ArchitecturalPlanningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            <source src="/videos/Indian_Luxury_Real_Estate_Video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
        </div>

        <div className="container-custom relative z-10 py-20">
          {/* Breadcrumb */}
          <Link 
            href="/services/interior-design" 
            className="inline-flex items-center gap-2 text-secondary hover:text-primary mb-6 transition-colors duration-200 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Design Services</span>
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            {/* Service Badge */}
            <div className="trust-badge mb-6">
              <Compass size={18} className="text-primary" />
              <span className="text-white text-sm font-medium">Architectural Planning in Hyderabad</span>
            </div>

            {/* Main Headline - SEO Optimized */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional <span className="text-primary">Architectural Planning</span> & Building Drawings
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              GHMC-compliant architectural plans with 100% approval rate. 
              From floor plans to structural engineering, we deliver complete building documentation 
              for residential and commercial projects across Hyderabad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary">
                  Get Planning Quote 
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
                <span className="text-sm">500+ Plans Designed</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">100% Approval Rate</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">GHMC Licensed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-gap-sm bg-dark-300 border-y border-white/5">
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

      {/* Planning Services Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Services"
            title="Comprehensive Architectural Planning Services" 
            subtitle="From site analysis to GHMC approvals, we handle every aspect of building documentation" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planningServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[280px] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Why Dream Home"
            title="Why Hyderabad Trusts Us for Architectural Planning" 
            subtitle="500+ plans delivered with 100% GHMC approval rate. Here's what makes us different." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-global p-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Process"
            title="How We Create Your Building Plans - Step by Step" 
            subtitle="A systematic, transparent approach to architectural documentation" 
          />
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-global p-6 text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={28} className="text-white" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-primary/30 mb-2">{step.step}</div>
                  <h4 className="font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h4>
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Portfolio"
            title="Sample Architectural Plans & Drawings" 
            subtitle="Explore examples of our architectural work for residential and commercial projects" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioSamples.map((sample, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {sample.type}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-lg font-bold text-white mb-1">{sample.title}</h3>
                    <p className="text-secondary text-sm">{sample.size}</p>
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

      {/* Testimonials */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Client Stories"
            title="What Clients Say About Our Planning Services" 
            subtitle="Real feedback from homeowners, builders, and developers across Hyderabad" 
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Common Questions"
            title="Architectural Planning FAQs" 
            subtitle="Answers to frequently asked questions about building plans and approvals in Hyderabad" 
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
      <section className="py-24 bg-gradient-to-br from-dark via-dark-200 to-dark relative overflow-hidden">
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
              Start Your Project
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Your Building Plans Done Right?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get professional architectural plans with guaranteed GHMC approval. 
              <span className="block mt-2 text-primary font-semibold">Free consultation. No obligation.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary text-lg">
                  Get Free Consultation 
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
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-white/60 text-sm"
            >
              📐 Fast turnaround: Residential plans in 2-3 weeks. Rush delivery available.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
