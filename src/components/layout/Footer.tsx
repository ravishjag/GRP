import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black-light border-t border-gold/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 border-2 border-gold flex items-center justify-center">
                <span className="text-gold font-display font-bold text-2xl">G</span>
              </div>
              <div>
                <h3 className="font-display text-gold text-xl tracking-wider">GOLDEN RAIN</h3>
                <p className="text-xs text-gold/70 uppercase tracking-widest">Productions</p>
              </div>
            </div>
            <p className="text-cream/70 font-body mb-6 max-w-md">
              From Execution to Creation — Building Cinema, Talent & Opportunities.
              The Clear Choice for Production since 2005.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gold/70 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gold/70 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gold/70 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ui text-gold uppercase tracking-widest text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 font-ui text-sm">
              <li><Link href="/about" className="text-cream/70 hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/line-production" className="text-cream/70 hover:text-gold transition-colors">Line Production</Link></li>
              <li><Link href="/productions" className="text-cream/70 hover:text-gold transition-colors">Productions</Link></li>
              <li><Link href="/just-born-awards" className="text-cream/70 hover:text-gold transition-colors">Just Born Awards</Link></li>
              <li><Link href="/cinzee" className="text-cream/70 hover:text-gold transition-colors">CinZee</Link></li>
              <li><Link href="/contact" className="text-cream/70 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-ui text-gold uppercase tracking-widest text-sm mb-4">Contact</h4>
            <ul className="space-y-3 font-ui text-sm">
              <li className="flex items-start gap-3 text-cream/70">
                <MapPin size={16} className="text-gold mt-1 flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-gold transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href="mailto:info@goldenrainproductions.com" className="hover:text-gold transition-colors">info@goldenrainproductions.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="film-divider my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-ui text-cream/50">
          <p>&copy; {new Date().getFullYear()} Golden Rain Productions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/admin" className="hover:text-gold transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
