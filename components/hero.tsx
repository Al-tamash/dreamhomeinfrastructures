"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Building, Clock, Users, Heart, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { companyStats } from "@/lib/stats-data";

// Icons mapping for stats
const statsIcons = [Building, Clock, Heart, Users];



// Free stock construction/building video from Coverr (reliable CDN)
const heroVideoUrl = "https://cdn.coverr.co/videos/coverr-aerial-view-of-a-construction-site-2269/1080p.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, video will still show first frame
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Indian_Luxury_Real_Estate_Video.mp4" type="video/mp4" />
        </video>
        {/* Overlay - Light theme: minimal overlay, Dark theme: darker for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent dark:from-dark/70 dark:via-dark/50 dark:to-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-dark/60 dark:via-transparent dark:to-dark/20" />
      </div>

      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] w-32 h-32 bg-primary/10 rounded-full blur-3xl z-[1]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[25%] w-48 h-48 bg-secondary/10 rounded-full blur-3xl z-[1]"
      />

      {/* Main Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge with Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-white/80 text-sm font-medium tracking-wide">
              GHMC Licensed Since 2009 • BL/2149/2009
            </span>
          </motion.div>

          {/* Bold Statement Headline - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1]">
              <span className="block">We Don&apos;t Just</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                Build Homes
              </span>
              <span className="block text-white/90">We Build Dreams</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Hyderabad&apos;s most trusted construction and interior design company.
            Transforming visions into architectural masterpieces since 2009.
          </motion.p>

          {/* CTA Buttons - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/contact">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/25">
                Start Your Project
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+918008044008">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-dark px-8 py-6 text-lg rounded-xl"
              >
                <Phone size={20} className="mr-2" />
                +91 8008 044 008
              </Button>
            </a>
          </motion.div>

          {/* Service Quick Stats - Centered */}
{/* Service Quick Stats - Removed to simplify Hero section */}
        </div>
      </div>



      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-5" />
    </section>
  );
}
