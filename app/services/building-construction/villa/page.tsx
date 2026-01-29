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
  Building, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  ArrowLeft, 
  Clock, 
  Shield, 
  Award, 
  Users, 
  ChevronDown,
  TreePine,
  Sparkles,
  Hammer,
  Palette,
  Home,
  Waves,
  Tv,
  Utensils,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Types of villa/farm house construction
const villaTypes = [
  { 
    title: "Luxury Villas", 
    description: "Spacious, architect-designed villas with premium finishes, modern amenities, and stunning architecture.", 
    image: "/villa-farm-house/ultra_realistic_photograph_of_a_luxury_modern.jpeg" 
  },
  { 
    title: "Farm Houses", 
    description: "Rustic elegance combined with modern comforts for peaceful countryside living outside Hyderabad.", 
    image: "/villa-farm-house/ultra_realistic_photograph_of_a_luxury_farmhouse.jpeg" 
  },
  { 
    title: "Weekend Getaway Homes", 
    description: "Perfect retreat homes designed for relaxation, nature, and escaping the city bustle.", 
    image: "/villa-farm-house/ultra_realistic_photograph_of_a_modern_weekend.jpeg" 
  },
  { 
    title: "Luxury Bungalows", 
    description: "Single-story premium homes with spacious layouts, landscaped gardens, and open living areas.", 
    image: "/villa-farm-house/ultra_realistic_photograph_of_a_luxury_bungalow.jpeg" 
  },
  { 
    title: "Country Estates", 
    description: "Sprawling properties with expansive outdoor spaces, guest cottages, and private amenities.", 
    image: "/villa-farm-house/ultra_realistic_photograph_of_a_luxury_country.jpeg" 
  },
  { 
    title: "Garden Homes", 
    description: "Homes designed around beautiful landscaping, courtyards, and nature-integrated living.", 
    image: "/villa-farm-house/ultra_realistic_photograph_of_a_modern_garden.jpeg" 
  },
];

// Premium luxury features we offer
const luxuryFeatures = [
  { icon: Waves, title: "Swimming Pools", description: "Infinity pools, lap pools, heated pools with poolside decks" },
  { icon: Home, title: "Smart Home Systems", description: "Complete home automation with voice control and app integration" },
  { icon: TreePine, title: "Landscape Design", description: "Professional gardens, outdoor living spaces, and water features" },
  { icon: Tv, title: "Home Theaters", description: "Premium audio-visual rooms with acoustic treatment" },
  { icon: Sparkles, title: "Wine Cellars", description: "Temperature-controlled storage with tasting areas" },
  { icon: Utensils, title: "Outdoor Kitchens", description: "BBQ areas, pizza ovens, and alfresco dining spaces" },
];

// Why choose us for villa construction
const whyChooseUs = [
  { 
    icon: Shield, 
    title: "10-Year Structural Warranty", 
    description: "Complete peace of mind with our comprehensive warranty on all villa construction." 
  },
  { 
    icon: Palette, 
    title: "Custom Architectural Design", 
    description: "In-house architects create bespoke designs tailored to your lifestyle and preferences." 
  },
  { 
    icon: Hammer, 
    title: "Premium Materials Only", 
    description: "We use only imported marble, teak wood, and branded fittings from top suppliers." 
  },
  { 
    icon: Clock, 
    title: "Dedicated Project Timeline", 
    description: "Detailed construction schedule with milestone tracking and regular site visits." 
  },
  { 
    icon: Users, 
    title: "Interior Design Included", 
    description: "Complete interior design services with furniture, fixtures, and smart home setup." 
  },
  { 
    icon: Award, 
    title: "Turnkey Delivery", 
    description: "Move-in ready homes with landscaping, pools, and all luxury amenities installed." 
  },
];

// Construction process
const processSteps = [
  { 
    step: "01", 
    title: "Site Analysis", 
    description: "Land survey, soil testing, and feasibility assessment for your property.", 
    icon: TreePine 
  },
  { 
    step: "02", 
    title: "Custom Design", 
    description: "Bespoke architectural design with 3D walkthrough and material selection.", 
    icon: Palette 
  },
  { 
    step: "03", 
    title: "Approvals", 
    description: "All permits, panchayat approvals, and regulatory clearances handled.", 
    icon: Shield 
  },
  { 
    step: "04", 
    title: "Construction", 
    description: "Premium quality construction with weekly progress reports.", 
    icon: Hammer 
  },
  { 
    step: "05", 
    title: "Finishing & Handover", 
    description: "Luxury finishing, interior setup, landscaping, and key handover.", 
    icon: Award 
  },
];

// Completed projects
const projects = [
  { 
    title: "Modern Luxury Villa", 
    image: "/villa-farm-house/ultra_realistic_photograph_of_a_luxury_modern.jpeg", 
    sqft: "6,500", 
    type: "Villa",
    location: "Jubilee Hills"
  },
  { 
    title: "Countryside Farm House", 
    image: "/villa-farm-house/ultra_realistic_photograph_of_a_luxury_farmhouse.jpeg", 
    sqft: "8,000", 
    type: "Farm House",
    location: "Shamirpet"
  },
  { 
    title: "Weekend Retreat", 
    image: "/villa-farm-house/ultra_realistic_photograph_of_a_modern_weekend.jpeg", 
    sqft: "3,500", 
    type: "Weekend Home",
    location: "Yadagirigutta"
  },
  { 
    title: "Estate Property", 
    image: "/villa-farm-house/ultra_realistic_photograph_of_a_luxury_country.jpeg", 
    sqft: "12,000", 
    type: "Estate",
    location: "Chevella"
  },
];



