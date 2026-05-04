export default function QualityPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 lg:px-12">
      <h1 className="font-display text-[clamp(3rem,6vw,5rem)] text-text mb-8 text-center">Quality & Process</h1>
      <p className="text-xl text-text/80 max-w-2xl mx-auto text-center mb-24">
        Our 5-step rigorous process ensures that the minerals we deliver are pure, potent, and safe.
      </p>

      <div className="space-y-32">
        {[
          { title: "Raw mineral extraction", img: "/images/process-extraction.jpg" },
          { title: "Natural drying & sorting", img: "/images/process-drying.jpg" },
          { title: "Quality grading", img: "/images/rock-salt-chunks.jpg" },
          { title: "FSSAI lab testing", img: "/images/hero-crystal.jpg" },
          { title: "Packaging & dispatch", img: "/images/mineral-texture-bg.jpg" },
        ].map((step, i) => (
          <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
              <div className="font-display text-accent text-6xl mb-6 opacity-50">0{i+1}</div>
              <h2 className="font-display text-4xl text-text mb-6">{step.title}</h2>
              <p className="text-lg text-text/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className={`relative h-[50vh] bg-surface overflow-hidden ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
              <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
