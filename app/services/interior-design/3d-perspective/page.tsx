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
  Box, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  ArrowLeft, 
  ChevronDown,
  Eye,
  Sun,
  Home,
  Camera,
  Layers,
  Palette,
  Building,
  Ruler,
  MonitorPlay,
  Clock,
  Award,
  Users,
  Zap,
  Target
} from "lucide-react";

// 3D Perspective Services
const services = [
  { 
    title: "Exterior 3D Views", 
    description: "Stunning exterior perspectives showing your building from multiple angles with realistic lighting and landscaping.", 
    icon: Eye, 
    image: "/3d-perspective/exterior_3d_views.png" 
  },
  { 
    title: "Interior Perspectives", 
    description: "Photorealistic interior views with furniture, lighting, wall textures, and finishes that bring your space to life.", 
    icon: Home, 
    image: "/3d-perspective/interior_perspectives.png" 
  },
  { 
    title: "Bird's Eye View", 
    description: "Aerial perspectives showing your property in context with surroundings, perfect for site planning and presentations.", 
    icon: Camera, 
    image: "/3d-perspective/birds_eye_view.png" 
  },
  { 
    title: "Day & Night Renders", 
    description: "See how your building transforms from daylight to stunning night illumination with professional lighting design.", 
    icon: Sun, 
    image: "/3d-perspective/day_night_renders.png" 
  },
  { 
    title: "Material Visualization", 
    description: "Compare different materials, textures, and color schemes before finalizing your design choices.", 
    icon: Palette, 
    image: "/3d-perspective/material_visualization.png" 
  },
  { 
    title: "Isometric Views", 
    description: "Technical isometric perspectives for better spatial understanding and architectural documentation.", 
    icon: Layers, 
    image: "/3d-perspective/isometric_views.png" 
  },
];

// Why Choose 3D Perspectives
const benefits = [
  { 
    icon: Target, 
    title: "Visualize Before Building", 
    description: "Make confident decisions by seeing exactly how your project will look before breaking ground." 
  },
  { 
    icon: Zap, 
    title: "Powerful Marketing Tool", 
    description: "Sell properties faster with stunning visuals that capture buyer attention and drive conversions." 
  },
  { 
    icon: Ruler, 
    title: "Reduce Design Errors", 
    description: "Identify and fix design issues early, saving time and money during actual construction." 
  },
  { 
    icon: Users, 
    title: "Impress Stakeholders", 
    description: "Professional presentations that win approvals, attract investors, and build client confidence." 
  },
  { 
    icon: MonitorPlay, 
    title: "Better Client Communication", 
    description: "Bridge the gap between technical drawings and what clients actually envision for their space." 
  },
  { 
    icon: Award, 
    title: "Competitive Advantage", 
    description: "Stand out in the market with premium visual content that showcases your projects professionally." 
  },
];

// Construction process
const processSteps = [
  { 
    step: "01", 
    title: "Blueprint Analysis", 
    description: "We review your architectural drawings and understand your vision.", 
    icon: Ruler 
  },
  { 
    step: "02", 
    title: "3D Modeling", 
    description: "Our team creates a detailed 3D model of your building or interior.", 
    icon: Box 
  },
  { 
    step: "03", 
    title: "Texturing & Materials", 
    description: "We apply realistic materials, textures, and finishes to the model.", 
    icon: Palette 
  },
  { 
    step: "04", 
    title: "Lighting Setup", 
    description: "Professional lighting design for natural daylight or dramatic night views.", 
    icon: Sun 
  },
  { 
    step: "05", 
    title: "Final Render", 
    description: "High-resolution 4K/8K output ready for print and digital use.", 
    icon: Award 
  },
];



// Portfolio samples
const portfolio = [
  { 
    title: "Modern Villa Exterior", 
    image: "/3d-perspective/exterior_3d_views.png", 
    type: "Exterior" 
  },
  { 
    title: "Luxury Living Room", 
    image: "/3d-perspective/material_visualization.png", 
    type: "Interior" 
  },
  { 
    title: "Residential Complex", 
    image: "/3d-perspective/birds_eye_view.png", 
    type: "Commercial" 
  },
  { 
    title: "Premium Bedroom", 
    image: "/3d-perspective/interior_perspectives.png", 
    type: "Interior" 
  },
];

