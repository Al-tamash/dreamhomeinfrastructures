"use client";

import React from "react";
import StatCard from "@/components/stat-card";

// Stats data
const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: new Date().getFullYear() - 2009, suffix: "+", label: "Years Experience" },
  { value: 300, suffix: "+", label: "Happy Families" },
  { value: 50, suffix: "+", label: "Expert Team Members" },
];

export default function StatsSection() {
  return (
    <section className="section-gap-sm bg-dark">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.label} 
              value={stat.value} 
              suffix={stat.suffix} 
              label={stat.label} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
