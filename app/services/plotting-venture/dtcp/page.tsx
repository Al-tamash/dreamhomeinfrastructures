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
  FileCheck, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  ArrowLeft, 
  ChevronDown,
  Shield,
  MapPin,
  Building,
  TrendingUp,
  Home,
  Car,
  Droplets,
  Zap,
  TreePine,
  Users,
  Award,
  Clock,
  Ruler,
  FileText,
  Hammer,
  ClipboardCheck,
  Lightbulb,
  Target
} from "lucide-react";

// DTCP Layout Development Services
const services = [
  { 
    title: "DTCP Layout Approval", 
    description: "Complete assistance in obtaining DTCP layout sanctions for your land in Telangana's panchayat and municipality areas.",
    icon: FileCheck,
    image: "/dtcp-development/dtcp_layout_approval.png"
  },
  { 
    title: "Land Survey & Planning", 
    description: "Professional land survey, plot demarcation, road planning, and layout design as per DTCP norms and regulations.",
    icon: Ruler,
    image: "/dtcp-development/dtcp_land_survey.png"
  },
  { 
    title: "Infrastructure Development", 
    description: "Complete infrastructure including roads, drainage, water lines, electricity, and boundary walls as per DTCP standards.",
    icon: Building,
    image: "/dtcp-development/dtcp_infrastructure.png"
  },
  { 
    title: "Document Processing", 
    description: "Expert handling of all legal documentation, LP number registration, and government approvals for your DTCP layout.",
    icon: FileText,
    image: "/dtcp-development/dtcp_document_processing.png"
  },
  { 
    title: "Plot Demarcation", 
    description: "Precise plot marking with boundary stones, access roads, and clear measurements for individual plots.",
    icon: MapPin,
    image: "/dtcp-development/dtcp_plot_demarcation.png"
  },
  { 
    title: "Turnkey Development", 
    description: "End-to-end layout development from raw land to DTCP-approved, infrastructure-ready plots in Telangana.",
    icon: Award,
    image: "/dtcp-development/dtcp_turnkey_development.png"
  },
];

// Why Choose Us for DTCP Development
const benefits = [
  { 
    icon: Shield, 
    title: "15+ Years DTCP Experience", 
    description: "Deep expertise in navigating DTCP regulations across Telangana's municipalities and panchayat areas." 
  },
  { 
    icon: Clock, 
    title: "Faster Approvals", 
    description: "Strong relationships with local authorities help expedite layout sanctions and minimize delays." 
  },
  { 
    icon: FileCheck, 
    title: "100% Compliance Guaranteed", 
    description: "All layouts developed strictly as per DTCP town planning rules and zoning regulations." 
  },
  { 
    icon: Hammer, 
    title: "Quality Infrastructure", 
    description: "Well-constructed roads, proper drainage, and reliable utilities that meet DTCP standards." 
  },
  { 
    icon: TrendingUp, 
    title: "Maximize Land Value", 
    description: "Professional development increases your land value by 3-5x compared to raw agricultural land." 
  },
  { 
    icon: Users, 
    title: "End-to-End Support", 
    description: "From initial consultation to final handover, we handle everything so you don't have to worry." 
  },
];

// Development Process
const processSteps = [
  { 
    step: "01", 
    title: "Site Inspection", 
    description: "We visit your land, assess feasibility, and provide development recommendations.",
    icon: MapPin
  },
  { 
    step: "02", 
    title: "Layout Planning", 
    description: "Professional architects design the layout with roads, plots, and open spaces.",
    icon: Ruler
  },
  { 
    step: "03", 
    title: "DTCP Submission", 
    description: "Complete documentation and application submission to DTCP for layout approval.",
    icon: FileText
  },
  { 
    step: "04", 
    title: "Approval & LP Number", 
    description: "Obtain DTCP sanction, LP number, and all necessary government approvals.",
    icon: ClipboardCheck
  },
  { 
    step: "05", 
    title: "Infrastructure Work", 
    description: "Roads, drainage, water, electricity, and boundary construction as per plan.",
    icon: Hammer
  },
  { 
    step: "06", 
    title: "Handover", 
    description: "Complete developed layout handover with all documents and registrations.",
    icon: Award
  },
];



// What We Develop (Infrastructure)
const infrastructure = [
  { icon: Car, name: "30ft & 40ft Roads" },
  { icon: Droplets, name: "Drainage System" },
  { icon: Zap, name: "Electricity Lines" },
  { icon: TreePine, name: "Avenue Plantation" },
  { icon: Home, name: "Compound Wall" },
  { icon: MapPin, name: "Entry Gate & Parks" },
];

// Documents We Handle
const documents = [
  "DTCP Layout Application",
  "LP Number Registration",
  "Sanction Plan Approval",
  "NOCs from Departments",
  "Mutation & Pattadar Passbook",
  "Road Cutting Permission",
  "Water & Electricity Connection",
  "Panchayat Approvals",
];

// Who Benefits
const useCases = [
  { 
    icon: Users, 
    title: "Land Owners", 
    description: "Convert your agricultural or vacant land in Telangana into valuable DTCP-approved plots." 
  },
  { 
    icon: Building, 
    title: "Real Estate Developers", 
    description: "Partner with us for layout development while you focus on sales and marketing." 
  },
  { 
    icon: Target, 
    title: "Investors & NRIs", 
    description: "Develop your land holdings professionally without being physically present." 
  },
  { 
    icon: Lightbulb, 
    title: "Joint Ventures", 
    description: "Explore revenue-sharing models where we develop your land and share the proceeds." 
  },
];

