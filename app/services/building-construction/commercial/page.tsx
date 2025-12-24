"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, CheckCircle, ArrowRight, Phone, ArrowLeft, Star, Clock, Shield, Award, Users, ChevronDown, Briefcase } from "lucide-react";
import { useState } from "react";

const features = [
  { title: "Office Buildings", description: "Modern corporate offices with smart building technology and efficient layouts", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=870" },
  { title: "Shopping Complexes", description: "Retail spaces designed to maximize footfall and customer experience", image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=870" },
  { title: "Industrial Buildings", description: "Heavy-duty construction for manufacturing and industrial operations", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=870" },
  { title: "Warehouses", description: "Large-scale storage facilities with logistics optimization", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=870" },
  { title: "Showrooms & Retail", description: "Eye-catching retail spaces that showcase your products", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=870" },
  { title: "Hotels & Restaurants", description: "Hospitality spaces designed for guest comfort and operational efficiency", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=870" },
];

const processSteps = [
  { step: "01", title: "Project Analysis", description: "Feasibility study and requirement analysis", icon: Briefcase },
  { step: "02", title: "Design Development", description: "Architectural and structural design", icon: Building2 },
  { step: "03", title: "Regulatory Approval", description: "Building permits and clearances", icon: Shield },
  { step: "04", title: "Construction", description: "Quality construction with timeline tracking", icon: Clock },
  { step: "05", title: "Handover", description: "Commissioning and documentation", icon: Award },
];

const projects = [
  { title: "Corporate Office - HITEC City", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=870", sqft: "75,000", type: "Office" },
  { title: "Shopping Mall - Gachibowli", image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=870", sqft: "1,50,000", type: "Retail" },
  { title: "Industrial Warehouse", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=870", sqft: "2,00,000", type: "Warehouse" },
  { title: "Hotel Building - Banjara Hills", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=870", sqft: "45,000", type: "Hotel" },
];

const stats = [
  { value: "150+", label: "Commercial Projects" },
  { value: "50L+", label: "Sq.Ft Constructed" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "30+", label: "Corporate Clients" },
];

const testimonials = [
  { name: "Arun Reddy", role: "CEO, TechCorp Solutions", rating: 5, text: "Dream Home Infrastructures delivered our new office building ahead of schedule. The quality of construction and attention to our specific requirements was exceptional." },
  { name: "Sunita Patel", role: "Director, Retail Ventures", rating: 5, text: "Our shopping complex was a massive project, and they handled it with utmost professionalism. Every deadline was met without compromising on quality." },
];

const faqs = [
  { question: "What types of commercial projects do you handle?", answer: "We handle all types of commercial construction including office buildings, shopping malls, warehouses, industrial facilities, hotels, hospitals, and educational institutions." },
  { question: "How do you ensure project timelines are met?", answer: "We use advanced project management tools, maintain buffer stocks of materials, and have dedicated teams for each project phase to ensure timely completion." },
  { question: "Do you handle turnkey commercial projects?", answer: "Yes, we offer complete turnkey solutions including design, construction, MEP works, interior fit-out, and facility management setup." },
  { question: "What safety standards do you follow?", answer: "We strictly adhere to IS codes, NBC guidelines, and international safety standards. Our sites are regularly audited for safety compliance." },
  { question: "Can you work with our preferred architects?", answer: "Absolutely. We collaborate with your architects and consultants while providing our construction expertise to bring their designs to life." },
];

const whyChoose = [
  { icon: Shield, title: "GHMC Licensed", description: "Fully licensed and compliant with all building regulations" },
  { icon: Clock, title: "On-Time Delivery", description: "Proven track record of meeting project deadlines" },
  { icon: Award, title: "Quality Assured", description: "ISO-certified quality management processes" },
  { icon: Users, title: "Expert Team", description: "Experienced engineers, architects, and project managers" },
];

export default function CommercialConstructionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/Indian_Luxury_Real_Estate_Video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent dark:from-dark/70 dark:via-dark/50 dark:to-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-dark/60 dark:via-transparent dark:to-dark/20" />
        </div>
        <div className="container-custom relative z-10">
          <Link href="/services/building-construction" className="inline-flex items-center gap-2 text-secondary hover:text-white mb-6 transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Building Construction</span>
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6">
              <Building2 size={18} className="text-secondary" />
              <span className="text-secondary text-sm font-medium">Commercial Construction</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build Your <span className="text-primary">Business</span> Infrastructure
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              From corporate offices to industrial facilities, we deliver commercial projects that meet modern business demands with innovative design and quality construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Project Quote <ArrowRight size={18} className="ml-2" />
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Commercial Spaces We Build</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Comprehensive commercial construction solutions for businesses of all sizes</p>
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
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{feature.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{feature.description}</p>
                </div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us for Commercial Projects</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Experience excellence in commercial construction</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-secondary" />
                </div>
                <h4 className="font-heading font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/60">{item.description}</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Construction Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">A systematic approach to delivering quality commercial projects</p>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-primary to-secondary transform -translate-y-1/2" />
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
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon size={28} className="text-white" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-secondary/30 mb-2">{step.step}</div>
                  <h4 className="font-heading font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-white/60">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Featured Commercial Projects</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Explore our portfolio of completed commercial projects</p>
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
                  <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">{project.type}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-secondary text-sm">{project.sqft} sq.ft</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-white/70 max-w-2xl mx-auto">What business owners say about working with us</p>
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
            <p className="text-white/70 max-w-2xl mx-auto">Common questions about commercial construction</p>
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
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Build Your Commercial Space?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Partner with us for your next commercial construction project. We deliver quality, on time, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Request Project Quote <ArrowRight size={18} className="ml-2" />
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
