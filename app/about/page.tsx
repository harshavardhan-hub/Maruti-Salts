export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="font-display text-[clamp(3rem,6vw,5rem)] leading-tight text-text mb-8">
            A Legacy of<br />Purity.
          </h1>
          <p className="text-xl text-text/80 leading-relaxed mb-8">
            Founded with a singular vision to bring the purest, unrefined minerals to the world, Maruti Salts has grown into India&apos;s most trusted name in Black Salt and Rock Salt manufacturing.
          </p>
          <p className="text-lg text-text/70 leading-relaxed">
            Our journey is rooted in an uncompromising commitment to quality, ensuring that every crystal we deliver carries the ancient essence of the earth.
          </p>
        </div>
        <div className="relative h-[60vh] bg-surface overflow-hidden">
          <img src="/images/about-hero.jpg" alt="About Maruti Salts" className="w-full h-full object-cover opacity-90" />
        </div>
      </div>
    </div>
  );
}
