"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import StatCard from "@/components/stat-card";
import TestimonialCard from "@/components/testimonial-card";
import { 
  Home, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  ArrowLeft, 
  Star, 
  Clock, 
  Shield, 
  Award, 
  Users, 
  ChevronDown,
  Hammer,
  Ruler,
  Building,
  FileCheck,
  BadgeCheck,
  Wallet
} from "lucide-react";

// Types of residential construction we offer
const constructionTypes = [
  { 
    title: "Individual Houses & Villas", 
    description: "Custom-designed homes built to your exact specifications with premium materials and modern architecture.", 
    image: "/residential/a_modern_luxury_individual_villa_in_india.jpeg" 
  },
  { 
    title: "Apartment Buildings", 
    description: "Multi-story residential complexes with modern amenities, parking, and shared facilities.", 
    image: "/residential/ultra_realistic_photograph_of_a_modern_apartment.jpeg" 
  },
  { 
    title: "Gated Communities", 
    description: "Secure, well-planned townships with parks, clubhouse, and 24/7 security infrastructure.", 
    image: "/residential/ultra_realistic_photograph_of_a_premium_gated.jpeg" 
  },
  { 
    title: "Duplex & Triplex Homes", 
    description: "Multi-level living spaces that maximize land use while providing privacy for each floor.", 
    image: "/residential/modern_duplex_and_triplex_homes_in_india.jpeg" 
  },
  { 
    title: "Multi-story Residential", 
    description: "High-rise apartments with contemporary designs, balconies, and city views.", 
    image: "/residential/MultiStoreyResidential.jpg" 
  },
  { 
    title: "Housing Societies", 
    description: "Large-scale housing projects with community spaces, playgrounds, and shared amenities.", 
    image: "/residential/ultra_realistic_photograph_of_a_large_housing.jpeg" 
  },
];

// Why choose us for residential construction
const whyChooseUs = [
  { 
    icon: Shield, 
    title: "10-Year Structural Warranty", 
    description: "Complete peace of mind with our industry-leading warranty on all construction work." 
  },
  { 
    icon: FileCheck, 
    title: "GHMC Approval Handling", 
    description: "We manage all building permits, approvals, and regulatory clearances on your behalf." 
  },
  { 
    icon: Wallet, 
    title: "Transparent Pricing", 
    description: "Detailed quotations with itemized costs. No hidden charges or surprise expenses." 
  },
  { 
    icon: Clock, 
    title: "On-Time Delivery", 
    description: "95% of our projects are delivered within the committed timeline." 
  },
  { 
    icon: Hammer, 
    title: "Premium Materials", 
    description: "Only branded cement, steel, and fittings from trusted suppliers like ACC, JSW, and Astral." 
  },
  { 
    icon: Users, 
    title: "Dedicated Project Manager", 
    description: "Single point of contact who keeps you updated with weekly progress reports." 
  },
];

// Construction process steps
const processSteps = [
  { 
    step: "01", 
    title: "Free Consultation", 
    description: "Site visit and detailed discussion about your requirements, budget, and timeline.", 
    icon: Users 
  },
  { 
    step: "02", 
    title: "Design & Planning", 
    description: "Architectural design, 3D visualization, and structural planning by our experts.", 
    icon: Ruler 
  },
  { 
    step: "03", 
    title: "Approvals & Permits", 
    description: "We handle all GHMC approvals, building permits, and regulatory clearances.", 
    icon: FileCheck 
  },
  { 
    step: "04", 
    title: "Construction", 
    description: "Quality construction with regular site updates and milestone reporting.", 
    icon: Hammer 
  },
  { 
    step: "05", 
    title: "Quality Handover", 
    description: "Final inspection, documentation, and key handover with complete as-built drawings.", 
    icon: Award 
  },
];

// Completed projects
const projects = [
  { 
    title: "Luxury Villa - Jubilee Hills", 
    image: "/residential/a_modern_luxury_individual_villa_in_india.jpeg", 
    sqft: "4,500", 
    type: "Villa",
    location: "Jubilee Hills"
  },
  { 
    title: "Modern Apartment Complex", 
    image: "/residential/ultra_realistic_photograph_of_a_modern_apartment.jpeg", 
    sqft: "50,000", 
    type: "Apartments",
    location: "Gachibowli"
  },
  { 
    title: "Gated Community", 
    image: "/residential/ultra_realistic_photograph_of_a_premium_gated.jpeg", 
    sqft: "2,00,000", 
    type: "Township",
    location: "Kondapur"
  },
  { 
    title: "Duplex Home", 
    image: "/residential/modern_duplex_and_triplex_homes_in_india.jpeg", 
    sqft: "3,200", 
    type: "Duplex",
    location: "Banjara Hills"
  },
];

