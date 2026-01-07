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
  TreePine, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  ArrowLeft, 
  ChevronDown,
  Shield,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Clock,
  Ruler,
  FileText,
  Hammer,
  ClipboardCheck,
  Lightbulb,
  Target,
  Sun,
  Leaf,
  Mountain,
  Droplets,
  Car,
  Fence,
  Home
} from "lucide-react";

// Farm Land Development Services
const services = [
  { 
    title: "Agricultural Layout Development", 
    description: "Convert large agricultural holdings into individual farm plots with proper boundaries, roads, and shared amenities.",
    icon: TreePine,
    image: "/farm-development/farm_agricultural_layout.png"
  },
  { 
    title: "Farm House Plot Development", 
    description: "Develop scenic land into weekend farm house plots with road access, water source, and fencing infrastructure.",
    icon: Home,
    image: "/farm-development/beautiful_photograph_of_a_luxury_weekend_farmhouse.jpeg"
  },
  { 
    title: "Land Survey & Demarcation", 
    description: "Professional land survey, plot marking with boundary stones, and clear demarcation of individual holdings.",
    icon: Ruler,
    image: "/farm-development/professional_photograph_of_indian_surveyors_using_theodolite.jpeg"
  },
  { 
    title: "Infrastructure Development", 
    description: "Build approach roads, bore wells, fencing, compound walls, and basic amenities for farm layouts.",
    icon: Hammer,
    image: "/farm-development/farm_infrastructure.png"
  },
  { 
    title: "Documentation & Approvals", 
    description: "Handle all agricultural land documentation, mutations, and required approvals for plot subdivision.",
    icon: FileText,
    image: "/farm-development/farm_documentation.png"
  },
  { 
    title: "Managed Farm Projects", 
    description: "Create managed farm communities with shared caretakers, equipment, and agricultural support services.",
    icon: Award,
    image: "/farm-development/beautiful_golden_hour_photograph_of_a_managed.jpeg"
  },
];

// Why Choose Us for Farm Development
const benefits = [
  { 
    icon: Shield, 
    title: "15+ Years Experience", 
    description: "Deep expertise in agricultural land development across Hyderabad's scenic outskirts." 
  },
  { 
    icon: Mountain, 
    title: "Scenic Locations", 
    description: "We specialize in developing land in beautiful countryside settings with hills, lakes, and greenery." 
  },
  { 
    icon: Droplets, 
    title: "Water Source Planning", 
    description: "Every layout includes proper water infrastructure - bore wells, sumps, and irrigation systems." 
  },
  { 
    icon: TrendingUp, 
    title: "Maximize Land Value", 
    description: "Professional development increases your land value by 3-5x compared to undeveloped agricultural land." 
  },
  { 
    icon: Clock, 
    title: "Efficient Execution", 
    description: "Streamlined process with proper planning ensures timely completion without delays." 
  },
  { 
    icon: Users, 
    title: "End-to-End Support", 
    description: "From site assessment to final handover, we manage all aspects of farm land development." 
  },
];

// Development Process
const processSteps = [
  { 
    step: "01", 
    title: "Site Assessment", 
    description: "We visit your land, assess water potential, soil, and development feasibility.",
    icon: MapPin
  },
  { 
    step: "02", 
    title: "Layout Design", 
    description: "Professional layout planning with plots, roads, and common areas.",
    icon: Ruler
  },
  { 
    step: "03", 
    title: "Documentation", 
    description: "Handle all surveys, mutations, and subdivision documentation.",
    icon: FileText
  },
  { 
    step: "04", 
    title: "Water Infrastructure", 
    description: "Bore well drilling, sumps, and irrigation planning for the layout.",
    icon: Droplets
  },
  { 
    step: "05", 
    title: "Roads & Fencing", 
    description: "Approach roads, internal paths, boundary walls, and fencing work.",
    icon: Hammer
  },
  { 
    step: "06", 
    title: "Handover", 
    description: "Complete developed farm layout handover with all documents.",
    icon: Award
  },
];

