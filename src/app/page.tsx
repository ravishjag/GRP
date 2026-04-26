"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GoldButton } from "@/components/ui/GoldButton";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { Film, Trophy, Star, Globe, ArrowRight, Play } from "lucide-react";

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "100+", label: "Films Delivered" },
  { value: "5", label: "States Covered" },
  { value: "1994", label: "Career Started" },
];

const pillars = [
  { icon: Film, title: "Line Production", subtitle: "Crew, Locations, Equipment across India", href: "/line-production" },
  { icon: Trophy, title: "Our Film Productions", subtitle: "From Khudiram Bose to 1984", href: "/productions" },
  { icon: Star, title: "Just Born Awards", subtitle: "Discover raw talent across India", href: "/just-born-awards" },
  { icon: Globe, title: "CinZee Platform", subtitle: "A controlled cinema ecosystem", href: "/cinzee" },
];

const featuredWorks = [
  {
    title: "Khudiram Bose",
    badge: "PRODUCER",
    image: "https://goldenrainproductions.com/wp-content/uploads/2024/12/khudiram-bose-212x300.jpg",
    description: "An epic biographical film produced by Vijay Jagarlamudi — the story of freedom fighter Khudiram Bose.",
  },
  {
    title: "1984",
    badge: "UPCOMING · IN PRODUCTION",
    image: null,
    description: "The next ambitious production from Golden Rain Productions. A powerful story set against the backdrop of 1984.",
  },
  {
    title: "40+ Line Production Credits",
    badge: "LINE PRODUCTION",
    image: null,
    description: "From Enthiran to Indian 2, Ponniyin Selvan to Vinaya Vidheya Rama — we've powered India's biggest films.",
  },
];

