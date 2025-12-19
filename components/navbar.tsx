"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { title: "Building Construction", href: "/services/building-construction", items: ["Residential & Apartment Construction", "Commercial Construction", "Villa & Farm House Construction"] },
  { title: "Interior Design", href: "/services/interior-design", items: ["2D Design", "3D Design", "3D Walkthrough"] },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "#", hasDropdown: true },
  { title: "Projects", href: "/projects" },
  { title: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <>
      <div className="bg-black/50 text-white py-2 hidden md:block border-b border-white/10">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+918008044008" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} />+91 8008044008
            </a>
            <a href="mailto:dreamhomeinfrastructures@yahoo.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} />dreamhomeinfrastructures@yahoo.com
            </a>
          </div>
          <div className="text-white/50">GHMC License No: BL/2149/2012</div>
        </div>
      </div>

      <nav className="bg-tertiary/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/10">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/dreamhomelogo(2).png"
                alt="Dream Home Infrastructures Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.title} className="relative">
                  {link.hasDropdown ? (
                    <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                      <button className="flex items-center gap-1 px-4 py-2 text-white font-medium hover:text-primary transition-colors" aria-expanded={servicesOpen}>
                        {link.title}
                        <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 w-72 bg-tertiary rounded-xl shadow-xl border border-white/10 py-4 mt-1">
                            {services.map((service) => (
                              <div key={service.title} className="px-2">
                                <Link href={service.href} className="block px-4 py-2 font-heading font-bold text-white hover:text-primary hover:bg-white/5 rounded-lg transition-colors">{service.title}</Link>
                                <div className="ml-4 border-l-2 border-secondary/30 pl-3 py-1">
                                  {service.items.map((item) => (
                                    <Link key={item} href={service.href} className="block px-3 py-1.5 text-sm text-white/70 hover:text-secondary transition-colors">{item}</Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={link.href} className="px-4 py-2 text-white font-medium hover:text-primary transition-colors">{link.title}</Link>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link href="/contact"><Button size="lg">Get Free Quote</Button></Link>
            </div>

            <button className="lg:hidden p-2 text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="lg:hidden bg-tertiary border-t border-white/10">
              <div className="container-custom py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.title}>
                    {link.hasDropdown ? (
                      <div>
                        <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full px-4 py-3 text-white font-medium hover:text-primary hover:bg-white/5 rounded-lg transition-colors">
                          {link.title}
                          <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="ml-4 space-y-1">
                              {services.map((service) => (
                                <div key={service.title} className="py-2">
                                  <Link href={service.href} className="block px-4 py-2 font-heading font-bold text-secondary" onClick={() => setMobileMenuOpen(false)}>{service.title}</Link>
                                  {service.items.map((item) => (
                                    <Link key={item} href={service.href} className="block px-6 py-1.5 text-sm text-white/60" onClick={() => setMobileMenuOpen(false)}>{item}</Link>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link href={link.href} className="block px-4 py-3 text-white font-medium hover:text-primary hover:bg-white/5 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>{link.title}</Link>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}><Button className="w-full" size="lg">Get Free Quote</Button></Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
