"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Download } from "lucide-react";

export default function FssaiSection() {
  return (
    <section className="py-24 bg-surface border-t border-mineral/10 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full border-[40px] border-mineral rounded-tr-none rotate-45 transform translate-y-1/4 translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-bg border border-mineral/10 shadow-lg p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="w-10 h-10 text-accent" />
              <h2 className="font-display text-3xl md:text-4xl text-text">
                FSSAI Certified
              </h2>
            </div>
            <p className="text-text/70 mb-2 max-w-md">
              We adhere strictly to the food safety standards set by the Food Safety and Standards Authority of India.
            </p>
            <div className="mt-4 bg-surface border border-mineral/5 px-6 py-3">
              <span className="text-text/60 uppercase tracking-widest text-xs block mb-1">License Number</span>
              <span className="font-display text-2xl text-text tracking-wider font-medium">11423750000131</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <a 
              href="/licence.pdf" 
              download="Maruti_Salts_FSSAI_License.pdf"
              className="inline-flex items-center justify-center gap-3 bg-accent text-bg px-8 py-4 uppercase tracking-widest text-sm hover:bg-mineral hover:text-bg transition-colors border border-transparent shadow-md"
            >
              <Download className="w-5 h-5" />
              Download License
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