// Testimonials
const testimonials = [
  { 
    name: "Suresh Goud", 
    role: "Land Owner, Sangareddy", 
    rating: 5, 
    content: "I had 8 acres near Sangareddy that I didn't know how to develop. Dream Home converted it into 35 DTCP-approved plots. The value increased 4x and now I'm selling plots at premium prices!" 
  },
  { 
    name: "Priya Reddy", 
    role: "NRI, Dubai", 
    rating: 5, 
    content: "Living abroad, I was worried about developing my inherited land. Dream Home managed everything from DTCP approval to infrastructure. They sent regular updates and all documentation was perfect." 
  },
  { 
    name: "Kiran Kumar", 
    role: "Developer, Chevella", 
    rating: 5, 
    content: "We partnered with Dream Home for DTCP development on our 15-acre land. Their quality of work and knowledge of local regulations was impressive. All approvals came through smoothly." 
  },
];

// FAQs - Focused on Development Services
const faqs = [
  { 
    question: "What is DTCP layout development and how is it different from HMDA?", 
    answer: "DTCP (Directorate of Town and Country Planning) covers areas outside HMDA limits in Telangana - typically panchayat and municipality areas. DTCP development involves converting raw land into approved residential or commercial plots with proper infrastructure. While HMDA applies to Hyderabad Metropolitan Area, DTCP applies to the rest of Telangana. We handle both types of approvals." 
  },
  { 
    question: "What type of land can be developed into DTCP layout?", 
    answer: "Agricultural land, patta land, and vacant land in DTCP jurisdiction can be developed. The land should be clear of encumbrances, have proper access, and meet minimum area requirements. Land near highways, developing areas, and growth corridors typically get faster approvals. We assess your land's development potential during our initial site visit." 
  },
  { 
    question: "How long does the DTCP layout development process take?", 
    answer: "The complete DTCP development process typically takes 6-10 months. DTCP approval takes around 30-45 days once documents are complete. Infrastructure development (roads, drainage, utilities) takes 2-3 months depending on layout size. Emerging areas with simpler regulations often have faster timelines." 
  },
  { 
    question: "What are the costs involved in DTCP layout development?", 
    answer: "Development costs include DTCP fees, surveyor charges, infrastructure construction (roads, drainage, electricity), and documentation expenses. DTCP development is typically 20-30% more affordable than HMDA due to lower fee structures. We provide a detailed cost estimate after site inspection. The investment is worthwhile as developed plot values are 3-5x higher than raw land." 
  },
  { 
    question: "Can DTCP plots get bank loans?", 
    answer: "Yes! Banks like SBI, HDFC, ICICI, and others approve loans for genuine DTCP-approved plots. The key requirement is valid LP number and clear documentation. We ensure all our developed layouts are bank-loan ready with proper approvals." 
  },
  { 
    question: "What is the revenue-sharing or joint venture model?", 
    answer: "For landowners who don't want to invest in development costs upfront, we offer joint venture models. We invest in the DTCP development, and proceeds from plot sales are shared as per agreed terms. This is ideal for landowners with prime land in emerging areas but limited capital. Contact us to discuss your specific situation." 
  },
];

export default function DTCPPage() {
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
              <FileCheck size={18} className="text-primary" />
              <span className="text-white text-sm font-medium">DTCP Layout Development Services in Telangana</span>
            </div>

            {/* Main Headline - SEO Optimized */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-primary">DTCP Layout</span> Development & Approval Services
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Transform your land into DTCP-approved, infrastructure-ready plots in Telangana. 
              We handle everything from layout planning and government approvals to roads, 
              drainage, and utilities. 30+ successful layouts across Sangareddy, Chevella, and more.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "Complete DTCP Approval",
                "Infrastructure Development",
                "LP Number Registration",
                "Turnkey Handover"
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
                <span className="text-sm">30+ Layouts Developed</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">400+ Acres Converted</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm">100% Approval Rate</span>
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
            title="DTCP Layout Development Services" 
            subtitle="Comprehensive land development solutions for Telangana's panchayat and municipality areas" 
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
            title="Why Landowners Trust Us for DTCP Development" 
            subtitle="15+ years of experience converting land into valuable, approved layouts across Telangana" 
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
            title="Who Benefits from Our DTCP Development Services" 
            subtitle="We work with landowners, developers, and investors to maximize land value through professional development" 
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
            title="How We Develop Your DTCP Layout" 
            subtitle="A transparent, step-by-step process from raw land to developed plots" 
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
            <p className="text-white/60">Complete layout infrastructure as per DTCP specifications</p>
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
            title="Approvals & Documentation We Handle" 
            subtitle="Complete end-to-end documentation and government approvals for your DTCP layout" 
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
                  <FileCheck size={20} className="text-primary flex-shrink-0" />
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
            title="What Landowners Say About Our DTCP Development" 
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
            title="DTCP Layout Development FAQs" 
            subtitle="Answers to frequently asked questions about our land development services" 
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
              Start Your Land Development
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Have Land in Telangana? Let's Develop It Together
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Get a free site assessment and DTCP development consultation. We'll evaluate your land's 
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
              🏗️ Joint venture and revenue-sharing options available for landowners in Telangana.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