// Testimonials
const testimonials = [
  { 
    name: "Anil Sharma", 
    role: "Real Estate Developer, Hyderabad", 
    rating: 5, 
    content: "The 3D perspectives helped us pre-sell 80% of our apartments before construction. The quality is indistinguishable from actual photographs!" 
  },
  { 
    name: "Meenakshi Devi", 
    role: "Homeowner, Banjara Hills", 
    rating: 5, 
    content: "Seeing our dream home in 3D before construction gave us complete confidence. We made all design decisions without any doubt." 
  },
  { 
    name: "Rajesh Kumar", 
    role: "Architect, Jubilee Hills", 
    rating: 5, 
    content: "Dream Home's 3D renders are exceptional. The attention to lighting and material detail sets them apart from other visualization studios." 
  },
];

// FAQs
const faqs = [
  { 
    question: "What is a 3D perspective view and why do I need it?", 
    answer: "A 3D perspective is a photorealistic image that shows exactly how your building or interior will look when completed. It includes proper lighting, materials, landscaping, and furnishings. You need it to visualize your project before construction, make confident design decisions, market properties effectively, and communicate your vision to stakeholders." 
  },
  { 
    question: "What files do you need to create 3D perspectives?", 
    answer: "We need your architectural drawings (floor plans, elevations, sections) in PDF, CAD, or image format. Additionally, share your preferences for materials, colors, and furniture styles. Reference images of designs you like are helpful but not mandatory. Our team can guide you through the requirements." 
  },
  { 
    question: "How long does it take to create 3D perspectives?", 
    answer: "A single exterior view takes 2-3 working days. Interior perspectives take 1-2 days each. Complete project visualization packages (multiple exteriors + interiors) take 5-7 days depending on complexity. We also offer express delivery for urgent projects." 
  },
  { 
    question: "What resolution are the final images?", 
    answer: "We deliver 4K resolution (3840x2160) as standard, which is perfect for digital presentations and normal prints. We can also provide 8K resolution on request, ideal for large format prints, billboards, and premium marketing materials." 
  },
  { 
    question: "Can I request changes after seeing the initial render?", 
    answer: "Absolutely! We include 2 revision rounds in our standard package. You can request changes to camera angles, materials, lighting, furniture placement, and colors. Additional revisions beyond the included rounds are available at nominal charges." 
  },
  { 
    question: "What is the cost of 3D perspective services in Hyderabad?", 
    answer: "Pricing depends on project complexity, number of views, and resolution requirements. Typical exterior views start from ₹5,000-15,000 per view. Interior perspectives range from ₹3,000-10,000 per room. We offer package deals for complete projects. Contact us for a customized quote." 
  },
];

export default function Perspective3DPage() {
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
            <span>Back to Interior Design Services</span>
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            {/* Service Badge */}
            <div className="trust-badge mb-6">
              <Box size={18} className="text-primary" />
              <span className="text-white text-sm font-medium">3D Visualization Services in Hyderabad</span>
            </div>

            {/* Main Headline - SEO Optimized */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Photorealistic <span className="text-primary">3D Perspective</span> Views for Your Project
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              See your dream building come to life before construction begins. Our 3D visualization 
              experts create stunning perspectives that help you visualize, decide, and market 
              residential, commercial, and interior design projects across Hyderabad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary">
                  Get Your 3D Quote 
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
                <span className="text-sm">1000+ Perspectives Delivered</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">8K Resolution Quality</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">48-Hour Fast Delivery</span>
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

      {/* What We Offer Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Services"
            title="Professional 3D Perspective Services" 
            subtitle="Comprehensive 3D visualization solutions for residential, commercial, and interior design projects" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[280px] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
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

      {/* Why Choose 3D Perspectives Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Why 3D Visualization"
            title="Benefits of 3D Perspective for Your Project" 
            subtitle="Transform how you plan, present, and market your construction and interior design projects" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-global p-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <benefit.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Work"
            title="3D Perspective Portfolio" 
            subtitle="Stunning visualizations from our recent residential, commercial, and interior projects" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((project, index) => (
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
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.type}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-lg font-bold text-white">{project.title}</h3>
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

      {/* Process Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="How It Works"
            title="Our 3D Visualization Process" 
            subtitle="A streamlined workflow to deliver stunning perspectives on time, every time" 
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

      {/* Testimonials Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Client Reviews"
            title="What Our Clients Say About Our 3D Work" 
            subtitle="Real feedback from architects, developers, and homeowners who trusted us with their visualization needs" 
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Common Questions"
            title="3D Perspective FAQs" 
            subtitle="Answers to frequently asked questions about our 3D visualization services" 
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
              Start Your Project
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Visualize Your Dream Project?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get photorealistic 3D perspectives that bring your vision to life. 
              <span className="block mt-2 text-primary font-semibold">Free consultation. Quick turnaround. Unlimited revisions.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary text-lg">
                  Get Free 3D Quote 
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
              🎨 Fast 48-hour delivery available for urgent projects. Contact us today!
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
