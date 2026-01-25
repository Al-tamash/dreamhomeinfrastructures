"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, MapPin, Hammer, X, Building2, Calendar, Users, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";

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

// Completed project images - 16 for 2 pages of 8
const completedProjects = [
  { image: "/porject-images/e1.png", title: "Modern Villa", location: "Jubilee Hills" },
  { image: "/porject-images/e2.png", title: "Luxury Apartment", location: "Banjara Hills" },
  { image: "/porject-images/e3.png", title: "Commercial Complex", location: "Gachibowli" },
  { image: "/porject-images/e4.png", title: "Residential Tower", location: "Madhapur" },
  { image: "/porject-images/e5.png", title: "Farmhouse", location: "Shamshabad" },
  { image: "/porject-images/e6.png", title: "Duplex Villa", location: "Kondapur" },
  { image: "/porject-images/e7.png", title: "Premium Apartment", location: "Hitech City" },
  { image: "/porject-images/e9.png", title: "Independent House", location: "Miyapur" },
  { image: "/porject-images/e10.png", title: "Luxury Villa", location: "Financial District" },
  { image: "/porject-images/e11.png", title: "Garden Home", location: "Kompally" },
  { image: "/porject-images/e12.png", title: "Office Complex", location: "HITEC City" },
  { image: "/porject-images/e13.png", title: "Lake View Apartment", location: "Kukatpally" },
  { image: "/porject-images/e14.png", title: "Modern Residence", location: "Manikonda" },
  { image: "/porject-images/e15.png", title: "Penthouse Suite", location: "Banjara Hills" },
  { image: "/porject-images/e16.png", title: "Classic Villa", location: "Jubilee Hills" },
  { image: "/porject-images/e17.png", title: "Contemporary Home", location: "Gachibowli" },
];

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

const tabs = [
  { id: "completed", label: "Completed Projects", icon: CheckCircle2 },
  { id: "ongoing", label: "Ongoing Projects", icon: Hammer },
];

