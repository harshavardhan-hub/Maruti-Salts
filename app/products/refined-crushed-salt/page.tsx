import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Mail, ShieldCheck, Sparkles, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Refined Crushed Salt | Commercial & HORECA Salt | Maruti Salts",
  description:
    "Refined Crushed Salt is produced by crushing refined white salt into smaller, uniform granules, suitable for industrial, commercial, and HORECA applications.",
};

export default function RefinedCrushedSaltPage() {
  const whatsappUrl = `https://wa.me/919479366658?text=${encodeURIComponent(
    "Hello Pawan ji, I am interested in inquiring about Refined Crushed Salt from Maruti Salts."
  )}`;

  return (
    <div className="min-h-screen pt-28 pb-20 bg-bg text-text">
      {/* Breadcrumb & Navigation */}
      <div className="container mx-auto px-6 lg:px-12 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-mineral/10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm text-text/60">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-accent transition-colors">Products</Link>
            <span>/</span>
            <span className="text-text font-medium">Refined Crushed Salt</span>
          </nav>
          
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-text/70 hover:text-accent transition-colors font-medium"
          >
            <ArrowLeft size={14} />
            <span>Back to All Products</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <header className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs uppercase tracking-wider font-semibold mb-4">
            <Sparkles size={13} />
            <span>Industrial Salt • Commercial &amp; Refined Grade</span>
          </div>
          
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-tight text-text mb-6">
            Refined Crushed Salt
          </h1>
          
          <p className="text-lg md:text-xl text-text/85 leading-relaxed font-light">
            Refined Crushed Salt is produced by crushing refined white salt into smaller, uniform granules. It is suitable for industrial and commercial applications, including use in HORECA (Hotels, Restaurants and Catering), subject to the specific requirements of the application. The product is supplied in loose bulk bags of 50 kg, making it convenient for bulk handling, transportation and trade.
          </p>
        </header>

        {/* Media Showcase: Single Image Display */}
        <section aria-label="Product Media Showcase" className="max-w-3xl mx-auto mb-16">
          <div className="bg-surface border border-mineral/15 rounded-sm overflow-hidden flex flex-col shadow-sm">
            <div className="p-4 border-b border-mineral/10 flex items-center justify-between bg-bg/50">
              <span className="text-xs uppercase tracking-wider text-text/70 font-medium">
                Product Photo Close-Up
              </span>
              <span className="text-[11px] text-accent uppercase tracking-widest font-semibold">
                Refined White Granules
              </span>
            </div>
            <div className="relative aspect-[16/10] bg-mineral/5 overflow-hidden flex items-center justify-center group">
              <img
                src="/Refined%20Crushed%20Salt.jpeg"
                alt="Refined Crushed Salt by Maruti Salts"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-4 text-xs text-text/60 italic bg-surface">
              High-purity refined white salt crushed into uniform granules for industrial, commercial, and HORECA applications.
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section aria-label="Key Features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">Uniform Fine Granulation</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Produced by precision crushing refined white salt into consistent, calibrated granules for uniform flow.
            </p>
          </div>

          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">HORECA &amp; Commercial</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Suitable for commercial applications, including hotels, restaurants, catering, and institutional use.
            </p>
          </div>

          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">High Purity Standards</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Rigorously refined white salt delivering reliable purity, clean appearance, and rapid dissolution.
            </p>
          </div>

          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <Package size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">50 kg Loose Packs</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Supplied in 50 kg loose bulk bags, making it convenient for bulk handling, transportation, and trade.
            </p>
          </div>
        </section>

        {/* Specifications & Inquiry CTA Box */}
        <section aria-label="Product Specifications and Inquiries" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Specifications Table */}
          <div className="lg:col-span-7 bg-surface p-8 sm:p-10 border border-mineral/15 rounded-sm">
            <h2 className="font-display text-2xl sm:text-3xl text-text mb-6">
              Product Specifications
            </h2>
            
            <dl className="divide-y divide-mineral/10 text-sm">
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Product Name</dt>
                <dd className="text-text font-semibold text-right">Refined Crushed Salt</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Grade / Classification</dt>
                <dd className="text-text font-semibold text-right">Commercial &amp; Refined Grade</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Processing Method</dt>
                <dd className="text-text font-semibold text-right">Crushing Refined White Salt into Uniform Granules</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Physical Appearance</dt>
                <dd className="text-text font-semibold text-right">Pure white, smaller uniform granules</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Target Applications</dt>
                <dd className="text-text font-semibold text-right">Industrial, Commercial &amp; HORECA (Hotels, Restaurants, Catering)</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Packaging</dt>
                <dd className="text-text font-semibold text-right">50 kg loose bulk bags</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Bulk Handling</dt>
                <dd className="text-text font-semibold text-right">Convenient for transport, storage, and wholesale trade</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Origin</dt>
                <dd className="text-text font-semibold text-right">Mandsaur, Madhya Pradesh, India</dd>
              </div>
            </dl>
          </div>

          {/* Quick Contact & WhatsApp Action Card */}
          <div className="lg:col-span-5 bg-mineral text-bg p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
                Commercial &amp; Wholesale Inquiries
              </span>
              <h3 className="font-display text-2xl sm:text-3xl mb-4 text-white">
                Source Refined Crushed Salt
              </h3>
              <p className="text-sm text-bg/75 leading-relaxed mb-6">
                Connect directly with our corporate team to request customized pricing, 50 kg bag consignments, HORECA supply contracts, or export orders.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-sm uppercase tracking-wider text-xs font-semibold transition-all shadow-md"
              >
                <span>Chat Directly on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 hover:border-white text-white py-3.5 px-6 rounded-sm uppercase tracking-wider text-xs font-semibold hover:bg-white/10 transition-colors text-center"
              >
                <Mail size={15} />
                <span>Request Quotation Online</span>
              </Link>

              <div className="pt-2 text-center text-xs text-bg/60">
                <span>Phone: </span>
                <a href="tel:+919479366658" className="hover:text-accent font-medium text-bg/90 transition-colors">
                  +91 9479366658
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Other Varieties in this Category */}
        <section aria-label="Other Varieties" className="pt-10 border-t border-mineral/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-display text-2xl text-text">More Industrial Salt Varieties</h2>
              <p className="text-sm text-text/60">Explore other specialized commercial and refined industrial salt grades.</p>
            </div>
            <Link
              href="/products"
              className="text-xs uppercase tracking-widest text-accent hover:underline font-semibold"
            >
              View All Products →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/products/industrial-rock-salt"
              className="bg-surface p-4 border border-mineral/15 rounded-sm hover:border-accent/40 transition-colors group"
            >
              <span className="text-xs uppercase tracking-wider text-accent font-medium block mb-1">
                View Variety ↗
              </span>
              <h4 className="font-display text-base text-text group-hover:text-accent transition-colors">
                Industrial Rock Salt
              </h4>
            </Link>

            <Link
              href="/products/free-flow-iodised-salt"
              className="bg-surface p-4 border border-mineral/15 rounded-sm hover:border-accent/40 transition-colors group"
            >
              <span className="text-xs uppercase tracking-wider text-accent font-medium block mb-1">
                View Variety ↗
              </span>
              <h4 className="font-display text-base text-text group-hover:text-accent transition-colors">
                Free Flow Iodised Salt
              </h4>
            </Link>

            <Link
              href="/products/fine-dust-salt-powder"
              className="bg-surface p-4 border border-mineral/15 rounded-sm hover:border-accent/40 transition-colors group"
            >
              <span className="text-xs uppercase tracking-wider text-accent font-medium block mb-1">
                View Variety ↗
              </span>
              <h4 className="font-display text-base text-text group-hover:text-accent transition-colors">
                Fine Dust Salt Powder
              </h4>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

