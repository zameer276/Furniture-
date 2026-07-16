import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ConsultationModal from "./components/ConsultationModal";

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOpenConsultation = () => {
    setSelectedProduct("");
    setIsConsultationOpen(true);
  };

  const handleSelectProduct = (productName: string) => {
    setSelectedProduct(productName);
    setIsConsultationOpen(true);
  };

  const handleClearSelectedProduct = () => {
    setSelectedProduct("");
  };

  return (
    <div className="min-h-screen bg-gold-100/10 text-charcoal-900 selection:bg-gold-500 selection:text-charcoal-950 font-sans overflow-x-hidden antialiased">
      {/* Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Hero Section */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* About Section */}
      <About />

      {/* Products Section */}
      <Products onSelectProduct={handleSelectProduct} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Process Section */}
      <Process />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact
        selectedProduct={selectedProduct}
        onClearSelectedProduct={handleClearSelectedProduct}
      />

      {/* Footer Section */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Consultation Popup Dialog */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledProduct={selectedProduct}
      />
    </div>
  );
}
