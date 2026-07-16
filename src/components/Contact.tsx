import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, MessageSquare, Check, Calendar, ArrowRight, Loader2 } from "lucide-react";

interface ContactProps {
  selectedProduct: string;
  onClearSelectedProduct: () => void;
}

export default function Contact({ selectedProduct, onClearSelectedProduct }: ContactProps) {
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
  const formRef = useRef<HTMLDivElement>(null);

  // Prefill the project type dropdown if a product was selected elsewhere
  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        projectType: selectedProduct,
      }));

      // Smooth scroll to the form
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedProduct]);

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
      onClearSelectedProduct();
    }, 1500);
  };

  const getWhatsAppLeadLink = () => {
    const text = `Hello My Home Stories! I have just requested a free consultation from your website.

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
    <section id="contact" ref={formRef} className="py-24 bg-charcoal-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-gold-500 block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6 font-bold">
            Begin Your Luxury Story
          </h2>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="font-sans text-sm text-charcoal-300 leading-relaxed font-light">
            Contact our Srinagar workshop today. Whether you wish to design a single sofa suite or outline a complete residential transformation, we are ready to serve you.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Information & Google Map */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="font-serif text-2xl tracking-wide text-white mb-6">
                Our Srinagar Office & Workshop
              </h3>
              <p className="font-sans text-sm text-charcoal-300 leading-relaxed font-light mb-8">
                We welcome visitors at our prime bypass facility. Come touch the finest woods, feel the fabrics, and consult directly with our master designers.
              </p>

              {/* Information Row Items */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-gold-500/10 border border-gold-500/20 rounded-sm flex items-center justify-center text-gold-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white mb-1">
                      Our Location
                    </h4>
                    <p className="font-sans text-xs text-charcoal-300 leading-relaxed font-light">
                      Bypass, Airport Road, Alnoor Colony,<br />
                      Hyderpora, Srinagar, Jammu & Kashmir – 190014
                    </p>
                  </div>
                </div>

                {/* Phone & Call */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-gold-500/10 border border-gold-500/20 rounded-sm flex items-center justify-center text-gold-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white mb-1">
                      Call & WhatsApp
                    </h4>
                    <p className="font-sans text-xs text-charcoal-300 font-light mb-1">
                      Direct Workshop Phone:
                    </p>
                    <a
                      href="tel:+919149473198"
                      className="font-sans text-sm font-bold text-gold-500 hover:text-gold-400 transition-colors"
                    >
                      +91 91494 73198
                    </a>
                  </div>
                </div>

                {/* Direct WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-emerald-500/10 border border-emerald-500/20 rounded-sm flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white mb-1">
                      Instantly Text Us
                    </h4>
                    <p className="font-sans text-xs text-charcoal-300 font-light mb-1">
                      Available 24/7 for custom quotations:
                    </p>
                    <a
                      href="https://wa.me/919149473198?text=Hello%20My%20Home%20Stories"
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      WhatsApp +91 91494 73198
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Embedded Frame */}
            <div className="relative rounded-sm overflow-hidden border border-gold-500/10 bg-charcoal-950 aspect-[16/10] shadow-xl">
              <iframe
                title="My Home Stories Srinagar Workshop Map"
                src="https://maps.google.com/maps?q=My%20Home%20Stories,%20Hyderpora%20Bypass,%20Srinagar&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Consultation Booking Lead Form */}
          <div className="lg:col-span-7 bg-charcoal-950/40 p-8 sm:p-12 border border-white/5 rounded-sm shadow-2xl relative">
            <div className="absolute top-0 right-12 w-32 h-1 bg-gold-500"></div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-serif text-2xl tracking-wide text-white mb-2">
                    Request a Free Consultation
                  </h3>
                  <p className="font-sans text-xs text-charcoal-300 mb-8 leading-relaxed font-light">
                    Submit your details and preferences below. Our head of luxury manufacturing will contact you within 24 hours to plan a site measurement visit.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div>
                        <label htmlFor="form-name" className="block text-xs uppercase tracking-widest font-sans font-bold text-gold-400 mb-2">
                          Your Name *
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Bilal Ahmad"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-charcoal-900 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3.5 rounded-sm font-sans text-sm text-white transition-all placeholder:text-charcoal-500 font-light"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="form-phone" className="block text-xs uppercase tracking-widest font-sans font-bold text-gold-400 mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="form-phone"
                          type="tel"
                          name="phone"
                          required
                          placeholder="e.g. +91 91494 73198"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-charcoal-900 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3.5 rounded-sm font-sans text-sm text-white transition-all placeholder:text-charcoal-500 font-light"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="form-email" className="block text-xs uppercase tracking-widest font-sans font-bold text-gold-400 mb-2">
                          Email Address
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          name="email"
                          placeholder="e.g. name@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-charcoal-900 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3.5 rounded-sm font-sans text-sm text-white transition-all placeholder:text-charcoal-500 font-light"
                        />
                      </div>

                      {/* Project Type */}
                      <div>
                        <label htmlFor="form-projectType" className="block text-xs uppercase tracking-widest font-sans font-bold text-gold-400 mb-2">
                          Project Type *
                        </label>
                        <select
                          id="form-projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-charcoal-900 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3.5 rounded-sm font-sans text-sm text-white transition-all cursor-pointer font-light"
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

                    </div>

                    {/* Estimated Budget range */}
                    <div>
                      <label htmlFor="form-budget" className="block text-xs uppercase tracking-widest font-sans font-bold text-gold-400 mb-2">
                        Estimated Budget *
                      </label>
                      <select
                        id="form-budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-charcoal-900 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3.5 rounded-sm font-sans text-sm text-white transition-all cursor-pointer font-light"
                      >
                        <option value="" disabled className="text-charcoal-500">Select Budget Range</option>
                        <option value="Under ₹2 Lakhs">Under ₹2 Lakhs</option>
                        <option value="₹2 Lakhs - ₹5 Lakhs">₹2 Lakhs - ₹5 Lakhs</option>
                        <option value="₹5 Lakhs - ₹10 Lakhs">₹5 Lakhs - ₹10 Lakhs</option>
                        <option value="₹10 Lakhs - ₹20 Lakhs">₹10 Lakhs - ₹20 Lakhs</option>
                        <option value="₹20 Lakhs+">₹20 Lakhs+ (Full Home Interior)</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="form-message" className="block text-xs uppercase tracking-widest font-sans font-bold text-gold-400 mb-2">
                        Project Details / Message
                      </label>
                      <textarea
                        id="form-message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your spaces, measurements, custom carving preferences, or specific layout needs..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-charcoal-900 border border-white/10 hover:border-gold-500/40 focus:border-gold-500 focus:outline-none px-4 py-3.5 rounded-sm font-sans text-sm text-white transition-all placeholder:text-charcoal-500 resize-none font-light"
                      ></textarea>
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gold-500/50 text-charcoal-950 font-sans text-xs uppercase tracking-widest font-bold py-4.5 rounded-sm transition-all duration-300 shadow-xl shadow-gold-500/10 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Generating Lead...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Request Free Consultation</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 mb-6">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl text-white tracking-wide mb-3">
                    Inquiry Received
                  </h3>
                  <span className="text-gold-500 font-sans text-xs uppercase tracking-[0.2em] font-bold block mb-4">
                    Thank you, {formData.name}
                  </span>
                  <p className="font-sans text-sm text-charcoal-200 leading-relaxed max-w-md mx-auto mb-10 font-light">
                    Our luxury design consultant is reviewing your custom <strong>{formData.projectType}</strong> project requirements. We will coordinate a physical site visit or phone review shortly.
                  </p>

                  <div className="w-full bg-charcoal-900 border border-gold-500/20 p-6 sm:p-8 rounded-sm mb-8 text-left">
                    <h4 className="font-serif text-sm tracking-widest text-gold-400 uppercase mb-4">
                      Accelerate Your Consultation
                    </h4>
                    <p className="font-sans text-xs text-charcoal-300 leading-relaxed font-light mb-6">
                      Want to discuss layout details immediately? Send your request to our Srinagar workshop via WhatsApp for instant priority queuing.
                    </p>
                    <a
                      href={getWhatsAppLeadLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs uppercase tracking-widest font-bold py-4 rounded-sm transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        projectType: "",
                        budget: "",
                        message: "",
                      });
                      setIsSuccess(false);
                    }}
                    className="text-xs uppercase tracking-widest font-bold text-charcoal-300 hover:text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
