"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const FEATURES = [
  { id: "1", title: "Pure, Unprocessed Minerals", desc: "Sourced directly from ancient deposits, our salts undergo zero industrial processing, retaining 100% of their natural trace minerals." },
  { id: "2", title: "FSSAI Certified Quality", desc: "Every batch is rigorously tested in certified laboratories to ensure it meets the highest food safety standards in India." },
  { id: "3", title: "Custom Packaging Available", desc: "From 25kg bulk bags to retail-ready premium containers, we offer white-label and custom packaging solutions." },
  { id: "4", title: "Bulk Order Fulfillment", desc: "With a production capacity of 500+ tons monthly, we reliably supply large-scale B2B and industrial buyers without delay." },
  { id: "5", title: "Pan-India & Export Delivery", desc: "Robust logistics network ensuring safe, moisture-controlled transit across 20+ Indian states and 15+ export destinations." },
  { id: "6", title: "Ayurvedic Grade Standards", desc: "Our Kala Namak and Sendha Namak meet the strict purity parameters required by top Ayurvedic and wellness brands." },
];

export default function WhyMaruti() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-32 bg-bg relative">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-text mb-16 max-w-2xl">
          Why Partner with Maruti Salts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <motion.div
              layoutId={`card-${feature.id}`}
              key={feature.id}
              onClick={() => setSelectedId(feature.id)}
              className="bg-surface p-8 cursor-pointer group flex flex-col justify-between min-h-[250px] border border-transparent hover:border-accent/20 transition-colors"
            >
              <motion.div layoutId={`icon-${feature.id}`} className="w-12 h-12 rounded-full border border-mineral/20 flex items-center justify-center mb-6">
                <span className="text-accent font-display font-medium">{feature.id}</span>
              </motion.div>
              <motion.h3 layoutId={`title-${feature.id}`} className="font-display text-2xl text-text mb-4 group-hover:text-accent transition-colors">
                {feature.title}
              </motion.h3>
              <motion.div layoutId={`line-${feature.id}`} className="w-8 h-[1px] bg-mineral/30 mt-auto" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-text/20 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-lg bg-bg p-10 md:p-14 shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 text-text/50 hover:text-text transition-colors"
              >
                <X size={24} />
              </button>
              
              <motion.div layoutId={`icon-${selectedId}`} className="w-16 h-16 rounded-full border border-mineral/20 flex items-center justify-center mb-8">
                <span className="text-accent font-display text-xl">{selectedId}</span>
              </motion.div>
              
              <motion.h3 layoutId={`title-${selectedId}`} className="font-display text-3xl md:text-4xl text-text mb-6">
                {FEATURES.find(f => f.id === selectedId)?.title}
              </motion.h3>
              
              <motion.div layoutId={`line-${selectedId}`} className="w-12 h-[2px] bg-accent mb-6" />
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="text-text/80 leading-relaxed"
              >
                {FEATURES.find(f => f.id === selectedId)?.desc}
              </motion.p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
