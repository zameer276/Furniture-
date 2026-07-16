import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Search, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Living Rooms", "Bedrooms", "Dining Rooms", "Modular Kitchens", "Office Furniture", "Luxury Interiors"];

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      title: "Royal Crimson Living Room Sofa Suite",
      category: "Living Rooms",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-2",
      title: "Emerald Premium Velvet Lounge Setup",
      category: "Living Rooms",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-3",
      title: "Imperial Fluted Headboard & Bedroom Suite",
      category: "Bedrooms",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-4",
      title: "Scandinavian Minimalist Floating Double Bed",
      category: "Bedrooms",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-5",
      title: "Premium Seasoned Walnut 8-Seater Dining",
      category: "Dining Rooms",
      image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-6",
      title: "Dark Oak Smart Cabinets & Modular Kitchen",
      category: "Modular Kitchens",
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-7",
      title: "Director's Suite Oak Desk & Coordinated Paneling",
      category: "Office Furniture",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-8",
      title: "Turnkey Luxury Living Room Wall Architecture",
      category: "Luxury Interiors",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "gal-9",
      title: "Bespoke Entryway Console Table & Wall Panel",
      category: "Luxury Interiors",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIdx = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
      setLightboxIndex(prevIdx);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIdx = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
      setLightboxIndex(nextIdx);
    }
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const getWhatsAppInquiryLink = (title: string) => {
    return `https://wa.me/919149473198?text=Hello%20My%20Home%20Stories,%20I'm%20very%20interested%20in%20the%20design%20concept%20named%20"${encodeURIComponent(title)}"%20shown%20in%20your%20gallery.%20Can%20we%20implement%20this%20for%20my%20home?`;
  };

  return (
    <section id="gallery" className="py-24 bg-gold-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-gold-600 block mb-3">
            PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-charcoal-900 mb-6 font-bold leading-tight">
            Our Completed Projects
          </h2>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="font-sans text-sm text-charcoal-600 leading-relaxed font-light">
            An illustrative tour of our premium handcrafting. Click on any design concept to expand the photo gallery and book a custom fabrication project for your residence.
          </p>
        </div>

        {/* Categories Tab Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`font-sans text-xs uppercase tracking-widest font-semibold px-4 py-2.5 rounded-sm transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gold-500 text-charcoal-950 shadow-md"
                  : "bg-white text-charcoal-600 hover:text-gold-600 border border-gold-500/10 hover:border-gold-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout Container */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="gallery-item group relative overflow-hidden bg-charcoal-900 cursor-pointer rounded-sm border border-gold-500/10 hover:border-gold-500/40 hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={`${item.title} - My Home Stories`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Backdrop hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  <span className="text-[10px] text-gold-400 font-sans uppercase tracking-widest font-bold mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base text-white tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-gold-500 font-semibold uppercase tracking-wider">
                    <Search className="w-4 h-4" />
                    <span>View Showcase</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            id="gallery-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-charcoal-950/98 backdrop-blur-sm flex flex-col items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 bg-charcoal-900 border border-white/10 hover:border-gold-500 p-2.5 text-charcoal-300 hover:text-white rounded-full transition-all"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Control */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 bg-charcoal-900/80 border border-white/5 hover:border-gold-500 p-3 text-charcoal-200 hover:text-white rounded-full transition-all"
              aria-label="Previous showcase"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox Content Shield */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full flex flex-col items-center space-y-4"
            >
              {/* Main Image Frame */}
              <motion.div
                key={currentItem.id}
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.97, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-h-[70vh] rounded-sm overflow-hidden border border-gold-500/20 shadow-2xl"
              >
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full max-h-[70vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Description & Action Footer Row */}
              <div className="w-full max-w-4xl text-center flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 px-4">
                <div className="text-left">
                  <span className="text-[10px] text-gold-400 font-sans uppercase tracking-widest font-bold">
                    {currentItem.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-white tracking-wide mt-1">
                    {currentItem.title}
                  </h3>
                </div>

                <a
                  href={getWhatsAppInquiryLink(currentItem.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs uppercase tracking-widest font-bold px-6 py-3.5 rounded-sm transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request This Design</span>
                </a>
              </div>
            </div>

            {/* Right Control */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 bg-charcoal-900/80 border border-white/5 hover:border-gold-500 p-3 text-charcoal-200 hover:text-white rounded-full transition-all"
              aria-label="Next showcase"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
