"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-3">Thank You!</h3>
        <p className="text-white/70 mb-6">Your message has been sent successfully. Our team will contact you within 24 hours.</p>
        <Button onClick={() => { setIsSubmitted(false); setFormData({ name: "", phone: "", email: "", message: "" }); }} variant="outline">Send Another Message</Button>
      </motion.div>
    );
  }

  return (
    <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      <h3 className="font-heading text-2xl font-bold text-white mb-6">Send Us a Message</h3>
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Full Name *</label>
          <Input id="name" name="name" type="text" required placeholder="Enter your full name" value={formData.name} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">Phone Number *</label>
          <Input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
          <Input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Your Message *</label>
          <Textarea id="message" name="message" required placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} rows={4} className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
        </div>
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (<><span className="animate-spin mr-2">⏳</span>Sending...</>) : (<>Send Message<Send size={18} className="ml-2" /></>)}
        </Button>
      </div>
    </motion.form>
  );
}
