"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, CircleDollarSign, Star, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: Bot,
    title: "Unreliable Contractors",
    description: "Finding a trustworthy contractor feels impossible. Many disappear mid-project or fail to deliver on their promises.",
  },
  {
    icon: CircleDollarSign,
    title: "Hidden Costs",
    description: "Unexpected expenses keep piling up. What started as a fixed budget turns into a financial nightmare.",
  },
  {
    icon: Star,
    title: "Quality Concerns",
    description: "Compromised materials and poor workmanship often go unnoticed until it's too late to fix.",
  },
  {
    icon: Timer,
    title: "Timeline Delays",
    description: "Projects stretch for months beyond the deadline, adding stress and eating into your savings.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="section-gap bg-tertiary">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Building a Home<br />
            Shouldn't Be Stressful
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            These common challenges make construction feel overwhelming.<br />
            We've solved them all.
          </p>
        </motion.div>

        {/* 2x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#1a2234] hover:bg-[#1e2840] border border-white/5 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <problem.icon size={24} className="text-primary" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-200">
                    {problem.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/70 text-lg mb-6">
            That's why we do things differently at <span className="text-primary font-semibold">Dream Home Infrastructures</span>
          </p>
          <Link href="/about">
            <Button 
              size="default" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-sm font-medium rounded-full"
            >
              See How We Solve These Problems
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

