import { motion } from "motion/react";
import { Check, MessageSquare, ShieldCheck, Award, Sparkles, Users } from "lucide-react";
import heroImg from "../assets/images/luxury_hero_living_room_1784201996365.jpg";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const trustBadges = [
    { text: "Premium Quality", icon: Award },
    { text: "Custom Made", icon: Sparkles },
    { text: "Expert Craftsmanship", icon: Users },
    { text: "Professional Installation", icon: ShieldCheck },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-950 pt-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Luxury modern living room Srinagar Kashmir by My Home Stories"
          className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full text-white">
        <div className="max-w-3xl">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 px-3.5 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-bold text-gold-400">
              Kashmir's Finest Bespoke Furniture
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight sm:leading-none text-white mb-6"
          >
            Luxury Bespoke Furniture <br className="hidden sm:block" />
            <span className="text-gold-500">Crafted Just for Your Home</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-charcoal-200 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl font-light"
          >
            Transform your home with handcrafted furniture designed for elegance, comfort, and timeless beauty. We manufacture premium sofas, beds, wardrobes, dining tables, modular kitchens, and complete interior solutions in Srinagar, J&K.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <button
              onClick={onOpenConsultation}
              className="bg-gold-500 hover:bg-gold-600 text-charcoal-950 font-sans text-xs uppercase tracking-widest font-bold px-8 py-4.5 rounded-sm transition-all duration-300 shadow-xl shadow-gold-500/10 hover:shadow-gold-500/20 text-center cursor-pointer"
            >
              Get Free Consultation
            </button>
            <a
              href="https://wa.me/919149473198?text=Hello%20My%20Home%20Stories,%20I'm%20interested%20in%20your%20bespoke%20furniture.%20I'd%20like%20to%20learn%20more."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 hover:scale-[1.02] text-white font-sans text-xs uppercase tracking-widest font-bold px-8 py-4.5 rounded-sm transition-all duration-300 shadow-lg shadow-emerald-950/20 text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center space-x-2.5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500">
                  <badge.icon className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs sm:text-sm text-charcoal-100 font-medium tracking-wide">
                  {badge.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Visual Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <a href="#about" className="flex flex-col items-center space-y-1 text-charcoal-400 hover:text-gold-500 transition-colors">
          <span className="text-[10px] uppercase tracking-widest font-sans font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-6 bg-gold-500/30 rounded-full relative flex justify-center"
          >
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full absolute top-1"></span>
          </motion.div>
        </a>
      </div>
    </section>
  );
}
