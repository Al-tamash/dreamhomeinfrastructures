"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Box, CheckCircle, ArrowRight, Phone, ArrowLeft, Star, Eye, Sun, Home, Camera, ChevronDown, Layers, Palette } from "lucide-react";
import { useState } from "react";

const features = [
  { title: "Exterior 3D Views", description: "Stunning exterior perspectives showing your building from multiple angles", icon: Eye, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871" },
  { title: "Interior Perspectives", description: "Photorealistic interior views with furniture, lighting, and finishes", icon: Home, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800" },
  { title: "Bird's Eye View", description: "Aerial perspectives showing your property in its surroundings", icon: Camera, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870" },
  { title: "Day & Night Renders", description: "See how your building looks during day and illuminated at night", icon: Sun, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=875" },
  { title: "Material Visualization", description: "Compare different materials, textures, and color schemes", icon: Palette, image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=880" },
  { title: "Isometric Views", description: "Technical isometric views for better spatial understanding", icon: Layers, image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=870" },
];

const processSteps = [
  { step: "01", title: "Blueprint Analysis", description: "Review your architectural drawings" },
  { step: "02", title: "3D Modeling", description: "Create detailed 3D model" },
  { step: "03", title: "Texturing", description: "Apply materials and textures" },
  { step: "04", title: "Lighting Setup", description: "Professional lighting design" },
  { step: "05", title: "Final Render", description: "High-resolution output" },
];

const stats = [
  { value: "1000+", label: "Perspectives Delivered" },
  { value: "8K", label: "Resolution Quality" },
  { value: "48hrs", label: "Fast Delivery" },
  { value: "100%", label: "Client Satisfaction" },
];

const samples = [
  { title: "Modern Villa Exterior", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871", type: "Exterior" },
  { title: "Luxury Living Room", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800", type: "Interior" },
  { title: "Commercial Building", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=870", type: "Commercial" },
  { title: "Premium Bedroom", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=880", type: "Interior" },
];

const testimonials = [
  { name: "Anil Sharma", role: "Real Estate Developer", rating: 5, text: "The 3D perspectives helped us pre-sell 80% of our apartments before construction. The quality is indistinguishable from photographs!" },
  { name: "Meenakshi Devi", role: "Homeowner, Banjara Hills", rating: 5, text: "Seeing our dream home in 3D before construction gave us complete confidence. We made all design decisions without any doubt." },
];

const faqs = [
  { question: "What is a 3D perspective view?", answer: "A 3D perspective is a photorealistic image that shows how your building or interior will look when completed. It provides a realistic view with proper lighting, materials, and landscaping." },
  { question: "What files do you need from us?", answer: "We need architectural drawings (floor plans, elevations), and your preferences for materials, colors, and furniture styles. Reference images are helpful but not mandatory." },
  { question: "How long does it take to create 3D perspectives?", answer: "A single exterior view takes 2-3 working days. Interior perspectives take 1-2 days each. Complete project visualization takes 5-7 days depending on complexity." },
  { question: "What resolution are the final images?", answer: "We deliver 4K resolution as standard (3840x2160). We can also provide 8K resolution on request, perfect for large format prints and marketing materials." },
  { question: "Can I request changes?", answer: "Absolutely! We include 2 revision rounds in our standard package. You can request changes to angles, materials, lighting, and furniture placement." },
];

const benefits = [
  { title: "Visualize Before Building", description: "See your project before spending on construction" },
  { title: "Powerful Marketing", description: "Sell properties faster with stunning visuals" },
  { title: "Better Decisions", description: "Compare options and choose with confidence" },
  { title: "Impress Clients", description: "Professional presentations that wow" },
];

export default function Perspective3DPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871"
            alt="3D Perspective Services"
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
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6">
              <Box size={18} className="text-secondary" />
              <span className="text-secondary text-sm font-medium">3D Visualization</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Photorealistic <span className="text-primary">3D Perspective</span> Views
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              See your future building in stunning 3D before construction begins. Our photorealistic perspectives help you visualize, decide, and market with confidence.
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
      <section className="py-12 bg-secondary/10 border-y border-white/10">
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
                <div className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our 3D Perspective Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Comprehensive 3D visualization for every type of project</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[280px] rounded-2xl overflow-hidden border border-white/10 hover:border-secondary/50 transition-all duration-300"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{feature.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{feature.description}</p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Why Choose 3D Perspectives</h2>
            <p className="text-white/70 max-w-2xl mx-auto">The power of visualization for your projects</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-secondary" />
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
            <p className="text-white/70 max-w-2xl mx-auto">Stunning perspectives from our recent projects</p>
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
                  <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">{sample.type}</div>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our 3D Creation Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">From blueprints to stunning visuals</p>
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
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">{step.step}</div>
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
            <p className="text-white/70 max-w-2xl mx-auto">What our clients say about our 3D services</p>
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
                    <Star key={i} size={18} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="font-heading font-bold text-white">{testimonial.name}</div>
                  <div className="text-secondary text-sm">{testimonial.role}</div>
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
            <p className="text-white/70 max-w-2xl mx-auto">Common questions about 3D perspectives</p>
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
                  <ChevronDown size={20} className={`text-secondary flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
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
      <section className="py-24 bg-gradient-to-r from-secondary/20 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/50" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Visualize Your Project?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get stunning 3D perspectives that bring your vision to life. Perfect for decision-making and marketing.
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
