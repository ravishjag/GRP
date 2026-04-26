"use client";

import { useState } from "react";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { GoldButton } from "@/components/ui/GoldButton";
import { Star, Filter, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Actor", "Singer", "Dancer", "Musician", "Comedian", "Artist", "Short Film Maker", "Other"];
const states = ["All", "Andhra Pradesh", "Telangana", "Tamil Nadu", "Karnataka", "Kerala", "Maharashtra", "Delhi"];

// Mock data for demonstration
const mockParticipants = [
  { id: 1, name: "Arjun Reddy", category: "Actor", state: "Telangana", photo: null },
  { id: 2, name: "Priya Sharma", category: "Singer", state: "Maharashtra", photo: null },
  { id: 3, name: "Karthik Kumar", category: "Dancer", state: "Tamil Nadu", photo: null },
  { id: 4, name: "Ananya Das", category: "Actor", state: "Karnataka", photo: null },
  { id: 5, name: "Rahul Menon", category: "Musician", state: "Kerala", photo: null },
  { id: 6, name: "Sneha Patel", category: "Comedian", state: "Gujarat", photo: null },
];

export default function ResultsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedState, setSelectedState] = useState("All");

  const filteredParticipants = mockParticipants.filter((p) => {
    const categoryMatch = selectedCategory === "All" || p.category === selectedCategory;
    const stateMatch = selectedState === "All" || p.state === selectedState;
    return categoryMatch && stateMatch;
  });

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center bg-gradient-to-b from-black via-black/90 to-black-light">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeInUp>
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-gold" size={48} fill="currentColor" />
              <h1 className="font-display text-5xl md:text-7xl text-gold">Results</h1>
            </div>
            <p className="font-ui text-gold uppercase tracking-widest text-sm">Just Born Awards - Shortlisted Talent</p>
          </FadeInUp>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-black-light border-b border-gold/20 sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2 text-gold">
              <Filter size={20} />
              <span className="font-ui text-sm uppercase tracking-wider">Filter By:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-black/50 border border-gold/20 rounded-sm py-2 px-4 text-gold font-ui text-sm focus:border-gold transition-colors"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="bg-black/50 border border-gold/20 rounded-sm py-2 px-4 text-gold font-ui text-sm focus:border-gold transition-colors"
              >
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <p className="font-body text-cream/70 text-center mb-12">
              Showing {filteredParticipants.length} shortlisted participant{filteredParticipants.length !== 1 ? "s" : ""}
            </p>
          </FadeInUp>

          {filteredParticipants.length === 0 ? (
            <div className="text-center py-20">
              <Star className="text-gold/30 mx-auto mb-6" size={64} />
              <p className="font-body text-cream/60 text-lg">No participants found matching your filters</p>
              <GoldButton 
                variant="outline" 
                className="mt-6"
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedState("All");
                }}
              >
                Clear Filters
              </GoldButton>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredParticipants.map((participant, index) => (
                <FadeInUp key={participant.id} delay={index * 100}>
                  <div className="glass-card overflow-hidden card-hover group">
                    <div className="aspect-[3/4] relative bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                      {participant.photo ? (
                        <img
                          src={participant.photo}
                          alt={participant.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-gold/30">
                          <Star size={64} />
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gold text-black text-xs font-ui uppercase tracking-wider">
                          {participant.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl text-gold mb-2">{participant.name}</h3>
                      <p className="font-ui text-cream/60 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-gold rounded-full" />
                        {participant.state}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gold/20">
                        <button className="w-full flex items-center justify-center gap-2 text-gold font-ui text-sm uppercase tracking-wider hover:text-gold-light transition-colors">
                          <Play size={16} /> View Talent Video
                        </button>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gold/10 via-black to-gold/5">
        <div className="container mx-auto px-6 text-center">
          <FadeInUp>
            <h2 className="font-display text-3xl md:text-4xl text-gold mb-6">Want to Be Featured Here?</h2>
            <p className="font-body text-cream/80 text-lg max-w-2xl mx-auto mb-8">
              Register for Just Born Awards and showcase your talent to the industry
            </p>
            <GoldButton href="/just-born-awards/register">Register Now</GoldButton>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
