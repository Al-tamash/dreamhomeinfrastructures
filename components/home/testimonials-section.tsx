"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/section-heading";

// 6 Testimonials with authentic content
const testimonials = [
  { 
    name: "Mohammed Hussain", 
    role: "Homeowner, Banjara Hills",
    initial: "M",
    content: "Dream Home Infrastructures built our family home exactly as we envisioned. The team was professional, communicated well throughout, and delivered on time. The quality of work exceeded our expectations.", 
    rating: 5 
  },
  { 
    name: "Fatima Khan", 
    role: "Business Owner, Jubilee Hills",
    initial: "F",
    content: "They transformed our office space with incredible attention to detail. What impressed me most was their transparency - no hidden costs, no surprises. Highly recommend for commercial projects.", 
    rating: 5 
  },
  { 
    name: "Syed Rahman", 
    role: "Villa Owner, Shamshabad",
    initial: "S",
    content: "From the 3D walkthrough to final construction, the team made the entire process smooth and stress-free. They handled all the GHMC approvals too. Best decision we made for our farmhouse.", 
    rating: 5 
  },
  { 
    name: "Priya Reddy", 
    role: "Apartment Owner, Gachibowli",
    initial: "P",
    content: "We were skeptical at first, but Dream Home exceeded all expectations. The interior design team understood our vision perfectly and delivered a home that feels truly ours. Worth every rupee!", 
    rating: 5 
  },
  { 
    name: "Ahmed Ali", 
    role: "Plot Owner, Kompally",
    initial: "A",
    content: "Their DTCP plotting venture was transparent from start to finish. Legal documentation was handled professionally, and the plot we purchased has already appreciated in value. Great investment!", 
    rating: 5 
  },
  { 
    name: "Lakshmi Devi", 
    role: "Homeowner, Madhapur",
    initial: "L",
    content: "After three bad experiences with local contractors, Dream Home was a breath of fresh air. On-time delivery, within budget, and the quality is exceptional. My neighbors keep asking for their contact!", 
    rating: 5 
  },
];

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="group bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 relative h-full flex flex-col"
  >
    {/* Quote Icon */}
    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-primary/20">
      <Quote size={32} className="sm:w-10 sm:h-10" />
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-3 sm:mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={14} className="sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    {/* Content */}
    <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic flex-1">
      "{testimonial.content}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 mt-auto">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/80 flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
        {testimonial.initial}
      </div>
      <div className="min-w-0">
        <h4 className="text-white font-semibold text-xs sm:text-sm truncate">{testimonial.name}</h4>
        <p className="text-primary text-[10px] sm:text-xs truncate">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Tablet: 2 cards
      } else {
        setCardsToShow(1); // Mobile: 1 card
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  }, [pauseAutoPlay]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    pauseAutoPlay();
  }, [pauseAutoPlay]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    pauseAutoPlay();
  }, [pauseAutoPlay]);

  // Get visible testimonials based on cards to show
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  // Handle swipe gestures
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      goToPrev();
    } else if (info.offset.x < -threshold) {
      goToNext();
    }
  };

  return (
    <section className="section-gap bg-tertiary overflow-hidden">
      <div className="container-custom">
        <SectionHeading 
          eyebrow="Client Stories"
          title="Real Experiences from Real Homeowners" 
          subtitle="Don't just take our word for it - hear from families who trusted us with their dream homes" 
        />

        {/* Carousel Container */}
        <div className="relative" ref={containerRef}>
          {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-primary rounded-full items-center justify-center text-white transition-all duration-300 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-primary rounded-full items-center justify-center text-white transition-all duration-300 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="lg:w-6 lg:h-6" />
          </button>

          {/* Cards Container with Swipe */}
          <div className="overflow-hidden px-2 sm:px-4 md:px-8 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${cardsToShow}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className={`grid gap-4 sm:gap-6 cursor-grab active:cursor-grabbing ${
                  cardsToShow === 1 
                    ? "grid-cols-1" 
                    : cardsToShow === 2 
                      ? "grid-cols-2" 
                      : "grid-cols-3"
                }`}
              >
                {getVisibleTestimonials().map((testimonial, idx) => (
                  <TestimonialCard 
                    key={`${testimonial.name}-${testimonial.originalIndex}`} 
                    testimonial={testimonial} 
                    index={idx} 
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Arrows - Below cards */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={goToPrev}
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-6 sm:w-8" 
                    : "bg-white/30 hover:bg-white/50 w-2 sm:w-2.5"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe hint for mobile */}
          <p className="text-center text-white/40 text-xs mt-4 md:hidden">
            ← Swipe to see more →
          </p>
        </div>
      </div>
    </section>
  );
}


