"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const PRODUCTS = [
  {
    id: 1,
    name: "Black Salt (Kala Namak)",
    type: "Fine Grain",
    image: "/images/black-salt-fine.jpg",
    properties: ["High Sulfur Content", "Ayurvedic Grade", "Rapid Dissolve"],
  },
  {
    id: 2,
    name: "Black Salt (Kala Namak)",
    type: "Coarse Crystal",
    image: "/images/black-salt-coarse.jpg",
    properties: ["Raw Mineral Form", "Slow Release", "Traditional Use"],
  },
  {
    id: 3,
    name: "Rock Salt (Sendha Namak)",
    type: "Chunks",
    image: "/images/rock-salt-chunks.jpg",
    properties: ["Unrefined Purity", "Rich in Trace Minerals", "Culinary & Spa"],
  },
  {
    id: 4,
    name: "Rock Salt (Sendha Namak)",
    type: "Powder",
    image: "/images/rock-salt-powder.jpg",
    properties: ["Fine Texture", "Everyday Use", "FSSAI Certified"],
  },
];

export default function ProductHorizontal() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="h-[400vh] relative bg-surface">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Progress Bar */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
        
        <motion.div style={{ x }} className="flex w-[400vw] h-full">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="w-[100vw] h-full flex items-center justify-center p-6 lg:p-20">
              <div className="w-full max-w-[600px] h-full max-h-[80vh] flex flex-col bg-bg shadow-xl">
                <div className="w-full h-[55%] relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="flex flex-col flex-1 justify-between p-8 md:p-10">
                  <div>
                    <h3 className="text-text/60 uppercase tracking-widest text-xs mb-2 font-medium">{product.type}</h3>
                    <h2 className="font-display text-3xl md:text-4xl text-text mb-6">{product.name}</h2>
                    <ul className="space-y-3 mb-8">
                      {product.properties.map((prop, i) => (
                        <li key={i} className="flex items-center gap-3 text-text/80 text-sm">
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {prop}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/products" className="inline-flex items-center gap-2 text-accent font-medium hover:text-mineral transition-colors uppercase tracking-widest text-sm self-start">
                    View Details 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
