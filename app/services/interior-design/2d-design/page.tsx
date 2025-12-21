"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PenTool, CheckCircle, ArrowRight, Phone, ArrowLeft, Star, FileText, Ruler, Lightbulb, ChevronDown, Grid, Layers } from "lucide-react";
import { useState } from "react";

const features = [
  { title: "Floor Plans & Layouts", description: "Detailed floor plans showing room dimensions, furniture placement, and traffic flow", icon: Grid, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=831" },
  { title: "Elevation Drawings", description: "Front, side, and rear views of your building design", icon: Layers, image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=818" },
  { title: "Section Drawings", description: "Cross-sectional views revealing interior details", icon: FileText, image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=831" },
  { title: "Electrical Plans", description: "Complete electrical layout including switches, outlets, and fixtures", icon: Lightbulb, image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=869" },
  { title: "Plumbing Plans", description: "Water supply and drainage system layouts", icon: PenTool, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=876" },
  { title: "Structural Drawings", description: "Beam, column, and foundation details for construction", icon: Ruler, image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=870" },
];

const processSteps = [
  { step: "01", title: "Requirement Gathering", description: "Understanding your needs and preferences" },
  { step: "02", title: "Concept Development", description: "Initial layout and space planning" },
  { step: "03", title: "Draft Design", description: "First set of 2D drawings" },
  { step: "04", title: "Client Review", description: "Feedback and revision" },
  { step: "05", title: "Final Delivery", description: "Complete drawing package" },
];

const stats = [
  { value: "500+", label: "Projects Designed" },
  { value: "48hrs", label: "Quick Turnaround" },
  { value: "AutoCAD", label: "Professional Tools" },
  { value: "100%", label: "Client Satisfaction" },
];

const pricing = [
  { title: "Basic Package", price: "₹5", unit: "per sq.ft", features: ["Floor Plan", "Basic Elevation", "Room Dimensions"], popular: false },
  { title: "Standard Package", price: "₹10", unit: "per sq.ft", features: ["Everything in Basic", "Section Drawings", "Electrical Layout", "Revisions Included"], popular: true },
  { title: "Premium Package", price: "₹15", unit: "per sq.ft", features: ["Everything in Standard", "Plumbing Plans", "Structural Drawings", "Unlimited Revisions"], popular: false },
];

const testimonials = [
  { name: "Ravi Teja", role: "Homeowner, Madhapur", rating: 5, text: "The 2D drawings were incredibly detailed. The electrical and plumbing plans saved us so much time during construction." },
  { name: "Kavitha Reddy", role: "Interior Designer", rating: 5, text: "I regularly partner with Dream Home for 2D plans. Their accuracy and quick delivery make them my go-to choice." },
];

const faqs = [
  { question: "What software do you use for 2D design?", answer: "We use AutoCAD 2024, the industry standard for architectural drawings. All files are delivered in DWG, PDF, and printed formats as needed." },
  { question: "How long does it take to complete 2D designs?", answer: "Basic floor plans take 2-3 days. Complete drawing packages including electrical and plumbing take 5-7 working days depending on project size." },
  { question: "Can I get revisions on the designs?", answer: "Yes, all packages include revisions. Basic includes 1 revision, Standard includes 2, and Premium includes unlimited revisions." },
  { question: "Do you provide printed copies?", answer: "Yes, we provide high-quality printed copies in various sizes (A0, A1, A2) along with digital files." },
  { question: "Can you work from a rough sketch?", answer: "Absolutely! We can develop professional 2D drawings from your rough sketches, site photos, or even verbal descriptions." },
];

const samples = [
  { title: "Residential Floor Plan", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=831", type: "Floor Plan" },
  { title: "Commercial Layout", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=869", type: "Layout" },
  { title: "Elevation Drawing", image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=818", type: "Elevation" },
  { title: "Section Details", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=870", type: "Section" },
];

export default function Design2DPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=831"
            alt="2D Design Services"
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
              <PenTool size={18} className="text-secondary" />
              <span className="text-secondary text-sm font-medium">2D Design Services</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional <span className="text-primary">2D</span> Architectural Drawings
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Detailed floor plans, elevations, and technical drawings that form the foundation of your construction project. Precision-engineered for flawless execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Free Quote <ArrowRight size={18} className="ml-2" />
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our 2D Design Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Comprehensive 2D drawing solutions for construction needs</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Design Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">A systematic approach to creating precision drawings</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Sample 2D Designs</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Examples of our professional 2D drawings</p>
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
                <div className="relative aspect-square">
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
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Choose a package that suits your needs</p>
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>
                )}
                <h3 className="font-heading text-xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="font-heading text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-white/60 text-sm"> {plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
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
            <p className="text-white/70 max-w-2xl mx-auto">What our clients say about our 2D design services</p>
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
            <p className="text-white/70 max-w-2xl mx-auto">Common questions about our 2D design services</p>
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
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Need Professional 2D Drawings?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get accurate and detailed 2D designs for your construction project. Quick turnaround guaranteed.
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
