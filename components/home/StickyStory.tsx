"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";

// ─── Unified scroll ranges identical for Mobile and Desktop ───────────────────
const R = {
  // backgrounds
  bg:   [0, 0.08, 0.74, 0.82] as const,

  // All 4 slides evenly spaced with generous dwell for each
  s1:   [0, 0.16, 0.24]              as const,  // Slide 1: Deep Within the Earth
  s2:   [0.24, 0.30, 0.46, 0.52]    as const,  // Slide 2: Centuries of Mineral Formation
  s3:   [0.52, 0.58, 0.72, 0.78]    as const,  // Slide 3: Harvested with Precision
  s4:   [0.78, 0.84, 1.0 ]          as const,  // Slide 4: Delivered Across India & the World

  // pills — match s2 window
  p0:   [0.30, 0.35] as const,
  p1:   [0.35, 0.40] as const,
  p2:   [0.40, 0.45] as const,

  // process steps — match s3 window
  t0:   [0.58, 0.62] as const,
  t1:   [0.62, 0.66] as const,
  t2:   [0.66, 0.70] as const,
  t3:   [0.70, 0.74] as const,

  // images
  img2: [0.24, 0.30] as const,
  img3: [0.52, 0.58] as const,
  img4: [0.78, 0.84] as const,
};

type Ranges = typeof R;

