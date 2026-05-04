"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

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
    const pts = [];
    // M shape: M 100 250 L 150 100 L 200 250
    for(let i=0; i<50; i++) pts.push({ x: 100 + i*1, y: 250 - i*3 });
    for(let i=0; i<50; i++) pts.push({ x: 150 + i*1, y: 100 + i*3 });
    // horizontal bar M 125 175 H 175
    for(let i=0; i<50; i++) pts.push({ x: 125 + i, y: 175 });
    
    // Add extra decorative particles forming a circle
    for(let i=0; i<150; i++) {
      const angle = (i / 150) * Math.PI * 2;
      pts.push({ x: 150 + Math.cos(angle)*100, y: 175 + Math.sin(angle)*100 });
    }
    return pts;
  }, []);

  const purityOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const purityScale = useTransform(scrollYProgress, [0.7, 1], [0.8, 1]);

  return (
    <section ref={ref} className="h-screen bg-mineral relative text-bg overflow-hidden flex flex-col items-center justify-center">
      <h2 className="absolute top-24 text-bg/60 uppercase tracking-[0.4em] text-sm z-20">
        Every grain tells a story.
      </h2>

      <div className="relative w-full max-w-4xl flex items-center justify-center">
        <svg viewBox="0 0 300 350" className="w-[300px] h-[350px] overflow-visible absolute z-10">
          {points.map((pt, i) => (
            <Particle key={i} targetX={pt.x} targetY={pt.y} scrollYProgress={scrollYProgress} />
          ))}
        </svg>
        
        <motion.div 
          className="absolute z-20"
          style={{ opacity: purityOpacity, scale: purityScale }}
        >
          <h3 className="font-display text-[5rem] md:text-[8rem] text-accent tracking-widest">
            PURITY
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