// Stats data
const stats = [
  { value: 500, suffix: "+", label: "Acres Developed" },
  { value: 200, suffix: "+", label: "Farm Layouts" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

// Infrastructure We Develop
const infrastructure = [
  { icon: Car, name: "Approach Roads" },
  { icon: Droplets, name: "Bore Wells" },
  { icon: TreePine, name: "Tree Plantation" },
  { icon: Sun, name: "Fencing" },
  { icon: Home, name: "Compound Walls" },
  { icon: MapPin, name: "Boundary Stones" },
];

// Documents We Handle
const documents = [
  "Land Survey & Mapping",
  "Mutation Certificate",
  "Pattadar Passbook",
  "Adangal & Pahani",
  "Village Map Extract",
  "Subdivision Records",
  "Water Rights Documentation",
  "Access Road Permissions",
];

// Who Benefits
const useCases = [
  { 
    icon: Users, 
    title: "Agricultural Land Owners", 
    description: "Convert large agricultural holdings into individual farm plots for higher returns." 
  },
  { 
    icon: Mountain, 
    title: "Scenic Land Owners", 
    description: "Develop hillside or lakeside land into premium weekend farm house plots." 
  },
  { 
    icon: Target, 
    title: "NRIs & Investors", 
    description: "Develop inherited or invested farm land professionally without being present." 
  },
  { 
    icon: Lightbulb, 
    title: "Joint Ventures", 
    description: "Partner with us for development costs and share proceeds from plot sales." 
  },
];

// Testimonials
const testimonials = [
  { 
    name: "Prasad Rao", 
    role: "Land Owner, Chevella", 
    rating: 5, 
    content: "Had 20 acres of agricultural land that was lying unused. Dream Home converted it into 40 beautiful farm plots with roads, bore wells, and fencing. Each plot now sells for 4x what the raw land was worth!" 
  },
  { 
    name: "Kavitha Reddy", 
    role: "NRI, United States", 
    rating: 5, 
    content: "My family land in Shankarpally needed development but I couldn't be there. Dream Home handled everything - surveys, documentation, infrastructure. The quality of work exceeded my expectations." 
  },
  { 
    name: "Ahmed Khan", 
    role: "Investor, Hyderabad", 
    rating: 5, 
    content: "We partnered with Dream Home on a 15-acre farm layout project near Moinabad. Their professionalism in planning bore wells, roads, and fencing was impressive. All plots sold within months!" 
  },
];

// FAQs - Focused on Development Services
const faqs = [
  { 
    question: "What is farm land development and how does it work?", 
    answer: "Farm land development involves converting large agricultural holdings into individual farm plots with proper infrastructure. The process includes land survey, plot demarcation, approach road construction, bore well drilling, fencing, and documentation. This significantly increases the land's value and makes it attractive for buyers looking for weekend farms or investment." 
  },
  { 
    question: "What type of land can be developed into farm plots?", 
    answer: "Agricultural land, patta land, and scenic land (near hills, lakes, greenery) around Hyderabad are ideal for farm plot development. The land should have clear titles, potential for water source, and reasonable access from main roads. We assess your land's development potential during our initial site visit." 
  },
  { 
    question: "How long does farm land development take?", 
    answer: "Typical farm layout development takes 4-8 months depending on size and infrastructure requirements. Survey and documentation takes 1-2 months, bore well and water infrastructure 1 month, roads and fencing 2-3 months. We provide a detailed timeline during project planning." 
  },
  { 
    question: "What are the costs involved in farm land development?", 
    answer: "Development costs include survey charges, bore well drilling, road construction, fencing, boundary stones, and documentation. Costs vary based on land size, terrain, and infrastructure specifications. We provide a detailed estimate after site assessment. The investment is worthwhile as developed plots typically sell for 3-5x raw land value." 
  },
  { 
    question: "Do you help NRIs develop their agricultural land?", 
    answer: "Yes! We have extensive experience working with NRI landowners. We handle the entire process through Power of Attorney - surveys, documentation, infrastructure work. We provide regular video/photo updates and share all documents digitally. Many of our clients are NRIs developing inherited or invested land." 
  },
  { 
    question: "What is the joint venture model for farm development?", 
    answer: "For landowners who don't want to invest in development costs, we offer joint venture partnerships. We invest in the development (roads, bore wells, fencing, marketing), and proceeds from plot sales are shared as per agreed terms. This is ideal for landowners with prime scenic land but limited capital." 
  },
];

export default function FarmPlotsPage() {
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
            href="/services/plotting-venture" 
            className="inline-flex items-center gap-2 text-secondary hover:text-primary mb-6 transition-colors duration-200 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Plotting Services</span>
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            {/* Service Badge */}
            <div className="trust-badge mb-6">
              <TreePine size={18} className="text-primary" />
              <span className="text-white text-sm font-medium">Farm Land Development Services Near Hyderabad</span>
            </div>

            {/* Main Headline - SEO Optimized */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-primary">Farm Plot</span> Development & Layout Services
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Transform your agricultural land into developed farm plots with roads, water infrastructure, 
              and fencing. We handle everything from surveys to infrastructure for landowners 
              across Chevella, Shankarpally, Moinabad, and scenic areas around Hyderabad.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "Land Survey & Demarcation",
                "Bore Well & Water",
                "Roads & Fencing",
                "Complete Documentation"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/70">
                  <CheckCircle size={18} className="text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary">
                  Get Free Site Assessment 
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
                <span className="text-sm">500+ Acres Developed</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">200+ Farm Layouts</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">Scenic Locations</span>
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
            title="Farm Land Development Services" 
            subtitle="Comprehensive solutions to convert agricultural land into developed farm plots" 
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

      {/* Why Choose Us Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Why Dream Home"
            title="Why Landowners Trust Us for Farm Development" 
            subtitle="15+ years of experience developing scenic agricultural land around Hyderabad" 
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

      {/* Who Benefits Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Who We Serve"
            title="Who Benefits from Farm Development Services" 
            subtitle="We work with agricultural landowners, investors, and NRIs to maximize land value" 
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

      {/* Development Process Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Our Process"
            title="How We Develop Your Farm Land" 
            subtitle="A transparent process from raw agricultural land to developed farm plots" 
          />
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-global p-5 text-center group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={24} className="text-white" />
                  </div>
                  <div className="font-heading text-2xl font-bold text-primary/30 mb-2">{step.step}</div>
                  <h4 className="font-heading text-sm font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h4>
                  <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-white/10">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Infrastructure We Develop</h3>
            <p className="text-white/60">Complete farm layout infrastructure for every project</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {infrastructure.map((item, index) => (
              <motion.div 
                key={item.name} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.4, delay: index * 0.05 }} 
                viewport={{ once: true }} 
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/10 hover:border-primary/30 transition-colors duration-200"
              >
                <item.icon size={18} className="text-primary" />
                <span className="text-white font-medium">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="section-gap bg-tertiary">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Documentation"
            title="Documentation & Approvals We Handle" 
            subtitle="Complete land documentation and survey work for your farm layout" 
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <motion.div 
                key={doc} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.05 }} 
                viewport={{ once: true }} 
                className="card-global p-4 group"
              >
                <div className="flex items-center gap-3">
                  <Leaf size={20} className="text-primary flex-shrink-0" />
                  <span className="text-white text-sm group-hover:text-primary transition-colors duration-200">{doc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-gap bg-dark-200">
        <div className="container-custom">
          <SectionHeading 
            eyebrow="Client Stories"
            title="What Landowners Say About Our Farm Development" 
            subtitle="Real feedback from landowners who trusted us to develop their properties" 
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
            title="Farm Land Development FAQs" 
            subtitle="Answers to frequently asked questions about our farm development services" 
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
              Start Your Farm Development
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Have Agricultural Land? Let's Develop It Together
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get a free site assessment and farm development consultation. We'll evaluate your land's 
              potential and provide a detailed development plan.
              <span className="block mt-2 text-primary font-semibold">No obligation. Free site visit.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-global-primary text-lg">
                  Book Free Site Assessment 
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
              🌳 Joint venture and revenue-sharing available for scenic agricultural land.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
