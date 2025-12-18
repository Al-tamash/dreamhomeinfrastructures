"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index?: number;
}

export default function ProjectCard({
  title,
  category,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-secondary text-sm font-medium mb-1">
            {category}
          </span>
          <h3 className="font-heading text-xl font-bold text-white">
            {title}
          </h3>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}
