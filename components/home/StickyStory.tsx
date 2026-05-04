"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// ─── ALL scroll ranges pre-declared as plain constants ───────────────────────
// Desktop: 400vh container → each step gets ~100vh of scroll
// Mobile:  250vh container → each step gets ~62vh of scroll
// Ranges are identical percentages so both feel the same pace
const D = {
  // backgrounds
  bg:   [0, 0.08, 0.78, 0.88] as const,

  // FIXED — clean handoffs, zero overlap between steps
  s1:   [0, 0.12, 0.20]              as const,  // gone by 0.20
  s2:   [0.20, 0.26, 0.47, 0.53]    as const,  // starts at 0.20 ← was 0.18
  s3:   [0.53, 0.58, 0.70, 0.76]    as const,  // starts at 0.53 ← was 0.48
  s4:   [0.76, 0.82, 1,    1   ]    as const,  // starts at 0.76 ← was 0.72

  // pills — shift to match s2 window
  p0:   [0.28, 0.34] as const,
  p1:   [0.33, 0.39] as const,
  p2:   [0.38, 0.44] as const,

  // process steps — shift to match s3 window
  t0:   [0.58, 0.63] as const,
  t1:   [0.62, 0.67] as const,
  t2:   [0.66, 0.71] as const,
  t3:   [0.70, 0.75] as const,

  // images
  img2: [0.20, 0.26] as const,
  img3: [0.53, 0.58] as const,

  // map
  map:  [0.82, 0.96] as const,

  // destination circles
  c0:   [0.84, 0.89] as const,
  c1:   [0.86, 0.91] as const,
  c2:   [0.88, 0.93] as const,
  c3:   [0.90, 0.95] as const,
  c4:   [0.92, 0.97] as const,
};

// Mobile uses SAME percentage ranges as desktop.
// The shorter container (250vh vs 400vh) means each percent = less physical scroll.
// This makes mobile feel exactly as fast as desktop naturally.
const M = { ...D }; // identical ranges — container height does the work

type Ranges = typeof D;

// ─── Hook: builds ALL MotionValues for one set of ranges ─────────────────────
function useStoryValues(progress: MotionValue<number>, r: Ranges) {
  return {
    bgColors: useTransform(progress, [...r.bg], ["#F7F4EF", "#1C1A17", "#1C1A17", "#F7F4EF"]),
    textColors: useTransform(progress, [...r.bg], ["#1C1A17", "#F7F4EF", "#F7F4EF", "#1C1A17"]),

    // s1 starts at 0, so we just append 1 to the end
    s1Op: useTransform(progress, [...r.s1, 1], [1, 1, 0, 0]),
    s2Op: useTransform(progress, [0, ...r.s2, 1], [0, 0, 1, 1, 0, 0]),
    s3Op: useTransform(progress, [0, ...r.s3, 1], [0, 0, 1, 1, 0, 0]),
    s4Op: useTransform(progress, [0, ...r.s4], [0, 0, 1, 1, 1]),

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

    mapPath: useTransform(progress, [...r.map], [0, 1]),

    c0Sc: useTransform(progress, [...r.c0], [0, 1]),
    c0Op: useTransform(progress, [...r.c0], [0, 1]),
    c1Sc: useTransform(progress, [...r.c1], [0, 1]),
    c1Op: useTransform(progress, [...r.c1], [0, 1]),
    c2Sc: useTransform(progress, [...r.c2], [0, 1]),
    c2Op: useTransform(progress, [...r.c2], [0, 1]),
    c3Sc: useTransform(progress, [...r.c3], [0, 1]),
    c3Op: useTransform(progress, [...r.c3], [0, 1]),
    c4Sc: useTransform(progress, [...r.c4], [0, 1]),
    c4Op: useTransform(progress, [...r.c4], [0, 1]),

    scrollIndOp: useTransform(progress, [0.88, 1], [1, 0]),
  };
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function StickyStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Both sets of values always computed — zero conditional hooks ──────────
  const dv = useStoryValues(scrollYProgress, D);
  const mv = useStoryValues(scrollYProgress, M);

  // After mount, pick the right set; before mount use desktop (SSR safe)
  const v = mounted && isMobile ? mv : dv;

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

  const CIRCLES: [number, number][] = [
    [250, 120], [280, 180], [150, 150], [120, 250], [250, 280],
  ];
  const circleData = [
    { sc: v.c0Sc, op: v.c0Op },
    { sc: v.c1Sc, op: v.c1Op },
    { sc: v.c2Sc, op: v.c2Op },
    { sc: v.c3Sc, op: v.c3Op },
    { sc: v.c4Sc, op: v.c4Op },
  ];

  return (
    // 250vh on mobile, 400vh on desktop — same % ranges = same perceived speed
    <section ref={containerRef} className="h-[250vh] md:h-[400vh] relative">
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

            {/* SVG Map — Step 4 */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-4"
              style={{ opacity: v.s4Op }}
            >
              <svg
                viewBox="0 0 400 400"
                className="w-full max-w-[280px] md:max-w-md h-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M200,50 C250,50 300,100 300,150 C300,200 250,350 200,350 C150,350 100,200 100,150 C100,100 150,50 200,50 Z"
                  strokeDasharray="5 5"
                  opacity="0.2"
                />
                <motion.path
                  d="M200,200 L250,120 M200,200 L280,180 M200,200 L150,150 M200,200 L120,250 M200,200 L250,280"
                  stroke="var(--color-accent, #6B4E2A)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ pathLength: v.mapPath }}
                />
                <circle cx="200" cy="200" r="5" fill="var(--color-accent, #6B4E2A)" />
                {CIRCLES.map(([cx, cy], i) => (
                  <motion.circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill="currentColor"
                    style={{
                      scale: circleData[i].sc,
                      opacity: circleData[i].op,
                    }}
                  />
                ))}
              </svg>
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
