"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { MapPin, Building, TreePine, CheckCircle, ArrowRight, Phone, Shield, FileCheck, Landmark, Star, Users, Award, Clock, Banknote, TrendingUp, Home, Car, Droplets, Zap, Trees as Tree, BadgeCheck, Handshake, Map, IndianRupee } from "lucide-react";

const plotTypes = [
  { 
    icon: Landmark, 
    title: "HMDA Approved Plots", 
    description: "Government sanctioned plots in Hyderabad Metropolitan area with complete legal clearance and ready infrastructure.", 
    features: ["100% Legal Title", "Bank Loan Approved", "Developed Roads", "Water & Electricity"], 
    priceRange: "₹15,000 - ₹35,000/sq.yd",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=870", 
    href: "/services/plotting-venture/hmda",
    badge: "Most Popular"
  },
  { 
    icon: FileCheck, 
    title: "DTCP Approved Plots", 
    description: "Town planning approved layouts in emerging locations around Hyderabad with excellent appreciation potential.", 
    features: ["DTCP Sanctioned", "Layout Approved", "Growth Areas", "Affordable Pricing"], 
    priceRange: "₹8,000 - ₹20,000/sq.yd",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=870", 
    href: "/services/plotting-venture/dtcp",
    badge: "Best Value"
  },
  { 
    icon: TreePine, 
    title: "Farm Plots", 
    description: "Agricultural land near Hyderabad perfect for weekend getaways, organic farming, or long-term investment.", 
    features: ["Natural Setting", "Farm House Ready", "Investment Growth", "30 Min from City"], 
    priceRange: "₹5,000 - ₹15,000/sq.yd",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=871", 
    href: "/services/plotting-venture/farm-plots",
    badge: "High ROI"
  },
];

const whyChooseUs = [
  { icon: Shield, title: "100% Legal & Clear Titles", description: "All our plots come with verified legal documents, clear titles, and are free from any encumbrances or disputes." },
  { icon: BadgeCheck, title: "Government Approved", description: "HMDA, DTCP, and RERA compliant layouts ensuring your investment is secure and legally protected." },
  { icon: Landmark, title: "Bank Loan Assistance", description: "Our plots are pre-approved by all major banks. We assist with loan processing for easy financing." },
  { icon: TrendingUp, title: "High Appreciation", description: "Strategically located plots with proven 15-25% annual appreciation based on market trends." },
  { icon: Handshake, title: "Transparent Dealings", description: "No hidden charges. What you see is what you pay. Complete transparency in pricing and documentation." },
  { icon: Clock, title: "Quick Registration", description: "Hassle-free registration process. Our team handles all paperwork for smooth ownership transfer." },
];

const amenities = [
  { icon: Car, name: "Wide Roads" },
  { icon: Droplets, name: "Water Supply" },
  { icon: Zap, name: "Electricity" },
  { icon: Tree, name: "Avenue Plantation" },
  { icon: Home, name: "Gated Entry" },
  { icon: MapPin, name: "Well Connected" },
];

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "5000+", label: "Plots Sold" },
  { value: "100+", label: "Projects Delivered" },
  { value: "₹500Cr+", label: "Property Transacted" },
];

const locations = [
  { name: "Shadnagar", distance: "45 km", highlight: true },
  { name: "Maheshwaram", distance: "35 km", highlight: true },
  { name: "Adibatla", distance: "30 km", highlight: false },
  { name: "Shamirpet", distance: "40 km", highlight: false },
  { name: "Patancheru", distance: "35 km", highlight: true },
  { name: "Kompally", distance: "25 km", highlight: false },
  { name: "Chevella", distance: "40 km", highlight: false },
  { name: "Mokila", distance: "30 km", highlight: true },
];

const testimonials = [
  { name: "Ravi Prasad", role: "IT Professional, Gachibowli", rating: 5, text: "Bought an HMDA plot in Shadnagar 3 years ago. Already appreciated 60%! Dream Home made the entire process smooth and transparent.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" },
  { name: "Lakshmi Devi", role: "Business Owner, Kukatpally", rating: 5, text: "The team helped us find the perfect farm plot for our weekend home. The documentation was hassle-free and they handled everything professionally.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150" },
  { name: "Mohammed Imran", role: "NRI, Dubai", rating: 5, text: "Being an NRI, I was worried about investing in plots. Dream Home's transparent approach and regular updates gave me complete confidence.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" },
];

