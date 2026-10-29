"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const PRODUCTS = [
  {
    id: 1,
    name: "Black Salt (Kala Namak)",
    type: "Ayurvedic & Food Grade",
    image: "/images/hero-crystal.jpg",
    items: [
      "Crystal Black Salt",
      "Farnish Black Salt",
      "Black Salt Mava",
      "Black Salt Fine Granules",
      "Black Salt Powder",
    ],
  },
  {
    id: 2,
    name: "Rock Salt (Senda Namak)",
    type: "Himalayan & Wellness Grade",
    image: "/images/rock-salt-chunks.jpg",
    items: [
      "Rock Salt Irani",
      "Himalayan Pink Rock Salt (Lahori)",
      "Rock Salt Granules",
      "Rock Salt Suji",
      "Rock Salt Powder",
    ],
  },
  {
    id: 3,
    name: "Industrial Salt",
    type: "Commercial & Refined Grade",
    image: "/images/process-extraction.jpg",
    items: [
      "Refined Crushed Salt",
      "Free Flow Iodised Salt",
      "Fine Dust Salt Powder",
    ],
  },
];

export default function ProductHorizontal() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <section ref={targetRef} className="h-[300vh] relative bg-surface">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Progress Bar */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
        
        <motion.div style={{ x }} className="flex w-[300vw] h-full">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="w-[100vw] h-full flex items-center justify-center p-6 lg:p-20">
              <div className="w-full max-w-[620px] h-full max-h-[82vh] flex flex-col bg-bg shadow-xl border border-mineral/10 rounded-sm overflow-hidden">
                <div className="w-full h-[45%] md:h-[50%] relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-mineral/15 mix-blend-multiply" />
                </div>
                <div className="flex flex-col flex-1 justify-between p-6 sm:p-8 md:p-10">
                  <div>
                    <h3 className="text-text/60 uppercase tracking-widest text-xs mb-2 font-medium">{product.type}</h3>
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-text mb-5">{product.name}</h2>
                    
                    <div className="mb-6">
                      <span className="text-xs uppercase tracking-wider text-text/50 font-medium block mb-3">Available Varieties:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {product.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-text/80 text-xs md:text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link href="/products" className="inline-flex items-center gap-2 text-accent font-medium hover:text-mineral transition-colors uppercase tracking-widest text-xs md:text-sm self-start pt-2">
                    View Complete Catalog 
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
