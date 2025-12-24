"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileCheck, CheckCircle, ArrowRight, Phone, ArrowLeft, Star, Shield, MapPin, ChevronDown, Building, TrendingUp, Home, Car, Droplets, Zap, TreePine, BadgeCheck, IndianRupee, Users } from "lucide-react";
import { useState } from "react";

const plotCategories = [
  { 
    title: "Residential Layouts", 
    description: "DTCP approved plots in emerging residential areas with growing infrastructure", 
    size: "100 - 400 Sq. Yds",
    price: "₹8,000 - ₹15,000/sq.yd",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=870" 
  },
  { 
    title: "Commercial Layouts", 
    description: "Commercial plots on highways and main roads with excellent visibility", 
    size: "100 - 300 Sq. Yds",
    price: "₹12,000 - ₹25,000/sq.yd",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=870" 
  },
  { 
    title: "Mixed-Use Plots", 
    description: "Versatile plots suitable for both residential and commercial purposes", 
    size: "150 - 500 Sq. Yds",
    price: "₹10,000 - ₹18,000/sq.yd",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=870" 
  },
  { 
    title: "Gated Community", 
    description: "Secured plots in gated layouts with common amenities and security", 
    size: "150 - 300 Sq. Yds",
    price: "₹12,000 - ₹20,000/sq.yd",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=870" 
  },
];

const stats = [
  { value: "30+", label: "DTCP Projects", icon: Building },
  { value: "1500+", label: "Plots Delivered", icon: Home },
  { value: "100%", label: "Legal Compliance", icon: Shield },
  { value: "₹100Cr+", label: "Transactions", icon: IndianRupee },
];

const locations = [
  { name: "Srisailam Highway", distance: "50 km", plots: "180+", price: "₹8K-14K", hot: true },
  { name: "Sangareddy", distance: "45 km", plots: "120+", price: "₹10K-18K", hot: true },
  { name: "Medchal", distance: "35 km", plots: "80+", price: "₹12K-20K", hot: false },
  { name: "Chevella", distance: "40 km", plots: "150+", price: "₹8K-15K", hot: true },
  { name: "Shankarpally", distance: "35 km", plots: "100+", price: "₹10K-16K", hot: false },
  { name: "Ibrahimpatnam", distance: "40 km", plots: "120+", price: "₹9K-15K", hot: false },
  { name: "Yadagirigutta", distance: "55 km", plots: "200+", price: "₹7K-12K", hot: true },
  { name: "Narsapur", distance: "45 km", plots: "90+", price: "₹8K-14K", hot: false },
];

const dtcpBenefits = [
  { icon: FileCheck, title: "Government Sanctioned", description: "DTCP layout approval ensures compliance with town planning regulations and zoning laws." },
  { icon: TrendingUp, title: "High ROI Potential", description: "Emerging areas with 20-30% annual appreciation as infrastructure develops." },
  { icon: IndianRupee, title: "Affordable Pricing", description: "Get more plot area for your budget compared to HMDA zones. Best for first-time buyers." },
  { icon: Building, title: "Growth Areas", description: "Located in fast-developing regions with upcoming roads, industries, and IT corridors." },
  { icon: Shield, title: "Legal Security", description: "Clear titles verified by our legal team. Complete documentation provided." },
  { icon: BadgeCheck, title: "Bank Loan Eligible", description: "All major banks approve loans for DTCP plots. Easy financing available." },
];

const amenities = [
  { icon: Car, name: "30ft Roads" },
  { icon: Droplets, name: "Water Supply" },
  { icon: Zap, name: "Electricity" },
  { icon: TreePine, name: "Avenue Plantation" },
  { icon: Home, name: "Compound Wall" },
  { icon: MapPin, name: "Entry Gate" },
];

const faqs = [
  { question: "What is DTCP approval?", answer: "DTCP (Directorate of Town and Country Planning) is a government authority that approves layout plans outside HMDA limits. DTCP approval ensures the layout complies with town planning rules, building regulations, and land use policies. It's mandatory for layouts in panchayat and municipality areas." },
  { question: "What's the difference between HMDA and DTCP?", answer: "HMDA covers Hyderabad Metropolitan Area (ORR and beyond), while DTCP covers areas in the rest of Telangana. Both are government approvals. DTCP plots are typically more affordable and offer higher appreciation potential as areas develop." },
  { question: "Are DTCP plots safe to buy?", answer: "Yes, DTCP approved plots are legally safe to buy. However, always verify the approval is genuine by checking the LP Number on the DTCP website. We provide complete legal verification before you book." },
  { question: "Can I get a bank loan for DTCP plots?", answer: "Yes, most banks approve loans for DTCP plots including SBI, HDFC, ICICI, and others. The plot should have valid DTCP approval and clear title documents." },
  { question: "What is the future of DTCP areas?", answer: "Many DTCP areas are expected to come under HMDA limits as Hyderabad expands. This conversion significantly increases plot values. Areas like Sangareddy and Srisailam Highway are prime examples of rapid development." },
  { question: "What documents will I get?", answer: "You'll receive: Registered Sale Deed, DTCP LP Number Certificate, Layout Sanction Copy, EC (Encumbrance Certificate), Patta Transfer, and Tax Receipts. All documents are verified by our legal team." },
];

