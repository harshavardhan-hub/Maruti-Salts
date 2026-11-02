import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function QualityPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 lg:px-12">
      <h1 className="font-display text-[clamp(3rem,6vw,5rem)] text-text mb-8 text-center">Quality &amp; Process</h1>
      <p className="text-xl text-text/80 max-w-2xl mx-auto text-center mb-24">
        Our 5-step rigorous process ensures that the minerals we deliver are pure, potent, and safe.
      </p>

      <div className="space-y-32">
        {[
          { title: "Raw mineral extraction", img: "/images/process-extraction.jpg" },
          { title: "Natural drying & sorting", img: "/images/process-drying.jpg" },
          { title: "Quality grading", img: "/images/rock-salt-chunks.jpg" },
          { title: "FSSAI lab testing", img: "/images/hero-crystal.jpg" },
          { title: "Packaging & dispatch", img: "/images/mineral-texture-bg.jpg" },
        ].map((step, i) => (
          <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
              <div className="font-display text-accent text-6xl mb-6 opacity-50">0{i+1}</div>
              <h2 className="font-display text-4xl text-text mb-6">{step.title}</h2>
              <p className="text-lg text-text/80 leading-relaxed">
                Every batch is handled with meticulous precision, preserving its natural crystal geometry while ensuring compliance with stringent food and industrial quality benchmarks.
              </p>
            </div>
            <div className={`relative h-[50vh] bg-surface overflow-hidden ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
              <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* ── Certifications CTA Banner ─────────────────────────────────── */}
      <div className="mt-28 p-8 sm:p-12 rounded-2xl bg-mineral text-bg text-center max-w-4xl mx-auto shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg/10 text-accent text-xs uppercase tracking-wider font-semibold mb-4">
          <ShieldCheck size={14} />
          <span>Statutory Compliance &amp; Verification</span>
        </div>
        <h3 className="font-display text-3xl sm:text-4xl mb-4">
          View Our Verified Licenses &amp; Lab Reports
        </h3>
        <p className="text-sm sm:text-base text-bg/80 max-w-xl mx-auto mb-8">
          Inspect our official FSSAI Form C license (16-page schedule), AQC laboratory test reports, GST registration, and MSME certificates.
        </p>
        <Link
          href="/certifications"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-bg hover:bg-bg hover:text-mineral uppercase tracking-wider text-xs font-semibold transition-all shadow-md"
        >
          <span>Explore All 5 Official Certifications</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
