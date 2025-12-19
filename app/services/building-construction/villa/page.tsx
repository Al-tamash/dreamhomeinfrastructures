"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building, CheckCircle, ArrowRight, Phone, ArrowLeft, Star, Clock, Shield, Award, Users, ChevronDown, TreePine, Sparkles } from "lucide-react";
import { useState } from "react";

const features = [
  { title: "Luxury Villas", description: "Spacious, elegant villas with premium finishes and modern amenities" },
  { title: "Farm Houses", description: "Rustic elegance combined with modern comforts for countryside living" },
  { title: "Weekend Homes", description: "Perfect getaway homes designed for relaxation and rejuvenation" },
  { title: "Resort-style Properties", description: "Vacation-home experience right at your doorstep" },
  { title: "Country Estates", description: "Sprawling properties with expansive outdoor spaces" },
  { title: "Garden Homes", description: "Homes designed around beautiful landscaping and gardens" },
];

const processSteps = [
  { step: "01", title: "Site Analysis", description: "Land survey and soil testing", icon: TreePine },
  { step: "02", title: "Custom Design", description: "Bespoke architectural design", icon: Sparkles },
  { step: "03", title: "Approvals", description: "Permits and clearances", icon: Shield },
  { step: "04", title: "Construction", description: "Premium quality construction", icon: Clock },
  { step: "05", title: "Finishing", description: "Luxury finishing and handover", icon: Award },
];

const projects = [
  { title: "Modern Villa - Jubilee Hills", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871", sqft: "6,500", type: "Villa" },
  { title: "Farm House - Shamirpet", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=870", sqft: "8,000", type: "Farm House" },
  { title: "Weekend Home - Yadagirigutta", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=875", sqft: "3,500", type: "Weekend Home" },
  { title: "Estate Property - Chevella", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870", sqft: "12,000", type: "Estate" },
];

const stats = [
  { value: "75+", label: "Luxury Villas Built" },
  { value: "25+", label: "Farm Houses" },
  { value: "Premium", label: "Quality Standards" },
  { value: "100%", label: "Client Satisfaction" },
];

const testimonials = [
  { name: "Vikram Malhotra", role: "Villa Owner, Jubilee Hills", rating: 5, text: "Our villa is beyond what we imagined. The attention to detail, the quality of materials, and the finishing - everything speaks luxury. Dream Home truly understands premium construction." },
  { name: "Anitha Rao", role: "Farm House Owner, Shamirpet", rating: 5, text: "Building a farm house was our dream, and Dream Home made it a reality. They understood the essence of countryside living while ensuring all modern comforts." },
];

const faqs = [
  { question: "What is the typical cost for villa construction?", answer: "Villa construction typically ranges from ₹2,500 to ₹5,000+ per sq.ft depending on specifications, materials, and luxury features chosen. Premium villas with imported materials can go higher." },
  { question: "How long does it take to build a villa?", answer: "A standard luxury villa takes 12-18 months. Complex designs with specialized features may take 18-24 months. Farm houses in remote locations may require additional time for infrastructure." },
  { question: "Do you handle interior design for villas?", answer: "Yes, we offer complete interior design services including furniture, fixtures, landscape design, and smart home integration as part of our turnkey solutions." },
  { question: "Can you build on agricultural land?", answer: "Yes, we handle farm house construction on agricultural land. We assist with all necessary permissions and ensure compliance with local regulations." },
  { question: "What premium features can be included?", answer: "We offer infinity pools, home theaters, wine cellars, smart home systems, landscaped gardens, guest cottages, and customized luxury features based on your preferences." },
];

const luxuryFeatures = [
  { title: "Swimming Pools", description: "Infinity pools, lap pools, and heated pools" },
  { title: "Smart Home", description: "Complete home automation systems" },
  { title: "Landscaping", description: "Professional garden and outdoor design" },
  { title: "Home Theater", description: "Premium audio-visual rooms" },
  { title: "Wine Cellar", description: "Temperature-controlled storage" },
  { title: "Outdoor Kitchen", description: "BBQ areas and entertainment spaces" },
];

export default function VillaConstructionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871"
            alt="Villa & Farm House Construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        </div>
        <div className="container-custom relative z-10">
          <Link href="/services/building-construction" className="inline-flex items-center gap-2 text-secondary hover:text-white mb-6 transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Building Construction</span>
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Building size={18} className="text-primary" />
              <span className="text-primary text-sm font-medium">Premium Construction</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Luxury <span className="text-primary">Villas</span> & Farm Houses
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Create your dream retreat with our premium villa and farmhouse construction services. Experience unparalleled craftsmanship, luxurious finishes, and bespoke designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Free Consultation <ArrowRight size={18} className="ml-2" />
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

      {/* What We Build Section */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Property Types We Build</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Luxurious villas and farmhouses designed for discerning homeowners</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="section-padding" style={{ background: '#000000' }}>
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Premium Luxury Features</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Elevate your villa with world-class amenities</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxuryFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-5 border border-white/10"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-white/60">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Premium Construction Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">A meticulous approach to building your dream retreat</p>
          </motion.div>
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
                  className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon size={28} className="text-white" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-primary/30 mb-2">{step.step}</div>
                  <h4 className="font-heading font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-white/60">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding" style={{ background: '#000000' }}>
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Luxury Projects</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Showcase of our premium villa and farm house constructions</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{project.type}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-primary text-sm">{project.sqft} sq.ft</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Happy Villa Owners</h2>
            <p className="text-white/70 max-w-2xl mx-auto">What our clients say about their dream homes</p>
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
      <section className="section-padding" style={{ background: '#000000' }}>
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Everything you need to know about villa construction</p>
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Build Your Dream Villa Today</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Let us create your perfect luxury retreat. Book a free consultation with our villa construction experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Free Consultation <ArrowRight size={18} className="ml-2" />
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
