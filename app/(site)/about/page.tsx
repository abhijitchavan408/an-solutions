import type { Metadata } from "next";
import { Target, Lightbulb, Users, Zap } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { TeamCard } from "@/components/about/team-card";
import { StatsSection } from "@/components/home/stats-section";
import { CTASection } from "@/components/home/cta-section";
import { TEAM_MEMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AN Solutions Solutions, our mission, values, and the talented team behind our digital solutions.",
};

const VALUES = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We are committed to empowering businesses through technology that solves real problems and creates lasting impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to bring the most effective, modern solutions to every project we undertake.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Every project starts with understanding your business goals, and every solution is designed around your users.",
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description:
      "Our iterative development process ensures fast delivery, continuous feedback, and solutions that evolve with your needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About Us"
        title="Building the Future of Digital"
        description="AN Solutions Solutions is a team of passionate technologists, designers, and strategists dedicated to helping businesses thrive in the digital age."
      />

      {/* Story Section */}
      <SectionWrapper>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
              Our Story
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Founded in 2018, AN Solutions Solutions began with a simple belief:
              every business deserves access to world-class technology. What
              started as a small team of developers has grown into a
              full-service IT solutions company serving clients across
              industries.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Today, we combine deep technical expertise with a human-centered
              approach to deliver solutions that not only work flawlessly but
              truly transform the way our clients operate. From startups to
              enterprises, we have partnered with over 50 companies to build
              digital products that drive measurable growth.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-primary/5 p-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="font-heading text-6xl font-bold text-primary">
                8+
              </span>
              <span className="text-lg font-medium text-foreground">
                Years of Delivering Excellence
              </span>
              <p className="max-w-xs text-sm text-muted-foreground">
                Continuously innovating and growing to meet the evolving needs
                of our clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-card">
        <SectionHeader
          badge="Our Values"
          title="What Drives Us"
          description="Our core values shape every decision we make and every solution we build."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <Card key={value.title} className="text-center">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <StatsSection />

      {/* Team */}
      <SectionWrapper>
        <SectionHeader
          badge="Our Team"
          title="Meet the People Behind AN Solutions"
          description="Our talented team of engineers, designers, and strategists work together to deliver exceptional results."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
            />
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