export default function ProjectsPreviewSection() {
  const [activeTab, setActiveTab] = useState("completed");
  const [selectedProject, setSelectedProject] = useState<OngoingProject | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [ongoingCurrentPage, setOngoingCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [ongoingItemsPerPage, setOngoingItemsPerPage] = useState(2);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // Desktop: 3 columns, 1 row
        setOngoingItemsPerPage(2); // Desktop: 2 columns, 1 row
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // Tablet: 2 columns, 1 row
        setOngoingItemsPerPage(1); // Tablet: 1 column, 1 row
      } else {
        setItemsPerPage(1); // Mobile: 1 column, 1 row
        setOngoingItemsPerPage(1); // Mobile: 1 column, 1 row
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Calculate total pages for completed projects
  const totalPages = Math.ceil(completedProjects.length / itemsPerPage);
  // Calculate total pages for ongoing projects
  const ongoingTotalPages = Math.ceil(ongoingProjects.length / ongoingItemsPerPage);

  // Get current page completed projects
  const getCurrentProjects = useCallback(() => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return completedProjects.slice(start, end);
  }, [currentPage, itemsPerPage]);

  // Get current page ongoing projects
  const getCurrentOngoingProjects = useCallback(() => {
    const start = ongoingCurrentPage * ongoingItemsPerPage;
    const end = start + ongoingItemsPerPage;
    return ongoingProjects.slice(start, end);
  }, [ongoingCurrentPage, ongoingItemsPerPage]);

  const goToPrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const goToNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const goToOngoingPrev = useCallback(() => {
    setOngoingCurrentPage((prev) => (prev - 1 + ongoingTotalPages) % ongoingTotalPages);
  }, [ongoingTotalPages]);

  const goToOngoingNext = useCallback(() => {
    setOngoingCurrentPage((prev) => (prev + 1) % ongoingTotalPages);
  }, [ongoingTotalPages]);

  // Handle swipe gestures for completed
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      goToPrev();
    } else if (info.offset.x < -threshold) {
      goToNext();
    }
  };

  // Handle swipe gestures for ongoing
  const handleOngoingDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      goToOngoingPrev();
    } else if (info.offset.x < -threshold) {
      goToOngoingNext();
    }
  };

  return (
    <section className="section-gap bg-tertiary">
      <div className="container-custom">
        <SectionHeading 
          eyebrow="Our Portfolio"
          title="See Our Work Across Hyderabad" 
          subtitle="Browse through our recently completed and ongoing residential and commercial projects" 
        />

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1.5 border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setCurrentPage(0); }}
                className={`relative flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <tab.icon size={16} className="relative z-10 sm:w-[18px] sm:h-[18px]" />
                <span className="relative z-10 hidden sm:inline">{tab.label}</span>
                <span className="relative z-10 sm:hidden">{tab.id === "completed" ? "Completed" : "Ongoing"}</span>
                {tab.id === "ongoing" && (
                  <span className="relative z-10 bg-secondary text-tertiary text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full">
                    {ongoingProjects.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "completed" ? (
            <motion.div
              key="completed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 lg:-translate-x-5 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
                aria-label="Previous projects"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 lg:translate-x-5 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
                aria-label="Next projects"
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>

              {/* Projects Grid with Swipe */}
              <div className="overflow-hidden px-4 sm:px-6 lg:px-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 cursor-grab active:cursor-grabbing"
                  >
                    {getCurrentProjects().map((project, index) => (
                      <motion.div 
                        key={`${project.image}-${index}`} 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.4, delay: index * 0.05 }} 
                        className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="relative aspect-[4/3]">
                          <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110" 
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Completed badge */}
                          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-green-500/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-0.5 sm:gap-1">
                            <CheckCircle2 size={10} className="sm:w-3 sm:h-3" />
                            <span>Completed</span>
                          </div>

                          {/* Project info on hover */}
                          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h4 className="text-white font-semibold text-xs sm:text-sm">{project.title}</h4>
                            <p className="text-white/70 text-[10px] sm:text-xs flex items-center gap-1 mt-0.5 sm:mt-1">
                              <MapPin size={10} className="sm:w-3 sm:h-3" />
                              {project.location}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Swipe hint for mobile */}
              <p className="text-center text-white/40 text-xs mt-4 sm:hidden">
                ← Swipe to see more →
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="ongoing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Navigation Arrows for Ongoing */}
              <button
                onClick={goToOngoingPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 lg:-translate-x-5 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
                aria-label="Previous ongoing project"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>
              
              <button
                onClick={goToOngoingNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 lg:translate-x-5 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
                aria-label="Next ongoing project"
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>

              {/* Ongoing Projects Grid with Swipe */}
              <div className="overflow-hidden px-4 sm:px-6 lg:px-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={ongoingCurrentPage}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleOngoingDragEnd}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 cursor-grab active:cursor-grabbing"
                  >
                    {getCurrentOngoingProjects().map((project, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.4, delay: index * 0.1 }} 
                        className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-primary/50 bg-white/5 backdrop-blur-sm transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Image */}
                          <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:min-h-[200px]">
                            <Image 
                              src={project.image} 
                              alt={project.title} 
                              fill 
                              className="object-cover transition-transform duration-500 group-hover:scale-105" 
                            />
                            {/* Ongoing badge */}
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-1.5 animate-pulse">
                              <Hammer size={12} className="sm:w-[14px] sm:h-[14px]" />
                              <span>Under Construction</span>
                            </div>
                          </div>

                          {/* Project details */}
                          <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-center">
                            <h4 className="text-white font-heading font-bold text-lg sm:text-xl mb-2">{project.title}</h4>
                            
                            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
                              <span className="flex items-center gap-1 sm:gap-1.5">
                                <MapPin size={12} className="sm:w-[14px] sm:h-[14px] text-primary" />
                                {project.location}
                              </span>
                              <span className="flex items-center gap-1 sm:gap-1.5">
                                <Clock size={12} className="sm:w-[14px] sm:h-[14px] text-secondary" />
                                {project.expectedCompletion}
                              </span>
                            </div>

                            {/* Progress bar */}
                            <div className="mb-3">
                              <div className="flex justify-between items-center mb-1 sm:mb-2">
                                <span className="text-white/60 text-xs sm:text-sm">Project Progress</span>
                                <span className="text-white font-bold text-base sm:text-lg">{project.progress}%</span>
                              </div>
                              <div className="h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                  className="h-full bg-gradient-to-r from-primary via-primary to-secondary rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${project.progress}%` }}
                                  transition={{ duration: 1, delay: index * 0.2 }}
                                  viewport={{ once: true }}
                                />
                              </div>
                            </div>

                            {/* Units info */}
                            <div className="flex items-center justify-between">
                              <span className="text-white/50 text-xs sm:text-sm">{project.units}</span>
                              <button 
                                onClick={() => setSelectedProject(project)}
                                className="text-primary hover:text-secondary text-xs sm:text-sm font-medium transition-colors flex items-center gap-1"
                              >
                                View Details
                                <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Swipe hint for mobile */}
              <p className="text-center text-white/40 text-xs mt-4 lg:hidden">
                ← Swipe to see more →
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/projects">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-primary hover:border-primary hover:text-white text-sm sm:text-base"
            >
              View All Projects 
              <ArrowRight size={16} className="ml-2 sm:w-[18px] sm:h-[18px]" />
            </Button>
          </Link>
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


