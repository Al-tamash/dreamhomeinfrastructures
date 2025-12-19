"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Shield, Clock, Users, CheckCircle, ArrowRight, Phone } from "lucide-react";

const trustBadges = [
  { icon: Award, title: "GHMC Licensed", value: "BL/2149/2012", description: "Government approved contractor" },
  { icon: Clock, title: "Experience", value: "12+ Years", description: "Industry experience since 2012" },
  { icon: Users, title: "Projects", value: "500+", description: "Successfully completed projects" },
  { icon: Shield, title: "Quality", value: "100%", description: "Quality assurance guaranteed" },
];

const values = ["Customer-first approach", "Transparent pricing", "Premium quality materials", "Skilled workforce", "Timely completion", "Post-construction support"];

export default function AboutPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-tertiary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071" alt="Construction" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About <span className="text-primary">Dream Home</span> Infrastructures</h1>
            <p className="text-xl text-white/70">Building dreams into reality since 2012. We are Hyderabad&apos;s trusted construction and interior design company.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#000000' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=870" alt="Team meeting" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"><Award size={28} className="text-white" /></div>
                  <div><div className="font-heading text-2xl font-bold text-white">12+ Years</div><div className="text-white/60">Of Excellence</div></div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <SectionHeading title="Who We Are" subtitle="Your trusted partner in construction and interior design" centered={false} />
              <div className="space-y-4 text-white/70">
                <p><strong className="text-white">Dream Home Infrastructures</strong> is a leading construction and interior design company in Hyderabad, established in 2012.</p>
                <p>We have completed over 500 projects, from residential apartments to commercial complexes and luxurious villas.</p>
                <p>We hold GHMC license (BL/2149/2012), ensuring highest standards of safety and quality.</p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} viewport={{ once: true }} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                    <span className="text-sm text-white/70">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6"><Eye size={32} className="text-primary" /></div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70">To be the most trusted construction company in Telangana, known for exceptional quality and innovative designs.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6"><Target size={32} className="text-secondary" /></div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70">To transform architectural dreams into reality through dedication, innovation, and craftsmanship.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#000000' }}>
        <div className="container-custom">
          <SectionHeading title="Our Leadership" subtitle="Meet the visionaries behind Dream Home Infrastructures" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-tertiary to-secondary/20 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"><span className="text-white font-heading text-4xl font-bold">SA</span></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-xl font-bold text-white mb-1">Dr. Sarfaraz Ahmed</h3>
                <p className="text-secondary font-medium mb-3">Director</p>
                <p className="text-sm text-white/60">With over two decades of experience, Dr. Sarfaraz Ahmed leads Dream Home with vision and expertise.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center"><span className="text-white font-heading text-4xl font-bold">UA</span></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-xl font-bold text-white mb-1">Umair Ahmed</h3>
                <p className="text-secondary font-medium mb-3">Managing Director</p>
                <p className="text-sm text-white/60">Umair Ahmed manages operations with precision and dedication, driving the company&apos;s growth.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div key={badge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4"><badge.icon size={28} className="text-primary" /></div>
                <div className="font-heading text-2xl font-bold text-white mb-1">{badge.value}</div>
                <div className="text-secondary font-medium mb-1">{badge.title}</div>
                <div className="text-sm text-white/50">{badge.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><Button size="lg" className="bg-white text-primary hover:bg-white/90">Contact Us <ArrowRight size={18} className="ml-2" /></Button></Link>
            <a href="tel:+918008044008"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary"><Phone size={18} className="mr-2" />Call Now</Button></a>
          </div>
        </div>
      </section>
    </>
  );
}
