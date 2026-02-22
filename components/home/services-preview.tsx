import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Palette, Code } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6" />,
  Smartphone: <Smartphone className="h-6 w-6" />,
  Palette: <Palette className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
};

export function ServicesPreview() {
  return (
    <SectionWrapper>
      <SectionHeader
        badge="Our Services"
        title="End-to-End Digital Solutions"
        description="We offer a comprehensive suite of IT services tailored to help businesses of every size build, launch, and scale their digital products."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <Card
            key={service.id}
            className="group relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
          >
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {ICON_MAP[service.icon]}
              </div>
              <CardTitle className="font-heading text-lg">
                {service.title}
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {service.shortDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/services" className="gap-2">
            Explore All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
