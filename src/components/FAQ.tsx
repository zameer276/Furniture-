import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "Do you create custom furniture?",
      answer: "Absolutely. We are a specialized bespoke manufacturer. Every piece of furniture — whether a custom layout sofa, bedroom suite, wardrobe, modular kitchen, or turnkey ceiling panel — is fully custom-built to match your requested measurements, wood options, colors, fabric designs, and detailing.",
    },
    {
      id: "faq-2",
      question: "What materials do you use?",
      answer: "We source only premium-grade materials. Our primary frame structures utilize high-end seasoned walnut wood, teak wood, and moisture-proof deodar wood. For modular kitchens, we use premium water-resistant plywood cores. Our cushions feature high-resiliency memory foam, and our fabrics include elite imported velvets, pure linens, bouclé, and genuine leathers.",
    },
    {
      id: "faq-3",
      question: "How long does manufacturing take?",
      answer: "Since everything is manufactured from raw timber, custom design projects usually take between 3 to 6 weeks, depending on the complexity, handcarving detail, and volume of the order. We specify exact timelines at contract signoff and strictly adhere to them.",
    },
    {
      id: "faq-4",
      question: "Do you provide installation?",
      answer: "Yes, we handle the entire process from transport to professional white-glove setup. Our dedicated in-house installation team transports the completed custom furniture to your address in Srinagar or surrounding Kashmiri districts, manages assembly, handles heavy-duty fixtures, and aligns modular systems beautifully.",
    },
    {
      id: "faq-5",
      question: "Do you offer warranties?",
      answer: "Yes, we stand behind our workmanship. We provide a comprehensive structural warranty (5 to 10 years depending on the wood selected) covering joint integrity, framework, gas-lift hydraulics, and modular runner operations. Standard material warranties on fabric and exterior wear are also provided.",
    },
    {
      id: "faq-6",
      question: "Can I request a home visit?",
      answer: "Certainly. We provide personalized high-end home consultation visits across Srinagar and neighboring regions. Our design consultants will visit your location to measure the spaces, assess the lighting, present wood/fabric swatch catalogs, and recommend ideal sizing.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gold-50/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-gold-600 block mb-3">
            INFORMATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-charcoal-900 mb-6 font-bold">
            Frequently Asked Questions
          </h2>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="font-sans text-sm text-charcoal-600 leading-relaxed font-light">
            Everything you need to know about starting your bespoke luxury furniture order with My Home Stories.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-gold-500/10 hover:border-gold-500/30 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none group"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-gold-500 group-hover:scale-110 transition-transform" />
                    <span className="font-sans text-sm sm:text-base font-semibold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-500 transition-transform duration-350 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-gold-50/50">
                        <p className="font-sans text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
