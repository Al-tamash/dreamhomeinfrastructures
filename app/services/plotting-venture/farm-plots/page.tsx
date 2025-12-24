"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TreePine, CheckCircle, ArrowRight, Phone, ArrowLeft, Star, Shield, MapPin, ChevronDown, TrendingUp, Home, Sun, Leaf, Mountain, Users, IndianRupee, Building, Car, Droplets } from "lucide-react";
import { useState } from "react";

const farmTypes = [
  { 
    title: "Agricultural Farm Plots", 
    description: "Fertile land for organic farming, horticulture, and cultivation with water sources", 
    size: "1/4 Acre - 5 Acres",
    price: "₹40 - ₹80 Lakhs/Acre",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=871" 
  },
  { 
    title: "Weekend Farm House Plots", 
    description: "Perfect plots for building your weekend retreat with scenic views and natural surroundings", 
    size: "200 - 500 Sq. Yds",
    price: "₹5,000 - ₹12,000/sq.yd",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=870" 
  },
  { 
    title: "Investment Farm Land", 
    description: "Agricultural land in growth corridors for long-term investment and appreciation", 
    size: "1 - 10 Acres",
    price: "₹30 - ₹60 Lakhs/Acre",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=870" 
  },
  { 
    title: "Organic Farm Projects", 
    description: "Managed farm plots for organic farming with shared resources and expertise", 
    size: "1/2 Acre - 2 Acres",
    price: "₹50 - ₹1 Cr/Acre",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=870" 
  },
];

const stats = [
  { value: "500+", label: "Acres Developed", icon: Mountain },
  { value: "200+", label: "Happy Owners", icon: Users },
  { value: "15-25%", label: "Annual Growth", icon: TrendingUp },
  { value: "30 Min", label: "From City", icon: Car },
];

const locations = [
  { name: "Chevella", distance: "40 km", area: "50+ Acres", price: "₹50-70L/Acre", hot: true },
  { name: "Shankarpally", distance: "35 km", area: "40+ Acres", price: "₹60-80L/Acre", hot: true },
  { name: "Mokila", distance: "30 km", area: "30+ Acres", price: "₹70-90L/Acre", hot: false },
  { name: "Moinabad", distance: "35 km", area: "45+ Acres", price: "₹55-75L/Acre", hot: true },
  { name: "Shadnagar", distance: "45 km", area: "60+ Acres", price: "₹40-60L/Acre", hot: false },
  { name: "Shamirpet", distance: "40 km", area: "50+ Acres", price: "₹45-65L/Acre", hot: false },
  { name: "Yadagirigutta", distance: "55 km", area: "80+ Acres", price: "₹30-50L/Acre", hot: true },
  { name: "Narsapur", distance: "45 km", area: "40+ Acres", price: "₹35-55L/Acre", hot: false },
];

const farmBenefits = [
  { icon: TreePine, title: "Escape to Nature", description: "Own your piece of greenery just 30-45 minutes from Hyderabad city center." },
  { icon: TrendingUp, title: "High Appreciation", description: "Farm land near Hyderabad has shown 15-25% annual appreciation consistently." },
  { icon: Sun, title: "Weekend Retreat", description: "Build your personal farm house for weekend getaways with family and friends." },
  { icon: Leaf, title: "Organic Lifestyle", description: "Grow your own organic vegetables, fruits, and herbs for a healthy lifestyle." },
  { icon: Mountain, title: "Scenic Locations", description: "Beautiful countryside settings with hills, lakes, and natural landscapes." },
  { icon: Shield, title: "Verified Titles", description: "All agricultural land verified by our legal team with clear ownership records." },
];

const features = [
  { icon: Droplets, name: "Bore Well" },
  { icon: Car, name: "Approach Road" },
  { icon: TreePine, name: "Mango Trees" },
  { icon: Sun, name: "Fencing Done" },
  { icon: Building, name: "Shed Available" },
  { icon: MapPin, name: "Clear Boundaries" },
];

