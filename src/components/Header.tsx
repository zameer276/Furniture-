import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Our Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-charcoal-900/90 backdrop-blur-md py-4 border-b border-gold-500/10 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex flex-col group">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] text-gold-500 font-bold transition-colors group-hover:text-gold-400">
                MY HOME STORIES
              </span>
              <span className="text-[9px] tracking-[0.4em] text-charcoal-300 font-sans uppercase text-center sm:text-left">
                Bespoke Luxury • Kashmir
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs uppercase tracking-widest text-charcoal-100 hover:text-gold-500 transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-500 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://wa.me/919149473198?text=Hello%20My%20Home%20Stories,%20I'm%20interested%20in%20a%20bespoke%20furniture%20consultation."
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-sm transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <button
                id="header-cta"
                onClick={onOpenConsultation}
                className="bg-gold-500 hover:bg-gold-600 text-charcoal-950 text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-sm transition-all duration-300 shadow-md hover:shadow-gold-500/20"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center space-x-3">
              <button
                onClick={onOpenConsultation}
                className="sm:inline-block hidden bg-gold-500 hover:bg-gold-600 text-charcoal-950 text-xs uppercase tracking-wider font-bold px-3.5 py-2 rounded-sm transition-all"
              >
                Consultation
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gold-500 hover:text-gold-400 p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 bg-charcoal-950/98 backdrop-blur-lg z-40 border-b border-gold-500/20 flex flex-col items-center xl:hidden"
          >
            <div className="flex flex-col items-center space-y-6 w-full px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-sm uppercase tracking-widest text-charcoal-100 hover:text-gold-500 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] w-full bg-gold-500/20 my-2"></div>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a
                  href="https://wa.me/919149473198?text=Hello%20My%20Home%20Stories,%20I'm%20interested%20in%20a%20bespoke%20furniture%20consultation."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="bg-gold-500 hover:bg-gold-600 text-charcoal-950 text-xs uppercase tracking-widest font-bold px-6 py-3 rounded-sm transition-all text-center"
                >
                  Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
