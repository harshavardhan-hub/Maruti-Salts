import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    id: "black-salt-lumps",
    name: "Premium Black Salt Lumps",
    grade: "Industrial / Wholesale Grade",
    description: "Unrefined Kala Namak harvested directly from natural volcanic mines. Ideal for grinding and commercial culinary use.",
    image: "/images/hero-crystal.jpg",
    features: ["100% Natural", "High Sulphur Content", "Unprocessed"],
  },
  {
    id: "black-salt-powder",
    name: "Fine Black Salt Powder",
    grade: "Food & Culinary Grade",
    description: "Finely milled black salt with a distinct umami flavor profile. Perfect for retail packaging, Ayurvedic formulations, and vegan cuisine.",
    image: "/images/about-hero.jpg",
    features: ["Perfectly Milled", "Aromatic", "Rich in Iron"],
  },
  {
    id: "rock-salt-chunks",
    name: "Pink Rock Salt Chunks",
    grade: "Export Grade",
    description: "Pristine Sendha Namak chunks untouched by modern pollutants. Perfect for premium retail, decorative lamps, or spa applications.",
    image: "/images/rock-salt-chunks.jpg",
    features: ["Trace Mineral Rich", "Aesthetically Pure", "Himalayan Origin"],
  },
  {
    id: "rock-salt-powder",
    name: "Edible Rock Salt Powder",
    grade: "Premium Table Grade",
    description: "Milled to perfection for everyday culinary use. A healthier alternative to refined table salt with 84 essential minerals.",
    image: "/images/process-extraction.jpg",
    features: ["Free-flowing", "Low Sodium", "Unbleached"],
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 lg:px-12">
      <div className="max-w-3xl mb-20">
        <h1 className="font-display text-[clamp(3rem,6vw,5rem)] leading-tight text-text mb-6">
          Our Pure Collection
        </h1>
        <p className="text-xl text-text/80 leading-relaxed">
          Sourced from ancient earth deposits and refined with precision. We offer India&apos;s finest Black Salt and Rock Salt across multiple grades for bulk, retail, and industrial applications.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-surface group flex flex-col h-full border border-mineral/5 hover:border-accent/20 transition-colors duration-500">
            <div className="w-full h-[400px] overflow-hidden relative">
              <div className="absolute inset-0 bg-mineral/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <h3 className="text-text/50 uppercase tracking-widest text-xs mb-3 font-medium">
                {product.grade}
              </h3>
              <h2 className="font-display text-3xl text-text mb-4 group-hover:text-accent transition-colors">
                {product.name}
              </h2>
              <p className="text-text/70 leading-relaxed mb-8 flex-grow">
                {product.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {product.features.map(f => (
                  <span key={f} className="text-xs border border-mineral/20 px-3 py-1 text-text/60 rounded-full">
                    {f}
                  </span>
                ))}
              </div>

              <div className="w-full h-[1px] bg-mineral/10 mb-6"></div>
              
              <Link href="/contact" className="bg-transparent border border-mineral/30 text-text px-6 py-4 uppercase tracking-widest text-sm text-center hover:bg-mineral hover:text-bg hover:border-mineral transition-colors w-full">
                Request Pricing & Samples
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
