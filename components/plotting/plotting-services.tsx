"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle, TrendingUp, ArrowRight } from "lucide-react";
import { developmentServices } from "@/lib/plotting-data";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export default function PlottingServices() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <section className="section-padding bg-tertiary">
      <div className="container-custom">
        <SectionHeading 
          title="Our Layout Development Services" 
          subtitle="Whether you have land within city limits or agricultural land - we develop it into profitable layouts" 
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {developmentServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {service.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <service.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-white/70 mb-4">{service.shortDesc}</p>
                
                {/* Learn More Accordion */}
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full flex items-center justify-between text-secondary hover:text-primary transition-colors mb-4"
                >
                  <span className="font-semibold">Learn More</span>
                  <ChevronDown size={20} className={`transition-transform duration-300 ${expandedService === service.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/60 text-sm mb-4">{service.fullDesc}</p>
                      
                      <h4 className="text-white font-semibold text-sm mb-2">What We Do:</h4>
                      <ul className="space-y-1.5 mb-4">
                        {service.services.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                            <CheckCircle size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-white font-semibold text-sm mb-2">Key Benefits:</h4>
                      <ul className="space-y-1.5 mb-4">
                        {service.benefits.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                            <TrendingUp size={14} className="text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link href="/contact">
                  <Button className="w-full bg-primary/20 hover:bg-primary text-white border border-primary/30">
                    Get Free Consultation <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
