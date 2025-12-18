"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "Phone", details: ["+91 8008044008", "+91 7799977792"], href: "tel:+918008044008" },
  { icon: Mail, title: "Email", details: ["dreamhomeinfrastructures@yahoo.com"], href: "mailto:dreamhomeinfrastructures@yahoo.com" },
  { icon: MapPin, title: "Address", details: ["H.No:12-2-260/2, Mehdipatnam,", "Hyderabad, Telangana"], href: "https://maps.google.com/?q=Mehdipatnam,Hyderabad" },
  { icon: Clock, title: "Working Hours", details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"], href: null },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-tertiary">
        <div className="absolute inset-0 opacity-20"><Image src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=874" alt="Contact" fill className="object-cover" /></div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Contact <span className="text-primary">Us</span></h1>
            <p className="text-xl text-white/70">Get in touch with us to discuss your construction or interior design project.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'rgb(35, 35, 35)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="font-heading text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-white/60 mb-8">Have a project in mind? Reach out to us for a free consultation. Our team is ready to help you build your dream.</p>
              </motion.div>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0"><item.icon size={24} className="text-secondary" /></div>
                    <div>
                      <h4 className="font-heading font-bold text-white mb-1">{item.title}</h4>
                      {item.details.map((detail, i) => (
                        item.href ? (<a key={i} href={item.href} className="block text-white/60 hover:text-secondary transition-colors">{detail}</a>) : (<p key={i} className="text-white/60">{detail}</p>)
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-6 border border-white/10">
                <h4 className="font-heading font-bold text-white mb-2">GHMC Licensed Contractor</h4>
                <p className="text-white/60">License No: <span className="font-semibold text-secondary">BL/2149/2012</span></p>
              </motion.div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="pb-16 bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-white/10 h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0088574738886!2d78.4385!3d17.3950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97c6c7b6b1ef%3A0x8c8c8c8c8c8c8c8c!2sMehdipatnam%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Dream Home Infrastructures Location" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
