"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video, CheckCircle, ArrowRight, Phone, ArrowLeft, Star, Play, Rotate3D, Eye, ChevronDown, Compass, Monitor } from "lucide-react";
import { useState } from "react";

const features = [
  { title: "Virtual Tours", description: "Interactive virtual tours that let viewers explore every corner at their own pace", icon: Compass },
  { title: "Animated Walkthroughs", description: "Cinematic video tours with smooth camera movements through your space", icon: Video },
  { title: "Interactive Presentations", description: "Clickable hotspots for detailed information about design elements", icon: Monitor },
  { title: "360° Views", description: "Panoramic views from every room for complete spatial understanding", icon: Rotate3D },
  { title: "Fly-through Videos", description: "Aerial views and dramatic fly-through sequences of your property", icon: Play },
  { title: "VR Ready Experiences", description: "Walkthroughs compatible with VR headsets for immersive experience", icon: Eye },
];

const processSteps = [
  { step: "01", title: "3D Model Setup", description: "Building the complete 3D environment" },
  { step: "02", title: "Path Planning", description: "Designing the walkthrough route" },
  { step: "03", title: "Animation", description: "Creating smooth camera movements" },
  { step: "04", title: "Rendering", description: "High-quality video rendering" },
  { step: "05", title: "Post Production", description: "Music, effects & final polish" },
];

const stats = [
  { value: "200+", label: "Walkthroughs Created" },
  { value: "4K/8K", label: "Video Quality" },
  { value: "60fps", label: "Smooth Animation" },
  { value: "VR", label: "Ready Output" },
];

const pricing = [
  { title: "Basic Walkthrough", price: "₹15,000", unit: "per project", features: ["2-3 Minute Video", "1080p Quality", "Background Music", "Standard Transitions"], popular: false },
  { title: "Premium Walkthrough", price: "₹30,000", unit: "per project", features: ["3-5 Minute Video", "4K Ultra HD", "Custom Music", "Day & Night Scenes", "2 Revisions"], popular: true },
  { title: "Complete Experience", price: "₹50,000", unit: "per project", features: ["5+ Minute Video", "8K Quality", "VR Compatible", "360° Panoramas", "Unlimited Revisions"], popular: false },
];

const samples = [
  { title: "Luxury Villa Tour", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=870", type: "Villa" },
  { title: "Apartment Complex", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=870", type: "Apartment" },
  { title: "Office Space Tour", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=869", type: "Commercial" },
  { title: "Resort Walkthrough", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=870", type: "Hospitality" },
];

const testimonials = [
  { name: "Mahesh Rao", role: "Real Estate Developer", rating: 5, text: "The walkthrough videos helped us sell 70% of our apartments before construction even started. An incredible marketing tool!" },
  { name: "Lakshmi Devi", role: "Homeowner, Gachibowli", rating: 5, text: "Walking through our future home in VR was magical. My whole family could experience the space together before making decisions." },
];

const faqs = [
  { question: "What is a 3D walkthrough video?", answer: "A 3D walkthrough is an animated video that takes viewers on a virtual tour through your space. It simulates the experience of physically walking through the building, showing every room and detail." },
  { question: "How long is a typical walkthrough video?", answer: "Most walkthrough videos are 2-5 minutes long. Larger properties like commercial complexes or townships may have longer videos of 5-10 minutes with multiple segments." },
  { question: "Can I use the walkthrough for marketing?", answer: "Absolutely! Walkthrough videos are excellent marketing tools for real estate. We provide social media optimized versions, website embeds, and high-quality files for presentations." },
  { question: "What is the difference between walkthrough and 360° tour?", answer: "A walkthrough is a pre-recorded video with a set path, while a 360° tour allows viewers to freely look around in all directions at specific points. We offer both options." },
  { question: "Do you provide VR-ready walkthroughs?", answer: "Yes, our Premium and Complete packages include VR-compatible output. Viewers can experience your space using VR headsets like Oculus Quest or HTC Vive." },
];

const useCases = [
  { title: "Pre-Sales Marketing", description: "Sell properties before construction begins", icon: Video },
  { title: "Client Presentations", description: "Impress clients with immersive experiences", icon: Monitor },
  { title: "Design Validation", description: "Experience spaces before finalizing", icon: Eye },
  { title: "Remote Viewing", description: "Show properties to clients anywhere", icon: Compass },
];

export default function WalkthroughPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=870"
            alt="3D Walkthrough Services"
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
              <Video size={18} className="text-secondary" />
              <span className="text-secondary text-sm font-medium">3D Walkthrough</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Immersive <span className="text-primary">3D Walkthrough</span> Videos
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Experience your future space with cinematic 3D walkthrough videos. Walk through every room, explore every detail, and feel the space before it&apos;s built.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Play size={18} className="mr-2" /> Get Walkthrough Quote
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Walkthrough Services We Offer</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Multiple ways to experience your space virtually</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/50 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding" style={{ background: '#000000' }}>
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Perfect For Every Purpose</h2>
            <p className="text-white/70 max-w-2xl mx-auto">How 3D walkthroughs add value to your project</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon size={24} className="text-secondary" />
                </div>
                <h4 className="font-heading font-bold text-white mb-2">{useCase.title}</h4>
                <p className="text-sm text-white/60">{useCase.description}</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Walkthrough Portfolio</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Featured projects from our 3D walkthrough collection</p>
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
                <div className="relative aspect-video">
                  <Image src={sample.image} alt={sample.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center">
                      <Play size={28} className="text-white ml-1" />
                    </div>
                  </div>
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
      <section className="section-padding" style={{ background: '#000000' }}>
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Production Process</h2>
            <p className="text-white/70 max-w-2xl mx-auto">From 3D model to cinematic walkthrough</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Walkthrough Packages</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Professional walkthrough videos at competitive prices</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border ${plan.popular ? 'border-secondary' : 'border-white/10'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>
                )}
                <h3 className="font-heading text-xl font-bold text-white mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="font-heading text-4xl font-bold text-secondary">{plan.price}</span>
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
                  <Button className={`w-full ${plan.popular ? 'bg-secondary hover:bg-secondary/90' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ background: '#000000' }}>
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-white/70 max-w-2xl mx-auto">What our clients say about our walkthrough services</p>
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
            <p className="text-white/70 max-w-2xl mx-auto">Common questions about 3D walkthroughs</p>
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready for an Immersive Experience?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Create stunning walkthrough videos that bring your vision to life. Perfect for marketing and client presentations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Play size={18} className="mr-2" /> Get Walkthrough Quote
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
