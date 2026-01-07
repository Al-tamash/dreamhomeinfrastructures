"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  icon?: LucideIcon;
  index?: number;
}

export default function StatCard({ 
  value, 
  suffix = "", 
  label, 
  icon: Icon,
  index = 0 
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 50;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="stat-card group"
    >
      {Icon && (
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon size={28} className="text-primary" />
        </div>
      )}
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="text-white/70 font-medium">{label}</div>
      {/* Accent line */}
      <div className="mt-4 h-0.5 w-12 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
