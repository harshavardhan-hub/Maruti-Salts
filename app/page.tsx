import HeroSection from "@/components/home/HeroSection";
import StickyStory from "@/components/home/StickyStory";
import StatsSection from "@/components/home/StatsSection";
import ProductHorizontal from "@/components/home/ProductHorizontal";
import PackagingShowcase from "@/components/home/PackagingShowcase";
import WhyMaruti from "@/components/home/WhyMaruti";
import CertificationsSection from "@/components/home/CertificationsSection";
import FssaiSection from "@/components/home/FssaiSection";
import ParticleSection from "@/components/home/ParticleSection";
import TestimonialCTA from "@/components/home/TestimonialCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StickyStory />
      <StatsSection />
      <ProductHorizontal />
      <PackagingShowcase />
      <WhyMaruti />
      <CertificationsSection />
      <FssaiSection />
      <ParticleSection />
      <TestimonialCTA />
    </>
  );
}
