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
  Video, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  ArrowLeft, 
  ChevronDown,
  Play,
  Rotate3D,
  Eye,
  Compass,
  Monitor,
  Box,
  Palette,
  Sun,
  Award,
  Users,
  Zap,
  Target,
  Building,
  TrendingUp,
  Clock
} from "lucide-react";

// 3D Walkthrough Services
const services = [
  { 
    title: "Virtual Tours", 
    description: "Interactive virtual tours that let viewers explore every corner of your property at their own pace with full control.", 
    icon: Compass, 
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=870" 
  },
  { 
    title: "Cinematic Walkthroughs", 
    description: "Professional video tours with smooth camera movements, cinematic transitions, and atmospheric music.", 
    icon: Video, 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870" 
  },
  { 
    title: "Interactive Presentations", 
    description: "Clickable hotspots providing detailed information about materials, fixtures, and design elements.", 
    icon: Monitor, 
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=869" 
  },
  { 
    title: "360° Panoramic Views", 
    description: "Complete panoramic views from every room for full spatial understanding and immersive exploration.", 
    icon: Rotate3D, 
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=870" 
  },
  { 
    title: "Fly-through Videos", 
    description: "Dramatic aerial views and fly-through sequences showcasing your property from stunning perspectives.", 
    icon: Play, 
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871" 
  },
  { 
    title: "VR-Ready Experiences", 
    description: "Walkthroughs compatible with VR headsets like Oculus and HTC Vive for truly immersive experiences.", 
    icon: Eye, 
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=870" 
  },
];

// Benefits of 3D Walkthrough
const benefits = [
  { 
    icon: TrendingUp, 
    title: "Boost Pre-Sales by 70%", 
    description: "Sell apartments and villas before construction with virtual experiences that drive buyer confidence." 
  },
  { 
    icon: Target, 
    title: "Engage Remote Buyers", 
    description: "Show properties to buyers anywhere in the world without physical site visits saving time and travel costs." 
  },
  { 
    icon: Zap, 
    title: "Faster Decision Making", 
    description: "Help clients make confident decisions by experiencing the space as if it's already built." 
  },
  { 
    icon: Users, 
    title: "Impress Investors", 
    description: "Secure project funding with professional presentations that showcase your vision convincingly." 
  },
  { 
    icon: Award, 
    title: "Marketing Advantage", 
    description: "Stand out from competition with premium video content that generates leads and social shares." 
  },
  { 
    icon: Clock, 
    title: "Save Revision Costs", 
    description: "Identify design issues early through virtual walkthroughs before expensive construction changes." 
  },
];

// Use Cases
const useCases = [
  { 
    icon: Building, 
    title: "Real Estate Pre-Sales", 
    description: "Launch projects and secure bookings before construction with immersive virtual tours." 
  },
  { 
    icon: Monitor, 
    title: "Client Presentations", 
    description: "Win projects with professional walkthrough presentations that leave lasting impressions." 
  },
  { 
    icon: Eye, 
    title: "Design Validation", 
    description: "Experience and approve interior designs before committing to expensive finishing work." 
  },
  { 
    icon: Compass, 
    title: "Remote Property Tours", 
    description: "Enable NRI clients and remote buyers to tour properties from anywhere in the world." 
  },
];

// Production Process
const processSteps = [
  { 
    step: "01", 
    title: "3D Model Setup", 
    description: "We build the complete 3D environment from your architectural plans.", 
    icon: Box 
  },
  { 
    step: "02", 
    title: "Path Planning", 
    description: "Designing the optimal walkthrough route for maximum impact.", 
    icon: Compass 
  },
  { 
    step: "03", 
    title: "Animation", 
    description: "Creating smooth, cinematic camera movements through your space.", 
    icon: Play 
  },
  { 
    step: "04", 
    title: "Rendering", 
    description: "High-quality 4K/8K video rendering with realistic lighting.", 
    icon: Sun 
  },
  { 
    step: "05", 
    title: "Post Production", 
    description: "Music, effects, titles, and final polish for professional output.", 
    icon: Award 
  },
];

