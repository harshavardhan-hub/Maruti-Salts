"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function PackagingShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-32 bg-surface relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-text max-w-3xl mx-auto">
            Premium Packaging Solutions
          </h2>
          <p className="mt-6 text-text/80 max-w-2xl mx-auto leading-relaxed">
            From bulk industrial shipping to retail-ready premium containers, our packaging ensures moisture control, safety, and shelf appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedImage("/mimg1.png")}
            className="group relative overflow-hidden bg-bg border border-mineral/10 aspect-[3/4] md:aspect-[4/3] flex items-center justify-center p-8 hover:border-accent/30 transition-colors cursor-pointer"
          >
            <div className="relative w-full h-full">
              <Image 
                src="/mimg1.png" 
                alt="Maruti Salts Premium Packaging Type 1" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-text/0 group-hover:bg-text/5 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 bg-bg text-text px-4 py-2 uppercase tracking-widest text-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                View Image
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setSelectedImage("/mimg2.png")}
            className="group relative overflow-hidden bg-bg border border-mineral/10 aspect-[3/4] md:aspect-[4/3] flex items-center justify-center p-8 hover:border-accent/30 transition-colors cursor-pointer"
          >
            <div className="relative w-full h-full">
              <Image 
                src="/mimg2.png" 
                alt="Maruti Salts Premium Packaging Type 2" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-text/0 group-hover:bg-text/5 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 bg-bg text-text px-4 py-2 uppercase tracking-widest text-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                View Image
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-text/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl h-[80vh] bg-bg p-2 shadow-2xl z-10 flex items-center justify-center"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="relative w-full h-full">
                <Image 
                  src={selectedImage}
                  alt="Full screen packaging view"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
