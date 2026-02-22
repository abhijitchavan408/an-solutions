import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ProjectCard } from "@/components/portfolio/project-card";
import { CTASection } from "@/components/home/cta-section";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of successful projects including web applications, mobile apps, e-commerce platforms, and enterprise software.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        badge="Our Portfolio"
        title="Projects We Are Proud Of"
        description="A curated selection of our recent work showcasing the range and quality of our digital solutions."
      />

      <SectionWrapper>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              techStack={project.techStack}
              image={project.image}
            />
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
