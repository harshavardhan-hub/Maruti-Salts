"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  Compass, 
  Users, 
  Building2, 
  HeartHandshake, 
  CheckCircle2, 
  Award, 
  TrendingUp,
  Sparkles
} from "lucide-react";


export default function AboutContent() {
  const stakeholderPillars = [
    {
      label: "For our Consumers",
      badge: "Pure & Safe",
      icon: Sparkles,
      description: "Strongly committed to delivering unadulterated, mineral-rich salts that enrich daily wellness and culinary authenticity.",
      bulletPoints: [
        "100% natural subterranean & lake minerals",
        "Zero synthetic chemicals or anti-caking agents",
        "Certified FSSAI food-grade safety standards",
      ],
    },
    {
      label: "For our Partners",
      badge: "Fair & Reliable",
      icon: HeartHandshake,
      description: "Adhering to transparent dealings, strict custom mesh calibrations, reliable bulk volume supply, and punctual delivery.",
      bulletPoints: [
        "Flexible packaging from 1kg retail to 50kg bags",
        "Consistent batch-to-batch chemical assays",
        "Direct manufacturer wholesale pricing",
      ],
    },
    {
      label: "For our Workforce",
      badge: "Inclusive & Empowering",
      icon: Users,
      description: "Cultivating a safe, dignified, and skill-enriching environment that honors traditional regional craftsmanship.",
      bulletPoints: [
        "Modern hygienic safety protocols",
        "Continuous technical skill development",
        "Empowering the local community in Mandsaur",
      ],
    },
    {
      label: "For our Environment",
      badge: "Sustainable Sourcing",
      icon: Building2,
      description: "Harnessing natural solar evaporation and sustainable mineral extraction that respects our planet's ancient geological reserves.",
      bulletPoints: [
        "Eco-friendly natural sun-drying processes",
        "Minimal carbon footprint logistics",
        "Zero harmful industrial chemical effluents",
      ],
    },
  ];

  const coreValues = [
    {
      title: "Uncompromising Purity",
      desc: "We honor the earth's ancient chemistry. Every crystal is preserved without adulteration or artificial fillers.",
    },
    {
      title: "Analytical Quality",
      desc: "Every batch is verified through certified laboratory assays for chemical composition, moisture, and solubility.",
    },
    {
      title: "Ethical Transparency",
      desc: "From geological raw mineral extraction to automated dispatch, we uphold open, dependable trade practices.",
    },
    {
      title: "Customer Centricity",
      desc: "Tailored mesh sizes, customized moisture controls, and agile supply chains dedicated to our clients' success.",
    },
  ];

  const milestones = [
    {
      year: "Rooted in Tradition",
      title: "Generational Mineral Expertise",
      desc: "Founded on decades of hands-on knowledge in authentic salt crafting, raw mineral grading, and regional trading across Central India.",
    },
    {
      year: "Industrial Footprint",
      title: "Food Processing Park Facility",
      desc: "Established modern processing and hygienic pulverizing infrastructure at Plot No. 125, Food Processing Park, Jaggakhedi Industrial Area, Mandsaur.",
    },
    {
      year: "Diversified Portfolio",
      title: "14+ Specialized Formats",
      desc: "Expanded into high-purity Black Salt (Kala Namak), Himalayan Rock Salt (Senda Namak), and heavy-duty Industrial Salt for diverse industry sectors.",
    },
    {
      year: "Nationwide Trust",
      title: "Pan-India & Export Ready",
      desc: "Supplying premier spice blenders, food FMCG leaders, chemical plants, livestock feeds, and export corridors with certified analytical reports.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-text pt-28 sm:pt-32 pb-24 overflow-hidden">
      {/* ── 1. Hero Section ────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 lg:px-12 mb-16 lg:mb-20">
        
        {/* Top Two-Column Balanced Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12">
          
          {/* Left Column: Eyebrow & Bold Display Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-mineral/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span>About Maruti Salts • Mandsaur, Madhya Pradesh</span>
            </div>
            
            <h1 className="font-display text-[clamp(2.3rem,4.8vw,4.2rem)] leading-[1.08] text-text font-normal">
              Pushing boundaries and aiming for better every day for all our stakeholders.
            </h1>
          </motion.div>

          {/* Right Column: Narrative Copy & Context */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-12"
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-surface/70 border-l-4 border-l-accent border border-mineral/15 shadow-sm">
              <p className="text-base sm:text-lg text-text font-medium leading-relaxed mb-4">
                The foundation of Maruti Salts was built with a clear ambition: to become India&apos;s benchmark manufacturer and supplier of authentic Black Salt, Rock Salt, and Industrial Salt.
              </p>
              <p className="text-sm sm:text-base text-text/75 leading-relaxed">
                From our advanced processing plant in Mandsaur, Madhya Pradesh, we combine generational craftsmanship with state-of-the-art grading and stringent laboratory certification. Today, our mineral salts nourish everyday households and power major food processors, spice blenders, and industrial enterprises nationwide.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Full 100% Width Processing Infrastructure & Scale Metrics Banner ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-mineral/20 bg-surface p-6 sm:p-8 lg:p-10 shadow-sm w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Manufacturing Facility & Address */}
            <div className="lg:col-span-5 lg:border-r lg:border-mineral/15 lg:pr-8">
              <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                <Building2 size={16} />
                <span>Our Processing Infrastructure</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display text-text font-medium mb-2">
                Maruti Salts
              </h2>
              <p className="text-sm sm:text-base text-text/80 leading-relaxed font-sans">
                Plot No. 125, Food Processing Park, Jaggakhedi Industrial Area, Mandsaur, Madhya Pradesh - 458001, India
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-text/65">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse"></span>
                <span>Active Facility • Automated Pulverizing, Mesh Grading &amp; Sealed Packing</span>
              </div>
            </div>

            {/* Right: 3 Stats horizontally aligned with subtle stagger */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <motion.div 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl bg-bg border border-mineral/10 flex flex-col justify-center"
              >
                <div className="text-3xl sm:text-4xl font-display text-accent font-semibold mb-1">10,000+</div>
                <div className="text-xs uppercase tracking-wider text-text font-semibold">Metric Tons Capacity</div>
                <div className="text-xs text-text/70 mt-1">Annual processing &amp; grading volume</div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl bg-bg border border-mineral/10 flex flex-col justify-center"
              >
                <div className="text-3xl sm:text-4xl font-display text-accent font-semibold mb-1">14+</div>
                <div className="text-xs uppercase tracking-wider text-text font-semibold">Specialized Formats</div>
                <div className="text-xs text-text/70 mt-1">From fine powders to raw crystal chunks</div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl bg-bg border border-mineral/10 flex flex-col justify-center"
              >
                <div className="text-3xl sm:text-4xl font-display text-accent font-semibold mb-1">100%</div>
                <div className="text-xs uppercase tracking-wider text-text font-semibold">Lab Verified Purity</div>
                <div className="text-xs text-text/70 mt-1">FSSAI Form C Schedule &amp; AQC Certified</div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* ── 2. Leadership Spotlight ────────────────────────────────────── */}
      <section id="leadership" className="py-20 bg-surface/70 border-y border-mineral/15 scroll-mt-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Leader Photo - Clean, uncropped framing matching Tata Consumer executive profile */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5"
              >
                <div className="relative mx-auto max-w-sm sm:max-w-md rounded-2xl overflow-hidden shadow-xl border border-mineral/20 bg-surface">
                  <img 
                    src="/Pawan%20Kumar%20Hotwani.jpeg" 
                    alt="Pawan Kumar Hotwani - Founder & Managing Director, Maruti Salts" 
                    className="w-full h-auto object-contain block" 
                  />
                </div>
              </motion.div>

              {/* Leadership Message & Vision Quote */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg border border-mineral/15 text-accent text-xs font-semibold uppercase tracking-wider w-fit mb-6">
                  <Award size={13} />
                  <span>Leadership &amp; Vision</span>
                </div>

                <blockquote className="font-display text-2xl sm:text-3xl lg:text-[2rem] leading-snug text-text font-normal mb-6">
                  &ldquo;Fuelled by the ambition and resources to be a trusted benchmark in mineral salts, and backed by a deep heritage of unyielding purity in every crystal, we are scripting a new story of excellence at Maruti Salts.&rdquo;
                </blockquote>

                <div className="mb-6">
                  <div className="font-display text-xl text-text font-medium">Pawan Kumar Hotwani</div>
                  <div className="text-sm text-text/70">Founder &amp; Managing Director, Maruti Salts</div>
                  <div className="text-xs text-text/50 mt-0.5">Mandsaur, Madhya Pradesh</div>
                </div>

                <p className="text-base text-text/80 leading-relaxed mb-8">
                  With a dedicated focus on quality and authenticity, Pawan Kumar Hotwani has been instrumental in earning the trust of food conglomerates, spice blenders, and industrial partners across India. His leadership ensures that every grain processed at our facility adheres to uncompromising standards of purity, precise mesh sizing, and statutory compliance.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/quality"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg hover:bg-mineral hover:text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md group"
                  >
                    <span>Our Quality &amp; Process</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/certifications"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bg border border-mineral/20 text-text hover:border-accent hover:text-accent text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <ShieldCheck size={14} />
                    <span>View Official Licenses</span>
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Stakeholder Commitments ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-mineral/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Target size={13} />
            <span>Our Commitment</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-text mb-4">
            Standing for purity, trust, and lasting value across every grain.
          </h2>
          <p className="text-base sm:text-lg text-text/75 leading-relaxed">
            Our foremost commitment is towards enhancing the lives of all our stakeholders. Every operational decision we make reflects our dedication to sustainable, ethical, and superior quality mineral production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholderPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="p-7 rounded-2xl bg-surface border border-mineral/15 hover:border-accent/40 transition-all hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-bg flex items-center justify-center text-accent border border-mineral/10">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent bg-bg/80 px-2.5 py-1 rounded-full border border-mineral/10">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-text mb-3">{pillar.label}</h3>
                  <p className="text-sm text-text/75 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-mineral/10">
                  {pillar.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-text/70">
                      <CheckCircle2 size={13} className="text-accent shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 4. Vision, Mission & Values ─────────────────────────────────── */}
      <section className="py-20 bg-mineral text-bg">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-3 block">
              Core Purpose &amp; Guiding Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
              Our Vision, Mission &amp; Values
            </h2>
            <p className="text-sm sm:text-base text-bg/75 leading-relaxed">
              Our foremost commitment is towards enhancing the lives of all our stakeholders. Our Vision, Mission and Values capture our ambition and how we work each day to achieve it.
            </p>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="p-8 sm:p-10 rounded-3xl bg-bg/5 border border-bg/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mb-6">
                <Compass size={24} />
              </div>
              <h3 className="font-display text-2xl text-white mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-bg/80 leading-relaxed">
                To be India&apos;s benchmark manufacturer and global exporter of unrefined, natural mineral salts—renowned across international and domestic markets for uncompromising purity, analytical precision, and enduring stakeholder trust.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="p-8 sm:p-10 rounded-3xl bg-bg/5 border border-bg/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/20 text-accent flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="font-display text-2xl text-white mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-bg/80 leading-relaxed">
                To bridge pristine geological mineral reserves with modern hygienic processing, delivering precision-graded Black Salt, Rock Salt, and Industrial Salt that enhance food nutrition, empower industrial excellence, and protect our environment.
              </p>
            </motion.div>
          </div>

          {/* 4 Pillars of Values */}
          <div className="max-w-5xl mx-auto pt-10 border-t border-bg/10">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-accent font-semibold text-center mb-8"
            >
              The Values That Guide Our Craft
            </motion.h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3 }}
                  className="p-6 rounded-2xl bg-bg/5 border border-bg/10"
                >
                  <div className="font-display text-lg text-white mb-2">{val.title}</div>
                  <p className="text-xs sm:text-sm text-bg/70 leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. Our Story: A Rich Legacy of Creating Impact ──────────────── */}
      <section className="py-20 lg:py-28 container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-mineral/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp size={13} />
            <span>Our Journey</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-text mb-4">
            Our Story: A rich legacy of creating impact.
          </h2>
          <p className="text-base sm:text-lg text-text/75 leading-relaxed">
            Our evolution, ambition, and milestones all revolve around our promise to deliver mineral products that elevate health, empower enterprises, and touch lives for the better.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-surface border border-mineral/15 relative hover:shadow-md transition-all"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
                {item.year}
              </span>
              <h3 className="font-display text-lg text-text mb-3">{item.title}</h3>
              <p className="text-xs sm:text-sm text-text/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 6. Bottom CTA / Navigation ──────────────────────────────────── */}
      <section className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-surface border border-mineral/20 text-center max-w-4xl mx-auto shadow-sm"
        >
          <h3 className="font-display text-2xl sm:text-4xl text-text mb-4">
            Discover the Maruti Salts Difference
          </h3>
          <p className="text-sm sm:text-base text-text/75 max-w-xl mx-auto mb-8">
            Whether you require high-mesh Black Salt powder, crystalline Himalayan Pink Rock Salt, or heavy industrial salt by the truckload, we are ready to serve.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mineral text-bg hover:bg-accent text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <span>Explore All Products</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bg border border-mineral/20 text-text hover:border-accent hover:text-accent text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <ShieldCheck size={14} />
              <span>Inspect Certifications</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg hover:bg-mineral hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
