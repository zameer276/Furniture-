import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { TestimonialItem } from "../types";

export default function Testimonials() {
  const reviews: TestimonialItem[] = [
    {
      id: "test-1",
      name: "Dr. Bilal Ahmad",
      location: "Nishat, Srinagar",
      rating: 5,
      review: "We ordered a complete modular kitchen and a massive solid walnut L-shaped sofa set from My Home Stories. The quality of materials and the flawless high-gloss finish exceeded our expectations. They treated our home with incredible respect during installation. Highly recommended!",
      image: "B",
    },
    {
      id: "test-2",
      name: "Mehak Mir",
      location: "Rajbagh, Srinagar",
      rating: 5,
      review: "The design consultants helped us plan our entire master bedroom suite, from the floor-to-ceiling tufted velvet headboard to the custom walk-in wardrobes with automatic LED lighting. It feels like waking up in a 5-star hotel every single day.",
      image: "M",
    },
    {
      id: "test-3",
      name: "Tariq Rather",
      location: "Hyderpora, Srinagar",
      rating: 5,
      review: "Exceptional craftsmanship. Their direct factory model made bespoke furniture far more affordable than other high-end showrooms in Srinagar. The wood carving elements on our dining table are elegant, subtle, and beautifully finished.",
      image: "T",
    },
    {
      id: "test-4",
      name: "Saima Jan",
      location: "Gupkar Road, Srinagar",
      rating: 5,
      review: "What impressed me most was their strict adherence to the promised delivery timeline. No delays, no excuses. The technical assembly team arrived precisely on time and left our home clean. True professional service in Kashmir.",
      image: "S",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-charcoal-950 text-white relative">
      {/* Visual Ambient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.3em] font-semibold text-gold-500 block mb-3">
            TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-6 font-bold">
            What Our Patrons Say
          </h2>
          <div className="h-[2px] w-20 bg-gold-500 mx-auto mb-6"></div>
          <p className="font-sans text-sm text-charcoal-300 leading-relaxed font-light">
            We are honored to have transformed some of Kashmir's most prestigious residences. Read the stories of luxury, precision, and devotion told by our clients.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={rev.id}
              className="bg-charcoal-900 border border-white/5 hover:border-gold-500/20 p-8 sm:p-10 rounded-sm relative flex flex-col justify-between group transition-all duration-300"
            >
              {/* Quote Mark */}
              <Quote className="w-12 h-12 text-gold-500/5 absolute top-6 right-8 group-hover:text-gold-500/10 transition-colors" />

              <div>
                {/* Stars */}
                <div className="flex space-x-1 mb-6 text-gold-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm text-charcoal-200 leading-relaxed font-light mb-8 italic">
                  "{rev.review}"
                </p>
              </div>

              {/* Client Info Row */}
              <div className="flex items-center space-x-4 pt-6 border-t border-white/5">
                {/* Monogram stamp as avatar */}
                <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-charcoal-950 font-serif text-lg font-bold shadow-md">
                  {rev.image}
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-white">
                    {rev.name}
                  </h4>
                  <p className="font-sans text-[11px] tracking-wider text-gold-400 font-medium">
                    {rev.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
