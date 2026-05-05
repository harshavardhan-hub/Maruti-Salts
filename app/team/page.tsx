export default function TeamPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="font-display text-[clamp(3rem,6vw,5rem)] leading-tight text-text mb-8">
            Meet<br />Our Team.
          </h1>
          <h2 className="text-3xl font-display text-text mb-4">Pawan Kumar Hotwani</h2>
          <p className="text-xl text-text/80 leading-relaxed mb-8">
            With a deep-rooted dedication to quality and purity, Pawan Kumar Hotwani has been instrumental in building the trust of customers worldwide. His leadership ensures that Maruti Salts consistently delivers excellence in every crystal.
          </p>
          <p className="text-lg text-text/70 leading-relaxed">
            We believe that a strong foundation is built on transparency, reliability, and an unwavering commitment to our craft.
          </p>
        </div>
        <div className="relative h-[60vh] bg-surface overflow-hidden rounded-lg">
          <img 
            src="/pawankumarimage.jpeg" 
            alt="Pawan Kumar Hotwani" 
            className="w-full h-full object-cover opacity-90" 
          />
        </div>
      </div>
    </div>
  );
}
