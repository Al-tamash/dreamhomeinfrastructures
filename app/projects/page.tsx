"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Clock, Hammer, X, Building2, Calendar, Users, CheckCircle2 } from "lucide-react";

// Ongoing project type
interface OngoingProject {
  image: string;
  title: string;
  location: string;
  progress: number;
  expectedCompletion: string;
  units: string;
  description: string;
  features: string[];
  startDate: string;
  projectType: string;
}

// Ongoing projects with progress
const ongoingProjects: OngoingProject[] = [
  { 
    image: "/porject-images/e10.png", 
    title: "Skyline Residency", 
    location: "Financial District",
    progress: 75,
    expectedCompletion: "March 2026",
    units: "24 Units",
    description: "Premium residential apartments with modern amenities, offering breathtaking views of the city skyline. Features include smart home automation, luxury finishes, and world-class facilities.",
    features: ["Swimming Pool", "Gym", "24/7 Security", "Club House", "Children's Play Area", "Power Backup"],
    startDate: "January 2025",
    projectType: "Residential Apartments"
  },
  { 
    image: "/porject-images/e11.png", 
    title: "Green Valley Villas", 
    location: "Kompally",
    progress: 45,
    expectedCompletion: "June 2026",
    units: "12 Villas",
    description: "Exclusive gated community featuring independent villas with private gardens. Each villa is designed with eco-friendly materials and sustainable living in mind.",
    features: ["Private Garden", "Home Automation", "Solar Panels", "Rainwater Harvesting", "Security Gates", "Landscaped Roads"],
    startDate: "May 2025",
    projectType: "Independent Villas"
  },
  { 
    image: "/porject-images/e12.png", 
    title: "Business Hub Tower", 
    location: "HITEC City",
    progress: 60,
    expectedCompletion: "April 2026",
    units: "Commercial",
    description: "State-of-the-art commercial complex designed for modern businesses. Prime location in IT corridor with excellent connectivity and premium office spaces.",
    features: ["High-speed Elevators", "Central AC", "Cafeteria", "Conference Rooms", "Parking", "Fire Safety Systems"],
    startDate: "March 2025",
    projectType: "Commercial Complex"
  },
  { 
    image: "/porject-images/e13.png", 
    title: "Lakeside Apartments", 
    location: "Kukatpally",
    progress: 30,
    expectedCompletion: "August 2026",
    units: "36 Units",
    description: "Serene lakeside living with premium 2 and 3 BHK apartments. Wake up to stunning lake views and enjoy resort-style amenities at affordable prices.",
    features: ["Lake View", "Jogging Track", "Multi-purpose Hall", "Indoor Games", "Visitor Parking", "Intercom Facility"],
    startDate: "July 2025",
    projectType: "Residential Apartments"
  },
];

// Generate image paths (e1.png to e27.png, excluding e8.png)
const projectImages = Array.from({ length: 27 }, (_, i) => `/porject-images/e${i + 1}.png`).filter(img => img !== '/porject-images/e8.png');

// Video paths (v1.mp4 to v5.mp4)
const projectVideos = Array.from({ length: 5 }, (_, i) => `/project-videos/v${i + 1}.mp4`);

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<OngoingProject | null>(null);

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
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Hammer size={16} className="animate-pulse" />
              Under Construction
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ongoing <span className="text-primary">Projects</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Explore our current construction projects and see the progress of your future dream home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingProjects.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.4, delay: index * 0.1 }} 
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/50 bg-white/5 backdrop-blur-sm transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:min-h-[250px]">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    {/* Ongoing badge */}
                    <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 animate-pulse">
                      <Hammer size={14} />
                      <span>Under Construction</span>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                    <h4 className="text-white font-heading font-bold text-xl mb-2">{project.title}</h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-white/70 mb-4">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-secondary" />
                        {project.expectedCompletion}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/60 text-sm">Project Progress</span>
                        <span className="text-white font-bold text-lg">{project.progress}%</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary via-primary to-secondary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>

                    {/* Units info and CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-sm">{project.units}</span>
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="bg-primary/20 hover:bg-primary text-primary hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5"
                      >
                        View Details
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-tertiary border border-white/10 rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} className="text-white" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-1/2 aspect-[4/3]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  {/* Progress overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tertiary to-transparent p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm font-medium">Construction Progress</span>
                      <span className="text-white font-bold text-2xl">{selectedProject.progress}%</span>
                    </div>
                    <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedProject.progress}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[70vh]">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary text-xs font-medium px-3 py-1.5 rounded-full mb-4">
                    <Hammer size={14} />
                    Under Construction
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Project Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <MapPin size={16} />
                        <span className="text-xs text-white/50">Location</span>
                      </div>
                      <p className="text-white font-semibold">{selectedProject.location}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-secondary mb-1">
                        <Building2 size={16} />
                        <span className="text-xs text-white/50">Project Type</span>
                      </div>
                      <p className="text-white font-semibold">{selectedProject.projectType}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-green-400 mb-1">
                        <Calendar size={16} />
                        <span className="text-xs text-white/50">Started</span>
                      </div>
                      <p className="text-white font-semibold">{selectedProject.startDate}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-blue-400 mb-1">
                        <Clock size={16} />
                        <span className="text-xs text-white/50">Expected Completion</span>
                      </div>
                      <p className="text-white font-semibold">{selectedProject.expectedCompletion}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Users size={16} className="text-primary" />
                      Amenities & Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Phone size={16} className="mr-2" />
                        Enquire Now
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-white/30 text-white hover:bg-white/10"
                      onClick={() => setSelectedProject(null)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

