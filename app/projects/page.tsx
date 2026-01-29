"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import OngoingProjectsSection from "@/components/home/ongoing-projects-section";

// Generate image paths (e1.png to e27.png, excluding e8.png)
const projectImages = Array.from({ length: 27 }, (_, i) => `/porject-images/e${i + 1}.png`).filter(img => img !== '/porject-images/e8.png');

// Video paths (v1.mp4 to v5.mp4)
const projectVideos = Array.from({ length: 5 }, (_, i) => `/project-videos/v${i + 1}.mp4`);

export default function ProjectsPage() {
  // Removed local state and data as we are using the shared component

  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/Indian_Luxury_Real_Estate_Video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent dark:from-dark/70 dark:via-dark/50 dark:to-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-dark/60 dark:via-transparent dark:to-dark/20" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our <span className="text-primary">Projects</span></h1>
            <p className="text-xl text-white/70">Explore our portfolio of successfully completed and ongoing construction and interior design projects.</p>
          </motion.div>
        </div>
      </section>

      {/* Project Videos Section */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-10 text-center"
          >
            Project <span className="text-primary">Videos</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-white/10"
              >
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                >
                  <source src={video} type="video/mp4" />
                </video>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <OngoingProjectsSection className="section-padding bg-dark-200" />



      {/* Project Images Section */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <CheckCircle2 size={16} />
              Successfully Delivered
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Completed <span className="text-primary">Projects</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Browse through our portfolio of successfully delivered residential and commercial projects
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`Completed Project ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Completed badge */}
                  <div className="absolute top-3 right-3 bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle2 size={12} />
                    <span>Completed</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><Button size="lg" className="bg-white text-secondary hover:bg-white/90">Get Quote <ArrowRight size={18} className="ml-2" /></Button></Link>
            <a href="tel:+918008044008"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary"><Phone size={18} className="mr-2" />Call Now</Button></a>
          </div>
        </div>
      </section>


    </>
  );
}

