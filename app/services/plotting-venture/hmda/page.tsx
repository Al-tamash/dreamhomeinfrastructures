"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Landmark, CheckCircle, ArrowRight, Phone, ArrowLeft, Star, Shield, FileCheck, MapPin, ChevronDown, Building, TrendingUp, Users, Award, Banknote, Home, Car, Droplets, Zap, TreePine, BadgeCheck, IndianRupee, Calendar, Clock } from "lucide-react";
import { useState } from "react";

const plotCategories = [
  { 
    title: "Residential Plots", 
    description: "Premium gated community plots for building your dream home with world-class amenities", 
    size: "150 - 500 Sq. Yds",
    price: "₹15,000 - ₹25,000/sq.yd",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870" 
  },
  { 
    title: "Villa Plots", 
    description: "Spacious plots for independent villas with premium specifications in prime localities", 
    size: "300 - 1000 Sq. Yds",
    price: "₹20,000 - ₹35,000/sq.yd",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871" 
  },
  { 
    title: "Commercial Plots", 
    description: "Strategic commercial plots on main roads for shops, offices, and business spaces", 
    size: "100 - 500 Sq. Yds",
    price: "₹25,000 - ₹50,000/sq.yd",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=870" 
  },
  { 
    title: "Township Plots", 
    description: "Affordable plots in upcoming integrated township developments with all amenities", 
    size: "100 - 300 Sq. Yds",
    price: "₹12,000 - ₹20,000/sq.yd",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=870" 
  },
];

const stats = [
  { value: "50+", label: "HMDA Projects", icon: Building },
  { value: "2000+", label: "Plots Delivered", icon: Home },
  { value: "100%", label: "Clear Titles", icon: Shield },
  { value: "₹200Cr+", label: "Transactions", icon: IndianRupee },
];

const locations = [
  { name: "Shadnagar", distance: "45 km", plots: "200+", price: "₹15K-25K", hot: true },
  { name: "Maheshwaram", distance: "35 km", plots: "150+", price: "₹18K-30K", hot: true },
  { name: "Adibatla", distance: "30 km", plots: "100+", price: "₹20K-35K", hot: false },
  { name: "Patancheru", distance: "35 km", plots: "120+", price: "₹17K-28K", hot: true },
  { name: "Kompally", distance: "25 km", plots: "80+", price: "₹22K-38K", hot: false },
  { name: "Shamirpet", distance: "40 km", plots: "150+", price: "₹14K-22K", hot: false },
  { name: "Gandipet", distance: "20 km", plots: "60+", price: "₹28K-45K", hot: true },
  { name: "Mokila", distance: "30 km", plots: "100+", price: "₹16K-26K", hot: false },
];

const hmdaBenefits = [
  { icon: Shield, title: "100% Legal Security", description: "HMDA approval means government-verified legal status. Your investment is protected by law." },
  { icon: Landmark, title: "Bank Loan Ready", description: "All major banks including SBI, HDFC, ICICI approve loans instantly for HMDA plots." },
  { icon: TrendingUp, title: "High Appreciation", description: "HMDA plots appreciate 15-25% annually. Proven track record of wealth creation." },
  { icon: FileCheck, title: "Easy Registration", description: "Clear documentation and smooth registration process. No legal hassles." },
  { icon: Building, title: "Developed Infrastructure", description: "Ready roads, drainage, water, electricity, and street lighting as per HMDA norms." },
  { icon: BadgeCheck, title: "Quality Assurance", description: "HMDA monitors layout development ensuring quality construction standards." },
];

const amenities = [
  { icon: Car, name: "40ft & 30ft Roads" },
  { icon: Droplets, name: "Underground Drainage" },
  { icon: Zap, name: "Electricity Supply" },
  { icon: TreePine, name: "Avenue Plantation" },
  { icon: Home, name: "Gated Security" },
  { icon: MapPin, name: "Children's Park" },
];

const documents = [
  "Registered Sale Deed",
  "HMDA Approval Copy",
  "LP Number Certificate",
  "Layout Sanction Plan",
  "Non-Encumbrance Certificate",
  "Patta & Passbook Transfer",
  "Mutation Certificate",
  "Tax Receipts",
];

const faqs = [
  { question: "What is HMDA approval and why is it important?", answer: "HMDA (Hyderabad Metropolitan Development Authority) approval certifies that the layout complies with all government regulations, zoning laws, and development norms. It ensures legal sanctity, enables bank loans, and guarantees developed infrastructure. Never buy a plot without HMDA approval in Hyderabad Metropolitan area." },
  { question: "What documents will I receive?", answer: "You will receive: Registered Sale Deed, HMDA Approval Copy, LP Number Certificate, Layout Sanction Plan, Non-Encumbrance Certificate (EC), Patta/Passbook Transfer, Mutation Certificate, and Tax Receipts. All documents are verified by our legal team." },
  { question: "Are HMDA plots eligible for bank loans?", answer: "Yes, 100%! All our HMDA approved plots are pre-approved by major banks including SBI, HDFC, ICICI, Axis Bank, LIC Housing Finance, and others. We also provide loan assistance for quick approval." },
  { question: "How long does the registration process take?", answer: "Once you book the plot and complete payment, registration happens within 15-30 days. Our team handles all paperwork including slot booking, documentation, and registration. You just need to visit the sub-registrar office for biometrics." },
  { question: "Can NRIs buy HMDA plots?", answer: "Yes! NRIs can buy residential and commercial plots in India. We handle all NRI-specific documentation including Power of Attorney, RBI compliance, and FEMA regulations. Many of our happy customers are NRIs." },
  { question: "What is the appreciation potential?", answer: "HMDA plots in outskirts of Hyderabad have shown consistent appreciation of 15-25% annually over the past decade. With ORR expansion, IT corridor growth, and Pharma City development, prices are expected to rise significantly." },
];

