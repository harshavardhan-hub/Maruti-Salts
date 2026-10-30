import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Mail, ShieldCheck, Sparkles, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Rock Salt Powder | MT Gold Sendha Namak | Maruti Salts",
  description:
    "Our Rock Salt Powder is carefully processed from premium-quality natural rock salt to achieve a smooth, fine texture. Ideal for everyday cooking and food preparation.",
};

export default function RockSaltPowderPage() {
  const whatsappUrl = `https://wa.me/919479366658?text=${encodeURIComponent(
    "Hello Pawan ji, I am interested in inquiring about MT Gold Rock Salt Powder from Maruti Salts."
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
            <span className="text-text font-medium">Rock Salt Powder</span>
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
            <span>Rock Salt (Senda Namak) • MT Gold Variety</span>
          </div>
          
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-tight text-text mb-6">
            Rock Salt Powder
          </h1>
          
          <p className="text-lg md:text-xl text-text/85 leading-relaxed font-light">
            Our Rock Salt Powder is carefully processed from premium-quality natural rock salt to achieve a smooth, fine texture. It offers natural purity, consistent quality, and excellent solubility, making it ideal for everyday cooking, food preparation, and various food applications. We ensure hygienic processing and quality standards to deliver the best product to our customers.
          </p>
        </header>

        {/* Media Showcase: 2 Images Side-by-Side (Same Design Structure) */}
        <section aria-label="Product Media Showcase" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Product Image Card 1 */}
          <div className="bg-surface border border-mineral/15 rounded-sm overflow-hidden flex flex-col shadow-sm">
            <div className="p-4 border-b border-mineral/10 flex items-center justify-between bg-bg/50">
              <span className="text-xs uppercase tracking-wider text-text/70 font-medium">
                Retail Packaging
              </span>
              <span className="text-[11px] text-accent uppercase tracking-widest font-semibold">
                MT Gold Brand
              </span>
            </div>
            <div className="relative aspect-[4/3] bg-mineral/5 overflow-hidden group">
              <img
                src="/Rock%20Salt%20Powderimg1.jpeg"
                alt="MT Gold Rock Salt Powder Retail Pack by Maruti Salts"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-4 text-xs text-text/60 italic bg-surface">
              Consumer retail packaging of MT Gold Rock Salt Powder, hygienically sealed to ensure purity and fresh taste.
            </div>
          </div>

          {/* Product Image Card 2 */}
          <div className="bg-surface border border-mineral/15 rounded-sm overflow-hidden flex flex-col shadow-sm">
            <div className="p-4 border-b border-mineral/10 flex items-center justify-between bg-bg/50">
              <span className="text-xs uppercase tracking-wider text-text/70 font-medium">
                Product Photo Close-Up
              </span>
              <span className="text-[11px] text-accent uppercase tracking-widest font-semibold">
                Smooth Fine Texture
              </span>
            </div>
            <div className="relative aspect-[4/3] bg-mineral/5 overflow-hidden group">
              <img
                src="/Rock%20Salt%20Powderimg2.jpeg"
                alt="Rock Salt Powder Texture by Maruti Salts"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-4 text-xs text-text/60 italic bg-surface">
              Evenly pulverized natural Sendha Namak powder offering rapid solubility and balanced mineral seasoning.
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section aria-label="Key Features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">Smooth, Fine Texture</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Carefully processed into a velvety fine powder for instant dissolution and seamless incorporation into dishes.
            </p>
          </div>

          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">Natural Purity &amp; Standards</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Meticulously processed under hygienic standards from premium-grade natural rock salt without additives.
            </p>
          </div>

          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">Versatile Food Uses</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Ideal for daily household cooking, fasting preparations, seasoning blends, and commercial food manufacturing.
            </p>
          </div>

          <div className="bg-surface p-6 border border-mineral/15 rounded-sm">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4">
              <Package size={20} />
            </div>
            <h3 className="font-display text-xl text-text mb-2">Retail &amp; Bulk Packing</h3>
            <p className="text-sm text-text/75 leading-relaxed">
              Available in convenient 1 kg packs for stores, and loose packing in 50 kg bags for wholesale and bulk buyers.
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
                <dd className="text-text font-semibold text-right">MT Gold Rock Salt Powder (Sendha Namak)</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Processing Method</dt>
                <dd className="text-text font-semibold text-right">Hygienic Fine Pulverization &amp; Quality Sieving</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Physical Appearance</dt>
                <dd className="text-text font-semibold text-right">Smooth, free-flowing fine rock salt powder</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Solubility &amp; Purity</dt>
                <dd className="text-text font-semibold text-right">Excellent rapid solubility with authentic mineral salinity</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Retail Packaging</dt>
                <dd className="text-text font-semibold text-right">Convenient 1 kg packs for retailers &amp; grocery stores</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Bulk Supply</dt>
                <dd className="text-text font-semibold text-right">Loose packing in 50 kg bags for wholesale &amp; bulk buyers</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-text/60 font-medium">Certification</dt>
                <dd className="text-text font-semibold text-right">FSSAI Certified Lab Tested Quality</dd>
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
                Source Rock Salt Powder
              </h3>
              <p className="text-sm text-bg/75 leading-relaxed mb-6">
                Connect directly with our corporate team to request customized pricing, retail dealership cartons, wholesale bag lots, or export fulfillment.
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
              <h2 className="font-display text-2xl text-text">More Rock Salt Varieties</h2>
              <p className="text-sm text-text/60">Explore other pure mineral cuts and grades of Sendha Namak.</p>
            </div>
            <Link
              href="/products"
              className="text-xs uppercase tracking-widest text-accent hover:underline font-semibold"
            >
              View All Products →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href="/products/rock-salt-irani"
              className="bg-surface p-4 border border-mineral/15 rounded-sm hover:border-accent/40 transition-colors group"
            >
              <span className="text-xs uppercase tracking-wider text-accent font-medium block mb-1">
                View Variety ↗
              </span>
              <h4 className="font-display text-base text-text group-hover:text-accent transition-colors">
                Rock Salt Irani
              </h4>
            </Link>

            <Link
              href="/products/himalayan-pink-rock-salt"
              className="bg-surface p-4 border border-mineral/15 rounded-sm hover:border-accent/40 transition-colors group"
            >
              <span className="text-xs uppercase tracking-wider text-accent font-medium block mb-1">
                View Variety ↗
              </span>
              <h4 className="font-display text-base text-text group-hover:text-accent transition-colors">
                Himalayan Pink Rock Salt (Lahori)
              </h4>
            </Link>

            <Link
              href="/products/rock-salt-granules"
              className="bg-surface p-4 border border-mineral/15 rounded-sm hover:border-accent/40 transition-colors group"
            >
              <span className="text-xs uppercase tracking-wider text-accent font-medium block mb-1">
                View Variety ↗
              </span>
              <h4 className="font-display text-base text-text group-hover:text-accent transition-colors">
                Rock Salt Granules
              </h4>
            </Link>

            <Link
              href="/products/rock-salt-suji"
              className="bg-surface p-4 border border-mineral/15 rounded-sm hover:border-accent/40 transition-colors group"
            >
              <span className="text-xs uppercase tracking-wider text-accent font-medium block mb-1">
                View Variety ↗
              </span>
              <h4 className="font-display text-base text-text group-hover:text-accent transition-colors">
                Rock Salt Suji
              </h4>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

