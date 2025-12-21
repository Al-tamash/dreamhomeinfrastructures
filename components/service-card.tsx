"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  href: string;
  index?: number;
}

export default function ServiceCard({ title, description, icon: Icon, image, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: index * 0.1 }} 
      viewport={{ once: true }}
    >
      <Link href={href} className="block group">
        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }} 
          transition={{ duration: 0.3 }}
          className="relative h-[320px] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
        >
          {/* Background Image */}
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-dark-400 to-dark-600" />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-white/70 text-sm mb-4 line-clamp-2 group-hover:text-white/90 transition-colors">
              {description}
            </p>
            <div className="flex items-center text-primary font-medium text-sm">
              <span className="relative">
                Learn More
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
