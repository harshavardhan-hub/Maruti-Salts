"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  FlaskConical, 
  Building2, 
  Award, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";

const CERT_HIGHLIGHTS = [
  {
    title: "FSSAI Food License",
    subtitle: "Form C Statutory License",
    detail: "16-Page Multi-Category Schedule",
    icon: ShieldCheck,
    iconColor: "text-emerald-700",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "AQC Lab Test Report",
    subtitle: "Analytical Purity Assay",
    detail: "Chemical & Microbial Clearance",
    icon: FlaskConical,
    iconColor: "text-blue-700",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "GST Registration",
    subtitle: "GSTIN: 23AVZPH4302C1ZV",
    detail: "Government of India REG-06",
    icon: Building2,
    iconColor: "text-amber-700",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "Udyam MSME Registry",
    subtitle: "Ministry of MSME Verified",
    detail: "Industrial Manufacturing Facility",
    icon: Award,
    iconColor: "text-purple-700",
    bgColor: "bg-purple-500/10",
  },
];

export default function HomeCertifications() {
  return (
    <section className="py-20 sm:py-24 bg-surface border-y border-mineral/10 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-bg rounded-2xl border border-mineral/15 p-8 sm:p-10 lg:p-12 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* ── Left Column: Section Intro ───────────────────────────── */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs uppercase tracking-wider font-semibold mb-4">
              <ShieldCheck size={13} />
              <span>Verified Statutory Compliance</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-text leading-tight mb-4">
              Certified Quality &amp; Government Approvals
            </h2>

            <p className="text-sm sm:text-base text-text/75 leading-relaxed font-light mb-8">
              Every batch of mineral salt processed by Maruti Salts adheres to strict food safety norms and statutory manufacturing regulations, backed by official licenses and third-party laboratory assays.
            </p>

            <Link
              href="/certifications"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-mineral text-bg hover:bg-accent text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm group"
            >
              <span>View All 5 Certifications &amp; Lab Reports</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ── Right Column: 4 Micro Highlight Cards ─────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-xl">
            {CERT_HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href="/certifications"
                  className="p-5 rounded-xl bg-surface border border-mineral/15 hover:border-accent/40 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={item.iconColor} size={20} />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-semibold uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      <CheckCircle2 size={10} />
                      <span>Verified</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg text-text group-hover:text-accent transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-accent font-medium mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-[11px] text-text/60 mt-2">
                      {item.detail}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-mineral/10 flex items-center justify-between text-[11px] text-text/50 font-medium group-hover:text-accent transition-colors">
                    <span>Inspect Document</span>
                    <span className="font-bold text-[10px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

