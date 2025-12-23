import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact Us", href: "/contact" },
];

const services = [
  { title: "Building Construction", href: "/services/building-construction" },
  { title: "Interior Design", href: "/services/interior-design" },
  { title: "Residential Construction", href: "/services/building-construction" },
  { title: "Commercial Construction", href: "/services/building-construction" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-dark/50 text-white border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div>
              <Image
                src="/images/dreamhomelogo (5).png"
                alt="Dream Home Infrastructures Logo"
                width={150}
                height={60}
                className="object-contain "
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">Building your dreams into reality since 2012. We are a trusted construction and interior design company in Hyderabad.</p>                   
            <div className="flex items-center gap-2 text-sm text-secondary">
              <span className="font-semibold">GHMC License:</span>
              <span>BL/2149/2012</span>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="flex items-center gap-2 text-white/60 hover:text-secondary transition-colors group">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="flex items-center gap-2 text-white/60 hover:text-secondary transition-colors group">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://maps.google.com/?q=Mehdipatnam,Hyderabad" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/60 hover:text-secondary transition-colors">
                  <MapPin size={18} className="mt-1 flex-shrink-0 text-primary" />
                  <span className="text-sm">H.No:12-2-260/2, Mehdipatnam, Hyderabad</span>
                </a>
              </li>
              <li>
                <a href="tel:+918008044008" className="flex items-center gap-3 text-white/60 hover:text-secondary transition-colors">
                  <Phone size={18} className="flex-shrink-0 text-primary" />
                  <span className="text-sm">+91 8008044008</span>
                </a>
              </li>
              <li>
                <a href="tel:+917799977792" className="flex items-center gap-3 text-white/60 hover:text-secondary transition-colors">
                  <Phone size={18} className="flex-shrink-0 text-primary" />
                  <span className="text-sm">+91 7799977792</span>
                </a>
              </li>
              <li>
                <a href="mailto:dreamhomeinfrastructures@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-secondary transition-colors">
                  <Mail size={18} className="flex-shrink-0 text-primary" />
                  <span className="text-sm break-all">dreamhomeinfrastructures@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Dream Home Infrastructures. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p><span className="text-secondary">Director:</span> Dr. Sarfaraz Ahmed</p>
            <span className="hidden md:inline">|</span>
            <p><span className="text-secondary">Managing Director:</span> Umair Ahmed</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
