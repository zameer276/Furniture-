import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Loader2, Check, MessageSquare } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

export default function ConsultationModal({ isOpen, onClose, prefilledProduct }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        projectType: prefilledProduct || "",
        budget: "",
        message: "",
      });
      setIsSuccess(false);
    }
  }, [isOpen, prefilledProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const getWhatsAppLeadLink = () => {
    const text = `Hello My Home Stories! I have just scheduled a free consultation from your popup.

Here are my project details:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || "N/A"}
• Project: ${formData.projectType}
• Budget: ${formData.budget}
• Message: ${formData.message || "Looking for premium bespoke designs."}`;

    return `https://wa.me/919149473198?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="consultation-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-charcoal-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          {/* Main Dialog Box */}
          <motion.div
            id="consultation-modal"
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-charcoal-900 border border-gold-500/20 max-w-xl w-full rounded-sm overflow-hidden shadow-2xl relative text-white"
          >
            {/* Top gold border decorative bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-charcoal-950 border border-white/5 hover:border-gold-500 p-2 text-charcoal-300 hover:text-white rounded-full transition-all"
              aria-label="Close consultation modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Body */}
            <div className="p-8 sm:p-10 pt-10">
              {!isSuccess ? (
                <div>
                  <h3 className="font-serif text-2xl tracking-wide text-white mb-2">
                    Request Bespoke Consultation
                  </h3>
                  <p className="font-sans text-xs text-charcoal-300 mb-6 leading-relaxed font-light">
                    Submit your details and preferences. Our lead furniture designer will contact you to coordinate a physical measurement visit.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="modal-name" className="block text-[10px] uppercase tracking-widest font-sans font-bold text-gold-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="modal-name"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Dr. Bilal Ahmad"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-charcoal-950 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3 rounded-sm font-sans text-xs text-white transition-all placeholder:text-charcoal-600 font-light"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Phone */}
                      <div>
                        <label htmlFor="modal-phone" className="block text-[10px] uppercase tracking-widest font-sans font-bold text-gold-400 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          id="modal-phone"
                          type="tel"
                          name="phone"
                          required
                          placeholder="e.g. +91 91494 73198"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-charcoal-950 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3 rounded-sm font-sans text-xs text-white transition-all placeholder:text-charcoal-600 font-light"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="modal-email" className="block text-[10px] uppercase tracking-widest font-sans font-bold text-gold-400 mb-1.5">
                          Email Address
                        </label>
                        <input
                          id="modal-email"
                          type="email"
                          name="email"
                          placeholder="e.g. name@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-charcoal-950 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3 rounded-sm font-sans text-xs text-white transition-all placeholder:text-charcoal-600 font-light"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Project Type */}
                      <div>
                        <label htmlFor="modal-projectType" className="block text-[10px] uppercase tracking-widest font-sans font-bold text-gold-400 mb-1.5">
                          Project Type *
                        </label>
                        <select
                          id="modal-projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-charcoal-950 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3 rounded-sm font-sans text-xs text-white transition-all cursor-pointer font-light"
                        >
                          <option value="" disabled className="text-charcoal-500">Select Room / Option</option>
                          <option value="Luxury Sofas & Lounges">Luxury Sofas & Lounges</option>
                          <option value="Designer Bespoke Beds">Designer Bespoke Beds</option>
                          <option value="Exquisite Dining Sets">Exquisite Dining Sets</option>
                          <option value="Premium Fitted Wardrobes">Premium Fitted Wardrobes</option>
                          <option value="Elite Modular Kitchens">Elite Modular Kitchens</option>
                          <option value="Bespoke TV & Media Consoles">Bespoke TV & Media Consoles</option>
                          <option value="Executive Office Furniture">Executive Office Furniture</option>
                          <option value="Custom Interior Solutions">Custom Interior Solutions</option>
                        </select>
                      </div>

                      {/* Estimated Budget */}
                      <div>
                        <label htmlFor="modal-budget" className="block text-[10px] uppercase tracking-widest font-sans font-bold text-gold-400 mb-1.5">
                          Estimated Budget *
                        </label>
                        <select
                          id="modal-budget"
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-charcoal-950 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3 rounded-sm font-sans text-xs text-white transition-all cursor-pointer font-light"
                        >
                          <option value="" disabled className="text-charcoal-500">Select Budget Range</option>
                          <option value="Under ₹2 Lakhs">Under ₹2 Lakhs</option>
                          <option value="₹2 Lakhs - ₹5 Lakhs">₹2 Lakhs - ₹5 Lakhs</option>
                          <option value="₹5 Lakhs - ₹10 Lakhs">₹5 Lakhs - ₹10 Lakhs</option>
                          <option value="₹10 Lakhs - ₹20 Lakhs">₹10 Lakhs - ₹20 Lakhs</option>
                          <option value="₹20 Lakhs+">₹20 Lakhs+ (Full Home Interior)</option>
                        </select>
                      </div>

                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="modal-message" className="block text-[10px] uppercase tracking-widest font-sans font-bold text-gold-400 mb-1.5">
                        Details / Message
                      </label>
                      <textarea
                        id="modal-message"
                        name="message"
                        rows={3}
                        placeholder="e.g. Dimensions of living room, specific upholstery fabric types, wood carving designs..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-charcoal-950 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3 rounded-sm font-sans text-xs text-white transition-all placeholder:text-charcoal-600 resize-none font-light"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gold-500/50 text-charcoal-950 font-sans text-xs uppercase tracking-widest font-bold py-3.5 rounded-sm transition-all duration-300 shadow-xl shadow-gold-500/10 flex items-center justify-center space-x-2 cursor-pointer mt-6"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Generating Reservation...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Schedule Free Consultation</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 mx-auto mb-5">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-white tracking-wide mb-1">
                    Consultation Requested
                  </h3>
                  <span className="text-gold-500 font-sans text-[10px] uppercase tracking-[0.2em] font-bold block mb-4">
                    Our Designers will call you
                  </span>
                  <p className="font-sans text-xs text-charcoal-300 leading-relaxed mb-8 max-w-sm mx-auto font-light">
                    Your request for a custom <strong>{formData.projectType}</strong> project design consultation has been locked in. We will coordinate details with you within 24 hours.
                  </p>

                  <div className="bg-charcoal-950 border border-gold-500/10 p-5 rounded-sm mb-6 text-left">
                    <p className="font-sans text-[11px] text-charcoal-300 leading-relaxed font-light mb-4">
                      Would you like to instantly share your layout specifications with our Srinagar workshop team on WhatsApp? This speeds up scheduling.
                    </p>
                    <a
                      href={getWhatsAppLeadLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs uppercase tracking-widest font-bold py-3 rounded-sm transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={onClose}
                    className="text-xs uppercase tracking-widest font-bold text-charcoal-400 hover:text-white transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
