import HeroSection from "@/components/home/HeroSection";
import StickyStory from "@/components/home/StickyStory";
import StatsSection from "@/components/home/StatsSection";
import ProductHorizontal from "@/components/home/ProductHorizontal";
import WhyMaruti from "@/components/home/WhyMaruti";
import ParticleSection from "@/components/home/ParticleSection";
import TestimonialCTA from "@/components/home/TestimonialCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StickyStory />
      <StatsSection />
      <ProductHorizontal />
      <WhyMaruti />
      <ParticleSection />
      <TestimonialCTA />
    </>
  );
}
