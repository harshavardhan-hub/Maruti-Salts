"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  Search
} from "lucide-react";

export interface VarietyItem {
  id: string;
  name: string;
  category: "black-salt" | "rock-salt" | "industrial-salt";
  categoryLabel: string;
  grade: string;
  description: string;
  image: string;
  href: string;
  features: string[];
}

export const VARIETIES: VarietyItem[] = [
  // ── Black Salt (Kala Namak) ──────────────────────────
  {
    id: "black-salt-crystals",
    name: "Black Salt Crystals",
    category: "black-salt",
    categoryLabel: "Black Salt (Kala Namak)",
    grade: "Traditional Furnace Roasted",
    description: "Authentic, mineral-rich Kala Namak crystals processed in traditional clay pots. Famous for volcanic aroma, high iron, and therapeutic qualities.",
    image: "/Black%20Salat%20Crystals1.jpeg",
    href: "/products/black-salt-crystals",
    features: ["Clay Pot Roasted", "High Sulphur Content", "Therapeutic Standard"],
  },
  {
    id: "farnish-black-salt",
    name: "Farnish Black Salt",
    category: "black-salt",
    categoryLabel: "Black Salt (Kala Namak)",
    grade: "Kiln & Slab Processed",
    description: "Slab-processed black salt engineered under high-temperature kiln heating, delivering uniform crystal density and pure pungent flavor for food processing.",
    image: "/Farnish%20Black%20Salt1.jpeg",
    href: "/products/farnish-black-salt",
    features: ["Kiln Fired Slabs", "Uniform Density", "Industrial Food Grade"],
  },
  {
    id: "black-salt-matka",
    name: "Black Salt Matka",
    category: "black-salt",
    categoryLabel: "Black Salt (Kala Namak)",
    grade: "Authentic Earthen Pot Batch",
    description: "Handcrafted inside specialized clay matkas using centuries-old heating recipes with natural botanical herbs for unmatched Ayurvedic purity.",
    image: "/Black%20Salt%20Matka1.jpeg",
    href: "/products/black-salt-matka",
    features: ["Herbal Infusion", "Earthen Matka Craft", "Deep Mineral Aroma"],
  },
  {
    id: "black-salt-fine-granules",
    name: "Black Salt Fine Granules",
    category: "black-salt",
    categoryLabel: "Black Salt (Kala Namak)",
    grade: "Even Granulation",
    description: "Carefully sifted fine black salt crystals offering rapid dispersion and consistent tanginess for snacks, spice blends, and food manufacturing.",
    image: "/Black%20Salt%20Fine%20Granulesimg1.jpeg",
    href: "/products/black-salt-fine-granules",
    features: ["Instant Dispersion", "Even Grain Size", "Snack Seasoning Ready"],
  },
  {
    id: "black-salt-powder",
    name: "Black Salt Powder",
    category: "black-salt",
    categoryLabel: "Black Salt (Kala Namak)",
    grade: "MT Gold Micro-Ground",
    description: "Ultra-fine pulverized MT Gold black salt powder providing effortless blending and immediate aromatic tang in chaat masalas and culinary mixes.",
    image: "/Black%20Salt%20Powder1.png",
    href: "/products/black-salt-powder",
    features: ["Micro-Pulverized", "Zero Grit Texture", "Daily Culinary Use"],
  },

  // ── Rock Salt (Sendha Namak) ─────────────────────────
  {
    id: "himalayan-pink-rock-salt",
    name: "Himalayan Pink Rock Salt (Lahori)",
    category: "rock-salt",
    categoryLabel: "Rock Salt (Senda Namak)",
    grade: "Ancient Pristine Deposit",
    description: "Renowned Lahori Sendha Namak extracted from ancient mineral veins, prized for its rose-pink crystalline hue and 84+ natural trace electrolytes.",
    image: "/Himalayan%20Pink%20Rock%20Salt%20(Lahori)1.jpeg",
    href: "/products/himalayan-pink-rock-salt",
    features: ["84+ Trace Minerals", "Pristine Lahori Origin", "Low Sodium Balance"],
  },
  {
    id: "rock-salt-irani",
    name: "Rock Salt Irani",
    category: "rock-salt",
    categoryLabel: "Rock Salt (Senda Namak)",
    grade: "Natural Orange Hue Halite",
    description: "Naturally mineral-dense Iranian rock salt recognized for its striking warm orange tone, excellent salinity, and versatility in gourmet seasonings.",
    image: "/Rock%20Salt%20Irani%20image1.jpeg",
    href: "/products/rock-salt-irani",
    features: ["Natural Orange Tone", "Dense Mineral Halite", "Gourmet Seasoning"],
  },
  {
    id: "rock-salt-granules",
    name: "Rock Salt Granules",
    category: "rock-salt",
    categoryLabel: "Rock Salt (Senda Namak)",
    grade: "Coarse Mill & Grinder Grade",
    description: "Pristine pink salt crystals sized specifically for table grinders, meat cures, gourmet finishing, and luxury therapeutic spa applications.",
    image: "/Rock%20Salt%20Granulesimg1.jpeg",
    href: "/products/rock-salt-granules",
    features: ["Grinder Optimized", "Clean Mineral Taste", "Zero Additives"],
  },
  {
    id: "rock-salt-suji",
    name: "Rock Salt Suji",
    category: "rock-salt",
    categoryLabel: "Rock Salt (Senda Namak)",
    grade: "Medium Semolina Granulation",
    description: "Carefully calibrated semolina-grade pink rock salt, widely trusted for fasting (vrat) snacks, namkeen production, and everyday cooking.",
    image: "/Rock%20Salt%20Sujiimg1.jpeg",
    href: "/products/rock-salt-suji",
    features: ["Medium Suji Cut", "Fasting (Vrat) Approved", "Uniform Dissolution"],
  },
  {
    id: "rock-salt-powder",
    name: "Rock Salt Powder",
    category: "rock-salt",
    categoryLabel: "Rock Salt (Senda Namak)",
    grade: "MT Gold Free-Flowing Fine",
    description: "Smooth, velvety MT Gold Sendha Namak powder crafted for daily kitchen seasoning, wellness drinks, and balanced nutritional intake.",
    image: "/Rock%20Salt%20Powderimg1.jpeg",
    href: "/products/rock-salt-powder",
    features: ["MT Gold Fine Grind", "Natural Electrolytes", "Daily Culinary Use"],
  },

  // ── Industrial Salt ──────────────────────────────────
  {
    id: "industrial-rock-salt",
    name: "Industrial Rock Salt",
    category: "industrial-salt",
    categoryLabel: "Industrial Salt",
    grade: "Heavy Industrial Bulk Supply",
    description: "High-purity industrial rock salt formulated for petroleum refineries, chemical synthesis, water softening plants, and bulk chlor-alkali production.",
    image: "/Industrial%20Rock%20Saltimg1.jpeg",
    href: "/products/industrial-rock-salt",
    features: ["High Chemical Purity", "Refinery & Boiler Ready", "Direct Bulk Rake Dispatch"],
  },
  {
    id: "refined-crushed-salt",
    name: "Refined Crushed Salt",
    category: "industrial-salt",
    categoryLabel: "Industrial Salt",
    grade: "Washed & Calibrated Crushed",
    description: "Crushed, washed solar salt produced into uniform small granules for food processing, commercial pickling, dairy, and HORECA sector.",
    image: "/Refined%20Crushed%20Salt.jpeg",
    href: "/products/refined-crushed-salt",
    features: ["Consistent Particle Size", "Food Processing Grade", "Pickles & Dairy Ready"],
  },
  {
    id: "free-flow-iodised-salt",
    name: "Free Flow Lodised Salt",
    category: "industrial-salt",
    categoryLabel: "Industrial Salt",
    grade: "Vacuum Refined Edible Standard",
    description: "Pure white, free-flowing kiln-dried salt enriched with recommended potassium iodate for everyday edible consumption and packaged food manufacturing.",
    image: "/Free%20Flow%20Lodised%20Salt.jpeg",
    href: "/products/free-flow-iodised-salt",
    features: ["Iodine Enriched", "Anti-Caking Non-Clump", "FMCG & Edible Grade"],
  },
  {
    id: "fine-dust-salt-powder",
    name: "Fine Dust Salt Powder",
    category: "industrial-salt",
    categoryLabel: "Industrial Salt",
    grade: "Micro-Fine Industrial Dust",
    description: "Specialized ultra-fine salt dust engineered for industrial roasting of grains, detergent manufacturing, cattle feeds, and chemical compounding.",
    image: "/Fine%20Dust%20Salt%20Powder.jpeg",
    href: "/products/fine-dust-salt-powder",
    features: ["Industrial Grain Roasting", "Detergent & Soap Base", "Rapid Chemical Reaction"],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Varieties", count: 14 },
  { id: "black-salt", label: "Black Salt (Kala Namak)", count: 5 },
  { id: "rock-salt", label: "Rock Salt (Sendha Namak)", count: 5 },
  { id: "industrial-salt", label: "Industrial Salt", count: 4 },
] as const;

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVarieties = useMemo(() => {
    return VARIETIES.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.features.some((f) =>
          f.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* ── Category Filter & Search Bar ──────────────────────────────── */}
      <div className="mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-mineral/15">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2
                    ${
                      isActive
                        ? "bg-mineral text-bg shadow-sm"
                        : "bg-surface text-text/75 hover:text-text hover:bg-mineral/10 border border-mineral/15"
                    }
                  `}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`
                      text-[10px] px-1.5 py-0.5 rounded-full font-mono
                      ${
                        isActive
                          ? "bg-bg/20 text-bg"
                          : "bg-mineral/10 text-text/60"
                      }
                    `}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] max-w-sm">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text/40 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search crystals, powder, mesh..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-mineral/15 rounded-full pl-9 pr-4 py-2 text-xs md:text-sm text-text placeholder:text-text/40 focus:outline-none focus:border-accent transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text/40 hover:text-text"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter / Category hint */}
        <div className="flex items-center justify-between pt-4 text-xs text-text/60">
          <p>
            Showing <span className="font-semibold text-text">{filteredVarieties.length}</span> of {VARIETIES.length} dedicated product pages
          </p>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-accent font-medium">
            <Sparkles size={12} />
            <span>Click any product card to view lab specs, media & packaging</span>
          </span>
        </div>
      </div>

      {/* ── Product Grid ─────────────────────────────────────────────── */}
      {filteredVarieties.length === 0 ? (
        <div className="text-center py-20 bg-surface rounded-lg border border-mineral/15">
          <p className="text-text/60 text-base mb-4">
            No varieties found matching &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 bg-mineral text-bg text-xs uppercase tracking-wider rounded-full hover:bg-accent transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredVarieties.map((item) => {
            const whatsappMsg = `Hello Pawan ji, I am interested in inquiring about ${item.name} from Maruti Salts.`;
            const whatsappUrl = `https://wa.me/919479366658?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={item.id}
                className="group bg-surface flex flex-col h-full border border-mineral/15 hover:border-accent/50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative"
              >
                {/* ── Image Showcase Area ────────────────────────────── */}
                <Link
                  href={item.href}
                  className="block relative aspect-[16/11] overflow-hidden bg-mineral/5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top-Left Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wide bg-bg/90 backdrop-blur-md text-text border border-mineral/10 shadow-sm">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Top-Right Dedicated Page Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase bg-accent text-bg shadow-sm group-hover:bg-mineral transition-colors">
                      <span>Full Specs</span>
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </Link>

                {/* ── Card Body ──────────────────────────────────────── */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  {/* Processing Grade */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
                      {item.grade}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-display text-xl sm:text-2xl text-text mb-2.5 group-hover:text-accent transition-colors leading-snug">
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text/75 leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                    {item.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-bg border border-mineral/15 text-text/70 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-mineral/10 mb-4" />

                  {/* Card Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      href={item.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-bg hover:bg-mineral text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-sm group/btn"
                    >
                      <span>Explore Variety</span>
                      <ArrowRight
                        size={13}
                        className="transform group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Quick Inquiry on WhatsApp"
                      className="inline-flex items-center justify-center p-2.5 rounded-lg border border-mineral/20 text-text/70 hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10 transition-colors"
                      aria-label={`Inquire about ${item.name} on WhatsApp`}
                    >
                      <MessageSquare size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── B2B Customization & Bulk Orders Banner ─────────────────────── */}
      <section className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-2xl bg-mineral text-bg relative overflow-hidden shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg/10 text-accent text-xs uppercase tracking-wider font-semibold mb-4">
            <ShieldCheck size={14} />
            <span>Direct Mine Supply & Bulk Export</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl text-bg leading-tight mb-4">
            Need Custom Mesh Sizing, Private Labeling, or Full Rake Railhead Dispatch?
          </h2>

          <p className="text-sm sm:text-base text-bg/80 leading-relaxed mb-8">
            Maruti Salts operates dedicated manufacturing and grading facilities delivering tailored grain profiles—from coarse lump crystals to micro-pulverized 100+ mesh—packed in 25kg, 50kg, or 1000kg jumbo bags for domestic and global B2B clients.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-lg bg-accent text-bg hover:bg-bg hover:text-mineral uppercase tracking-wider text-xs font-semibold transition-all shadow-md"
            >
              Request Custom Quote & Samples
            </Link>
            
            <a
              href="https://wa.me/919479366658?text=Hello%20Pawan%20ji%2C%20I%20am%20interested%20in%20bulk%20supply%20and%20custom%20mesh%20salt%20grades."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg border border-bg/30 text-bg hover:bg-bg/10 uppercase tracking-wider text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <MessageSquare size={15} />
              <span>WhatsApp Direct Line</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
