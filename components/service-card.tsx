"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index?: number;
}

export default function ServiceCard({ title, description, icon: Icon, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
      <Link href={href} className="block group">
        <motion.div whileHover={{ y: -8 }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
            <Icon size={32} className="text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-white/60 mb-4 line-clamp-3">{description}</p>
          <div className="flex items-center text-secondary font-medium group-hover:text-primary transition-colors">
            Learn More
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
