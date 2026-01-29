"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Landmark, ArrowRight, Phone, BadgeCheck, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PlottingHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/plotting_land_development.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Landmark size={18} className="text-secondary" />
            <span className="text-white text-sm font-medium">Trusted Land Developers Since 2009</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Land Deserves a <span className="text-primary">World-Class Layout</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Got land sitting idle in Hyderabad? We take care of everything – government approvals, 
            infrastructure development, and plot demarcation. You sit back while we build your 
            investment-ready layout.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Get Free Land Evaluation <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="tel:+918008044008">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark">
                <Phone size={18} className="mr-2" /> Call Now
              </Button>
            </Link>
          </div>

          {/* Trust Indicators - Compact */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 text-white/70">
              <BadgeCheck size={18} className="text-primary" />
              <span className="text-sm">GHMC Licensed</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Shield size={18} className="text-primary" />
              <span className="text-sm">100+ Layouts Delivered</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Users size={18} className="text-primary" />
              <span className="text-sm">5000+ Happy Families</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
