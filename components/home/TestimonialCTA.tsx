"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Maruti Salts consistently delivers on purity parameters. Their Kala Namak has become the core ingredient in our Ayurvedic formulations.",
    name: "Dr. Ananya S.",
    role: "Head of Sourcing, Veda Herbals",
  },
  {
    quote: "Finding a reliable supplier for 100+ ton monthly shipments without quality variance is rare. Maruti meets our export demands perfectly.",
    name: "Rajesh K.",
    role: "Director of Procurement, Global Spices Ltd.",
  },
  {
    quote: "The texture and mineral richness of their Sendha Namak is unmatched. It’s exactly what our premium retail customers expect.",
    name: "Priya V.",
    role: "Founder, Earth Essentials",
  },
];

export default function TestimonialCTA() {
  return (
    <section className="bg-surface relative overflow-hidden border-t border-mineral/10">
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("/images/mineral-texture-bg.jpg")', backgroundSize: 'cover' }}
      ></div>

      <div className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-text mb-16 text-center">
          Trusted by Industry Leaders
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-bg p-10 shadow-sm border border-mineral/5"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent mb-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11H6C6 8.23858 8.23858 6 11 6V4C7.13401 4 4 7.13401 4 11V19H12V11H10Z" fill="currentColor"/>
                <path d="M20 11H16C16 8.23858 18.2386 6 21 6V4C17.134 4 14 7.13401 14 11V19H22V11H20Z" fill="currentColor"/>
              </svg>
              <p className="text-text/80 leading-relaxed mb-8 italic">&quot;{t.quote}&quot;</p>
              <div>
                <p className="font-display text-xl text-text">{t.name}</p>
                <p className="text-text/50 text-xs uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-mineral text-bg p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <h2 className="font-display text-4xl md:text-5xl max-w-lg text-center lg:text-left">
            Ready to source premium Indian salt?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link 
              href="/contact" 
              className="bg-accent text-bg px-8 py-4 uppercase tracking-widest text-sm text-center hover:bg-bg hover:text-accent transition-colors border border-transparent hover:border-accent"
            >
              Request a Quote
            </Link>
            <Link 
              href="/products" 
              className="bg-transparent border border-bg/30 text-bg px-8 py-4 uppercase tracking-widest text-sm text-center hover:bg-bg/10 transition-colors"
            >
              Download Catalogue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
