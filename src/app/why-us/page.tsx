"use client";

import { FadeInUp } from "@/components/ui/FadeInUp";
import { GoldButton } from "@/components/ui/GoldButton";
import { Trophy, CheckCircle, Globe, Award, FileCheck } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: Trophy,
    title: "30+ Years of Experience",
    description: "From 1994 to today — unmatched depth of film production knowledge across languages and formats",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "End-to-End Execution",
    description: "From research and scheduling to wrap — we handle every production element",
  },
  {
    number: "03",
    icon: Globe,
    title: "Pan-India Network",
    description: "Established relationships with vendors, crew, government bodies and studios across all Indian states",
  },
  {
    number: "04",
    icon: Award,
    title: "Trusted Industry Presence",
    description: "Worked with Rajinikanth, Shankar, Mani Ratnam, and India's top studios — the industry trusts us",
  },
  {
    number: "05",
    icon: FileCheck,
    title: "GST-Compliant Operations",
    description: "Hassle-free GST settlements for production companies — clean, transparent, professional",
  },
];

const stats = [
  { value: "100+", label: "Films" },
  { value: "5+", label: "Languages" },
  { value: "30", label: "Years" },
  { value: "Pan-India", label: "Coverage" },
  { value: "GST", label: "Compliant" },
];

export default function WhyUsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-b from-black via-black/90 to-black-light">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeInUp>
            <h1 className="font-display text-5xl md:text-7xl text-gold mb-4">Why Us</h1>
            <p className="font-ui text-gold uppercase tracking-widest text-sm">The Golden Rain Advantage</p>
          </FadeInUp>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-black-light border-b border-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <FadeInUp key={stat.label} delay={index * 50}>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl text-gold mb-1">{stat.value}</div>
                  <div className="font-ui text-xs uppercase tracking-wider text-cream/60">{stat.label}</div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="font-display text-4xl text-gold text-center mb-4">Five Pillars of Excellence</h2>
            <p className="font-body text-cream/70 text-center max-w-2xl mx-auto mb-16">
              What sets Golden Rain Productions apart from the rest
            </p>
          </FadeInUp>

          <div className="space-y-8 max-w-5xl mx-auto">
            {pillars.map((pillar, index) => (
              <FadeInUp key={pillar.number} delay={index * 100}>
                <div className="glass-card p-8 card-hover group">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex items-start gap-6 flex-1">
                      <div className="font-display text-6xl text-gold/20 group-hover:text-gold/40 transition-colors">
                        {pillar.number}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <pillar.icon className="text-gold" size={24} />
                          <h3 className="font-display text-2xl text-gold">{pillar.title}</h3>
                        </div>
                        <p className="font-body text-cream/80 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <div className="aspect-video bg-gradient-to-br from-gold/20 to-gold/5 rounded-sm border border-gold/20 flex items-center justify-center">
                <Trophy className="text-gold/30" size={120} />
              </div>
            </FadeInUp>

            <FadeInUp delay={200}>
              <h2 className="font-display text-4xl text-gold mb-6">A Legacy of Excellence</h2>
              <div className="space-y-4 font-body text-cream/80 text-lg leading-relaxed">
                <p>
                  For over three decades, Golden Rain Productions has been the backbone of India's most ambitious film projects. Our journey from line production to full-scale production reflects our commitment to excellence at every level.
                </p>
                <p>
                  We've worked with the biggest names in Indian cinema — from Rajinikanth to Mani Ratnam, from AVM to Sun Pictures. Every film, every collaboration has strengthened our expertise and expanded our network.
                </p>
                <p>
                  Today, as we produce our own films like Khudiram Bose and develop upcoming projects like 1984, we bring the same dedication to execution that made us the industry's trusted line production partner.
                </p>
              </div>
              <div className="mt-8">
                <GoldButton href="/about">Our Story</GoldButton>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gold/10 via-black to-gold/5">
        <div className="container mx-auto px-6 text-center">
          <FadeInUp>
            <h2 className="font-display text-4xl md:text-5xl text-gold mb-6">Ready to Work with Us?</h2>
            <p className="font-body text-cream/80 text-lg max-w-2xl mx-auto mb-10">
              Experience the Golden Rain difference on your next project
            </p>
            <GoldButton href="/contact" size="lg">Get in Touch</GoldButton>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
