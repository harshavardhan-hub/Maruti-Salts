"use client";

import { useState } from "react";
import { 
  FileText, 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  Building2, 
  FlaskConical, 
  Eye, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";

export interface CertificateDoc {
  id: string;
  shortName: string;
  fullName: string;
  authority: string;
  regNumber?: string;
  documentType: string;
  pagesInfo: string;
  fileUrl: string;
  description: string;
  highlights: string[];
  iconType: "fssai" | "lab" | "gst" | "msme" | "shop";
}

export const CERTIFICATES: CertificateDoc[] = [
  {
    id: "fssai",
    shortName: "FSSAI License",
    fullName: "FSSAI License Certificate (Form C)",
    authority: "Food Safety and Standards Authority of India",
    documentType: "Statutory Form C License with Annexures",
    pagesInfo: "16 Pages • Multi-Page Document",
    fileUrl: "/FSSAI%20License%20Certificate(Form%20C).pdf",
    description: "Official Food Business Operator (FBO) Form C license authorizing Maruti Salts for large-scale processing, packaging, and commercial wholesale distribution of edible and industrial salt products across India.",
    highlights: [
      "Authorized Food Processing & Packaging",
      "Includes Annual Renewals & Annexures",
      "Full 16-Page Multi-Category Schedule",
      "Complies with Central Food Safety Standards"
    ],
    iconType: "fssai",
  },
  {
    id: "lab-report",
    shortName: "AQC Lab Test Report",
    fullName: "Food Product LAB Test Report (AQC Labs)",
    authority: "AQC Testing Laboratories (Analytical Testing)",
    regNumber: "Report No: AQC/2425/09/10/26017",
    documentType: "Chemical & Microbiological Laboratory Analysis",
    pagesInfo: "Official Analytical Test Report",
    fileUrl: "/Food%20Product%20LAB%20Test%20Report%20AQC%20Labs.pdf",
    description: "Analytical test report confirming that Maruti Salts' processed mineral salt strictly complies with all FSSAI Chemical and Microbiological parameters, including purity, moisture balance, and absence of heavy metals.",
    highlights: [
      "Test Parameter Compliance as per FSSAI Salt Manual",
      "Moisture & Insoluble Matter Assay",
      "Sodium Chloride (NaCl) High Purity Analysis",
      "Microbiological Purity & Heavy Metal Clearance"
    ],
    iconType: "lab",
  },
  {
    id: "gst",
    shortName: "GST Registration",
    fullName: "GST Registration Certificate (Form GST REG-06)",
    authority: "Government of India • Goods and Services Tax Network",
    regNumber: "GSTIN: 23AVZPH4302C1ZV",
    documentType: "Form GST REG-06 Commercial Registration",
    pagesInfo: "4 Pages • Complete Annexure A & B",
    fileUrl: "/GST%20Registration%20Certificate.pdf",
    description: "Form GST REG-06 Certificate issued by the Government of India, establishing Maruti Salts as a recognized commercial taxpayer eligible for interstate trade, formal invoicing, and B2B input tax credit.",
    highlights: [
      "Active GSTIN: 23AVZPH4302C1ZV",
      "Form GST REG-06 with Complete Annexures",
      "Approved for Interstate & Export Trade",
      "Full B2B Input Tax Credit (ITC) Eligible"
    ],
    iconType: "gst",
  },
  {
    id: "udyam-msme",
    shortName: "Udyam MSME Certificate",
    fullName: "Udyam Registration MSME Certificate",
    authority: "Ministry of Micro, Small and Medium Enterprises, Govt. of India",
    documentType: "National MSME Enterprise Registration",
    pagesInfo: "Official Ministry Certificate",
    fileUrl: "/Udyam%20Registration%20MSME%20Certificate.pdf",
    description: "Official registration certificate issued by the Ministry of MSME, Government of India, verifying Maruti Salts as a recognized industrial manufacturing enterprise with dedicated processing infrastructure.",
    highlights: [
      "Classified Manufacturing Enterprise",
      "Government of India Udyam Registry",
      "Dedicated Industrial Production Capacity",
      "Verified Infrastructure & Plant Machinery"
    ],
    iconType: "msme",
  },
  {
    id: "shop-establishment",
    shortName: "Shop & Establishment",
    fullName: "Shop & Establishment Registration",
    authority: "Labour Department, Government of Madhya Pradesh",
    documentType: "State Statutory Commercial License",
    pagesInfo: "Official State Registration",
    fileUrl: "/Shop%20%26%20Establishment%20Registration.pdf",
    description: "Statutory commercial operating license issued under the Madhya Pradesh Shops and Commercial Establishments Act for our manufacturing facility located at Food Processing Park, Jaggakhedi Industrial Area, Mandsaur.",
    highlights: [
      "Statutory Industrial Park Registration",
      "Plot No. 125, Food Processing Park",
      "Jaggakhedi Industrial Area, Mandsaur (M.P.)",
      "Compliant with Labour & Operating Norms"
    ],
    iconType: "shop",
  },
];

export default function CertificationsViewer() {
  const [selectedId, setSelectedId] = useState<string>("fssai");
  const activeDoc = CERTIFICATES.find((c) => c.id === selectedId) || CERTIFICATES[0];

  const handleSelectDoc = (id: string) => {
    setSelectedId(id);
    // Smoothly bring the interactive reader into view if needed
    const readerEl = document.getElementById("interactive-document-viewer");
    if (readerEl) {
      readerEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getDocIcon = (type: CertificateDoc["iconType"]) => {
    switch (type) {
      case "fssai":
        return <ShieldCheck className="text-emerald-700" size={24} />;
      case "lab":
        return <FlaskConical className="text-blue-700" size={24} />;
      case "gst":
        return <Building2 className="text-amber-700" size={24} />;
      case "msme":
        return <Award className="text-purple-700" size={24} />;
      case "shop":
        return <FileText className="text-teal-700" size={24} />;
    }
  };

  return (
    <div className="w-full">
      {/* ── Document Switcher Navigation Tabs ────────────────────────── */}
      <div className="mb-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
          {CERTIFICATES.map((doc) => {
            const isActive = selectedId === doc.id;
            return (
              <button
                key={doc.id}
                onClick={() => handleSelectDoc(doc.id)}
                className={`
                  whitespace-nowrap px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2.5
                  ${
                    isActive
                      ? "bg-mineral text-bg shadow-md ring-2 ring-accent/30"
                      : "bg-surface text-text/75 hover:text-text hover:bg-mineral/10 border border-mineral/15"
                  }
                `}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? "bg-accent" : "bg-mineral/30"}`} />
                <span>{doc.shortName}</span>
                {doc.pagesInfo.includes("16 Pages") && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isActive ? "bg-bg/20 text-bg" : "bg-mineral/10 text-text/60"}`}>
                    16 pgs
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Featured Interactive Document Viewer ─────────────────────── */}
      <div 
        id="interactive-document-viewer"
        className="bg-surface rounded-2xl border border-mineral/20 shadow-xl overflow-hidden mb-16 transition-all duration-500"
      >
        {/* Document Header Bar */}
        <div className="p-5 sm:p-6 md:p-8 bg-bg/90 border-b border-mineral/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-surface border border-mineral/15 flex items-center justify-center flex-shrink-0 shadow-xs">
              {getDocIcon(activeDoc.iconType)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 text-[11px] font-semibold tracking-wide border border-emerald-500/20">
                  <CheckCircle2 size={12} />
                  <span>Verified Statutory Record</span>
                </span>
                <span className="text-xs text-text/60 font-mono">
                  {activeDoc.pagesInfo}
                </span>
                {activeDoc.regNumber && (
                  <span className="text-xs font-semibold text-accent font-mono bg-accent/10 px-2 py-0.5 rounded">
                    {activeDoc.regNumber}
                  </span>
                )}
              </div>

              <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-text leading-snug">
                {activeDoc.fullName}
              </h2>
              <p className="text-xs sm:text-sm text-text/70 mt-1">
                Issued by: <strong className="font-medium text-text">{activeDoc.authority}</strong>
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-3 self-start md:self-center flex-shrink-0">
            <a
              href={activeDoc.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-mineral/25 bg-surface text-text hover:bg-mineral hover:text-bg text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-xs"
              title="Open full document in high-res browser viewer"
            >
              <span>Open in New Tab</span>
              <ExternalLink size={13} />
            </a>

            <a
              href={activeDoc.fileUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-bg hover:bg-mineral text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-sm"
              title="Download official PDF to device"
            >
              <span>Download PDF</span>
              <Download size={13} />
            </a>
          </div>
        </div>

        {/* Embedded Document Viewer Container */}
        <div className="relative w-full bg-mineral/5">
          {/* Multi-page Notice Banner */}
          <div className="px-6 py-2.5 bg-mineral/5 border-b border-mineral/10 flex items-center justify-between text-xs text-text/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-text">
                Interactive Viewer: Scroll inside the frame to review all pages and annexures
              </span>
            </div>
            <span className="hidden sm:inline text-text/50 text-[11px]">
              Use browser controls or buttons above to zoom, print, or download
            </span>
          </div>

          {/* The PDF Iframe with native scrolling */}
          <div className="w-full h-[520px] sm:h-[650px] md:h-[780px] relative bg-white">
            <iframe
              key={activeDoc.fileUrl}
              src={`${activeDoc.fileUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
              title={activeDoc.fullName}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          {/* Mobile Direct Download Fallback Strip */}
          <div className="p-4 bg-bg border-t border-mineral/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text/80">
            <span>
              Having trouble viewing inside your mobile browser?
            </span>
            <a
              href={activeDoc.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent font-semibold hover:underline"
            >
              <span>Tap here to open PDF directly</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Document Vault Cards Grid ─────────────────────────────────── */}
      <div className="mb-20">
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs uppercase tracking-wider font-semibold mb-3">
            <ShieldCheck size={13} />
            <span>Complete Statutory Vault</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-text">
            All Statutory Licenses & Technical Reports
          </h3>
          <p className="text-sm text-text/70 mt-2">
            Click on any card to load the document in the interactive viewer above, or download the original signed files directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((doc) => {
            const isSelected = selectedId === doc.id;
            return (
              <div
                key={doc.id}
                className={`
                  bg-surface p-6 sm:p-7 rounded-xl border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg
                  ${
                    isSelected
                      ? "border-accent ring-2 ring-accent/20 bg-bg"
                      : "border-mineral/15 hover:border-accent/40"
                  }
                `}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-bg border border-mineral/15 flex items-center justify-center flex-shrink-0">
                      {getDocIcon(doc.iconType)}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-mineral/5 border border-mineral/10 text-text/70">
                      {doc.pagesInfo.includes("16 Pages") ? "16 Pages" : doc.pagesInfo.includes("4 Pages") ? "4 Pages" : "Full Document"}
                    </span>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider text-accent font-semibold block mb-1.5">
                    {doc.authority}
                  </span>

                  <h4 className="font-display text-xl text-text mb-3 leading-snug">
                    {doc.fullName}
                  </h4>

                  {doc.regNumber && (
                    <div className="mb-3">
                      <span className="inline-block text-[11px] font-mono bg-mineral/5 border border-mineral/15 px-2 py-1 rounded text-text font-medium">
                        {doc.regNumber}
                      </span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-text/75 leading-relaxed mb-5">
                    {doc.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6">
                    {doc.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-text/80">
                        <CheckCircle2 size={13} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-mineral/10 flex items-center gap-2">
                  <button
                    onClick={() => handleSelectDoc(doc.id)}
                    className={`
                      flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-colors
                      ${
                        isSelected
                          ? "bg-mineral text-bg"
                          : "bg-surface border border-mineral/25 text-text hover:bg-mineral hover:text-bg"
                      }
                    `}
                  >
                    <Eye size={13} />
                    <span>{isSelected ? "Currently Viewing" : "View in Reader"}</span>
                  </button>

                  <a
                    href={doc.fileUrl}
                    download
                    title={`Download ${doc.shortName} PDF`}
                    className="inline-flex items-center justify-center p-2.5 rounded-lg border border-mineral/25 text-text/70 hover:text-accent hover:border-accent hover:bg-accent/5 transition-colors"
                  >
                    <Download size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── B2B Audit & Export Documentation Banner ─────────────────────── */}
      <section className="p-8 sm:p-12 rounded-2xl bg-mineral text-bg relative overflow-hidden shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg/10 text-accent text-xs uppercase tracking-wider font-semibold mb-4">
            <Sparkles size={14} />
            <span>Enterprise & Export QA Compliance</span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl text-bg leading-tight mb-4">
            Require Batch-Specific Certificate of Analysis (COA) or Custom Compliance Documentation?
          </h3>

          <p className="text-sm sm:text-base text-bg/80 leading-relaxed mb-8">
            For institutional food brands, pharmaceutical manufacturers, and overseas export contracts, Maruti Salts provides certified batch-specific lab test results, moisture assays, packing integrity documentation, and consignment COAs upon request.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3.5 rounded-lg bg-accent text-bg hover:bg-bg hover:text-mineral uppercase tracking-wider text-xs font-semibold transition-all shadow-md"
            >
              Request Compliance Documents & Samples
            </a>

            <a
              href="https://wa.me/919479366658?text=Hello%20Pawan%20ji%2C%20I%20am%20inquiring%20about%20Maruti%20Salts%20regulatory%20certifications%20and%20batch%20COA."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg border border-bg/30 text-bg hover:bg-bg/10 uppercase tracking-wider text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <ExternalLink size={14} />
              <span>Contact Compliance Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

