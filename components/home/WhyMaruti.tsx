"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FileText, ArrowUpRight } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  desc: string;
  pdf?: string;
  pdfTitle?: string;
  ctaLabel?: string;
}

const FEATURES: Feature[] = [
  {
    id: "1",
    title: "Pure, Unprocessed Minerals to Purity",
    desc: "Sourced directly from ancient deposits, our salts undergo zero industrial processing, retaining 100% of their natural trace minerals.",
    pdf: "/Registration%20Certificate.pdf",
    pdfTitle: "Registration Certificate",
    ctaLabel: "View Registration Certificate",
  },
  {
    id: "2",
    title: "Lab Tested FSSAI Certified Quality",
    desc: "Every batch is rigorously tested in certified laboratories to ensure it meets the highest food safety standards in India.",
    pdf: "/fssai.pdf",
    pdfTitle: "FSSAI Certificate",
    ctaLabel: "View FSSAI Certificate",
  },
  {
    id: "3",
    title: "Custom Packaging Available",
    desc: "25kg, 50kg, 1kg As Per The Requirement And Custom Packaging Solution.",
  },
  {
    id: "4",
    title: "Bulk Order Fulfillment",
    desc: "With a production capacity of 500+ tons monthly, we reliably supply large-scale B2B and industrial buyers without delay.",
  },
  {
    id: "5",
    title: "Pan-India & Export Delivery",
    desc: "Robust logistics network ensuring safe, moisture-controlled transit across 20+ Indian states and 15+ export destinations.",
  },
  {
    id: "6",
    title: "Ayurvedic Grade Standards",
    desc: "Our Kala Namak and Sendha Namak meet the strict purity parameters required by top Ayurvedic and wellness brands.",
  },
];

export default function WhyMaruti() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const activeFeature = FEATURES.find((f) => f.id === selectedId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    if (selectedId) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  return (
    <section className="py-32 bg-bg relative">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-display text-[clamp(1.85rem,3.8vw,3.75rem)] text-text mb-16 max-w-none whitespace-normal md:whitespace-nowrap">
          Why Partner with Maruti Salts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <motion.div
              layoutId={`card-${feature.id}`}
              key={feature.id}
              onClick={() => setSelectedId(feature.id)}
              className="bg-surface p-8 cursor-pointer group flex flex-col justify-between min-h-[260px] border border-transparent hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-lg rounded-sm"
            >
              <div>
                <motion.div layoutId={`icon-${feature.id}`} className="w-12 h-12 rounded-full border border-mineral/20 flex items-center justify-center mb-6">
                  <span className="text-accent font-display font-medium">{feature.id}</span>
                </motion.div>
                <motion.h3 layoutId={`title-${feature.id}`} className="font-display text-2xl text-text mb-4 group-hover:text-accent transition-colors">
                  {feature.title}
                </motion.h3>
              </div>

              <div className="mt-6 pt-4 border-t border-mineral/10 flex items-center justify-between">
                {feature.ctaLabel ? (
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-wider font-semibold bg-[#2E5A44]/10 text-[#234A37] border border-[#2E5A44]/30 group-hover:bg-[#2E5A44] group-hover:text-[#F7F4EF] group-hover:border-[#2E5A44] transition-all duration-300 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E5A44] group-hover:bg-[#F7F4EF] transition-colors" />
                    <span>{feature.ctaLabel}</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-text/50 font-medium group-hover:text-text/80">
                    Learn More
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                )}
                <motion.div layoutId={`line-${feature.id}`} className="w-6 h-[1px] bg-mineral/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && activeFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-text/40 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            />
            
            <motion.div
              layoutId={`card-${selectedId}`}
              className={`relative w-full bg-bg shadow-2xl z-10 rounded-sm border border-mineral/15 overflow-hidden flex flex-col ${
                activeFeature.pdf 
                  ? "max-w-5xl max-h-[92vh] md:flex-row" 
                  : "max-w-lg p-8 sm:p-10 md:p-12"
              }`}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-bg/90 border border-mineral/20 flex items-center justify-center text-text/60 hover:text-text hover:bg-mineral/10 transition-colors shadow-sm"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {activeFeature.pdf ? (
                <>
                  {/* Left Column: Details */}
                  <div className="w-full md:w-5/12 p-6 sm:p-8 md:p-10 pr-14 sm:pr-14 flex flex-col justify-between overflow-y-auto bg-bg border-b md:border-b-0 md:border-r border-mineral/15">
                    <div>
                      <motion.div layoutId={`icon-${selectedId}`} className="w-14 h-14 rounded-full border border-mineral/20 flex items-center justify-center mb-6">
                        <span className="text-accent font-display text-xl">{selectedId}</span>
                      </motion.div>
                      
                      <motion.h3 layoutId={`title-${selectedId}`} className="font-display text-2xl sm:text-3xl text-text mb-4 leading-snug">
                        {activeFeature.title}
                      </motion.h3>
                      
                      <motion.div layoutId={`line-${selectedId}`} className="w-12 h-[2px] bg-accent mb-6" />
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ delay: 0.1 }}
                        className="text-text/80 text-sm sm:text-base leading-relaxed mb-6"
                      >
                        {activeFeature.desc}
                      </motion.p>
                    </div>

                    <div className="pt-4 border-t border-mineral/10 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-xs text-text/60">
                        <FileText size={14} className="text-accent flex-shrink-0" />
                        <span>Official Certified Document</span>
                      </div>
                      
                      <a 
                        href={activeFeature.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#2E5A44] text-[#F7F4EF] px-5 py-3 text-xs uppercase tracking-widest hover:bg-[#234A37] transition-colors rounded-sm font-semibold w-full text-center shadow-sm"
                      >
                        <span>Open Document in New Tab</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: PDF Viewer with Scroll */}
                  <div className="w-full md:w-7/12 bg-surface/50 flex flex-col h-[400px] sm:h-[460px] md:h-[600px]">
                    <div className="px-5 py-3 pr-16 border-b border-mineral/15 flex items-center justify-between bg-bg/80">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs uppercase tracking-wider text-text/80 font-medium">
                          {activeFeature.pdfTitle}
                        </span>
                      </div>
                      <span className="text-[11px] text-text/50 uppercase tracking-widest hidden sm:inline-block">
                        Scroll to view
                      </span>
                    </div>

                    <div className="flex-1 w-full h-full overflow-y-auto relative bg-mineral/5">
                      <iframe 
                        src={`${activeFeature.pdf}#toolbar=0&navpanes=0&scrollbar=1`}
                        title={activeFeature.pdfTitle}
                        className="w-full h-full border-0 min-h-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </>
              ) : (
                /* Compact Modal for features without PDF */
                <div>
                  <motion.div layoutId={`icon-${selectedId}`} className="w-16 h-16 rounded-full border border-mineral/20 flex items-center justify-center mb-8">
                    <span className="text-accent font-display text-xl">{selectedId}</span>
                  </motion.div>
                  
                  <motion.h3 layoutId={`title-${selectedId}`} className="font-display text-3xl md:text-4xl text-text mb-6">
                    {activeFeature.title}
                  </motion.h3>
                  
                  <motion.div layoutId={`line-${selectedId}`} className="w-12 h-[2px] bg-accent mb-6" />
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 }}
                    className="text-text/80 leading-relaxed text-base"
                  >
                    {activeFeature.desc}
                  </motion.p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
