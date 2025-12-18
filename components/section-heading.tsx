"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true, light = true }: SectionHeadingProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">{title}</h2>
      {subtitle && <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} text-white/70`}>{subtitle}</p>}
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
