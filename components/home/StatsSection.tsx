"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ from, to, label, suffix }: { from: number; to: number; label: string; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Easing function (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setValue(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  }, [isInView, from, to]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="font-display text-5xl md:text-[5rem] leading-tight mb-4 text-text">
        {value}{suffix}
      </div>
      <div className="text-text/70 uppercase tracking-widest text-sm max-w-[200px]">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-32 bg-bg border-t border-mineral/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 max-w-6xl mx-auto">
          <div>
            <Counter from={0} to={12} suffix="+" label="Years of Manufacturing Excellence" />
          </div>
          <div>
            <Counter from={0} to={20} suffix="+" label="States Supplied Across India" />
          </div>
          <div>
            <Counter from={0} to={500} suffix="+" label="Tons Produced Monthly" />
          </div>
          <div>
            <Counter from={0} to={15} suffix="+" label="Export Countries" />
          </div>
        </div>
      </div>
    </section>
  );
}