// ─── Hook: builds ALL MotionValues identically ───────────────────────────────
function useStoryValues(progress: MotionValue<number>, r: Ranges) {
  return {
    bgColors: useTransform(progress, [...r.bg], ["#F7F4EF", "#1C1A17", "#1C1A17", "#F7F4EF"]),
    textColors: useTransform(progress, [...r.bg], ["#1C1A17", "#F7F4EF", "#F7F4EF", "#1C1A17"]),

    s1Op: useTransform(progress, [...r.s1, 1], [1, 1, 0, 0]),
    s2Op: useTransform(progress, [0, ...r.s2, 1], [0, 0, 1, 1, 0, 0]),
    s3Op: useTransform(progress, [0, ...r.s3, 1], [0, 0, 1, 1, 0, 0]),
    s4Op: useTransform(progress, [0, r.s4[0], r.s4[1], 1], [0, 0, 1, 1]),

    p0Op: useTransform(progress, [...r.p0], [0, 1]),
    p0Y: useTransform(progress, [...r.p0], [18, 0]),
    p1Op: useTransform(progress, [...r.p1], [0, 1]),
    p1Y: useTransform(progress, [...r.p1], [18, 0]),
    p2Op: useTransform(progress, [...r.p2], [0, 1]),
    p2Y: useTransform(progress, [...r.p2], [18, 0]),

    t0Op: useTransform(progress, [...r.t0], [0, 1]),
    t0Y: useTransform(progress, [...r.t0], [24, 0]),
    t1Op: useTransform(progress, [...r.t1], [0, 1]),
    t1Y: useTransform(progress, [...r.t1], [24, 0]),
    t2Op: useTransform(progress, [...r.t2], [0, 1]),
    t2Y: useTransform(progress, [...r.t2], [24, 0]),
    t3Op: useTransform(progress, [...r.t3], [0, 1]),
    t3Y: useTransform(progress, [...r.t3], [24, 0]),

    img2Clip: useTransform(progress, [...r.img2], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]),
    img3Clip: useTransform(progress, [...r.img3], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]),
    img4Clip: useTransform(progress, [...r.img4], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]),

    scrollIndOp: useTransform(progress, [0.85, 0.95], [1, 0]),
  };
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function StickyStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const updateProgress = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      // Compute accurate progress strictly within Section 2 sticky window
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      scrollYProgress.set(progress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [scrollYProgress]);

  // Identical motion values and ranges for both mobile and desktop
  const v = useStoryValues(scrollYProgress, R);

  const PILLS = [
    { op: v.p0Op, y: v.p0Y, label: "Rich in 84+ Trace Minerals" },
    { op: v.p1Op, y: v.p1Y, label: "Zero Industrial Processing" },
    { op: v.p2Op, y: v.p2Y, label: "Direct from Ancient Deposits" },
  ];

  const STEPS = [
    { op: v.t0Op, y: v.t0Y, label: "Raw mineral extraction" },
    { op: v.t1Op, y: v.t1Y, label: "Natural drying & sorting" },
    { op: v.t2Op, y: v.t2Y, label: "Quality grading" },
    { op: v.t3Op, y: v.t3Y, label: "Packaging & dispatch" },
  ];


  return (
    // Exact same 250vh container for both mobile and desktop
    <section ref={containerRef} className="h-[250vh] relative">
      <motion.div
        className="sticky top-0 h-screen w-full flex items-center overflow-hidden"
        style={{ backgroundColor: v.bgColors, color: v.textColors }}
      >
        <div className="
          container mx-auto px-6 lg:px-12 h-full relative z-10
          flex flex-col justify-center gap-6
          md:grid md:grid-cols-2 md:items-center md:gap-12
          pt-20 pb-10 md:py-0
        ">

          {/* ── LEFT: Text panels ─────────────────────────────────────── */}
          <div className="relative h-[38vh] md:h-[420px] w-full">

            {/* Step 1 */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center"
              style={{ opacity: v.s1Op, pointerEvents: "none", willChange: "opacity" }}
            >
              <h2 className="font-display text-[clamp(1.8rem,5vw,4rem)] leading-[1.1]">
                Deep Within<br />the Earth
              </h2>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
              style={{ opacity: v.s2Op, willChange: "opacity" }}
            >
              <h2 className="font-display text-[clamp(1.8rem,5vw,4rem)] leading-[1.1] mb-5 md:mb-8">
                Centuries of<br />Mineral Formation
              </h2>
              <div className="flex flex-col gap-2 md:gap-3">
                {PILLS.map((p, i) => (
                  <motion.div
                    key={i}
                    className="self-start px-4 py-2 border border-current rounded-full text-xs md:text-sm font-medium"
                    style={{ opacity: p.op, y: p.y }}
                  >
                    {p.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
              style={{ opacity: v.s3Op, willChange: "opacity" }}
            >
              <h2 className="font-display text-[clamp(1.8rem,5vw,4rem)] leading-[1.1] mb-4 md:mb-7">
                Harvested with<br />Precision
              </h2>
              <div className="flex flex-col gap-2 md:gap-4">
                {STEPS.map((s, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 border-b border-current/20 pb-2"
                    style={{ opacity: s.op, y: s.y }}
                  >
                    <span className="font-display text-lg md:text-2xl" style={{ color: "var(--color-accent, #6B4E2A)" }}>
                      0{i + 1}
                    </span>
                    <span className="text-sm md:text-base">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center"
              style={{ opacity: v.s4Op, pointerEvents: "none", willChange: "opacity" }}
            >
              <h2 className="font-display text-[clamp(1.8rem,5vw,4rem)] leading-[1.1] mb-4">
                Delivered Across<br />India & the World
              </h2>
              <p className="text-sm md:text-base opacity-75 max-w-sm">
                Supplying premium raw materials to B2B buyers, Ayurvedic companies, and exporters globally.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Image / SVG panels ─────────────────────────────── */}
          <div className="relative h-[36vh] md:h-[75vh] w-full">

            {/* Image 1 */}
            <motion.div className="absolute inset-0" style={{ opacity: v.s1Op }}>
              <img
                src="/images/hero-crystal.jpg"
                alt="Black Salt Crystal"
                className="w-full h-full object-cover rounded-lg md:rounded-xl"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="absolute inset-0"
              style={{ opacity: v.s2Op, clipPath: v.img2Clip }}
            >
              <img
                src="/images/rock-salt-chunks.jpg"
                alt="Rock Salt Chunks"
                className="w-full h-full object-cover rounded-lg md:rounded-xl"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              className="absolute inset-0"
              style={{ opacity: v.s3Op, clipPath: v.img3Clip }}
            >
              <img
                src="/images/process-extraction.jpg"
                alt="Process"
                className="w-full h-full object-cover rounded-lg md:rounded-xl"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </motion.div>

            {/* Image 4 — Global Delivery Network */}
            <motion.div
              className="absolute inset-0 rounded-lg md:rounded-xl overflow-hidden shadow-2xl bg-[#0e0e10]"
              style={{ opacity: v.s4Op, clipPath: v.img4Clip }}
            >
              <img
                src="/images/global-delivery.jpg"
                alt="Global Delivery Network Across India and the World"
                className="w-full h-full object-cover rounded-lg md:rounded-xl"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] md:text-xs text-white/90">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                  </span>
                  <span className="tracking-wide">Global Supply Network</span>
                </div>
                <div className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] md:text-xs text-amber-300 font-mono">
                  India • Worldwide
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Scroll indicator ────────────────────────────────────────── */}
        <motion.div
          className="
            absolute bottom-4 md:bottom-10
            left-1/2 md:left-10
            -translate-x-1/2 md:translate-x-0
            flex flex-col items-center gap-2 z-20 pointer-events-none
          "
          style={{ opacity: v.scrollIndOp }}
        >
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] opacity-50">
            Scroll
          </span>
          <div className="w-px h-8 md:h-12 bg-current opacity-20 relative overflow-hidden">
            <motion.div
              className="w-full h-1/2 bg-current absolute top-0"
              animate={{ top: ["-50%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
