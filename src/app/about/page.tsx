"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { Film, Award, Users, Calendar } from "lucide-react";

const timeline = [
  { year: "1994", title: "Career Begins", description: "Line Inspector at Lakshmi Narasimha Films Distribution" },
  { year: "1994-2000", title: "Padmalya Studios", description: "Production Manager under legendary actor Mr. Krishna" },
  { year: "2000-2005", title: "Rising Through Ranks", description: "Production Executive → Controller → Line Producer → Executive Producer for Ramanaidu Studios, AVM, Sun Pictures, Eros" },
  { year: "2005", title: "Golden Rain Founded", description: "Established Golden Rain Productions in Hyderabad" },
  { year: "2005-2024", title: "100+ Films", description: "Delivered over 100 films across Telugu, Tamil, Hindi, Malayalam, Kannada" },
  { year: "2024", title: "Khudiram Bose", description: "Released as Producer - landmark biographical epic" },
  { year: "2025+", title: "1984", description: "Ambitious new production in development" },
];

const collaborations = {
  actors: ["Rajinikanth", "Ajith", "Thalapathy Vijay", "Venkatesh", "Balakrishna", "Ram Charan", "Ravi Teja"],
  directors: ["Mani Ratnam", "Shankar", "AR Murugadoss", "Puri Jagannath", "Boyapati Srinu"],
  dops: ["PC Sriram", "Ratnavel", "Ravi K Chandran", "KV Anand"],
  designers: ["Padmashri Thota Tharani", "Sabu Siril", "Sharmistha Rai"],
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-b from-black via-black/90 to-black-light">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeInUp>
            <h1 className="font-display text-5xl md:text-7xl text-gold mb-4">About</h1>
            <p className="font-ui text-gold uppercase tracking-widest text-sm">The Story Behind Golden Rain Productions</p>
          </FadeInUp>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-gold/20 to-gold/5 rounded-sm overflow-hidden border border-gold/20">
                <div className="w-full h-full flex items-center justify-center text-gold/30">
                  <Film size={150} strokeWidth={0.5} />
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <FadeInUp>
                <h2 className="font-display text-4xl text-gold mb-2">Vijay Jagarlamudi</h2>
                <p className="font-ui text-gold uppercase tracking-widest text-sm mb-6">
                  Producer · Line Producer · Production Manager
                </p>
                <div className="space-y-4 font-body text-cream/80 text-lg leading-relaxed">
                  <p>
                    Founded Golden Rain Productions in 2005, based in Hyderabad, Telangana.
                  </p>
                  <p>
                    With over 30 years of cinematic experience, Vijay has been the backbone of countless blockbuster films, working behind the scenes to ensure seamless production execution across India.
                  </p>
                  <blockquote className="border-l-4 border-gold pl-6 py-4 italic text-cream/90">
                    "With 30 years of cinematic experience, we don't just produce films — we build the infrastructure that makes filmmaking possible."
                  </blockquote>
                </div>
              </FadeInUp>

              <FadeInUp delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4">
                    <div className="flex items-center gap-3 text-gold mb-2">
                      <Calendar size={20} />
                      <span className="font-ui text-sm uppercase tracking-wider">Founded</span>
                    </div>
                    <p className="font-display text-2xl">2005</p>
                  </div>
                  <div className="glass-card p-4">
                    <div className="flex items-center gap-3 text-gold mb-2">
                      <Award size={20} />
                      <span className="font-ui text-sm uppercase tracking-wider">Experience</span>
                    </div>
                    <p className="font-display text-2xl">30+ Years</p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="font-display text-4xl text-gold text-center mb-4">Career Journey</h2>
            <p className="font-body text-cream/70 text-center max-w-2xl mx-auto mb-16">
              Three decades of dedication to the craft of filmmaking
            </p>
          </FadeInUp>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 md:-translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <FadeInUp key={item.year} delay={index * 100}>
                <div className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-8 md:pl-0`}>
                    <div className={`glass-card p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <span className="font-display text-2xl text-gold block mb-2">{item.year}</span>
                      <h3 className="font-ui text-lg uppercase tracking-wider text-cream mb-2">{item.title}</h3>
                      <p className="font-body text-cream/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gold rounded-full -translate-x-1/2 border-4 border-black z-10" />
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="font-display text-4xl text-gold text-center mb-4">Notable Collaborations</h2>
            <p className="font-body text-cream/70 text-center max-w-2xl mx-auto mb-16">
              Working with the biggest names in Indian cinema
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInUp delay={100}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 text-gold mb-4">
                  <Users size={24} />
                  <h3 className="font-ui text-sm uppercase tracking-wider">Actors</h3>
                </div>
                <ul className="space-y-2 font-body text-cream/80">
                  {collaborations.actors.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={200}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 text-gold mb-4">
                  <Film size={24} />
                  <h3 className="font-ui text-sm uppercase tracking-wider">Directors</h3>
                </div>
                <ul className="space-y-2 font-body text-cream/80">
                  {collaborations.directors.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={300}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 text-gold mb-4">
                  <Award size={24} />
                  <h3 className="font-ui text-sm uppercase tracking-wider">DOPs</h3>
                </div>
                <ul className="space-y-2 font-body text-cream/80">
                  {collaborations.dops.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={400}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 text-gold mb-4">
                  <Users size={24} />
                  <h3 className="font-ui text-sm uppercase tracking-wider">Production Designers</h3>
                </div>
                <ul className="space-y-2 font-body text-cream/80">
                  {collaborations.designers.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </main>
  );
}