const processSteps = [
  { step: "01", title: "Choose Your Plot Type", description: "Select from HMDA, DTCP, or Farm plots based on your budget and requirements" },
  { step: "02", title: "Site Visit", description: "Free pick-up from Hyderabad. Visit multiple sites and choose your preferred location" },
  { step: "03", title: "Legal Verification", description: "Our legal team verifies all documents. You receive complete legal opinion before booking" },
  { step: "04", title: "Easy Booking", description: "Book with just 10% token. Flexible payment plans and bank loan assistance available" },
  { step: "05", title: "Registration", description: "We handle all paperwork. Get your registered sale deed within 30 days" },
];

export default function PlottingVenturePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/Indian_Luxury_Real_Estate_Video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent dark:from-dark/80 dark:via-dark/60 dark:to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-dark/70 dark:via-transparent dark:to-dark/30" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6">
                <MapPin size={18} className="text-secondary" />
                <span className="text-secondary text-sm font-medium">Hyderabad's Trusted Plot Developer</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Dream Land, <span className="text-primary">Our Promise</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Invest in HMDA & DTCP approved plots with 100% clear titles. From ₹8,000/sq.yd onwards. Free site visit with pick-up from Hyderabad.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                    <div className="font-heading text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-white/70 text-xs">{stat.label}</div>
                  </motion.div>
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
                    <Phone size={18} className="mr-2" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="font-heading text-xl font-bold text-white mb-6 text-center">Why Trust Dream Home?</h3>
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "HMDA & DTCP Approved Layouts" },
                    { icon: BadgeCheck, text: "GHMC Licensed (BL/2149/2012)" },
                    { icon: Landmark, text: "All Major Bank Loan Approved" },
                    { icon: Award, text: "12+ Years in Real Estate" },
                    { icon: Users, text: "5000+ Happy Customers" },
                  ].map((item, index) => (
                    <motion.div key={item.text} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <item.icon size={20} className="text-primary" />
                      </div>
                      <span className="text-white font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plot Types Section */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <SectionHeading title="Choose Your Plot Type" subtitle="Government approved plots for every budget and requirement" />
          <div className="grid lg:grid-cols-3 gap-8">
            {plotTypes.map((plot, index) => (
              <motion.div 
                key={plot.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image src={plot.image} alt={plot.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">{plot.badge}</div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <plot.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white">{plot.title}</h3>
                        <p className="text-secondary font-semibold">{plot.priceRange}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white/70 mb-6">{plot.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {plot.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={plot.href}>
                    <Button className="w-full bg-primary/20 hover:bg-primary text-white border border-primary/30">
                      View Details <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <SectionHeading title="Why Choose Dream Home?" subtitle="Trusted by 5000+ families for their plot investment" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-secondary/30 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-secondary" />
                </div>
                <h4 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-white/10">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">All Plots Come With</h3>
            <p className="text-white/60">Developed infrastructure ready for construction</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/10"
              >
                <amenity.icon size={18} className="text-primary" />
                <span className="text-white font-medium">{amenity.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <SectionHeading title="Prime Locations" subtitle="Strategic plots in high-growth areas around Hyderabad" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-5 border ${location.highlight ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30' : 'bg-white/5 border-white/10'} hover:border-secondary/50 transition-all cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-heading font-bold text-white group-hover:text-primary transition-colors">{location.name}</h4>
                  {location.highlight && <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded">HOT</span>}
                </div>
                <div className="flex items-center gap-1 text-white/60 text-sm">
                  <MapPin size={12} />
                  <span>{location.distance} from Hyderabad</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <SectionHeading title="Simple 5-Step Process" subtitle="From site visit to registration, we make it easy" />
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary" />
            <div className="grid lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h4 className="font-heading font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <SectionHeading title="What Our Customers Say" subtitle="Join 5000+ satisfied plot owners" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-secondary text-secondary" />
                  ))}
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Invest in Your Future?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">Book a free site visit today. We'll pick you up from Hyderabad and show you our best plots.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                  Book Free Site Visit <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+918008044008">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  <Phone size={18} className="mr-2" /> +91 8008044008
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