// Stats data
const stats = [
  { value: 200, suffix: "+", label: "Homes Built" },
  { value: new Date().getFullYear() - 2009, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Expert Team" },
];

// Testimonials
const testimonials = [
  { 
    name: "Rajesh Kumar", 
    role: "Villa Owner, Jubilee Hills", 
    rating: 5, 
    content: "Dream Home Infrastructures built our villa exactly as we envisioned. The attention to detail and quality of construction exceeded our expectations. They handled everything from approvals to final finishing." 
  },
  { 
    name: "Priya Sharma", 
    role: "Apartment Owner, Kondapur", 
    rating: 5, 
    content: "Professional team, timely delivery, and excellent communication throughout the project. Our project manager kept us informed every week. Highly recommend their residential construction services!" 
  },
  { 
    name: "Venkat Reddy", 
    role: "Duplex Owner, Madhapur", 
    rating: 5, 
    content: "We compared 5 builders before choosing Dream Home. Their transparent pricing and quality commitment won us over. The 10-year warranty gives us complete peace of mind." 
  },
];

// FAQs with SEO-optimized content
const faqs = [
  { 
    question: "How long does it take to build a house in Hyderabad?", 
    answer: "The construction timeline depends on the size and complexity of your project. A standard individual house (2000-3000 sq.ft) typically takes 8-12 months. Larger projects like apartments or villas may take 18-24 months. We provide a detailed schedule at project start and keep you updated on progress." 
  },
  { 
    question: "What is the construction cost per square foot in Hyderabad?", 
    answer: "Our residential construction costs range from ₹1,800 to ₹3,500 per sq.ft depending on the specifications, materials, and finishes you choose. Basic construction starts at ₹1,800/sq.ft, standard at ₹2,200/sq.ft, and premium luxury at ₹3,000-3,500/sq.ft. We provide detailed quotations with no hidden costs." 
  },
  { 
    question: "Do you provide architectural design services?", 
    answer: "Yes, we have experienced in-house architects who create custom designs based on your requirements. This includes floor plans, 3D elevations, structural drawings, and interior layouts. We also work with your preferred architect if you already have one." 
  },
  { 
    question: "How do you handle GHMC building approvals?", 
    answer: "We handle the complete approval process including plan sanction, building permits, and occupancy certificate. Our team is experienced with GHMC, HMDA, and other regulatory bodies. This is included in our service at no extra cost." 
  },
  { 
    question: "What warranty do you provide on construction?", 
    answer: "We provide a comprehensive 10-year structural warranty covering foundation, RCC work, and load-bearing elements. Additionally, we offer a 1-year warranty on electrical, plumbing, and other installations. Any issues within the warranty period are addressed promptly at no cost." 
  },
  { 
    question: "Can I make changes during construction?", 
    answer: "Yes, minor modifications can be accommodated during construction. We have a formal change request process to evaluate impact on cost and timeline. Major structural changes may require revised approvals. We recommend finalizing plans thoroughly before construction begins." 
  },
];

export default function ResidentialConstructionPage() {
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
              <Home size={18} className="text-primary" />
              <span className="text-white text-sm font-medium">Residential Construction in Hyderabad</span>
            </div>

            {/* Main Headline - SEO Optimized */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build Your Dream <span className="text-primary">Home</span> With Hyderabad's Trusted Contractors
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              GHMC-licensed residential construction company with 15+ years experience. 
              From cozy family homes to luxury villas, we deliver quality construction with 
              transparent pricing and on-time completion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary">
                  Get Free Consultation 
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
                <span className="text-sm">10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">200+ Homes Built</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-gap-sm bg-dark-300 border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* What We Build Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Expertise"
            title="Types of Residential Construction We Offer" 
            subtitle="From individual homes to large housing projects, we have the expertise to build any residential property" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionTypes.map((item, index) => (
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

      {/* Why Choose Us Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Why Dream Home"
            title="Why Hyderabad Families Choose Us for Home Construction" 
            subtitle="We've built 200+ homes with a 100% client satisfaction rate. Here's what makes us different." 
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

      {/* Construction Process Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Process"
            title="How We Build Your Home - Step by Step" 
            subtitle="A transparent, systematic approach to turning your dream home into reality" 
          />
          <div className="relative">
            {/* Connection Line */}
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

      {/* Project Gallery */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Portfolio"
            title="Residential Projects We've Completed in Hyderabad" 
            subtitle="Explore our portfolio of successfully delivered homes, villas, and apartments" 
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

      {/* Testimonials */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Client Stories"
            title="What Homeowners Say About Our Work" 
            subtitle="Real feedback from families who trusted us to build their homes" 
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
            title="Residential Construction FAQs" 
            subtitle="Answers to frequently asked questions about building a home in Hyderabad" 
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
              Start Your Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Dream Home in Hyderabad?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get a free consultation and detailed cost estimate for your residential project. 
              <span className="block mt-2 text-primary font-semibold">No obligation. No hidden fees.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary text-lg">
                  Get Free Quote 
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
              🏠 Taking new projects for 2026. Book your slot early for preferred timelines.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
