import { HeroSection } from "@/components/home/hero-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
