import { motion } from "motion/react";
import { CheckCircle, ShieldCheck, Gem, UserCheck, Heart, Award } from "lucide-react";
import carvingImg from "../assets/images/kashmiri_craftsman_woodcarving_1784202011462.jpg";

export default function About() {
  const highlights = [
    {
      title: "100% Custom Furniture",
      desc: "Tailored to your exact size, style, fabric, and layout specifications.",
      icon: Gem,
    },
    {
      title: "Luxury Interior Solutions",
      desc: "Turnkey design and manufacturing for living, bed, kitchen, and spaces.",
      icon: Award,
    },
    {
      title: "Premium Handpicked Materials",
      desc: "Selected solid wood (like seasoned walnut and deodar), luxury metals, and fabric.",
      icon: ShieldCheck,
    },
    {
      title: "Experienced Kashmir Artisans",
      desc: "Combining centuries-old carving tradition with modern engineering.",
      icon: UserCheck,
    },
    {
      title: "Uncompromising Attention",
      desc: "Obsession with precision joins, flawless finishes, and heavy-duty structural integrity.",
      icon: Heart,
    },
    {
      title: "Guaranteed Satisfaction",
      desc: "Complete post-installation support and reliable long-term warranties.",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="about" className="py-24 bg-gold-50/50 relative overflow-hidden">
      {/* Absolute Decorative Grid Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Beautiful authentic craftsman photo */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-500 to-gold-700 rounded-sm blur-md opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative overflow-hidden bg-charcoal-900 border border-gold-500/20 shadow-2xl rounded-sm">
              <img
                src={carvingImg}
                alt="Kashmiri craftsman woodcarving premium bespoke furniture - My Home Stories"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent"></div>
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-charcoal-950/90 backdrop-blur-md p-5 border border-gold-500/30 rounded-sm">
                <p className="font-serif text-sm tracking-widest text-gold-500 uppercase mb-1">Authentic Srinagar Heritage</p>
                <p className="font-sans text-xs text-charcoal-200 leading-relaxed font-light">
                  Blending our rich woodcarving heritage with state-of-the-art international standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Narrative Story */}
          <div className="lg:col-span-7">
            <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-gold-600 block mb-3">
              THE ART OF BESPOKE LIVING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-charcoal-900 mb-6 font-bold leading-tight">
              Crafting Kashmir's <br />
              <span className="text-gold-600">Most Exquisite Furniture</span>
            </h2>
            <div className="h-[2px] w-20 bg-gold-500 mb-8"></div>
            
            <p className="font-sans text-base text-charcoal-700 mb-6 leading-relaxed font-light">
              Welcome to <strong>My Home Stories</strong>, where raw elegance meets meticulous luxury. Located in Srinagar, Jammu & Kashmir, we specialize in high-end bespoke furniture designed for fine living. Whether you desire majestic sofas, cozy upholstered beds, sophisticated modular kitchens, or complete home interiors, we custom manufacture everything from scratch.
            </p>
            <p className="font-sans text-base text-charcoal-700 mb-10 leading-relaxed font-light">
              We leverage premium kiln-dried hardwoods, luxury performance fabrics, and world-class hardware. Every single corner, joint, and stitch is refined by master craftsmen to ensure your furniture remains a cherished heirloom for generations.
            </p>

            {/* Micro Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((hl, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-gold-100 flex items-center justify-center text-gold-600 border border-gold-500/10">
                    <hl.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-charcoal-900 mb-1">
                      {hl.title}
                    </h3>
                    <p className="font-sans text-xs text-charcoal-600 leading-relaxed font-light">
                      {hl.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
