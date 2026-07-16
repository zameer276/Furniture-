import { motion } from "motion/react";
import { 
  Compass, 
  Layers, 
  Hammer, 
  Palette, 
  Coins, 
  Calendar, 
  Wrench, 
  Headphones 
} from "lucide-react";
import { ChooseUsItem } from "../types";

export default function WhyChooseUs() {
  const points: ChooseUsItem[] = [
    {
      id: "custom",
      title: "100% Custom Furniture",
      description: "No cookie-cutter shapes. Every drawer, backrest angle, and cabinet is tailored to match your specific layout and aesthetic.",
      iconName: "Compass",
    },
    {
      id: "materials",
      title: "Premium Materials",
      description: "We source authentic kiln-dried walnut, teak, deodar, anti-rust coatings, high-density foam, and elite European fabrics.",
      iconName: "Layers",
    },
    {
      id: "craftsmen",
      title: "Skilled Craftsmen",
      description: "Sourced from Kashmir's legendary artisan families, our woodworkers shape wood with peerless devotion and modern joinery.",
      iconName: "Hammer",
    },
    {
      id: "designs",
      title: "Luxury Designs",
      description: "Our bespoke collections fuse international modern minimalism, Italian contours, and traditional Kashmiri grace.",
      iconName: "Palette",
    },
    {
      id: "affordable",
      title: "Affordable Luxury",
      description: "By managing our state-of-the-art Srinagar factory directly, we bypass luxury retail markups and save you up to 40%.",
      iconName: "Coins",
    },
    {
      id: "delivery",
      title: "On-Time Delivery",
      description: "No endless wait times. We respect your schedules and complete high-precision handcrafting within strict committed dates.",
      iconName: "Calendar",
    },
    {
      id: "installation",
      title: "Professional Installation",
      description: "Our in-house technical delivery team handles complete white-glove transport, zero-dust assembly, and room placement.",
      iconName: "Wrench",
    },
    {
      id: "support",
      title: "Excellent Customer Support",
      description: "Our relationship doesn't end with delivery. We stand firmly behind every piece with continuous, friendly help.",
      iconName: "Headphones",
    },
  ];

  // Helper to map string to Icon component
  const getIcon = (name: string) => {
    switch (name) {
      case "Compass": return Compass;
      case "Layers": return Layers;
      case "Hammer": return Hammer;
      case "Palette": return Palette;
      case "Coins": return Coins;
      case "Calendar": return Calendar;
      case "Wrench": return Wrench;
      case "Headphones": return Headphones;
      default: return Compass;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-gold-100/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-gold-600 block mb-3">
            OUR PROMISE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-charcoal-900 mb-6 font-bold">
            Why My Home Stories?
          </h2>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="font-sans text-sm text-charcoal-600 leading-relaxed font-light">
            We transcend the definition of standard furniture sellers. As master builders, we offer a cohesive, high-touch luxury manufacturing experience that ensures your vision is perfectly realized.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, idx) => {
            const IconComponent = getIcon(point.iconName);
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={point.id}
                className="bg-white p-8 border border-gold-500/10 hover:border-gold-500/30 rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-sm bg-gold-50 flex items-center justify-center text-gold-600 border border-gold-500/10 group-hover:bg-charcoal-900 group-hover:text-gold-400 group-hover:border-transparent transition-all duration-300 mb-6">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="font-sans text-base font-bold text-charcoal-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {point.title}
                </h3>
                <p className="font-sans text-xs text-charcoal-600 leading-relaxed font-light">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
