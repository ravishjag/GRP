"use client";

import { FadeInUp } from "@/components/ui/FadeInUp";
import { GoldButton } from "@/components/ui/GoldButton";
import { Star, Trophy, Users, Video } from "lucide-react";
import Link from "next/link";

const categories = [
  { icon: "🎭", name: "Actor" },
  { icon: "🎤", name: "Singer" },
  { icon: "💃", name: "Dancer" },
  { icon: "🎸", name: "Musician" },
  { icon: "🎙", name: "Comedian" },
  { icon: "🖌", name: "Artist" },
  { icon: "📽", name: "Short Film Maker" },
  { icon: "➕", name: "Other Talent" },
];

const steps = [
  { number: "01", title: "Register", description: "Fill out the participation form with your details and talent video" },
  { number: "02", title: "Review", description: "Our team reviews every submission with care" },
  { number: "03", title: "Shortlist", description: "Selected participants are featured on this platform" },
  { number: "04", title: "Winners Announced", description: "Final results published by the admin panel" },
];

export default function JustBornAwardsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-black via-black/90 to-black-light overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
        
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-gold/30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              ★
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeInUp>
            <div className="flex justify-center mb-6">
              <Star className="text-gold" size={64} fill="currentColor" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gold mb-4">Just Born Awards</h1>
            <p className="font-ui text-gold uppercase tracking-widest text-sm mb-6">
              Discovering Extraordinary Talent Across India
            </p>
            <p className="font-body text-cream/80 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              Just Born Awards is Golden Rain Productions' initiative to find and celebrate raw, untapped talent from villages, towns and cities across India. This is not a competition — it is a discovery platform. Submit your entry. Get noticed. Your journey begins here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GoldButton href="/just-born-awards/register" size="lg">Register Now</GoldButton>
              <GoldButton href="/just-born-awards/results" variant="outline" size="lg">View Results</GoldButton>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="font-display text-4xl text-gold text-center mb-4">How It Works</h2>
            <p className="font-body text-cream/70 text-center max-w-2xl mx-auto mb-16">
              Four simple steps to showcase your talent
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeInUp key={step.title} delay={index * 100}>
                <div className="relative">
                  <div className="glass-card p-8 h-full text-center">
                    <div className="w-16 h-16 bg-gold-gradient text-black rounded-full flex items-center justify-center font-display text-2xl font-bold mx-auto mb-6">
                      {step.number}
                    </div>
                    <h3 className="font-ui text-lg uppercase tracking-wider text-gold mb-3">{step.title}</h3>
                    <p className="font-body text-cream/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gold/30" />
                  )}
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="font-display text-4xl text-gold text-center mb-4">Categories</h2>
            <p className="font-body text-cream/70 text-center max-w-2xl mx-auto mb-16">
              Find your category and showcase your talent
            </p>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <FadeInUp key={category.name} delay={index * 50}>
                <div className="glass-card p-6 text-center card-hover group">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-ui text-gold uppercase tracking-wider">{category.name}</h3>
                </div>
              </FadeInUp>
            ))}
          </div>

          <div className="text-center mt-12">
            <GoldButton href="/just-born-awards/register">Submit Your Entry</GoldButton>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gold/10 via-black to-gold/5">
        <div className="container mx-auto px-6 text-center">
          <FadeInUp>
            <Star className="text-gold mx-auto mb-6" size={48} fill="currentColor" />
            <h2 className="font-display text-4xl md:text-5xl text-gold mb-6">Your Talent Deserves Recognition</h2>
            <p className="font-body text-cream/80 text-lg max-w-2xl mx-auto mb-10">
              Don't let your talent go unnoticed. Join Just Born Awards and take the first step towards your dreams.
            </p>
            <GoldButton href="/just-born-awards/register" size="lg">Register Now →</GoldButton>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
