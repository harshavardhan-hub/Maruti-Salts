"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import DesktopHeroVisual from "./DesktopHeroVisual";

// Note: HeroCrystal is preserved in code at components/home/HeroCrystal.tsx
// but disabled from loading for zero loading latency and an elevated editorial design.

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative w-full min-h-screen flex items-center bg-bg overflow-hidden pt-24 pb-16 md:py-0">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-14">
        
        {/* ── Left Column: Typography & Actions ── */}
        <div className="flex flex-col justify-center md:pl-6 lg:pl-10 xl:pl-14">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.8rem,5.5vw,5.4rem)] leading-[0.94] text-text mb-5 md:mb-6"
          >
            Born from<br />
            Earth.<br />
            Refined<br />
            by Time.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-text/80 max-w-md mb-7 md:mb-8 leading-relaxed"
          >
            India&apos;s finest Black Salt, Rock Salt &amp; Industrial Salt manufacturer.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              href="/products" 
              className="inline-block bg-mineral text-bg px-7 py-3.5 uppercase tracking-widest text-xs md:text-sm hover:bg-accent transition-colors duration-300 shadow-sm"
            >
              Explore Our Salts
            </Link>
          </motion.div>
        </div>

        {/* ── Right Column: 3 Sculptural Mineral Arches (Desktop Only) ── */}
        <div className="hidden md:flex items-center justify-center lg:justify-end">
          <DesktopHeroVisual />
        </div>

      </div>
    </section>
  );
}
