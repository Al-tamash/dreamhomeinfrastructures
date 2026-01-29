"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqsData } from "@/lib/plotting-data";
import SectionHeading from "@/components/section-heading";

export default function PlottingFAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="section-padding bg-tertiary">
      <div className="container-custom">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Common questions about land development answered" 
        />
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className="font-heading font-bold text-white pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-secondary flex-shrink-0 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-white/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
