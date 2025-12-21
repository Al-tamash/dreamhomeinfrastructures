"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Box, CheckCircle, ArrowRight, Phone, ArrowLeft, Star, Eye, Palette, Zap, ChevronDown, Sun, Home } from "lucide-react";
import { useState } from "react";

const features = [
  { title: "Photorealistic 3D Rendering", description: "Ultra-realistic visuals that look like actual photographs of your space", icon: Eye, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800" },
  { title: "Interior Visualization", description: "See every room with furniture, lighting, and decorations in 3D", icon: Home, image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=880" },
  { title: "Exterior Visualization", description: "View your building from all angles with surrounding landscaping", icon: Sun, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871" },
  { title: "Material Mapping", description: "Visualize different materials, textures, and finishes before selection", icon: Palette, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=870" },
  { title: "Lighting Simulation", description: "See how natural and artificial light affects your space", icon: Zap, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870" },
  { title: "Multiple Angle Views", description: "Explore your design from every perspective and corner", icon: Box, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=875" },
];

const processSteps = [
  { step: "01", title: "2D Plans Review", description: "Analyzing your floor plans" },
  { step: "02", title: "3D Modeling", description: "Creating the base 3D model" },
  { step: "03", title: "Material & Texture", description: "Applying finishes and textures" },
  { step: "04", title: "Lighting Setup", description: "Setting up realistic lighting" },
  { step: "05", title: "Final Render", description: "High-resolution output" },
];

const stats = [
  { value: "1000+", label: "Renders Delivered" },
  { value: "4K", label: "Resolution Quality" },
  { value: "3-5", label: "Days Turnaround" },
  { value: "100%", label: "Satisfaction Rate" },
];

const pricing = [
  { title: "Basic Render", price: "₹2,500", unit: "per view", features: ["Single View Render", "Standard Resolution", "Basic Lighting", "1 Revision"], popular: false },
  { title: "Room Package", price: "₹8,000", unit: "per room", features: ["3 View Renders", "4K Resolution", "Advanced Lighting", "Material Options", "2 Revisions"], popular: true },
  { title: "Complete Home", price: "₹25,000", unit: "onwards", features: ["All Rooms Covered", "Exterior Views", "Multiple Angles", "Premium Quality", "Unlimited Revisions"], popular: false },
];

const samples = [
  { title: "Modern Living Room", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800", type: "Interior" },
  { title: "Luxury Bedroom", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=880", type: "Interior" },
  { title: "Kitchen Design", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=870", type: "Interior" },
  { title: "Villa Exterior", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871", type: "Exterior" },
];

const testimonials = [
  { name: "Suresh Babu", role: "Homeowner, HITEC City", rating: 5, text: "The 3D renders were so realistic that I could make design decisions with complete confidence. It was like seeing my future home before construction!" },
  { name: "Priyanka", role: "Real Estate Developer", rating: 5, text: "We use Dream Home's 3D visualization for all our projects. It helps us pre-sell apartments and makes client presentations powerful." },
];

const faqs = [
  { question: "How realistic are the 3D renders?", answer: "Our renders are photorealistic quality using industry-leading software like 3ds Max and V-Ray. Most clients cannot distinguish our renders from actual photographs." },
  { question: "What do I need to provide for 3D design?", answer: "We need your 2D floor plans, elevation drawings, and your preferences for materials, colors, and furniture styles. Reference images help too." },
  { question: "How long does 3D visualization take?", answer: "A single room takes 3-5 working days. Complete home visualization with multiple views takes 7-14 days depending on complexity." },
  { question: "Can I make changes after seeing the 3D design?", answer: "Absolutely! Our packages include revisions. You can change materials, furniture, colors, and layouts until you're satisfied." },
  { question: "What formats do you deliver?", answer: "We deliver high-resolution JPEG and PNG images. We also provide PDF presentations for easy sharing with family or contractors." },
];

const benefits = [
  { title: "Avoid Costly Mistakes", description: "See potential issues before construction begins" },
  { title: "Easy Material Selection", description: "Compare different finishes side by side" },
  { title: "Better Communication", description: "Show contractors exactly what you want" },
  { title: "Impress Stakeholders", description: "Professional presentations for approvals" },
];

export default function Design3DPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800"
            alt="3D Design Services"
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
              <Box size={18} className="text-primary" />
              <span className="text-primary text-sm font-medium">3D Visualization</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Stunning <span className="text-primary">3D</span> Visualization
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              See your dream space come to life with photorealistic 3D renderings. Experience every detail before construction begins and make design decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get 3D Quote <ArrowRight size={18} className="ml-2" />
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our 3D Design Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Comprehensive 3D visualization for interior and exterior spaces</p>
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
                {/* Background Image */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{feature.description}</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Why 3D Visualization Matters</h2>
            <p className="text-white/70 max-w-2xl mx-auto">The advantages of seeing your space before building</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our 3D Portfolio</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Photorealistic renders from our recent projects</p>
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
                View Full Portfolio <ArrowRight size={16} className="ml-2" />
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our 3D Design Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">From 2D plans to stunning 3D visualization</p>
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

      {/* Pricing */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Affordable 3D Pricing</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Transparent pricing for every budget</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border ${plan.popular ? 'border-primary' : 'border-white/10'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">Best Value</div>
                )}
                <h3 className="font-heading text-xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="font-heading text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-white/60 text-sm"> {plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-white/70 max-w-2xl mx-auto">What our clients say about our 3D design services</p>
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
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Common questions about 3D visualization</p>
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
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Visualize Your Dream Space?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get stunning 3D renders that bring your vision to life. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Free Quote <ArrowRight size={18} className="ml-2" />
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
