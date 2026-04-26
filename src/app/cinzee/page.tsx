"use client";

import { FadeInUp } from "@/components/ui/FadeInUp";
import { GoldButton } from "@/components/ui/GoldButton";
import { Users, MapPin, Megaphone, Briefcase, Shield, ArrowRight } from "lucide-react";

const verticals = [
  { icon: Users, title: "Talent", description: "Verified actors, models, background artists", color: "from-pink-500/20 to-purple-500/20" },
  { icon: MapPin, title: "Locations", description: "Curated shooting locations across India", color: "from-green-500/20 to-emerald-500/20" },
  { icon: Megaphone, title: "Influencers", description: "Digital creators for film promotions", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Briefcase, title: "Recruitment", description: "Production crew and technical department hiring", color: "from-orange-500/20 to-amber-500/20" },
];

export default function CinZeePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-b from-black via-black/90 to-black-light overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent" />
        
        {/* Network Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#C9A84C" />
                <circle cx="0" cy="0" r="1" fill="#C9A84C" />
                <circle cx="100" cy="0" r="1" fill="#C9A84C" />
                <circle cx="0" cy="100" r="1" fill="#C9A84C" />
                <circle cx="100" cy="100" r="1" fill="#C9A84C" />
                <line x1="50" y1="50" x2="0" y2="0" stroke="#C9A84C" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="#C9A84C" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="#C9A84C" strokeWidth="0.5" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#C9A84C" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeInUp>
            <h1 className="font-display text-6xl md:text-8xl text-gold mb-4 tracking-wider">CinZee</h1>
            <p className="font-ui text-gold uppercase tracking-[0.3em] text-sm mb-6">
              A Controlled Cinema Ecosystem
            </p>
            <p className="font-body text-cream/80 text-lg max-w-3xl mx-auto leading-relaxed">
              CinZee is Golden Rain Productions' proprietary platform connecting verified film industry professionals — talent, locations, influencers, and crew — in a privacy-first, admin-curated environment. All connections are facilitated exclusively through our team.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Verticals Section */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="font-display text-4xl text-gold text-center mb-4">Four Verticals</h2>
            <p className="font-body text-cream/70 text-center max-w-2xl mx-auto mb-16">
              Your gateway to the film industry ecosystem
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticals.map((vertical, index) => (
              <FadeInUp key={vertical.title} delay={index * 100}>
                <div className="glass-card p-8 h-full card-hover group text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${vertical.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <vertical.icon className="text-gold" size={36} />
                  </div>
                  <h3 className="font-display text-xl text-gold mb-3">{vertical.title}</h3>
                  <p className="font-body text-cream/70 text-sm">{vertical.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Banner */}
      <section className="py-16 bg-black border-y border-gold/20">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <Shield className="text-gold" size={48} />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-gold mb-4">
                  ⚠️ Privacy-First Model
                </h2>
                <p className="font-body text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
                  CinZee operates on a strict privacy-first model. No contact information is ever visible to the public. All communication is routed exclusively through the Golden Rain Productions admin team.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="font-display text-4xl text-gold text-center mb-4">How CinZee Works</h2>
            <p className="font-body text-cream/70 text-center max-w-2xl mx-auto mb-16">
              A secure, curated connection process
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeInUp delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-gradient text-black rounded-full flex items-center justify-center font-display text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="font-ui text-lg uppercase tracking-wider text-gold mb-3">Submit Profile</h3>
                <p className="font-body text-cream/70">
                  Register with your professional details and portfolio
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-gradient text-black rounded-full flex items-center justify-center font-display text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="font-ui text-lg uppercase tracking-wider text-gold mb-3">Verification</h3>
                <p className="font-body text-cream/70">
                  Our team verifies your credentials and portfolio
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-gradient text-black rounded-full flex items-center justify-center font-display text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="font-ui text-lg uppercase tracking-wider text-gold mb-3">Secure Connection</h3>
                <p className="font-body text-cream/70">
                  We facilitate connections while maintaining privacy
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gold/10 via-black to-gold/5">
        <div className="container mx-auto px-6 text-center">
          <FadeInUp>
            <h2 className="font-display text-4xl md:text-5xl text-gold mb-6">Join the CinZee Network</h2>
            <p className="font-body text-cream/80 text-lg max-w-2xl mx-auto mb-10">
              Connect with the film industry through India's most trusted production house
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GoldButton href="/contact?subject=CinZee Enquiry" size="lg">
                Express Interest <ArrowRight size={20} className="ml-2 inline" />
              </GoldButton>
              <GoldButton href="/just-born-awards/register" variant="outline" size="lg">
                Register as Talent
              </GoldButton>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
