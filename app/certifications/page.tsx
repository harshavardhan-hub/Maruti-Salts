import type { Metadata } from "next";
import Link from "next/link";
import CertificationsViewer from "@/components/certifications/CertificationsViewer";

export const metadata: Metadata = {
  title: "Official Certifications & Lab Reports | FSSAI, AQC Lab, GST & MSME | Maruti Salts",
  description:
    "Review Maruti Salts' verified regulatory certifications and third-party laboratory test reports: FSSAI Form C license, AQC Laboratory chemical analysis, GST REG-06, Udyam MSME, and Shop & Establishment registration.",
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-24 bg-bg text-text">
      <div className="container mx-auto px-6 lg:px-12">
        {/* ── Breadcrumb & Back Navigation ────────────────────────────── */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-text/60 mb-8">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-text font-medium">Certifications</span>
        </div>

        {/* ── Interactive Document Hub ─────────────────────────────────── */}
        <CertificationsViewer />
      </div>
    </div>
  );
}
