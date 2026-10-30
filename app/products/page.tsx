
import Link from "next/link";

const VARIETY_LINKS: Record<string, string> = {
  "Black Salt Crystals": "/products/black-salt-crystals",
  "Crystal Black Salt": "/products/black-salt-crystals",
  "Farnish Black Salt": "/products/farnish-black-salt",
  "Black Salt Matka": "/products/black-salt-matka",
  "Black Salt Fine Granules": "/products/black-salt-fine-granules",
  "Black Salt Powder": "/products/black-salt-powder",
  "Rock Salt Irani": "/products/rock-salt-irani",
  "Himalayan Pink Rock Salt (Lahori)": "/products/himalayan-pink-rock-salt",
  "Rock Salt Granules": "/products/rock-salt-granules",
};

const PRODUCTS = [
  {
    id: "black-salt",
    name: "Black Salt (Kala Namak)",
    grade: "Ayurvedic & Food Grade",
    description: "Authentic, mineral-rich Kala Namak harvested from natural deposits and refined with precision. Renowned for its therapeutic properties, distinctive volcanic aroma, and high iron content.",
    image: "/images/hero-crystal.jpg",
    varieties: [
      "Black Salt Crystals",
      "Farnish Black Salt",
      "Black Salt Matka",
      "Black Salt Fine Granules",
      "Black Salt Powder",
    ],
    features: ["100% Natural", "High Sulphur Content", "Ayurvedic Standard"],
  },
  {
    id: "rock-salt",
    name: "Rock Salt (Senda Namak)",
    grade: "Himalayan & Wellness Grade",
    description: "Untouched Sendha Namak preserved deep within ancient deposits. Naturally rich in essential trace minerals and electrolytes, making it the purest culinary and wellness salt.",
    image: "/images/rock-salt-chunks.jpg",
    varieties: [
      "Rock Salt Irani",
      "Himalayan Pink Rock Salt (Lahori)",
      "Rock Salt Granules",
      "Rock Salt Suji",
      "Rock Salt Powder",
    ],
    features: ["84+ Trace Minerals", "Pristine Origin", "Low Sodium Balance"],
  },
  {
    id: "industrial-salt",
    name: "Industrial Salt",
    grade: "Commercial & Refined Grade",
    description: "High-purity industrial and commercial salt formulations engineered for food manufacturing, chemical processing, water treatment, and specialized bulk applications.",
    image: "/images/process-extraction.jpg",
    varieties: [
      "Refined Crushed Salt",
      "Free Flow Iodised Salt",
      "Fine Dust Salt Powder",
    ],
    features: ["High Chemical Purity", "Uniform Granulation", "Bulk Supply Ready"],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 lg:px-12">
      <div className="max-w-3xl mb-16">
        <h1 className="font-display text-[clamp(3rem,6vw,5rem)] leading-tight text-text mb-6">
          Our Pure Collection
        </h1>
        <p className="text-xl text-text/80 leading-relaxed">
          Sourced from ancient earth deposits and refined with precision. We offer India&apos;s finest Black Salt, Rock Salt, and Industrial Salt across multiple grades for bulk, retail, and industrial applications.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {PRODUCTS.map((product) => (
          <div 
            key={product.id} 
            className="bg-surface group flex flex-col h-full border border-mineral/10 hover:border-accent/40 transition-all duration-500 shadow-sm hover:shadow-xl rounded-sm overflow-hidden"
          >
            <div className="w-full h-[280px] overflow-hidden relative">
              <div className="absolute inset-0 bg-mineral/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
              />
            </div>
            
            <div className="p-8 md:p-9 flex flex-col flex-grow">
              <span className="text-text/50 uppercase tracking-widest text-xs mb-3 font-medium">
                {product.grade}
              </span>
              <h2 className="font-display text-2xl lg:text-3xl text-text mb-4 group-hover:text-accent transition-colors">
                {product.name}
              </h2>
              <p className="text-text/70 text-sm leading-relaxed mb-6">
                {product.description}
              </p>
              
              <div className="mb-6 flex-grow">
                <span className="block text-xs uppercase tracking-wider text-text/50 font-semibold mb-3">
                  Available Varieties:
                </span>
                <ul className="space-y-2">
                  {product.varieties.map((v) => {
                    const linkHref = VARIETY_LINKS[v];
                    return (
                      <li key={v} className="flex items-center gap-2.5 text-sm text-text/85">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {linkHref ? (
                          <Link
                            href={linkHref}
                            className="font-medium text-accent hover:text-mineral hover:underline underline-offset-4 decoration-accent/40 hover:decoration-accent flex items-center gap-1 transition-colors"
                          >
                            <span>{v}</span>
                            <span className="text-[10px] font-bold">↗</span>
                          </Link>
                        ) : (
                          <span>{v}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-8 pt-2">
                {product.features.map((f) => (
                  <span key={f} className="text-[11px] border border-mineral/20 px-2.5 py-1 text-text/60 rounded-full">
                    {f}
                  </span>
                ))}
              </div>

              <div className="w-full h-[1px] bg-mineral/10 mb-6"></div>
              
              <Link 
                href="/contact" 
                className="bg-transparent border border-mineral/30 text-text px-6 py-3.5 uppercase tracking-widest text-xs font-medium text-center hover:bg-mineral hover:text-bg hover:border-mineral transition-colors w-full block"
              >
                Request Pricing & Samples
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
