import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a high-converting message after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    // Hide it automatically after 9 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Dynamic Conversation Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.a
            href="https://wa.me/919149473198?text=Hello%20My%20Home%20Stories,%20I'd%20like%20to%20receive%20a%20free%20consultation%20and%20price%20quote%20for%20some%20custom%20furniture."
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            className="mr-3 bg-white text-charcoal-900 border border-gold-500/20 px-4 py-2.5 rounded-sm shadow-xl flex flex-col items-start max-w-xs group cursor-pointer"
          >
            <div className="flex items-center space-x-1 mb-0.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
              <span className="text-[10px] uppercase tracking-widest font-sans font-bold text-emerald-600">Active Designer Online</span>
            </div>
            <p className="font-sans text-xs text-charcoal-700 leading-tight font-light">
              Hi! Text us for instant custom furniture estimates in Kashmir.
            </p>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Pulsing Core Action Button */}
      <motion.a
        id="whatsapp-floating-action"
        href="https://wa.me/919149473198?text=Hello%20My%20Home%20Stories,%20I'd%20like%20to%20receive%20a%20free%20consultation%20and%20price%20quote%20for%20some%20custom%20furniture."
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl relative cursor-pointer"
        aria-label="Direct WhatsApp inquiry"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-[ping_2s_infinite_ease-out]"></span>
        <MessageSquare className="w-7 h-7 relative z-10" />
      </motion.a>
    </div>
  );
}