// Stats data
const stats = [
  { value: 200, suffix: "+", label: "Walkthroughs Created" },
  { value: 4, suffix: "K/8K", label: "Video Quality" },
  { value: 60, suffix: "fps", label: "Smooth Animation" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

// Portfolio samples
const portfolio = [
  { 
    title: "Luxury Villa Tour", 
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=870", 
    type: "Villa" 
  },
  { 
    title: "Apartment Complex", 
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=870", 
    type: "Residential" 
  },
  { 
    title: "Office Space Tour", 
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=869", 
    type: "Commercial" 
  },
  { 
    title: "Resort Walkthrough", 
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=870", 
    type: "Hospitality" 
  },
];

// Testimonials
const testimonials = [
  { 
    name: "Mahesh Rao", 
    role: "Real Estate Developer, Hyderabad", 
    rating: 5, 
    content: "The walkthrough videos helped us sell 70% of our apartments before construction started. An incredible marketing tool that paid for itself many times over!" 
  },
  { 
    name: "Lakshmi Devi", 
    role: "Homeowner, Gachibowli", 
    rating: 5, 
    content: "Walking through our future home in VR was magical. My whole family could experience the space together before making final design decisions." 
  },
  { 
    name: "Suresh Reddy", 
    role: "Commercial Builder, Madhapur", 
    rating: 5, 
    content: "Dream Home's walkthrough quality is exceptional. Our investors were deeply impressed with the presentation and approved funding immediately." 
  },
];

// FAQs
const faqs = [
  { 
    question: "What is a 3D walkthrough video and how is it different from 3D perspective?", 
    answer: "A 3D walkthrough is an animated video that takes viewers on a virtual tour through your space, simulating the experience of physically walking through the building. Unlike static 3D perspectives, walkthroughs show every room and detail in motion with cinematic camera movements, giving a complete spatial experience." 
  },
  { 
    question: "How long is a typical walkthrough video?", 
    answer: "Most residential walkthrough videos are 2-5 minutes long, covering all key areas. Larger properties like commercial complexes, hotels, or townships may have longer videos of 5-10 minutes with multiple segments. We work with you to determine the optimal length for maximum impact." 
  },
  { 
    question: "Can I use the walkthrough video for marketing purposes?", 
    answer: "Absolutely! Walkthrough videos are excellent marketing assets. We provide multiple formats including social media optimized versions (Instagram Reels, YouTube Shorts), website embeds, and high-quality files for presentations. Many of our clients see significant improvement in enquiries after using walkthrough videos." 
  },
  { 
    question: "What is the difference between walkthrough video and 360° virtual tour?", 
    answer: "A walkthrough is a pre-recorded video with a cinematically designed path - viewers watch but don't control the movement. A 360° tour allows viewers to freely look around in all directions at specific points and choose where to go next. We offer both options individually or combined for the best of both worlds." 
  },
  { 
    question: "Do you provide VR-ready walkthroughs for Hyderabad projects?", 
    answer: "Yes! Our Premium and Complete packages include VR-compatible output. Viewers can experience your Hyderabad property using VR headsets like Oculus Quest, HTC Vive, or even smartphone-based VR viewers. This is particularly popular for NRI clients and remote buyers." 
  },
  { 
    question: "What is the cost of 3D walkthrough services in Hyderabad?", 
    answer: "Pricing depends on project size, video length, and quality requirements. Residential walkthroughs typically start from ₹25,000-50,000 for apartments and ₹50,000-1,50,000 for villas. Commercial projects are quoted based on floor area. Contact us for a customized quote based on your specific requirements." 
  },
];

export default function WalkthroughPage() {
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
              <Video size={18} className="text-primary" />
              <span className="text-white text-sm font-medium">3D Walkthrough Services in Hyderabad</span>
            </div>

            {/* Main Headline - SEO Optimized */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Immersive <span className="text-primary">3D Walkthrough</span> Videos for Real Estate
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Experience your future property with cinematic 3D walkthrough videos. Walk through every room, 
              explore every detail, and feel the space before it's built. Perfect for real estate marketing, 
              client presentations, and pre-sales across Hyderabad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary">
                  <Play size={18} className="mr-2" />
                  Get Walkthrough Quote
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
                <span className="text-sm">200+ Walkthroughs Created</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">4K/8K Video Quality</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">VR-Ready Output</span>
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

      {/* What We Offer Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Services"
            title="3D Walkthrough Services We Offer" 
            subtitle="Multiple ways to experience your property virtually before it's built" 
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

      {/* Benefits Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Why 3D Walkthrough"
            title="Benefits of 3D Walkthrough for Your Project" 
            subtitle="How immersive virtual tours transform real estate marketing and client experience" 
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

      {/* Use Cases Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Perfect For"
            title="Who Uses 3D Walkthrough Videos" 
            subtitle="Industries and use cases where immersive walkthroughs deliver exceptional value" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-global p-6 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <useCase.icon size={28} className="text-primary" />
                </div>
                <h4 className="font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                  {useCase.title}
                </h4>
                <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Work"
            title="3D Walkthrough Portfolio" 
            subtitle="Featured projects from our collection of immersive virtual tours" 
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
                <div className="relative aspect-video">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play size={28} className="text-white ml-1" />
                    </div>
                  </div>
                  
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
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Process"
            title="How We Create Your 3D Walkthrough" 
            subtitle="A professional workflow from 3D model to cinematic walkthrough video" 
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
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Client Reviews"
            title="What Our Clients Say About Our Walkthroughs" 
            subtitle="Real feedback from real estate developers and homeowners who trusted our visualization services" 
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Common Questions"
            title="3D Walkthrough FAQs" 
            subtitle="Answers to frequently asked questions about our walkthrough video services" 
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
              Start Your Virtual Tour
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready for an Immersive Walkthrough Experience?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Create stunning 3D walkthrough videos that sell properties and impress clients. 
              <span className="block mt-2 text-primary font-semibold">Free consultation. VR-ready output. Multiple formats included.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary text-lg">
                  <Play size={18} className="mr-2" />
                  Get Walkthrough Quote
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
              🎬 VR-ready walkthroughs available. Perfect for NRI clients and remote buyers!
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