const testimonials = [
  { name: "Suresh Babu", role: "Bank Employee, Hyderabad", rating: 5, text: "Bought a DTCP plot in Sangareddy for ₹8,000/sq.yd in 2019. Same area plots are now selling at ₹18,000! Great investment advice from Dream Home.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" },
  { name: "Priya Reddy", role: "Teacher, Secunderabad", rating: 5, text: "Was worried about buying DTCP plots, but Dream Home's legal team verified everything thoroughly. Very transparent process!", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150" },
  { name: "Kiran Kumar", role: "Small Business Owner", rating: 5, text: "Affordable plots with genuine DTCP approval. Already started construction on my plot. The documentation was perfect.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" },
];

export default function DTCPPage() {
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
              <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6">
                <FileCheck size={18} className="text-secondary" />
                <span className="text-secondary text-sm font-medium">DTCP Approved Plots</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Affordable <span className="text-primary">DTCP Plots</span> with High Returns
              </h1>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                Government approved plots in emerging locations from just ₹8,000/sq.yd. 20-30% annual appreciation. Perfect for budget-conscious investors.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["DTCP LP Number", "Clear Legal Title", "Bank Loan Approved", "High Appreciation"].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <CheckCircle size={16} className="text-secondary" />
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
                  <p className="text-white/70 mb-2">DTCP Plots Starting From</p>
                  <div className="font-heading text-5xl font-bold text-secondary">₹8,000<span className="text-2xl text-white/70">/sq.yd</span></div>
                  <p className="text-primary text-sm mt-2">Best Value for Investment</p>
                </div>
                <div className="space-y-3 mb-6">
                  {["Genuine DTCP Approval", "Emerging Growth Areas", "20-30% Appreciation Potential", "All Banks Loan Approved", "Easy EMI Options"].map((item) => (
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
      <section className="py-12 bg-secondary/10 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <stat.icon size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="font-heading text-2xl md:text-3xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DTCP */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Why Invest in DTCP Plots?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Smart investment choice for budget-conscious buyers</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dtcpBenefits.map((benefit, index) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-secondary/30 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon size={28} className="text-secondary" />
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Types of DTCP Layouts</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Various plot options for different needs</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plotCategories.map((plot, index) => (
              <motion.div key={plot.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-secondary/50 transition-all">
                <div className="relative h-40 overflow-hidden">
                  <Image src={plot.image} alt={plot.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{plot.title}</h3>
                  <p className="text-white/60 text-sm mb-3">{plot.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-white/50">Size:</span><span className="text-white">{plot.size}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Price:</span><span className="text-secondary font-semibold">{plot.price}</span></div>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Available DTCP Locations</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Emerging areas with high growth potential</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((location, index) => (
              <motion.div key={location.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className={`relative rounded-2xl p-5 border ${location.hot ? 'bg-gradient-to-br from-secondary/20 to-primary/20 border-secondary/30' : 'bg-white/5 border-white/10'} hover:border-secondary/50 transition-all cursor-pointer group`}>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-heading text-lg font-bold text-white group-hover:text-secondary transition-colors">{location.name}</h4>
                  {location.hot && <span className="bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded">HOT</span>}
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center gap-2 text-white/60"><MapPin size={14} /><span>{location.distance} from Hyderabad</span></div>
                  <div className="flex items-center gap-2 text-white/60"><Home size={14} /><span>{location.plots} plots available</span></div>
                  <div className="flex items-center gap-2 text-secondary font-semibold"><IndianRupee size={14} /><span>{location.price}/sq.yd</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & Testimonials */}
      <section className="py-16 bg-gradient-to-r from-secondary/10 to-primary/10 border-y border-white/10">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Layout Amenities</h3>
            <p className="text-white/60">Standard amenities in our DTCP layouts</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {amenities.map((amenity, index) => (
              <motion.div key={amenity.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/10">
                <amenity.icon size={18} className="text-secondary" />
                <span className="text-white font-medium">{amenity.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Happy DTCP Plot Owners</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Real stories of smart investments</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} size={18} className="fill-secondary text-secondary" />))}
                </div>
                <p className="text-white/80 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white">{testimonial.name}</div>
                    <div className="text-secondary text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Everything about DTCP plots</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-heading font-bold text-white pr-4">{faq.question}</span>
                  <ChevronDown size={20} className={`text-secondary flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (<div className="px-6 pb-6 text-white/70">{faq.answer}</div>)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Start Your Investment Journey</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">Book a free site visit today. Explore affordable DTCP plots with high appreciation potential.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-bold">Book Free Site Visit <ArrowRight size={18} className="ml-2" /></Button></Link>
              <a href="tel:+918008044008"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20"><Phone size={18} className="mr-2" /> +91 8008044008</Button></a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
