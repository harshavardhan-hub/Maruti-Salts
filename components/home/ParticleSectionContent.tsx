"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { MT_POINTS } from "./mtPoints";

function Particle({ targetX, targetY, scrollYProgress }: { targetX: number, targetY: number, scrollYProgress: MotionValue<number> }) {
  const randomX = useMemo(() => (Math.random() - 0.5) * 1200, []);
  const randomY = useMemo(() => (Math.random() - 0.5) * 1200, []);

  const x = useTransform(scrollYProgress, [0, 0.8], [targetX + randomX, targetX]);
  const y = useTransform(scrollYProgress, [0, 0.8], [targetY + randomY, targetY]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.1, 0.8]);

  return (
    <motion.circle 
      cx={0} 
      cy={0} 
      r={1.5} 
      fill="var(--color-bg)" 
      style={{ x, y, opacity }} 
    />
  );
}

export default function ParticleSectionContent() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const points = useMemo(() => {
    const pts: { x: number; y: number }[] = [];

    // Classical serif Cormorant Garamond MT letter particles
    for (const [x, y] of MT_POINTS) {
      pts.push({ x, y });
    }
    
    // Decorative particle circle framing the monogram (radius 88, centered at 150, 150)
    for (let i = 0; i < 120; i++) {
      const angle = (i / 120) * Math.PI * 2;
      pts.push({ x: 150 + Math.cos(angle) * 88, y: 150 + Math.sin(angle) * 88 });
    }
    return pts;
  }, []);

  const goldOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const goldScale = useTransform(scrollYProgress, [0.7, 1], [0.9, 1]);

  return (
    <section ref={ref} className="h-screen bg-mineral relative text-bg overflow-hidden flex flex-col items-center justify-center">
      <h2 className="absolute top-14 md:top-20 text-bg/60 uppercase tracking-[0.4em] text-xs md:text-sm z-20">
        Every grain tells a story.
      </h2>

      <div className="relative flex flex-col items-center justify-center z-10">
        {/* Compact, elegant MT circular particle crest */}
        <div className="relative w-[190px] h-[190px] md:w-[230px] md:h-[230px] flex items-center justify-center">
          <svg viewBox="50 50 200 200" className="w-full h-full overflow-visible">
            {points.map((pt, i) => (
              <Particle key={i} targetX={pt.x} targetY={pt.y} scrollYProgress={scrollYProgress} />
            ))}
          </svg>
        </div>
        
        {/* GOLD text placed closely beneath MT */}
        <motion.div 
          className="mt-1 md:mt-2 pointer-events-none select-none text-center"
          style={{ opacity: goldOpacity, scale: goldScale }}
        >
          <h3 className="font-display text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] text-accent tracking-[0.25em] pl-[0.25em] leading-none">
            GOLD
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
