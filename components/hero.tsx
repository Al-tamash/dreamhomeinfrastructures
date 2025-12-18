"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
          alt="Construction site with modern building"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-tertiary/95 via-tertiary/80 to-tertiary/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-secondary text-sm font-medium">
              Trusted Since 2012 • GHMC Licensed
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Building Your{" "}
            <span className="text-primary">Dream Home</span>{" "}
            Into Reality
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
          >
            Hyderabad&apos;s premier construction and interior design company.
            We transform your vision into stunning structures with unmatched
            quality and craftsmanship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Free Quote
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
            <a href="tel:+918008044008">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-tertiary">
                <Phone size={18} className="mr-2" />
                Call Now
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20"
          >
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "12+", label: "Years Experience" },
              { value: "300+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
