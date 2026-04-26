"use client";

import { useState } from "react";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { GoldButton } from "@/components/ui/GoldButton";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter, Send } from "lucide-react";

const enquiryTypes = [
  "Line Production",
  "Productions",
  "Just Born Awards",
  "CinZee",
  "General",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center bg-gradient-to-b from-black via-black/90 to-black-light">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeInUp>
            <h1 className="font-display text-5xl md:text-7xl text-gold mb-4">Contact</h1>
            <p className="font-ui text-gold uppercase tracking-widest text-sm">Let's Create Something Powerful Together</p>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info Panel */}
            <FadeInUp>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-4xl text-gold mb-6">Get in Touch</h2>
                  <p className="font-body text-cream/80 text-lg leading-relaxed mb-8">
                    Ready to bring your vision to life? Whether you're looking for line production services, want to collaborate on a production, or have questions about our initiatives — we're here to help.
                  </p>
                </div>

                <div className="space-y-6">
                  <a href="tel:+919876543210" className="flex items-center gap-4 text-cream/80 hover:text-gold transition-colors group">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                      <Phone className="text-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-ui text-xs uppercase tracking-wider text-gold mb-1">Call Us</p>
                      <p className="font-body">+91 98765 43210</p>
                    </div>
                  </a>

                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-cream/80 hover:text-gold transition-colors group">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                      <MessageCircle className="text-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-ui text-xs uppercase tracking-wider text-gold mb-1">WhatsApp</p>
                      <p className="font-body">Chat with us</p>
                    </div>
                  </a>

                  <a href="mailto:info@goldenrainproductions.com" className="flex items-center gap-4 text-cream/80 hover:text-gold transition-colors group">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors">
                      <Mail className="text-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-ui text-xs uppercase tracking-wider text-gold mb-1">Email</p>
                      <p className="font-body">info@goldenrainproductions.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-cream/80">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center">
                      <MapPin className="text-gold" size={20} />
                    </div>
                    <div>
                      <p className="font-ui text-xs uppercase tracking-wider text-gold mb-1">Address</p>
                      <p className="font-body">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-ui text-xs uppercase tracking-wider text-gold mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-all">
                      <Facebook size={18} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-all">
                      <Instagram size={18} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-all">
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Contact Form */}
            <FadeInUp delay={200}>
              {submitted ? (
                <div className="glass-card p-12 text-center">
                  <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-black" size={40} />
                  </div>
                  <h3 className="font-display text-3xl text-gold mb-4">Message Sent!</h3>
                  <p className="font-body text-cream/80 mb-8">
                    Thank you for reaching out. Our team will get back to you soon.
                  </p>
                  <GoldButton onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Message
                  </GoldButton>
                </div>
              ) : (
                <div className="glass-card p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 px-4 text-cream focus:border-gold transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 px-4 text-cream focus:border-gold transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 px-4 text-cream focus:border-gold transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                        Enquiry Type <span className="text-red-400">*</span>
                      </label>
                      <select
                        required
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 px-4 text-cream focus:border-gold transition-colors"
                      >
                        <option value="">Select enquiry type</option>
                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 px-4 text-cream focus:border-gold transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <GoldButton type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message →"}
                    </GoldButton>
                  </form>
                </div>
              )}
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-black border-t border-gold/20 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gold/30">
          <div className="text-center">
            <MapPin size={64} className="mx-auto mb-4" />
            <p className="font-ui text-sm uppercase tracking-wider">Hyderabad, Telangana</p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg z-50 transition-all hover:scale-110 border-2 border-gold"
      >
        <MessageCircle className="text-white" size={28} />
      </a>
    </main>
  );
}
