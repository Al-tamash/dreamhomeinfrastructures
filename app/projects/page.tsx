"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

// Generate image paths (e1.png to e27.png)
const projectImages = Array.from({ length: 27 }, (_, i) => `/porject-images/e${i + 1}.png`);

// Video paths (v1.mp4 to v5.mp4)
const projectVideos = Array.from({ length: 5 }, (_, i) => `/project-videos/v${i + 1}.mp4`);

export default function ProjectsPage() {
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
            <p className="text-xl text-white/70">Explore our portfolio of successfully completed construction and interior design projects.</p>
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

      {/* Project Images Section */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-10 text-center"
          >
            Project <span className="text-primary">Gallery</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/10"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
