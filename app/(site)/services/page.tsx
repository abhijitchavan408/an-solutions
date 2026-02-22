import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ServiceDetailCard } from "@/components/services/service-detail-card";
import { CTASection } from "@/components/home/cta-section";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive IT services including website development, mobile app development, UI/UX design, and custom software solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Our Services"
        title="Comprehensive IT Solutions"
        description="We provide end-to-end digital services designed to help businesses innovate, grow, and compete in the modern marketplace."
      />

      <SectionWrapper>
        <div className="flex flex-col gap-8">
          {SERVICES.map((service, index) => (
            <ServiceDetailCard
              key={service.id}
              id={service.id}
              title={service.title}
              fullDescription={service.fullDescription}
              features={service.features}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