// Testimonials
const testimonials = [
  { 
    name: "Vikram Malhotra", 
    role: "Villa Owner, Jubilee Hills", 
    rating: 5, 
    content: "Our 6,500 sq.ft villa is beyond what we imagined. The attention to detail, the quality of imported marble, and the finishing - everything speaks luxury. Dream Home truly understands premium construction." 
  },
  { 
    name: "Anitha Rao", 
    role: "Farm House Owner, Shamirpet", 
    rating: 5, 
    content: "Building a farm house was our retirement dream. Dream Home made it a reality with all the countryside charm while ensuring modern comforts. The landscaping and pool are perfect!" 
  },
  { 
    name: "Suresh Reddy", 
    role: "Weekend Home Owner, Chevella", 
    rating: 5, 
    content: "We wanted a peaceful weekend getaway with all the luxury. They delivered exactly that - from the home theater to the outdoor kitchen, every detail was executed flawlessly." 
  },
];

// FAQs with SEO-optimized content
const faqs = [
  { 
    question: "What is the cost of building a luxury villa in Hyderabad?", 
    answer: "Luxury villa construction in Hyderabad typically ranges from ₹3,000 to ₹6,000+ per sq.ft depending on specifications, materials, and features. A standard premium villa (4,000-6,000 sq.ft) costs approximately ₹1.5-3 crores. Villas with imported materials, pools, and smart home systems can go higher. We provide detailed BOQ with transparent pricing." 
  },
  { 
    question: "How long does it take to build a villa or farm house?", 
    answer: "A luxury villa typically takes 12-18 months depending on size and complexity. Farm houses in remote locations may take 18-24 months due to infrastructure requirements. We provide a detailed construction schedule at project start and keep you updated with weekly progress reports." 
  },
  { 
    question: "Can you build on agricultural land outside Hyderabad?", 
    answer: "Yes, we specialize in farm house construction on agricultural land around Hyderabad including Shamirpet, Chevella, Yadagirigutta, and Vikarabad. We handle all panchayat approvals, land development, and ensure compliance with local regulations." 
  },
  { 
    question: "What luxury features can you include in a villa?", 
    answer: "We offer a complete range of luxury features including infinity pools, home theaters, wine cellars, smart home automation, landscaped gardens, guest cottages, outdoor kitchens, gym, spa, and customized features based on your lifestyle. All integrated seamlessly into your villa design." 
  },
  { 
    question: "Do you provide interior design for villas?", 
    answer: "Yes, we offer complete turnkey interior design services including furniture, fixtures, artwork, lighting design, and smart home integration. Our interior designers work with your architect to create cohesive, luxury interiors that match your villa's architecture." 
  },
  { 
    question: "What warranty do you provide on villa construction?", 
    answer: "We provide a comprehensive 10-year structural warranty covering foundation, RCC work, and load-bearing elements. Additionally, we offer a 2-year warranty on premium finishes, pool equipment, and smart home systems. Any issues within warranty are addressed promptly at no cost." 
  },
];

export default function VillaConstructionPage() {
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
              <Building size={18} className="text-primary" />
              <span className="text-white text-sm font-medium">Premium Villa Construction in Hyderabad</span>
            </div>

            {/* Main Headline - SEO Optimized */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build Your Dream <span className="text-primary">Luxury Villa</span> or Farm House
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Hyderabad's trusted villa construction company with 75+ luxury homes delivered. 
              From contemporary villas in Jubilee Hills to sprawling farm houses in Shamirpet - 
              we create homes that define luxury living.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary">
                  Book Free Consultation 
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

      {/* Villa Types Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Expertise"
            title="Types of Luxury Homes We Build" 
            subtitle="From contemporary villas to rustic farm houses, we create homes tailored to your lifestyle" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {villaTypes.map((item, index) => (
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

      {/* Premium Features Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Luxury Amenities"
            title="Premium Features We Install in Your Villa" 
            subtitle="Elevate your home with world-class amenities and smart living features" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxuryFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-global p-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <feature.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {feature.description}
                </p>
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
                src="/villa-farm-house/ultra_realistic_photograph_of_a_luxury_modern.jpeg" 
                alt="Luxury Villa Construction" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
              
              {/* Glass Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white">
                <div className="font-heading text-5xl font-bold mb-2 text-primary">75+</div>
                <div className="text-sm font-medium tracking-wider uppercase opacity-90">Luxury Villas & <br/>Farmhouses Completed</div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:py-8 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Why Choose Dream Home</span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Crafting Luxury with <span className="text-primary">Uncompromised Quality</span>
              </h2>
              <p className="text-white/70 mb-10 text-lg leading-relaxed">
                We don't just build houses; we craft legacy estates. Our attention to detail, premium material sourcing, and artisanal finishing ensure your villa stands a class apart.
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
              Creating Your Legacy - <span className="text-primary">Step by Step</span>
            </h2>
            <p className="text-white/60 text-lg">
              A meticulous, artisan approach to crafting your personalized luxury estate.
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
            title="Luxury Villas & Farm Houses We've Built" 
            subtitle="Explore our portfolio of premium homes delivered in and around Hyderabad" 
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
            eyebrow="Client Stories"
            title="What Villa Owners Say About Our Work" 
            subtitle="Real feedback from families living in their dream homes" 
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
            title="Villa & Farm House Construction FAQs" 
            subtitle="Answers to frequently asked questions about building a luxury home near Hyderabad" 
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
              Your Dream Awaits
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Luxury Villa or Farm House?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get a free consultation with our villa construction experts. 
              <span className="block mt-2 text-primary font-semibold">Site visit included. No obligation.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary text-lg">
                  Book Free Consultation 
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
                  Call Now
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
              🏡 Limited slots available for 2026 villa projects. Book your consultation today.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
