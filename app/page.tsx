"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Hero from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Building, PenTool, Box, Video, CheckCircle, Users, Award, Clock, Star, Quote, ArrowRight, Phone, MapPin, TreePine, FileCheck } from "lucide-react";

const services = [
  { title: "Residential Construction", description: "Transform your dream home into reality with our expert residential construction services.", icon: Home, href: "/services/building-construction/residential", image: "/services-image/residentialconstruction.png" },
  { title: "Commercial Construction", description: "Professional commercial building solutions for offices, retail spaces, and industrial facilities.", icon: Building2, href: "/services/building-construction/commercial", image: "/services-image/commercialconstruction.png" },
  { title: "Villa & Farm House", description: "Luxurious villa and farmhouse construction with premium materials and contemporary designs.", icon: Building, href: "/services/building-construction/villa", image: "/services-image/villafarmhouse.png" },
  { title: "Architectural Planning", description: "Professional architectural planning with detailed floor plans, elevations, and structural designs.", icon: PenTool, href: "/services/interior-design/architectural-planning", image: "/services-image/Architecturalplanning.png" },
  { title: "3D Perspective", description: "Photorealistic 3D perspective views to visualize your project before construction begins.", icon: Box, href: "/services/interior-design/3d-perspective", image: "/services-image/3DPerspective.png" },
  { title: "3D Walkthrough", description: "Immersive virtual tours of your future space with cutting-edge technology.", icon: Video, href: "/services/interior-design/3d-walkthrough", image: "/services-image/3DWalkthrough.png" },
  { title: "HMDA Plots", description: "Government approved HMDA plots with 100% legal titles and bank loan eligibility.", icon: MapPin, href: "/services/plotting-venture/hmda", image: "/services-image/HMDAPlots.png" },
  { title: "DTCP Plots", description: "Affordable DTCP approved plots in emerging locations with high appreciation potential.", icon: FileCheck, href: "/services/plotting-venture/dtcp", image: "/services-image/DTCPPlots.png" },
  { title: "Farm Plots", description: "Premium farm land near Hyderabad for weekend getaways and long-term investment.", icon: TreePine, href: "/services/plotting-venture/farm-plots", image: "/services-image/FarmPlots.png" },
];

const whyChooseUs = [
  { icon: Award, title: "GHMC Licensed", description: "Fully licensed and government approved contractor since 2009" },
  { icon: Clock, title: "Timely Delivery", description: "We complete projects on time without compromising quality" },
  { icon: Users, title: "Expert Team", description: "Skilled architects, engineers, and craftsmen at your service" },
  { icon: CheckCircle, title: "Quality Assured", description: "Premium materials and rigorous quality checks on all projects" },
];

const testimonials = [
  { name: "Mohammed Hussain", role: "Homeowner", content: "Dream Home Infrastructures built our family home, and we couldn't be happier. The quality of work exceeded expectations.", rating: 5 },
  { name: "Fatima Khan", role: "Business Owner", content: "They transformed our office space with incredible interior design. Professional team and amazing results!", rating: 5 },
  { name: "Syed Rahman", role: "Villa Owner", content: "From 3D walkthrough to final construction, the team made the entire process smooth and stress-free.", rating: 5 },
];

const projectsPreview = [
  { image: "/porject-images/e1.png" },
  { image: "/porject-images/e2.png" },
  { image: "/porject-images/e3.png" },
  { image: "/porject-images/e4.png" },
  { image: "/porject-images/e5.png" },
  { image: "/porject-images/e6.png" },
  { image: "/porject-images/e7.png" },
  { image: "/porject-images/e9.png" },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 50;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) { setCount(value); clearInterval(timer); }
        else { setCount(Math.floor(current)); }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <SectionHeading title="Our Services" subtitle="Comprehensive construction and interior design solutions tailored to your needs" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (<ServiceCard key={service.title} {...service} index={index} />))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=876" alt="Construction team" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <div className="font-heading text-4xl font-bold">{new Date().getFullYear() - 2009}+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </motion.div>

            <div>
              <SectionHeading title="Why Choose Us?" subtitle="We bring expertise, reliability, and excellence to every project" centered={false} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                      <item.icon size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ value: 50, suffix: "+", label: "Projects Completed" }, { value: new Date().getFullYear() - 2009, suffix: "+", label: "Years Experience" }, { value: 300, suffix: "+", label: "Happy Clients" }, { value: 50, suffix: "+", label: "Expert Team" }].map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <SectionHeading title="Our Projects" subtitle="Explore our recently completed construction and interior projects" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projectsPreview.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.4, delay: index * 0.05 }} 
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/10"
              >
                <div className="relative aspect-[4/3]">
                  <Image 
                    src={project.image} 
                    alt={`Project ${index + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-tertiary">View All Projects <ArrowRight size={18} className="ml-2" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-dark-200">
        <div className="container-custom">
          <SectionHeading title="What Our Clients Say" subtitle="Don't just take our word for it - hear from our satisfied clients" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative">
                <Quote size={40} className="absolute top-6 right-6 text-secondary/20" />
                <div className="flex gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />))}</div>
                <p className="text-white/70 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-heading font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-secondary">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-tertiary">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          >
            {/* Google Rating Badge */}
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-10 h-10">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-white">4.9</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-white/60 text-sm">Based on 50+ Google Reviews</p>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="flex items-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-white/60 text-sm">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{new Date().getFullYear() - 2009}+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
                <div className="text-white/60 text-sm">Quality Assured</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Build Your Dream Home?</h2>
            <p className="text-xl text-white/90 mb-8">Contact us today for a free consultation and quote!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><Button size="lg" className="bg-white text-secondary hover:bg-white/90">Get Free Quote <ArrowRight size={18} className="ml-2" /></Button></Link>
              <a href="tel:+918008044008"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary"><Phone size={18} className="mr-2" />+91 8008044008</Button></a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
