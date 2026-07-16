import { motion } from "motion/react";
import { MessageSquare, PenTool, Flame, Truck, ArrowRight } from "lucide-react";
import { ProcessStep } from "../types";

export default function Process() {
  const steps: (ProcessStep & { icon: any })[] = [
    {
      id: "consultation",
      stepNumber: "01",
      title: "Free Consultation",
      description: "Book an appointment or visit us. We discuss your rooms, layouts, aesthetic inspirations, wood/fabric preferences, and measure your space to craft the perfect blueprints.",
      icon: MessageSquare,
    },
    {
      id: "design",
      stepNumber: "02",
      title: "Design & Planning",
      description: "Our design consultants outline detailed floorplans and curated catalog renders. We select exact timber grades, hardware, and luxury textures, providing precise upfront pricing.",
      icon: PenTool,
    },
    {
      id: "manufacturing",
      stepNumber: "03",
      title: "Manufacturing",
      description: "Our veteran craftsmen in Srinagar begin hand-carving and assembling your custom furniture. We maintain state-of-the-art seasoning kilns to prevent any future timber warping.",
      icon: Flame,
    },
    {
      id: "delivery",
      stepNumber: "04",
      title: "Delivery & Installation",
      description: "Your finished bespoke order is carefully packed, transported securely, and assembled by our white-glove technicians inside your home, ensuring flawless alignment.",
      icon: Truck,
    },
  ];

  return (
    <section id="process" className="py-24 bg-charcoal-900 text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent z-0 hidden lg:block -translate-y-8"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-gold-500 block mb-3">
            WORKFLOW
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6 font-bold">
            The Bespoke Creation Path
          </h2>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="font-sans text-sm text-charcoal-300 leading-relaxed font-light">
            We hold ourselves to an uncompromising standard. From initial abstract sketches to the final hand-polished assembly, discover how we bring your dream furniture to life.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-charcoal-950/50 p-8 border border-white/5 hover:border-gold-500/30 rounded-sm relative group transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/5 w-full flex-1 flex flex-col items-center"
                >
                  {/* Huge Number */}
                  <span className="font-serif text-5xl md:text-6xl text-gold-500/10 group-hover:text-gold-500/20 font-bold transition-all duration-500 absolute top-4 right-6 select-none">
                    {step.stepNumber}
                  </span>

                  {/* Icon Shield */}
                  <div className="w-14 h-14 rounded-full bg-gold-500/5 border border-gold-500/20 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-charcoal-950 group-hover:border-transparent transition-all duration-500 mb-6 relative z-10">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-lg tracking-wide text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-sans text-xs text-charcoal-300 leading-relaxed font-light">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connective Arrow for large screens (only between steps) */}
                {idx < 3 && (
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 hidden lg:block text-gold-500/20 group-hover:text-gold-500 transition-colors">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
