"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, MapPin, Hammer, X, Building2, Calendar, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";


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
  category: string; // For the badge
  brochureUrl?: string;
  status?: 'active' | 'upcoming';
}

// Ongoing projects with progress
const ongoingProjects: OngoingProject[] = [
  { 
    image: "/images/DHI-Towers.jpeg", 
    title: "DHI Towers", 
    location: "Diamond Hills",
    progress: 75,
    expectedCompletion: "Dec 2026",
    units: "High-Rise Apts",
    description: "Premium residential towers offering panoramic views of Diamond Hills. Designed for modern living with state-of-the-art amenities and connectivity.",
    features: ["Sky Lounge", "Infinity Pool", "24/7 Security", "Club House", "Smart Home Ready", "EV Charging"],
    startDate: "January 2025",
    projectType: "High-Rise Residential",
    category: "Apartments",
    status: 'active',
    brochureUrl: "/mr-omair-brochure .pdf"
  },
  { 
    image: "/porject-images/e11.png", 
    title: "DHI Kohinoor", 
    location: "Kohinoor Enclave",
    progress: 45,
    expectedCompletion: "June 2027",
    units: "Luxury Villas",
    description: "An exclusive enclave of luxury villas designed for the elite. Experience privacy, space, and opulence in the heart of Kohinoor Enclave.",
    features: ["Private Gardens", "Home Theater", "Solar Powered", "Double Height Living", "Concierge Service"],
    startDate: "May 2025",
    projectType: "Gated Community",
    category: "Villas",
    status: 'active'
  },
  { 
    image: "/porject-images/e12.png", 
    title: "DHI Luxe Crest", 
    location: "Narsingi, Kokapet",
    progress: 0,
    expectedCompletion: "Coming Soon",
    units: "Ultra-Luxury",
    description: "Upcoming ultra-luxury project in the prime location of Narsingi, Kokapet. Redefining skyline living.",
    features: ["Coming Soon"],
    startDate: "Coming Soon",
    projectType: "Ultra-Luxury",
    category: "Upcoming",
    status: 'upcoming'
  },
  { 
    image: "/porject-images/e13.png", 
    title: "DTCP / Farm Plots", 
    location: "Govindapur, Zaheerabad",
    progress: 0,
    expectedCompletion: "Coming Soon",
    units: "Premium Plots",
    description: "Premium investment opportunity in Govindapur, Zaheerabad. DTCP approved farm plots perfect for your weekend getaway or long-term investment.",
    features: ["Coming Soon"],
    startDate: "Coming Soon",
    projectType: "Farm Plots",
    category: "Plots",
    status: 'upcoming'
  },
];

interface OngoingProjectsSectionProps {
  className?: string;
}

export default function OngoingProjectsSection({ className = "" }: OngoingProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<OngoingProject | null>(null);

  return (
    <section className={`section-gap bg-tertiary ${className}`}>
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary text-xs font-medium px-4 py-2 rounded-full mb-4">
            <Hammer size={14} />
            Under Construction
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ongoing <span className="text-primary">Projects</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Explore our current construction projects and see the progress of your future dream home
          </p>
        </motion.div>

        {/* Projects Grid - All 4 at once */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ongoingProjects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              whileInView={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ duration: 0.4, delay: index * 0.1 }} 
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-2xl shadow-black/50"
            >
              {/* Image Only Card */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className={`object-cover transition-transform duration-700 ${project.status === 'upcoming' ? 'grayscale opacity-60' : 'group-hover:scale-110'}`} 
                />
                
                {/* Gradient overlay */}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                
                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-10 flex flex-col items-center text-center">
                  <div className="flex flex-col items-center gap-1 mb-3">
                    <h4 className="text-white font-heading font-bold text-xl sm:text-2xl md:text-3xl leading-tight">
                      {project.title}
                    </h4>
                    <p className="text-blue-400 font-medium text-xs sm:text-sm flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </p>
                  </div>
                  
                  {project.brochureUrl ? (
                    <a 
                      href={project.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-auto backdrop-blur-md text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-1 bg-white/10 hover:bg-primary/90 text-white border border-white/20 hover:border-primary/90"
                    >
                      View Details
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  ) : (
                    <button 
                      onClick={() => project.status !== 'upcoming' && setSelectedProject(project)}
                      disabled={project.status === 'upcoming'}
                      className={`w-auto backdrop-blur-md text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-1 ${
                        project.status === 'upcoming' 
                          ? 'bg-white/5 text-white/40 cursor-not-allowed border-white/5' 
                          : 'bg-white/10 hover:bg-primary/90 text-white border border-white/20 hover:border-primary/90'
                      }`}
                    >
                      {project.status === 'upcoming' ? (
                        <>
                          <Clock size={12} />
                          Loading...
                        </>
                      ) : (
                        <>
                          View Details
                          <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-tertiary border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={16} className="sm:w-5 sm:h-5 text-white" />
              </button>

              <div className="flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
                {/* Image */}
                <div className="relative w-full md:w-1/2 aspect-[4/3] flex-shrink-0">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  {/* Progress overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tertiary to-transparent p-3 sm:p-4">
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className="text-white/80 text-xs sm:text-sm font-medium">Construction Progress</span>
                      <span className="text-white font-bold text-xl sm:text-2xl">{selectedProject.progress}%</span>
                    </div>
                    <div className="h-3 sm:h-4 bg-white/20 rounded-full overflow-hidden">
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
                <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/20 text-primary text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
                    <Hammer size={12} className="sm:w-[14px] sm:h-[14px]" />
                    Under Construction
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>

                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Project Info Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-white/5 rounded-lg sm:rounded-xl p-2.5 sm:p-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-primary mb-0.5 sm:mb-1">
                        <MapPin size={12} className="sm:w-4 sm:h-4" />
                        <span className="text-[10px] sm:text-xs text-white/50">Location</span>
                      </div>
                      <p className="text-white font-semibold text-xs sm:text-base">{selectedProject.location}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg sm:rounded-xl p-2.5 sm:p-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-secondary mb-0.5 sm:mb-1">
                        <Building2 size={12} className="sm:w-4 sm:h-4" />
                        <span className="text-[10px] sm:text-xs text-white/50">Project Type</span>
                      </div>
                      <p className="text-white font-semibold text-xs sm:text-base">{selectedProject.projectType}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg sm:rounded-xl p-2.5 sm:p-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-green-400 mb-0.5 sm:mb-1">
                        <Calendar size={12} className="sm:w-4 sm:h-4" />
                        <span className="text-[10px] sm:text-xs text-white/50">Started</span>
                      </div>
                      <p className="text-white font-semibold text-xs sm:text-base">{selectedProject.startDate}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg sm:rounded-xl p-2.5 sm:p-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-blue-400 mb-0.5 sm:mb-1">
                        <Clock size={12} className="sm:w-4 sm:h-4" />
                        <span className="text-[10px] sm:text-xs text-white/50">Expected</span>
                      </div>
                      <p className="text-white font-semibold text-xs sm:text-base">{selectedProject.expectedCompletion}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                      <Users size={14} className="sm:w-4 sm:h-4 text-primary" />
                      Amenities & Features
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-white/10 text-white/80 text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm">
                        <Phone size={14} className="mr-1.5 sm:mr-2 sm:w-4 sm:h-4" />
                        Enquire Now
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm"
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
    </section>
  );
}
