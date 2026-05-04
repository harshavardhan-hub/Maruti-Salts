"use client";

import dynamic from "next/dynamic";

const ParticleSectionContent = dynamic(() => import("./ParticleSectionContent"), { ssr: false });

export default function ParticleSection() {
  return <ParticleSectionContent />;
}
