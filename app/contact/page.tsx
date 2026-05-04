export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 lg:px-12 flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

        {/* Left Section - Title */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
          <h1 className="font-display text-[clamp(4rem,8vw,7rem)] leading-none text-text mb-6">
            Let&apos;s talk<br className="hidden lg:block" /> salt.
          </h1>
          <p className="text-xl text-text/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Reach out to us for premium Black Salt and Rock Salt. We are ready to assist with bulk orders, export inquiries, and general questions.
          </p>
        </div>

        {/* Right Section - Contact Card */}
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="bg-surface relative overflow-hidden p-10 md:p-14 border border-mineral/20 shadow-2xl group transition-all duration-500 hover:border-mineral/40 rounded-sm">
            {/* Decorative Top Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-mineral to-transparent opacity-70"></div>

            <h3 className="font-display text-3xl md:text-4xl mb-8 text-text">Corporate Office</h3>

            <div className="space-y-8">
              <div>
                <p className="text-lg md:text-xl text-text/80 leading-relaxed font-light">
                  <span className="font-medium text-text block mb-1">Maruti Trades</span>
                  Plot No. 124 & 125, Food Processing Park<br />
                  Jaggakhedi Industrial Area<br />
                  Mandsaur, Madhya Pradesh - 458001<br />
                  India
                </p>
              </div>

              <div className="h-px w-full bg-mineral/10"></div>

              <div className="space-y-4 text-lg">
                <div className="text-text/80 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="font-medium text-text w-16">Email:</span>
                  <a href="mailto:marutitradersmandsaur@gmail.com" className="hover:text-accent transition-colors break-all">marutitradersmandsaur@gmail.com</a>
                </div>
                <div className="text-text/80 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="font-medium text-text w-16">Phone:</span>
                  <a href="tel:+919479366658" className="hover:text-accent transition-colors">+91 9479366658</a>
                </div>
              </div>

              <div className="pt-4">
                <a href="https://wa.me/919479366658" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-mineral text-bg px-8 py-4 uppercase tracking-widest text-sm hover:bg-accent transition-colors w-full text-center font-medium">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