const testimonials = [
  { name: "Venkat Reddy", role: "Software Engineer, Microsoft", rating: 5, text: "Bought 300 sq.yd HMDA plot in Shadnagar in 2020 at ₹12,000/sq.yd. Today it's valued at ₹22,000! Dream Home's guidance was invaluable.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" },
  { name: "Sravanthi Sharma", role: "Doctor, Apollo Hospital", rating: 5, text: "The transparency in dealings impressed me. Every document was verified, and the registration was hassle-free. Highly recommend!", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150" },
  { name: "Abdul Rahman", role: "NRI, United States", rating: 5, text: "Being in the US, I was skeptical about buying land in India. But Dream Home's professional approach and regular updates gave me confidence. Now I own 2 plots!", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" },
];

export default function HMDAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/Indian_Luxury_Real_Estate_Video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent dark:from-dark/80 dark:via-dark/60 dark:to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-dark/70 dark:via-transparent dark:to-dark/30" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <Link href="/services/plotting-venture" className="inline-flex items-center gap-2 text-secondary hover:text-white mb-6 transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Plotting Services</span>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Landmark size={18} className="text-primary" />
                <span className="text-primary text-sm font-medium">HMDA Approved Plots</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-primary">HMDA Approved</span> Plots in Hyderabad
              </h1>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                100% legal, bank loan ready plots from ₹15,000/sq.yd. Free site visit with complimentary pick-up from Hyderabad.
              </p>
              
              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "HMDA LP Number",
                  "Clear Legal Title",
                  "Bank Loan Approved",
                  "Developed Infrastructure"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <CheckCircle size={16} className="text-primary" />
                    <span className="text-white text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Book Free Site Visit <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <a href="tel:+918008044008">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tertiary">
                    <Phone size={18} className="mr-2" /> Call: +91 8008044008
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Price Card */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <p className="text-white/70 mb-2">HMDA Plots Starting From</p>
                  <div className="font-heading text-5xl font-bold text-primary">₹15,000<span className="text-2xl text-white/70">/sq.yd</span></div>
                </div>
                <div className="space-y-3 mb-6">
                  {["100% Legal & Clear Title", "All Major Bank Loans Approved", "Developed Roads & Infrastructure", "Immediate Registration Available", "EMI Options Available"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white">
                      <CheckCircle size={18} className="text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="block">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white" size="lg">
                    Get Price List <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary/10 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HMDA */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Why Choose HMDA Approved Plots?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">HMDA approval is your guarantee of a legal, secure, and valuable investment</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hmdaBenefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon size={28} className="text-primary" />
                </div>
                <h4 className="font-heading text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plot Categories */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Types of HMDA Plots</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Choose from various plot types based on your requirements</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plotCategories.map((plot, index) => (
              <motion.div key={plot.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all">
                <div className="relative h-40 overflow-hidden">
                  <Image src={plot.image} alt={plot.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{plot.title}</h3>
                  <p className="text-white/60 text-sm mb-3">{plot.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-white/50">Size:</span><span className="text-white">{plot.size}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Price:</span><span className="text-primary font-semibold">{plot.price}</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Prime HMDA Locations</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Strategic plots in high-growth areas around Hyderabad</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((location, index) => (
              <motion.div key={location.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className={`relative rounded-2xl p-5 border ${location.hot ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30' : 'bg-white/5 border-white/10'} hover:border-primary/50 transition-all cursor-pointer group`}>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-heading text-lg font-bold text-white group-hover:text-primary transition-colors">{location.name}</h4>
                  {location.hot && <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded">HOT</span>}
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center gap-2 text-white/60"><MapPin size={14} /><span>{location.distance} from Hyderabad</span></div>
                  <div className="flex items-center gap-2 text-white/60"><Home size={14} /><span>{location.plots} plots available</span></div>
                  <div className="flex items-center gap-2 text-primary font-semibold"><IndianRupee size={14} /><span>{location.price}/sq.yd</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-white/10">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Developed Infrastructure</h3>
            <p className="text-white/60">All HMDA layouts come with ready infrastructure</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {amenities.map((amenity, index) => (
              <motion.div key={amenity.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/10">
                <amenity.icon size={18} className="text-primary" />
                <span className="text-white font-medium">{amenity.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Documents You'll Receive</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Complete legal documentation for your peace of mind</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <motion.div key={doc} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <FileCheck size={20} className="text-primary flex-shrink-0" />
                <span className="text-white text-sm">{doc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Happy HMDA Plot Owners</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Join thousands of satisfied customers</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} size={18} className="fill-primary text-primary" />))}
                </div>
                <p className="text-white/80 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white">{testimonial.name}</div>
                    <div className="text-primary text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Everything you need to know about HMDA plots</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-heading font-bold text-white pr-4">{faq.question}</span>
                  <ChevronDown size={20} className={`text-primary flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (<div className="px-6 pb-6 text-white/70">{faq.answer}</div>)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Invest in HMDA Plots?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">Book a free site visit today. We'll pick you up from Hyderabad and show you our best HMDA approved plots.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">Book Free Site Visit <ArrowRight size={18} className="ml-2" /></Button></Link>
              <a href="tel:+918008044008"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20"><Phone size={18} className="mr-2" /> +91 8008044008</Button></a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
