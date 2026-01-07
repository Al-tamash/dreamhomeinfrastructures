"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, ShieldAlert, Clock } from "lucide-react";
import SectionHeading from "./section-heading";

const problems = [
  {
    icon: AlertTriangle,
    title: "Unreliable Contractors",
    description: "Tired of contractors who disappear mid-project or don't deliver what they promised?",
  },
  {
    icon: DollarSign,
    title: "Hidden Costs",
    description: "Worried about budgets spiraling out of control with unexpected expenses and hidden charges?",
  },
  {
    icon: ShieldAlert,
    title: "Quality Concerns",
    description: "Concerned about substandard materials being used or poor workmanship going unnoticed?",
  },
  {
    icon: Clock,
    title: "Timeline Delays",
    description: "Projects dragging on for months beyond the deadline, causing stress and extra costs?",
  },
];

export default function ProblemsSection() {
  return (
    <section className="section-gap bg-dark-200">
      <div className="container-custom">
        <SectionHeading
          eyebrow="We Understand"
          title="Building a Home Shouldn't Be Stressful"
          subtitle="These common challenges make construction feel overwhelming. We've solved them all."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-global p-6 group text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <problem.icon size={32} className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-200">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-white/70">
            That's exactly why <span className="text-primary font-semibold">Dream Home Infrastructures</span> exists.
          </p>
          <p className="text-xl text-white font-semibold mt-2">
            We make construction simple, transparent, and stress-free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
