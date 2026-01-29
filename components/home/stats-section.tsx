"use client";

import React from "react";
import StatCard from "@/components/stat-card";
import { companyStats } from "@/lib/stats-data";

export default function StatsSection() {
  return (
    <section className="section-gap-sm bg-tertiary">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyStats.map((stat, index) => (
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
