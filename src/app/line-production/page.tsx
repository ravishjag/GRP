"use client";

import { FadeInUp } from "@/components/ui/FadeInUp";
import { GoldButton } from "@/components/ui/GoldButton";
import { Map, Users, Film, FileText, DollarSign, Bus, Microscope, Mask } from "lucide-react";

const services = [
  { icon: Map, title: "Location Scouting", description: "Extensive database of locations across AP, Telangana and all Indian states. Permissions handled end-to-end." },
  { icon: Users, title: "Crew Hiring", description: "Access to South India's finest technicians, junior artists, spot boys, assistants and department heads." },
  { icon: Film, title: "Equipment & Logistics", description: "Camera, lighting, grip, sound and transportation arranged with trusted vendors." },
  { icon: FileText, title: "Permissions & Compliance", description: "Government approvals, police permissions, municipal NOCs — all managed by our team." },
  { icon: DollarSign, title: "Budget Planning", description: "Detailed breakdowns with GST-compliant documentation and hassle-free settlement for production companies." },
  { icon: Bus, title: "Transport & Accommodation", description: "Unit vehicles, hotels, catering (crafties) — complete on-ground logistics support." },
  { icon: Microscope, title: "Research & Scheduling", description: "Pre-production research, shoot scheduling and call sheets managed professionally." },
  { icon: Mask, title: "Casting Support", description: "Access to local talent for character roles, extras, and special appearances." },
];

const partnerStudios = [
  "AVM Productions", "Sun Pictures", "Lyca Productions", "Eros International",
  "DVV Entertainment", "Ramanaidu Studios", "Madras Talkies", "SP Productions"
];

export default function LineProductionPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-b from-black via-black/80 to-black-light overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeInUp>
            <h1 className="font-display text-5xl md:text-7xl text-gold mb-4">Line Production Services</h1>
            <p className="font-ui text-gold uppercase tracking-widest text-sm mb-2">Seamless · GST-Compliant · Pan-India</p>
            <p className="font-body text-cream/80 text-lg max-w-2xl mx-auto">
              Your trusted partner for film production across India
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="font-display text-4xl text-gold text-center mb-4">Our Services</h2>
            <p className="font-body text-cream/70 text-center max-w-2xl mx-auto mb-16">
              Comprehensive line production solutions from pre-production to wrap
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <FadeInUp key={service.title} delay={index * 80}>
                <div className="glass-card p-6 h-full card-hover group">
                  <div className="w-14 h-14 border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="text-gold" size={28} />
                  </div>
                  <h3 className="font-display text-lg text-gold mb-3">{service.title}</h3>
                  <p className="font-body text-cream/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Studios */}
      <section className="py-16 bg-black border-y border-gold/20">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <p className="font-ui text-cream/60 text-sm uppercase tracking-wider text-center mb-8">
              We Have Delivered Line Production For
            </p>
          </FadeInUp>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {partnerStudios.map((studio, index) => (
              <FadeInUp key={studio} delay={index * 50}>
                <span className="font-ui text-gold/80 text-lg">{studio}</span>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gold/10 via-black to-gold/5">
        <div className="container mx-auto px-6 text-center">
          <FadeInUp>
            <h2 className="font-display text-4xl md:text-5xl text-gold mb-6">Ready to Shoot in India?</h2>
            <p className="font-body text-cream/80 text-lg max-w-2xl mx-auto mb-10">
              Let us handle the ground work while you focus on the creative vision
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GoldButton href="/contact" size="lg">Hire Us Now</GoldButton>
              <GoldButton 
                href="https://wa.me/919876543210" 
                variant="outline" 
                size="lg"
              >
                WhatsApp Us
              </GoldButton>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
