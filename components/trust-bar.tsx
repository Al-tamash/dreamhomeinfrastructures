"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Clock, Phone } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    title: "GHMC Licensed",
    subtitle: "Since 2009",
  },
  {
    icon: Shield,
    title: "300+ Projects",
    subtitle: "Completed",
  },
  {
    icon: Clock,
    title: `${new Date().getFullYear() - 2009}+ Years`,
    subtitle: "Experience",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    subtitle: "Always Available",
  },
];

export default function TrustBar() {
  return (
    <section className="py-8 bg-dark-300 border-y border-white/5">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </div>
                <div className="text-xs text-white/50">{item.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
