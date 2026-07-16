import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, ArrowRight, ShieldCheck, Check, Info, X } from "lucide-react";
import { Product } from "../types";

interface ProductsProps {
  onSelectProduct: (productName: string) => void;
}

export default function Products({ onSelectProduct }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProductDetails, setActiveProductDetails] = useState<Product | null>(null);

  const categories = ["All", "Living Room", "Bedroom", "Kitchen & Dining", "Office & Corporate", "Complete Interior"];

  const productsData: Product[] = [
    {
      id: "sofa",
      name: "Luxury Sofas & Lounges",
      category: "Living Room",
      description: "Custom handcrafted Chesterfields, sectionals, and modern statement sofas. Engineered with kiln-dried solid hardwood, premium high-resiliency foam, and wrapped in elite stain-resistant Turkish velvet, bouclé, or genuine leather.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Seasoned walnut/teak inner frames",
        "300+ luxury fabric and color choices",
        "High-density ergonomic memory foam",
        "Lifetime joint-structural guarantee",
      ],
    },
    {
      id: "bed",
      name: "Designer Bespoke Beds",
      category: "Bedroom",
      description: "Ultra-premium upholstered double beds, king-size beds, and master suites. Standard with deep button-tufting, grand floor-to-ceiling headboards, integrated ambient LED lighting, and smart hydraulic storage compartments.",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Heavy-duty reinforced platform frame",
        "Custom headboard padding up to 10ft high",
        "German-engineered gas-lift hydraulics",
        "Moisture-proof internal underbed storage",
      ],
    },
    {
      id: "dining",
      name: "Exquisite Dining Sets",
      category: "Kitchen & Dining",
      description: "Handcrafted solid wood, resin, and premium marble-top dining tables paired with ergonomic luxury chairs. Designed as the ultimate family centerpiece, showcasing pristine timber grain and heavy architectural base styles.",
      image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Imported Italian marble or solid walnut tops",
        "Heat and scratch-resistant protective seals",
        "Bespoke chairs with high-tensile frame support",
        "Scalable size configurations (4, 6, 8, 12, or 16 seaters)",
      ],
    },
    {
      id: "wardrobe",
      name: "Premium Fitted Wardrobes",
      category: "Bedroom",
      description: "Luxury custom-fitted floor-to-ceiling wardrobes, sliding walk-in closets, and dressing rooms. Engineered with sleek glass panes, rich wood veneers, automatic built-in LED lighting, and custom drawer layout dividers.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Soft-close premium soft dampers and sliders",
        "Smoked glass, high-gloss, or wood veneer finishes",
        "Integrated motion-sensor jewelry/watch trays",
        "Optimized space-saving custom interior layout",
      ],
    },
    {
      id: "kitchen",
      name: "Elite Modular Kitchens",
      category: "Kitchen & Dining",
      description: "State-of-the-art modular kitchens blending high-end Kashmiri aesthetics with modular luxury. Fully equipped with seamless quartz countertops, anti-fingerprint acrylic drawers, and smart organizing pull-outs.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Waterproof and heatproof premium ply cores",
        "Sleek handless profiling and gold accents",
        "World-class Blum or Hettich hinges & drawers",
        "Dedicated appliance housings and trash sorting",
      ],
    },
    {
      id: "tv-unit",
      name: "Bespoke TV & Media Consoles",
      category: "Living Room",
      description: "Stunning feature-wall media units combining floating consoles, fluted charcoal wood paneling, marble backsplashes, and integrated display shelving to store and elevate your entertainment systems.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Concealed anti-tangling wire channels",
        "Imported fluted charcoal/wood paneling",
        "Soft-close drawers and tempered glass display cubes",
        "Floating brackets supporting screen sizes up to 98\"",
      ],
    },
    {
      id: "office",
      name: "Executive Office Furniture",
      category: "Office & Corporate",
      description: "Commanding director desks, board meeting tables, and ergonomic high-back leather chairs. Crafted to reflect corporate power, prestige, and peak comfort, featuring real wood overlays and gold borders.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Premium leather writing pad integrations",
        "Built-in wireless phone chargers and pop-up sockets",
        "Filing cabinets with biometric fingerprint locking",
        "Ergonomic lumbar-support alignment",
      ],
    },
    {
      id: "interior",
      name: "Custom Interior Solutions",
      category: "Complete Interior",
      description: "Full-scale turnkey residential and commercial luxury interior transformations. Includes custom-matched wall paneling, false ceiling details, premium designer doors, and coordinated thematic furniture layouts.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      features: [
        "Complete layout blueprints and 3D mockups",
        "Perfect styling match across all rooms",
        "Full supervision and fast-track execution",
        "Premium paint, wallpaper, and accent wall panels",
      ],
    },
  ];

  const filteredProducts = selectedCategory === "All"
    ? productsData
    : productsData.filter((product) => product.category === selectedCategory);

  const getWhatsAppLink = (productName: string) => {
    return `https://wa.me/919149473198?text=Hello%20My%20Home%20Stories,%20I'm%20highly%20interested%20in%20customizing%20the%20"${encodeURIComponent(productName)}"%20for%20my%20home.%20Can%20we%20discuss%20further?`;
  };

  return (
    <section id="products" className="py-24 bg-charcoal-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-gold-500 block mb-3">
            CURATED COLLECTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6 font-bold leading-tight">
            Our Luxury Creations
          </h2>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="font-sans text-sm text-charcoal-300 leading-relaxed font-light">
            Each piece is custom-made to reflect your personal story. Select a category below and discover the premium materials and detailing we incorporate into our bespoke Kashmiri designs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-sans text-xs uppercase tracking-widest font-semibold px-5 py-3 rounded-sm transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gold-500 text-charcoal-950 shadow-lg shadow-gold-500/10"
                  : "bg-charcoal-900 text-charcoal-300 hover:text-white border border-white/5 hover:border-gold-500/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="bg-charcoal-900 border border-white/5 hover:border-gold-500/30 rounded-sm overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/5"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={`${product.name} - My Home Stories Srinagar`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80"></div>
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-gold-500/10 border border-gold-500/30 backdrop-blur-md text-gold-400 font-sans text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-sm">
                    {product.category}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-lg tracking-wide text-white group-hover:text-gold-400 transition-colors mb-3">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs text-charcoal-300 mb-6 leading-relaxed font-light line-clamp-3 flex-1">
                    {product.description}
                  </p>

                  <div className="h-[1px] w-full bg-white/5 mb-5"></div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <button
                      onClick={() => setActiveProductDetails(product)}
                      className="flex items-center justify-center space-x-1.5 border border-gold-500/20 hover:border-gold-500/50 text-gold-500 hover:text-gold-400 bg-gold-500/5 hover:bg-gold-500/10 transition-all text-xs font-semibold uppercase tracking-wider py-3 rounded-sm cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Learn More</span>
                    </button>
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white transition-all text-xs font-bold uppercase tracking-wider py-3 rounded-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Detail Lightbox Modal */}
      <AnimatePresence>
        {activeProductDetails && (
          <motion.div
            id="product-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-950/95 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              id="product-lightbox"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-charcoal-900 border border-gold-500/30 rounded-sm max-w-3xl w-full overflow-hidden shadow-2xl relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProductDetails(null)}
                className="absolute top-4 right-4 z-10 bg-charcoal-950/80 border border-white/10 hover:border-gold-500 p-2 text-charcoal-300 hover:text-white transition-all rounded-full"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Product Hero Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={activeProductDetails.image}
                    alt={activeProductDetails.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-charcoal-900/90 via-transparent to-transparent"></div>
                </div>

                {/* Details Side */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-gold-500 font-sans text-[10px] uppercase tracking-widest font-bold block mb-2">
                      {activeProductDetails.category} Custom Spec
                    </span>
                    <h3 className="font-serif text-2xl tracking-wide text-white mb-4">
                      {activeProductDetails.name}
                    </h3>
                    <p className="font-sans text-xs text-charcoal-200 leading-relaxed mb-6 font-light">
                      {activeProductDetails.description}
                    </p>

                    <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-white mb-3">
                      Bespoke Specifications:
                    </h4>
                    <ul className="space-y-2 mb-8">
                      {activeProductDetails.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-xs text-charcoal-300 font-light">
                          <Check className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary Call to Actions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <button
                      onClick={() => {
                        onSelectProduct(activeProductDetails.name);
                        setActiveProductDetails(null);
                      }}
                      className="bg-gold-500 hover:bg-gold-600 text-charcoal-950 font-sans text-xs uppercase tracking-wider font-bold py-3.5 px-4 rounded-sm transition-all text-center cursor-pointer"
                    >
                      Book Consultation
                    </button>
                    <a
                      href={getWhatsAppLink(activeProductDetails.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs uppercase tracking-wider font-bold py-3.5 px-4 rounded-sm transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Build</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
