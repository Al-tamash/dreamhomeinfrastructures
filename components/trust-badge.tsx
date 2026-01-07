"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  animate?: boolean;
  index?: number;
}

export default function TrustBadge({ 
  icon: Icon, 
  title, 
  subtitle, 
  animate = true,
  index = 0 
}: TrustBadgeProps) {
  const content = (
    <div className="trust-badge group">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon size={20} className="text-primary" />
      </div>
      <div className="text-left">
        <div className="font-heading font-bold text-white text-sm">{title}</div>
        {subtitle && (
          <div className="text-xs text-white/50">{subtitle}</div>
        )}
      </div>
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {content}
    </motion.div>
  );
}
