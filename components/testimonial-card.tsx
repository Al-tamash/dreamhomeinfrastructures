"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  index?: number;
}

export default function TestimonialCard({ 
  name, 
  role, 
  content, 
  rating,
  index = 0 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card-global p-8 relative group"
    >
      {/* Quote Icon */}
      <Quote 
        size={40} 
        className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" 
      />
      
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating 
                ? "text-yellow-400 fill-yellow-400" 
                : "text-white/20"
            }`}
          />
        ))}
      </div>
      
      {/* Testimonial Content */}
      <p className="text-white/70 mb-6 italic leading-relaxed group-hover:text-white/90 transition-colors duration-300">
        &ldquo;{content}&rdquo;
      </p>
      
      {/* Author Info */}
      <div className="flex items-center gap-3">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
          <span className="font-heading font-bold text-white text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-heading font-bold text-white">{name}</div>
          <div className="text-sm text-secondary">{role}</div>
        </div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
    </motion.div>
  );
}
