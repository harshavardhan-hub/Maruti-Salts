"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  Package, 
  CheckCircle2, 
  Sparkles,
  Award
} from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  img: string;
  options?: { title: string; desc: string }[];
}

export default function QualityContent() {
  const steps: StepItem[] = [
    {
      number: "01",
      title: "Premium Raw Material Procurement",
      description:
        "We carefully source the finest quality Sendha Namak (Rock Salt) and Black Salt from trusted suppliers. Our focus is on selecting premium-grade raw materials that meet our quality expectations.",
      img: "/step1.jpeg",
    },
    {
      number: "02",
      title: "Sorting & Grading",
      description:
        "Once the raw materials reach our factory, they undergo a systematic sorting and grading process. This helps us maintain uniformity and select the appropriate quality of salt for further processing.",
      img: "/step2.jpeg",
    },
    {
      number: "03",
      title: "Precision Grinding",
      description:
        "The selected salt is processed using advanced pulverizer machines to achieve the desired particle size, texture, and fineness, ensuring consistency across different product grades.",
      img: "/step3.jpeg",
    },
    {
      number: "04",
      title: "Quality Testing & Inspection",
      description:
        "After grinding, the processed salt undergoes thorough quality checks. Each batch is inspected to ensure it meets our defined quality standards before moving to the packaging stage.",
      img: "/step4.jpeg",
    },
    {
      number: "05",
      title: "Quality Approval",
      description:
        "Only after successfully meeting our quality requirements is the processed salt approved for final packaging. We maintain a strong focus on product consistency and customer satisfaction.",
      img: "/step5.jpeg",
    },
    {
      number: "06",
      title: "Packaging & Supply",
      description:
        "We offer flexible packaging and bulk supply solutions according to customer requirements. Our available packaging options include:",
      img: "/step6.jpeg",
      options: [
        {
          title: "1 KG Packs",
          desc: "Suitable for retailers and grocery stores.",
        },
        {
          title: "Bulk Packaging",
          desc: "Available in 30 KG and 50 KG bags.",
        },
        {
          title: "Loose Supply",
          desc: "Bulk quantities available as per customer requirements.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-text pt-28 sm:pt-36 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-mineral/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles size={13} />
            <span>Process &amp; Quality Standards</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.1] text-text mb-6"
          >
            From Premium Sourcing to Perfect Packaging
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-text/75 leading-relaxed max-w-2xl mx-auto"
          >
            Our 6-step rigorous process ensures that the minerals we deliver are pure, potent, and safe. Every stage is handled with meticulous precision.
          </motion.p>
        </div>

        {/* ── 6 Steps Timeline ───────────────────────────────────────────── */}
        <div className="space-y-24 lg:space-y-36">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Column */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="mb-4">
                    <span className="font-display text-accent text-4xl sm:text-5xl font-light tracking-tight">
                      {step.number}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-text mb-5 leading-snug">
                    {step.title}
                  </h2>

                  <p className="text-base sm:text-lg text-text/80 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Packaging Options for Step 6 */}
                  {step.options && (
                    <div className="space-y-3 mt-6 pt-6 border-t border-mineral/15">
                      {step.options.map((opt, optIdx) => (
                        <div
                          key={optIdx}
                          className="p-4 rounded-xl bg-surface border border-mineral/15 flex items-start gap-3.5 hover:border-accent/40 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-bg text-accent flex items-center justify-center shrink-0 mt-0.5 border border-mineral/10">
                            <Package size={16} />
                          </div>
                          <div>
                            <div className="font-display text-base text-text font-semibold">
                              {opt.title}
                            </div>
                            <div className="text-xs sm:text-sm text-text/70 mt-0.5 leading-relaxed">
                              {opt.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Image Column */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-mineral/20 shadow-xl bg-surface aspect-[4/3] group">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {step.title}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Our Commitment to Quality Section ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28 lg:mt-36 p-8 sm:p-12 lg:p-14 rounded-3xl bg-surface border border-mineral/20 max-w-4xl mx-auto shadow-sm text-center relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg border border-mineral/15 text-accent text-xs uppercase tracking-wider font-semibold mb-6">
            <Award size={14} />
            <span>Core Principle</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-text mb-6 font-normal">
            Our Commitment to Quality
          </h3>

          <p className="text-base sm:text-lg text-text/80 max-w-2xl mx-auto leading-relaxed mb-6">
            At Maruti Salts, quality is not just a process; it is our commitment. We continuously focus on maintaining product consistency, reliable processing, and dependable supply to build long-term relationships with our customers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-text/70">
            <div className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-accent" />
              <span>Product Consistency</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-accent" />
              <span>Reliable Processing</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-accent" />
              <span>Dependable Bulk Supply</span>
            </div>
          </div>
        </motion.div>

        {/* ── Certifications CTA Banner ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-8 sm:p-12 rounded-3xl bg-mineral text-bg text-center max-w-4xl mx-auto shadow-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg/10 text-accent text-xs uppercase tracking-wider font-semibold mb-4">
            <ShieldCheck size={14} />
            <span>Statutory Compliance &amp; Verification</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl mb-4 text-white">
            View Our Verified Licenses &amp; Lab Reports
          </h3>
          <p className="text-sm sm:text-base text-bg/80 max-w-xl mx-auto mb-8">
            Inspect our official FSSAI Form C license (16-page schedule), AQC laboratory test reports, GST registration, and MSME certificates.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-bg hover:bg-bg hover:text-mineral uppercase tracking-wider text-xs font-semibold transition-all shadow-md group"
            >
              <span>Explore All 5 Official Certifications</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-bg/10 border border-bg/20 text-bg hover:bg-bg hover:text-mineral uppercase tracking-wider text-xs font-semibold transition-all"
            >
              <span>Request Batch Specifications</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

