// Server Component - CTA Section
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PlottingCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' 
          }} 
        />
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Have Land? Let&apos;s Develop It Together.
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
          Get a free land evaluation and development proposal. No obligations, just honest advice on your land&apos;s potential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
              Get Free Land Evaluation <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
          <Link href="tel:+918008044008">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Phone size={18} className="mr-2" /> +91 8008044008
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
