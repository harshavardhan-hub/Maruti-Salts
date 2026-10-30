import type { Metadata } from "next";
import ProductCatalog from "@/components/products/ProductCatalog";

export const metadata: Metadata = {
  title: "Pure Salt Collection | Black Salt, Rock Salt & Industrial Salt | Maruti Salts",
  description:
    "Explore Maruti Salts' complete portfolio of 14 specialized salt varieties: authentic Matka Black Salt (Kala Namak), Himalayan Sendha Namak, and high-purity industrial salts for B2B bulk, retail, and global export.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-bg text-text">
      <div className="container mx-auto px-6 lg:px-12">
        {/* ── Page Header ────────────────────────────────────────────── */}
        <header className="max-w-4xl mb-12 lg:mb-16">
          <h1 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[1.08] text-text mb-6">
            Our Pure Collection
          </h1>

          <p className="text-lg sm:text-xl text-text/80 leading-relaxed font-light max-w-3xl">
            Sourced from subterranean mineral veins and kiln-roasted in traditional furnace batches. Explore India&apos;s finest Black Salt (Kala Namak), Himalayan Sendha Namak, and high-purity industrial formulations—each with dedicated grain specifications, laboratory standards, and bulk packaging options.
          </p>
        </header>

        {/* ── Interactive Catalog with all 14 varieties ───────────────── */}
        <ProductCatalog />
      </div>
    </div>
  );
}
