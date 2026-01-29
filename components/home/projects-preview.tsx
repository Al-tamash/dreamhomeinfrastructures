"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";

// Completed project images
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
];

export default function ProjectsPreviewSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // Desktop: 3 columns
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // Tablet: 2 columns
      } else {
        setItemsPerPage(1); // Mobile: 1 column
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(completedProjects.length / itemsPerPage);

  const getCurrentProjects = useCallback(() => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return completedProjects.slice(start, end);
  }, [currentPage, itemsPerPage]);

  const goToPrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const goToNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      goToPrev();
    } else if (info.offset.x < -threshold) {
      goToNext();
    }
  };

  return (
    <section className="section-gap bg-tertiary">
      <div className="container-custom">
        <SectionHeading 
          eyebrow="Our Portfolio"
          title="See Our Work Across Hyderabad" 
          subtitle="Browse through our recently completed residential and commercial projects" 
        />

        {/* Carousel */}
        <div className="relative">
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

          {/* Projects Grid */}
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
                      



                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Swipe hint */}
          <p className="text-center text-white/40 text-xs mt-4 sm:hidden">
            ← Swipe to see more →
          </p>
        </div>

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
    </section>
  );
}
