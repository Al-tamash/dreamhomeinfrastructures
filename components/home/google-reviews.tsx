"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GoogleReviewsSection() {
  return (
    <section className="section-gap-sm bg-tertiary">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {/* Google Rating Badge */}
          <div className="flex items-center gap-4 card-global px-8 py-6">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" className="w-10 h-10">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-white">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-white/60 text-sm">Based on 50+ Google Reviews</p>
            </div>
          </div>

          {/* Trust Stats */}
          <div className="flex items-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-white/60 text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{new Date().getFullYear() - 2009}+</div>
              <div className="text-white/60 text-sm">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-white/60 text-sm">Quality Assured</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
