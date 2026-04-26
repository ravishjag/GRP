"use client";

import { useState, useRef } from "react";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { GoldButton } from "@/components/ui/GoldButton";
import { Upload, User, Mail, Phone, MapPin, FileText, Image as ImageIcon, Video } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  "Actor", "Singer", "Dancer", "Musician", "Comedian", "Artist", "Short Film Maker", "Other"
];

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry"
];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    category: "",
    village: "",
    state: "",
    description: "",
    email: "",
    phone: "",
  });
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center bg-black-light">
        <div className="container mx-auto px-6">
          <FadeInUp>
            <div className="glass-card p-12 text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="text-black" size={40} />
              </div>
              <h2 className="font-display text-4xl text-gold mb-4">Entry Received!</h2>
              <p className="font-body text-cream/80 text-lg mb-8">
                Your entry has been received. Our team will review it and reach out to shortlisted participants.
              </p>
              <GoldButton href="/just-born-awards">Back to Awards</GoldButton>
            </div>
          </FadeInUp>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center bg-gradient-to-b from-black via-black/90 to-black-light">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <FadeInUp>
            <h1 className="font-display text-5xl md:text-7xl text-gold mb-4">Register</h1>
            <p className="font-ui text-gold uppercase tracking-widest text-sm">Just Born Awards</p>
          </FadeInUp>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-32 bg-black-light">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <FadeInUp>
              <div className="glass-card p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 pl-12 pr-4 text-cream focus:border-gold transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Age & Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                        Age <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="number"
                        required
                        min="1"
                        max="100"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 px-4 text-cream focus:border-gold transition-colors"
                        placeholder="Your age"
                      />
                    </div>
                    <div>
                      <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                        Category <span className="text-red-400">*</span>
                      </label>
                      <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 px-4 text-cream focus:border-gold transition-colors"
                      >
                        <option value="">Select category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Village & State */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                        Village / District <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                        <input
                          type="text"
                          required
                          value={formData.village}
                          onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                          className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 pl-12 pr-4 text-cream focus:border-gold transition-colors"
                          placeholder="Your village or district"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                        State <span className="text-red-400">*</span>
                      </label>
                      <select
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 px-4 text-cream focus:border-gold transition-colors"
                      >
                        <option value="">Select state</option>
                        {states.map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Talent Description */}
                  <div>
                    <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                      Talent Description <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-4 text-gold/50" size={20} />
                      <textarea
                        required
                        rows={5}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 pl-12 pr-4 text-cream focus:border-gold transition-colors resize-none"
                        placeholder="Tell us about your talent (100-500 words)"
                      />
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                      Your Photo <span className="text-red-400">*</span>
                    </label>
                    <div
                      onClick={() => photoInputRef.current?.click()}
                      className="border-2 border-dashed border-gold/30 rounded-sm p-8 text-center cursor-pointer hover:border-gold/60 transition-colors"
                    >
                      <ImageIcon className="text-gold/50 mx-auto mb-4" size={40} />
                      <p className="font-ui text-gold text-sm mb-2">Click to upload your photo</p>
                      <p className="font-ui text-cream/50 text-xs">JPG/PNG, max 5MB</p>
                      {photoFile && (
                        <p className="text-gold text-sm mt-4">{photoFile.name}</p>
                      )}
                    </div>
                    <input
                      ref={photoInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </div>

                  {/* Video Upload */}
                  <div>
                    <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                      Talent Video <span className="text-red-400">*</span>
                    </label>
                    <div
                      onClick={() => videoInputRef.current?.click()}
                      className={cn(
                        "border-2 border-dashed rounded-sm p-8 text-center cursor-pointer transition-colors",
                        videoFile ? "border-gold" : "border-gold/30 hover:border-gold/60"
                      )}
                    >
                      <Video className="text-gold/50 mx-auto mb-4" size={40} />
                      <p className="font-ui text-gold text-sm mb-2">Click to upload your talent video</p>
                      <p className="font-ui text-cream/50 text-xs">MP4, max 100MB - MANDATORY</p>
                      {videoFile && (
                        <p className="text-gold text-sm mt-4">{videoFile.name}</p>
                      )}
                    </div>
                    <input
                      ref={videoInputRef}
                      type="file"
                      accept="video/*"
                      onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 pl-12 pr-4 text-cream focus:border-gold transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-ui text-gold uppercase tracking-wider text-sm mb-2">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={20} />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-black/50 border border-gold/20 rounded-sm py-4 pl-12 pr-4 text-cream focus:border-gold transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Privacy Notice */}
                  <div className="bg-gold/10 border border-gold/20 rounded-sm p-4">
                    <p className="font-ui text-gold text-sm">
                      <span className="font-bold">Privacy Notice:</span> Your contact details (phone number and email) are strictly confidential and accessible only to the Golden Rain Productions admin team. They will never be displayed publicly or shared with third parties.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <GoldButton type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit My Entry →"}
                  </GoldButton>
                </form>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </main>
  );
}
