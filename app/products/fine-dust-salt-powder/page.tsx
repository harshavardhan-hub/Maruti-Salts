import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Mail, ShieldCheck, Sparkles, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Fine Dust Salt Powder | Industrial Salt Powder Dust | Maruti Salts",
  description:
    "Fine Salt Powder Dust is used in various industrial applications, including industrial roasting and the manufacturing of detergents and washing powders.",
};

export default function FineDustSaltPowderPage() {
  const whatsappUrl = `https://wa.me/919479366658?text=${encodeURIComponent(
    "Hello Pawan ji, I am interested in inquiring about Fine Dust Salt Powder from Maruti Salts."
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
            <span className="text-text font-medium">Fine Dust Salt Powder</span>
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
            Fine Dust Salt Powder
          </h1>
          
          <p className="text-lg md:text-xl text-text/85 leading-relaxed font-light">
            Fine Salt Powder Dust is used in various industrial applications, including industrial roasting and the manufacturing of detergents and washing powders. It serves as a raw material in specific production processes, catering to the requirements of detergent manufacturers, industrial roasters, and other industries. We also offer bulk supply to meet the diverse requirements of industrial buyers.
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
                Micro-Fine Industrial Dust
              </span>
            </div>
            <div className="relative aspect-[16/10] bg-mineral/5 overflow-hidden flex items-center justify-center group">
              <img
                src="/Fine%20Dust%20Salt%20Powder.jpeg"
                alt="Fine Dust Salt Powder by Maruti Salts"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-4 text-xs text-text/60 italic bg-surface">
              Ultra-fine industrial salt powder dust engineered for detergent formulations, industrial roasting, and bulk processing.
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section aria-label="Key Features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">Detergent &amp; Soap Mfg</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Acts as a primary raw material and functional filler in the production of washing powders and synthetic detergents.
            </p>
          </div>

          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">Industrial Roasting Media</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Widely employed by industrial roasters for thermal conduction, uniform roasting beds, and grain processing.
            </p>
          </div>

          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">Micro-Pulverized Dust</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Calibrated ultra-fine particulate size ensures instantaneous dispersion, smooth blending, and uniform batch reactivity.
            </p>
          </div>

          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <Package size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">50 kg Loose Packs</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Supplied in 50 kg loose packs to meet bulk requirements for industrial manufacturing, commercial processing, and trade.
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
                <dd className="text-text font-semibold text-right">Fine Dust Salt Powder (Salt Powder Dust)</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Grade / Classification</dt>
                <dd className="text-text font-semibold text-right">Commercial &amp; Refined Industrial Grade</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Processing Method</dt>
                <dd className="text-text font-semibold text-right">Precision Micro-Pulverization &amp; Fine Air Sieving</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Physical Appearance</dt>
                <dd className="text-text font-semibold text-right">Pure white, free-flowing ultra-fine salt powder dust</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Target Industries</dt>
                <dd className="text-text font-semibold text-right">Detergent Manufacturers, Industrial Roasters, Chemical Plants</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Packaging</dt>
                <dd className="text-text font-semibold text-right">50 kg loose bulk bags</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Supply Capacity</dt>
                <dd className="text-text font-semibold text-right">Continuous high-tonnage supply contracts &amp; bulk truckloads</dd>
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
                Source Fine Dust Salt Powder
              </h3>
              <p className="text-sm text-bg/75 leading-relaxed mb-6">
                Connect directly with our corporate team to request customized pricing, full truckload contracts, 50 kg industrial consignments, or sample testing bags.
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
              href="/products/refined-crushed-salt"
              className="bg-surface p-4 border border-mineral/15 rounded-sm hover:border-accent/40 transition-colors group"
            >
              <span className="text-xs uppercase tracking-wider text-accent font-medium block mb-1">
                View Variety ↗
              </span>
              <h4 className="font-display text-base text-text group-hover:text-accent transition-colors">
                Refined Crushed Salt
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
          </div>
        </section>
      </article>
    </div>
  );
}

