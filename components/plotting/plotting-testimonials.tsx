"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "@/lib/plotting-data";
import SectionHeading from "@/components/section-heading";

export default function PlottingTestimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <section className="section-padding bg-tertiary overflow-hidden">
      <div className="container-custom">
        <SectionHeading 
          title="What Landowners Say" 
          subtitle="Real experiences from landowners who trusted us with their development" 
        />
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={() => setTestimonialIndex(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-primary rounded-full items-center justify-center text-white transition-all duration-300 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
          </button>
          
          <button
            onClick={() => setTestimonialIndex(prev => (prev + 1) % testimonialsData.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-primary rounded-full items-center justify-center text-white transition-all duration-300 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="lg:w-6 lg:h-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-2 sm:px-4 md:px-8 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {/* Show 3 testimonials at a time */}
                {[0, 1, 2].map((offset) => {
                  const index = (testimonialIndex + offset) % testimonialsData.length;
                  const testimonial = testimonialsData[index];
                  return (
                    <motion.div
                      key={`${testimonial.name}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: offset * 0.1 }}
                      className={`group p-5 sm:p-6 transition-all duration-300 relative h-full flex flex-col ${
                        offset > 0 ? 'hidden md:flex' : ''
                      } ${offset > 1 ? 'lg:flex md:hidden' : ''}`}
                    >
                      {/* Quote Icon - Watermark */}
                      <div className="absolute top-0 right-0 text-primary/10">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic flex-1">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 mt-auto pt-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/80 flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-white font-semibold text-xs sm:text-sm truncate">{testimonial.name}</h4>
                          <p className="text-primary text-[10px] sm:text-xs truncate">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Arrows - Below cards */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={() => setTestimonialIndex(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setTestimonialIndex(prev => (prev + 1) % testimonialsData.length)}
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