const faqs = [
  { question: "Can I build a farm house on agricultural land?", answer: "Yes, you can construct a farm house on agricultural land for personal use. The construction area is typically limited to 10-15% of the total land area depending on local regulations. We guide you through the approval process." },
  { question: "What is the minimum size for farm plots?", answer: "Farm plots typically start from 200 sq. yards for smaller weekend plots and 1/4 acre for agricultural land. For serious farming, we recommend at least 1 acre." },
  { question: "Is farm land a good investment?", answer: "Absolutely! Farm land near Hyderabad has shown consistent 15-25% appreciation annually. With the city expanding, well-located agricultural land is an excellent long-term investment." },
  { question: "What documents will I receive?", answer: "You'll receive: Registered Sale Deed, Patta/Passbook, Adangal, Pahani, Village Map, 1-B, and all relevant agricultural land documents. Our team verifies all records before purchase." },
  { question: "Do you provide farming support?", answer: "Yes, we have tie-ups with agricultural experts who can guide you on farming. Some of our managed farm projects include shared resources like tractors, bore wells, and caretakers." },
  { question: "Can NRIs buy agricultural land?", answer: "NRIs can buy agricultural land in India, subject to certain conditions. We provide complete guidance and handle all NRI-specific documentation and compliance requirements." },
];

const testimonials = [
  { name: "Prasad Rao", role: "IT Director, Hitec City", rating: 5, text: "Bought 2 acres in Chevella for weekend farming. Best decision ever! The kids love spending weekends at the farm. Already seeing great appreciation.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" },
  { name: "Kavitha Reddy", role: "Doctor, Apollo", rating: 5, text: "Our organic farm house in Shankarpally is our escape from city stress. Dream Home found us the perfect location with great water source.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150" },
  { name: "Ahmed Khan", role: "NRI, Canada", rating: 5, text: "Invested in 5 acres of farm land in 2019. It has already doubled in value! Dream Home manages everything while I'm abroad.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" },
];

export default function FarmPlotsPage() {
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
                <TreePine size={18} className="text-secondary" />
                <span className="text-secondary text-sm font-medium">Farm Plots & Agricultural Land</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Own Your <span className="text-primary">Farm Land</span> Near Hyderabad
              </h1>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                Escape to nature with premium farm plots just 30-45 minutes from the city. Perfect for weekend getaways, organic farming, or long-term investment.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Verified Titles", "Water Available", "Scenic Locations", "High Appreciation"].map((item) => (
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
                  <p className="text-white/70 mb-2">Farm Plots Starting From</p>
                  <div className="font-heading text-5xl font-bold text-secondary">₹5,000<span className="text-2xl text-white/70">/sq.yd</span></div>
                  <p className="text-primary text-sm mt-2">Weekend Farm House Plots</p>
                </div>
                <div className="space-y-3 mb-6">
                  {["30-45 Min from Hyderabad", "Clear Legal Titles", "Water Source Available", "Farm House Construction Ready", "15-25% Annual Appreciation"].map((item) => (
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

      {/* Why Farm Plots */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Why Invest in Farm Land?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">The perfect blend of lifestyle and investment</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {farmBenefits.map((benefit, index) => (
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

      {/* Farm Types */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Types of Farm Plots</h2>
            <p className="text-white/70 max-w-2xl mx-auto">From weekend plots to agricultural land</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {farmTypes.map((plot, index) => (
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Scenic Farm Locations</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Beautiful countryside areas around Hyderabad</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((location, index) => (
              <motion.div key={location.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className={`relative rounded-2xl p-5 border ${location.hot ? 'bg-gradient-to-br from-secondary/20 to-primary/20 border-secondary/30' : 'bg-white/5 border-white/10'} hover:border-secondary/50 transition-all cursor-pointer group`}>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-heading text-lg font-bold text-white group-hover:text-secondary transition-colors">{location.name}</h4>
                  {location.hot && <span className="bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded">SCENIC</span>}
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center gap-2 text-white/60"><MapPin size={14} /><span>{location.distance} from Hyderabad</span></div>
                  <div className="flex items-center gap-2 text-white/60"><Mountain size={14} /><span>{location.area} available</span></div>
                  <div className="flex items-center gap-2 text-secondary font-semibold"><IndianRupee size={14} /><span>{location.price}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-r from-secondary/10 to-primary/10 border-y border-white/10">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Farm Plot Features</h3>
            <p className="text-white/60">What you can expect from our farm plots</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div key={feature.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/10">
                <feature.icon size={18} className="text-secondary" />
                <span className="text-white font-medium">{feature.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Happy Farm Owners</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Stories from our farm plot customers</p>
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
            <p className="text-white/70 max-w-2xl mx-auto">Common questions about farm plots</p>
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
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Own Your Piece of Nature</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">Book a free site visit today. Experience the serenity of our farm plots in person.</p>
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
