"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DesktopHeroVisual() {
  return (
    <div className="relative w-full h-[460px] lg:h-[520px] flex items-center justify-center select-none pointer-events-none">
      
      {/* ── 3 Sculptural Mineral Arches Triptych ─────────────────────── */}
      <div className="relative flex items-center gap-3 sm:gap-4 lg:gap-5 pointer-events-auto">

        {/* ── Arch 1: Black Salt (Left) ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: 8 }}
          className="translate-y-3 sm:translate-y-4"
        >
          <Link
            href="/products"
            title="Explore Black Salt in Products"
            className="group relative block w-[120px] sm:w-[135px] lg:w-[155px] xl:w-[165px] h-[330px] sm:h-[360px] lg:h-[390px] rounded-t-full rounded-b-2xl overflow-hidden border border-mineral/20 shadow-2xl bg-[#141312] transition-all duration-500 cursor-pointer"
          >
            <img
              src="/images/hero-crystal.jpg"
              alt="Black Salt"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none px-2">
              <span className="font-display text-sm sm:text-base lg:text-lg text-white font-medium block leading-tight drop-shadow-sm group-hover:text-accent transition-colors">
                Black Salt
              </span>
            </div>
          </Link>
        </motion.div>

        {/* ── Arch 2: Rock Salt (Center, Elevated Pinnacle) ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -14 }}
          className="-translate-y-2 sm:-translate-y-3 lg:-translate-y-4 z-10"
        >
          <Link
            href="/products"
            title="Explore Rock Salt in Products"
            className="group relative block w-[125px] sm:w-[140px] lg:w-[160px] xl:w-[172px] h-[370px] sm:h-[400px] lg:h-[440px] rounded-t-full rounded-b-2xl overflow-hidden border border-mineral/25 shadow-2xl bg-[#1c1815] transition-all duration-500 cursor-pointer"
          >
            <img
              src="/images/rock-salt-chunks.jpg"
              alt="Rock Salt"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none px-2">
              <span className="font-display text-sm sm:text-base lg:text-lg text-white font-medium block leading-tight drop-shadow-sm group-hover:text-accent transition-colors">
                Rock Salt
              </span>
            </div>
          </Link>
        </motion.div>

        {/* ── Arch 3: Industrial Salt (Right) ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: 12 }}
          className="translate-y-5 sm:translate-y-6 lg:translate-y-7"
        >
          <Link
            href="/products"
            title="Explore Industrial Salt in Products"
            className="group relative block w-[120px] sm:w-[135px] lg:w-[155px] xl:w-[165px] h-[330px] sm:h-[360px] lg:h-[390px] rounded-t-full rounded-b-2xl overflow-hidden border border-mineral/20 shadow-2xl bg-[#161718] transition-all duration-500 cursor-pointer"
          >
            <img
              src="/Industrial%20Saltv2.jpeg"
              alt="Industrial Salt"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute bottom-4 inset-x-0 text-center pointer-events-none px-2">
              <span className="font-display text-sm sm:text-base lg:text-lg text-white font-medium block leading-tight drop-shadow-sm group-hover:text-accent transition-colors">
                Industrial Salt
              </span>
            </div>
          </Link>
        </motion.div>

      </div>

    </div>
  );
}
