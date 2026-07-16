import { MessageSquare, Phone, MapPin, ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal-950 text-white pt-20 pb-8 border-t border-gold-500/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Column 1: Trademark branding */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.2em] text-gold-500 font-bold">
                MY HOME STORIES
              </span>
              <span className="text-[10px] tracking-[0.4em] text-charcoal-300 font-sans uppercase">
                Bespoke Luxury • Kashmir
              </span>
            </a>
            <p className="font-sans text-xs text-charcoal-300 leading-relaxed max-w-sm font-light">
              We design and manufacture premium, high-end bespoke furniture in Srinagar, Kashmir. Blending centuries-old local woodcarving traditions with world-class engineering, we shape wood into stories of luxury.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/919149473198"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-900 border border-white/10 flex items-center justify-center text-charcoal-300 hover:text-gold-500 hover:border-gold-500 transition-all"
                aria-label="WhatsApp chat"
              >
                <MessageSquare className="w-4.5 h-4.5" />
              </a>
              <a
                href="tel:+919149473198"
                className="w-9 h-9 rounded-full bg-charcoal-900 border border-white/10 flex items-center justify-center text-charcoal-300 hover:text-gold-500 hover:border-gold-500 transition-all"
                aria-label="Call shop"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white border-b border-white/5 pb-2">
              Sitemap Navigation
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-2 gap-x-4">
              {[
                { name: "Home", href: "#home" },
                { name: "About Brand", href: "#about" },
                { name: "Bespoke Products", href: "#products" },
                { name: "Why Us", href: "#why-choose-us" },
                { name: "Workflow", href: "#process" },
                { name: "Showcase Gallery", href: "#gallery" },
                { name: "Reviews", href: "#testimonials" },
                { name: "FAQ Help", href: "#faq" },
                { name: "Contact Shop", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-xs text-charcoal-300 hover:text-gold-500 transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white border-b border-white/5 pb-2">
              Srinagar Showroom & Works
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3 text-xs text-charcoal-300 font-light">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>
                  Bypass, Airport Road, Alnoor Colony, Hyderpora, Srinagar, Jammu & Kashmir – 190014
                </span>
              </div>
              <div className="flex gap-3 text-xs text-charcoal-300 font-light items-center">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>+91 91494 73198</span>
              </div>
              <div className="flex gap-3 text-xs text-charcoal-300 font-light items-center">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>info@myhomestories.in</span>
              </div>
            </div>

            {/* Timings */}
            <div className="pt-4 border-t border-white/5">
              <h5 className="font-sans text-[10px] uppercase tracking-widest font-bold text-gold-500 mb-1">
                Workshop Operations
              </h5>
              <p className="font-sans text-[11px] text-charcoal-300 leading-relaxed font-light">
                Monday – Saturday: 10:00 AM – 7:30 PM <br />
                Sunday: Closed (By Appointment Only)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-sans text-[11px] text-charcoal-500 font-light">
            &copy; {new Date().getFullYear()} My Home Stories. All Rights Reserved. Crafted for Timeless Living.
          </p>
          
          <button
            onClick={handleScrollTop}
            className="flex items-center space-x-1.5 text-[11px] text-gold-500 hover:text-gold-400 font-sans uppercase tracking-widest font-bold focus:outline-none transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
