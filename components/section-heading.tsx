"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  eyebrow,
  centered = true, 
  light = true,
  className = ""
}: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }} 
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
    >
      {/* Eyebrow Text */}
      {eyebrow && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3"
        >
          {eyebrow}
        </motion.span>
      )}
      
      {/* Main Title with Hover Effect */}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white transition-colors duration-200 hover:text-primary cursor-default">
        {title}
      </h2>
      
      {/* Subtitle */}
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} text-white/70`}>
          {subtitle}
        </p>
      )}
      
      {/* Gradient Accent Line */}
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
