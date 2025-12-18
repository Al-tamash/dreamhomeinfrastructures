"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const projects = [
  { id: 1, title: "Luxury Apartment Complex", category: "Residential", location: "Banjara Hills", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=735" },
  { id: 2, title: "Modern Villa", category: "Villa", location: "Jubilee Hills", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871" },
  { id: 3, title: "Corporate Office", category: "Commercial", location: "HITEC City", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=870" },
  { id: 4, title: "Living Room Design", category: "Interior", location: "Gachibowli", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800" },
  { id: 5, title: "Residential Tower", category: "Residential", location: "Kondapur", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=875" },
  { id: 6, title: "Farm House", category: "Villa", location: "Shamshabad", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=870" },
  { id: 7, title: "Shopping Complex", category: "Commercial", location: "Ameerpet", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=868" },
  { id: 8, title: "Kitchen Interior", category: "Interior", location: "Madhapur", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=870" },
];

const categories = ["All", "Residential", "Commercial", "Villa", "Interior"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="relative py-20 md:py-28 bg-tertiary">
        <div className="absolute inset-0 opacity-20"><Image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070" alt="Projects" fill className="object-cover" /></div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our <span className="text-primary">Projects</span></h1>
            <p className="text-xl text-white/70">Explore our portfolio of successfully completed construction and interior design projects.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'rgb(35, 35, 35)' }}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full font-medium transition-all ${activeCategory === category ? "bg-primary text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}>{category}</button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }} className="group relative overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative aspect-[4/3]">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                      <span className="text-secondary text-sm">{project.category}</span>
                      <h3 className="font-heading text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-white/60 text-sm">{project.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/90">
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
