"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CertificationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-32 bg-bg border-t border-mineral/10 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-text max-w-3xl mx-auto">
            Certifications & Quality Assurance
          </h2>
          <p className="mt-6 text-text/80 max-w-2xl mx-auto leading-relaxed">
            Our commitment to quality is backed by rigorous testing and recognized certifications, ensuring that every grain of salt meets the highest industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Trademark Certificate */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col bg-surface border border-mineral/10 overflow-hidden hover:border-accent/30 transition-colors shadow-sm"
          >
            <div 
              className="relative w-full aspect-[3/4] bg-bg overflow-hidden p-4 cursor-pointer"
              onClick={() => setSelectedImage("/trademark.jpg")}
            >
              <Image 
                src="/trademark.jpg" 
                alt="Maruti Salts Registered Trademark" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-text/0 group-hover:bg-text/5 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 bg-bg text-text px-4 py-2 uppercase tracking-widest text-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  View Image
                </span>
              </div>
            </div>
            <div className="p-8 border-t border-mineral/5">
              <h3 className="font-display text-2xl text-text mb-3 group-hover:text-accent transition-colors">Registered Trademark</h3>
              <p className="text-text/70 text-sm leading-relaxed">
                Officially registered under the Trade Marks Act. Our brand is a protected symbol of authenticity, purity, and trust across all our premium salt products.
              </p>
            </div>
          </motion.div>

          {/* AQC Labs Certificate */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex flex-col bg-surface border border-mineral/10 overflow-hidden hover:border-accent/30 transition-colors shadow-sm"
          >
            <div 
              className="relative w-full aspect-[3/4] bg-bg overflow-hidden p-4 cursor-pointer"
              onClick={() => setSelectedImage("/aqclabs.jpg")}
            >
              <Image 
                src="/aqclabs.jpg" 
                alt="AQC Labs Quality Certification" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-text/0 group-hover:bg-text/5 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 bg-bg text-text px-4 py-2 uppercase tracking-widest text-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  View Image
                </span>
              </div>
            </div>
            <div className="p-8 border-t border-mineral/5">
              <h3 className="font-display text-2xl text-text mb-3 group-hover:text-accent transition-colors">AQC Laboratory Certified</h3>
              <p className="text-text/70 text-sm leading-relaxed">
                Comprehensive laboratory testing ensuring our products meet precise mineral composition parameters, with zero contaminants and optimum moisture levels.
              </p>
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
              className="relative w-full max-w-3xl h-[85vh] bg-bg p-2 shadow-2xl z-10 flex items-center justify-center"
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
                  alt="Full screen certification view"
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
