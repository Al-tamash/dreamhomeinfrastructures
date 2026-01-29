"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-24 bg-tertiary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Let's Get Started
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Construction Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get a free consultation and detailed quotation for your project. 
            <span className="block mt-2 text-primary font-semibold">No obligation. No hidden fees.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="btn-global-primary text-lg"
              >
                Get Your Free Quote 
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <a href="tel:+918008044008">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white hover:text-dark text-lg"
              >
                <Phone size={20} className="mr-2" />
                +91 8008 044 008
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
            🏗️ Currently taking new projects for 2026. Limited slots available.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
