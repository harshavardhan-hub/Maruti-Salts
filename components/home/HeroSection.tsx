"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const HeroCrystal = dynamic(() => import("./HeroCrystal"), { ssr: false });

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={ref} className="relative w-full h-screen flex items-center bg-bg overflow-hidden pt-20">
      {/* 3D Canvas Background for Right Side */}
      <div className="hidden md:block absolute inset-0 md:top-0 md:left-1/2 z-0">
        {isInView && isDesktop && <HeroCrystal />}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-[clamp(4rem,8vw,9rem)] leading-[0.9] text-text mb-8"
          >
            Born from<br />
            Earth.<br />
            Refined<br />
            by Time.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-lg md:text-xl text-text/80 max-w-md mb-10"
          >
            India&apos;s finest Black Salt & Rock Salt manufacturer.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <Link href="/products" className="inline-block bg-mineral text-bg px-8 py-4 uppercase tracking-widest text-sm hover:bg-accent transition-colors duration-300">
              Explore Our Salts
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