const collaborators = [
  "SP", "DVV Entertainment", "Sun Pictures", "Lyca Productions",
  "AVM Productions", "Eros International", "Madras Talkies"
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="pt-0">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
          <div className="absolute inset-0 golden-rain-bg" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-gold mb-6 gold-shimmer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            GOLDEN RAIN PRODUCTIONS
          </motion.h1>

          <motion.p
            className="font-ui text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Led by Producer Vijay Jagarlamudi
          </motion.p>

          <motion.div
            className="inline-block mb-6 px-6 py-2 border border-gold/50 rounded-full bg-gold/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <span className="font-ui text-gold text-sm">🎬 Producer of Khudiram Bose</span>
          </motion.div>

          <motion.p
            className="font-accent text-cream/90 text-xl md:text-2xl italic mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            "From Execution to Creation — Building Cinema, Talent & Opportunities"
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            <GoldButton href="/productions" variant="outline">Explore Work</GoldButton>
            <GoldButton href="/line-production" variant="filled">Hire Us</GoldButton>
            <GoldButton href="/just-born-awards" variant="outline">Just Born Awards</GoldButton>
            <GoldButton href="/cinzee" variant="outline">CinZee</GoldButton>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Marquee Strip */}
      <section className="bg-black-light py-4 border-y border-gold/20 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content font-ui text-gold text-sm uppercase tracking-wider">
            ★ 30+ Years of Cinematic Excellence ★ Pan-India Line Production ★ Telugu · Tamil · Hindi · Malayalam Films ★ Hyderabad Based Since 2005 ★
            &nbsp;&nbsp;★ 30+ Years of Cinematic Excellence ★ Pan-India Line Production ★ Telugu · Tamil · Hindi · Malayalam Films ★ Hyderabad Based Since 2005 ★
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInUp className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-gold/20 to-gold/5 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gold/30">
                  <Film size={120} strokeWidth={0.5} />
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={200}>
              <h2 className="font-display text-4xl md:text-5xl text-gold mb-6">Who We Are</h2>
              <div className="space-y-4 font-body text-cream/80 text-lg leading-relaxed">
                <p>
                  Golden Rain Productions is one of South India's premier Line Production houses, founded in 2005 by Vijay Jagarlamudi. Based in Hyderabad, we are the trusted production partner for Telugu, Tamil, Hindi and multi-language films shooting across Andhra Pradesh and Telangana.
                </p>
                <p>
                  Vijay began his career in 1994 as a Line Inspector at Lakshmi Narasimha Films Distribution Company. He later served as Production Manager at Padmalya Studios, founded by legendary Telugu actor Mr. Krishna. Over three decades he rose through the ranks — Production Executive, Production Controller, Line Producer, and Executive Producer — for industry giants including Ramanaidu Studios, AVM, Sun Pictures, and Eros.
                </p>
                <p>
                  He has collaborated with icons of Indian cinema: actors Rajinikanth, Ajith, Vijay, Venkatesh, Balakrishna, Ram Charan, and Ravi Teja; directors Mani Ratnam, Shankar, Murugadoss, Puri Jagannath, and Boyapati Srinu; DOPs PC Sriram, Ratnavel, Ravi K. Chandran, and KV Anand; and acclaimed Production Designers Padmashri Thota Tharani, Sabu Siril, and Sharmistha Rai.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-display text-3xl md:text-4xl text-gold mb-1">{stat.value}</div>
                    <div className="font-ui text-xs uppercase tracking-wider text-cream/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20 md:py-32 bg-black-light relative clip-diagonal">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="font-display text-4xl md:text-5xl text-gold text-center mb-4">Our Pillars</h2>
            <p className="font-body text-cream/70 text-center max-w-2xl mx-auto mb-16">
              Four pillars of excellence that define our commitment to cinema
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <FadeInUp key={pillar.title} delay={index * 100}>
                <a href={pillar.href} className="block group">
                  <div className="glass-card p-8 h-full card-hover">
                    <div className="w-14 h-14 border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <pillar.icon className="text-gold" size={28} />
                    </div>
                    <h3 className="font-display text-xl text-gold mb-3">{pillar.title}</h3>
                    <p className="font-body text-cream/70 mb-4">{pillar.subtitle}</p>
                    <div className="flex items-center text-gold font-ui text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                      Explore <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </a>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <h2 className="font-display text-4xl md:text-5xl text-gold text-center mb-4">Featured Works</h2>
            <p className="font-body text-cream/70 text-center max-w-2xl mx-auto mb-16">
              From landmark productions to upcoming epics
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <FadeInUp key={work.title} delay={index * 150}>
                <div className="glass-card overflow-hidden card-hover group">
                  <div className="aspect-[2/3] relative overflow-hidden bg-gradient-to-br from-gold/10 to-gold/5">
                    {work.image ? (
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover image-zoom"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Film className="text-gold/20" size={80} />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold text-black text-xs font-ui uppercase tracking-wider">
                        {work.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-gold mb-3">{work.title}</h3>
                    <p className="font-body text-cream/70 text-sm">{work.description}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="py-12 bg-black-light border-y border-gold/20">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <p className="font-ui text-cream/60 text-sm uppercase tracking-wider text-center mb-8">
              Trusted by India's Leading Studios
            </p>
          </FadeInUp>
          <div className="marquee-container">
            <div className="marquee-content flex items-center gap-12 font-ui text-gold/80 text-lg">
              {collaborators.map((name, i) => (
                <span key={i}>{name}</span>
              ))}
              {collaborators.map((name, i) => (
                <span key={`dup-${i}`}>{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gold/10 via-black to-gold/5 relative">
        <div className="container mx-auto px-6 text-center">
          <FadeInUp>
            <h2 className="font-display text-4xl md:text-5xl text-gold mb-6">Looking to Shoot in India?</h2>
            <p className="font-body text-cream/80 text-lg max-w-3xl mx-auto mb-10">
              Our Pan-India network covers Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, Kerala and beyond.
              GST-compliant settlements. Seamless execution.
            </p>
            <GoldButton href="/contact" size="lg">Let's Make It Happen →</GoldButton>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
