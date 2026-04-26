"use client";

import { useState } from "react";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { GoldButton } from "@/components/ui/GoldButton";
import { Film, BadgeCheck, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const teluguFilms = [
  "Soggadu", "Sri Krishna (2006)", "Vijayam", "Super Heroes", "Sivaiah", "Singh vs Kaur",
  "Preyasi Rave", "Preminchukundam Ra", "Preminchu", "Nuvvu Leka Nenu Lenu",
  "Neeku Nenu Naaku Nuvvu", "Nenem Chinna Pillana", "Nireekshana", "Nee Premakai",
  "Mugguru", "Pedda Manushulu", "Malliswari", "Madhumasam", "Jayam Manadera",
  "Hari Villu", "Ganesh", "Aswrudan", "Aaghaaz", "Hai", "Andhrudu",
  "Nenu Naa Rakshasi", "Dictator", "Vinaya Vidheya Rama", "Asukh", "Tulasi",
  "Baladoor", "Bendu Appa Rao RMP", "Alasyam Amrutham", "Bhimavaram Bullodu",
  "Kausalya Suprajaa Rama", "Maduve Aagona Ba", "Kuch Tum Kaho Kuch Hum Kahein",
  "Hum Aapke Dil Mein Rehte Hain", "Kalisundam Ra", "Sudhu Ekbar Bolo"
];

const tamilFilms = [
  "2.0", "Enthiran", "Kaappaan", "Kaatru Veliyidai", "Kadhalil Sodhappuvadhu Yeppadi",
  "Mankatha", "Sivaji The Boss", "Tirupathi", "Vallavanukku Pullum Aayudham",
  "Kaththi", "Priyamaana Thozhi", "Kochadaiiyaan", "Oru Marubhoomikkadha",
  "Ponniyin Selvan 1", "Ponniyin Selvan 2", "Indian 2"
];

const filterOptions = ["All", "Telugu", "Tamil", "Hindi", "Multi-Language"];

export default function ProductionsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const getFilteredFilms = () => {
    switch (activeFilter) {
      case "Telugu":
        return teluguFilms;
      case "Tamil":
        return tamilFilms;
      case "Hindi":
        return ["Kuch Tum Kaho Kuch Hum Kahein", "Hum Aapke Dil Mein Rehte Hain"];
      case "Multi-Language":
        return ["2.0", "Enthiran", "Ponniyin Selvan 1", "Ponniyin Selvan 2", "Indian 2"];
      default:
        return [...teluguFilms, ...tamilFilms];
    }
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-b from-black via-black/90 to-black-light">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeInUp>
            <h1 className="font-display text-5xl md:text-7xl text-gold mb-4">Productions</h1>
            <p className="font-ui text-gold uppercase tracking-widest text-sm">From Execution to Creation</p>
          </FadeInUp>
        </div>
      </section>

      {/* Khudiram Bose - Flagship */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[2/3] relative overflow-hidden rounded-sm border border-gold/20">
                <img
                  src="https://goldenrainproductions.com/wp-content/uploads/2024/12/khudiram-bose-212x300.jpg"
                  alt="Khudiram Bose"
                  className="w-full h-full object-cover image-zoom"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-gold text-black text-xs font-ui uppercase tracking-wider flex items-center gap-2">
                    <BadgeCheck size={14} /> Producer
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl text-gold mb-2">Khudiram Bose</h2>
                  <p className="font-ui text-gold uppercase tracking-widest text-sm mb-4">
                    Golden Rain Productions
                  </p>
                </div>

                <div className="flex items-center gap-4 text-cream/70">
                  <span className="flex items-center gap-2 text-sm font-ui">
                    <BadgeCheck className="text-gold" size={16} /> Released
                  </span>
                  <span className="flex items-center gap-2 text-sm font-ui">
                    <Clock className="text-gold" size={16} /> Biographical Epic
                  </span>
                </div>

                <p className="font-body text-cream/80 text-lg leading-relaxed">
                  Khudiram Bose is a biographical epic film produced by Vijay Jagarlamudi under the banner of Golden Rain Productions. The film tells the inspiring story of Khudiram Bose, one of India's youngest and most courageous freedom fighters. This production marks Vijay's landmark step from behind-the-scenes execution to full creative production.
                </p>

                <GoldButton href="/contact">Learn More</GoldButton>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 1984 - Upcoming */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
              <div className="order-2 lg:order-1 space-y-6">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl text-gold mb-2">1984</h2>
                  <p className="font-ui text-gold uppercase tracking-widest text-sm mb-4">
                    Golden Rain Productions
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-red-600/20 border border-red-500/50 text-red-400 text-xs font-ui uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> In Production
                  </span>
                </div>

                <p className="font-body text-cream/80 text-lg leading-relaxed">
                  A powerful, ambitious production exploring one of India's most pivotal historical moments. Currently in development. More details to follow.
                </p>

                <GoldButton variant="outline">Stay Updated</GoldButton>
              </div>

              <div className="order-1 lg:order-2 aspect-[2/3] relative overflow-hidden rounded-sm border border-gold/20 bg-gradient-to-br from-gold/10 to-gold/5">
                <div className="w-full h-full flex items-center justify-center flex-col text-gold/40">
                  <Film size={80} strokeWidth={0.5} />
                  <span className="font-display text-6xl mt-6 text-gold/20">1984</span>
                </div>
                <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")' }} />
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Line Production Portfolio */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="font-display text-4xl text-gold text-center mb-4">Line Production Portfolio</h2>
            <p className="font-body text-cream/70 text-center max-w-2xl mx-auto mb-8">
              40+ films delivered across languages
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-6 py-2 text-sm font-ui uppercase tracking-wider transition-all duration-300 border",
                    activeFilter === filter
                      ? "bg-gold text-black border-gold"
                      : "text-gold border-gold/30 hover:border-gold"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {getFilteredFilms().map((film, index) => (
              <FadeInUp key={film} delay={index * 30}>
                <div className="glass-card p-4 card-hover group">
                  <div className="aspect-square bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center mb-3">
                    <Film className="text-gold/30 group-hover:text-gold/60 transition-colors" size={32} />
                  </div>
                  <h3 className="font-accent text-gold text-sm text-center">{film}</h3>
                  <p className="font-ui text-cream/50 text-xs text-center mt-1">Line Production</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
