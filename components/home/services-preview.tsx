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

const GRADIENT_COLORS = [
  "from-blue-500/10 to-blue-600/5",
  "from-violet-500/10 to-violet-600/5",
  "from-emerald-500/10 to-emerald-600/5",
  "from-orange-500/10 to-orange-600/5",
];

const ICON_COLORS = [
  "bg-blue-500/15 text-blue-600 group-hover:bg-blue-500 group-hover:text-white",
  "bg-violet-500/15 text-violet-600 group-hover:bg-violet-500 group-hover:text-white",
  "bg-emerald-500/15 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
  "bg-orange-500/15 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
];

export function ServicesPreview() {
  return (
    <SectionWrapper>
      <SectionHeader
        badge="Our Services"
        title="End-to-End Digital Solutions"
        description="We offer a comprehensive suite of IT services tailored to help businesses of every size build, launch, and scale their digital products."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <Card
            key={service.id}
            className={`group relative overflow-hidden border-0 bg-gradient-to-br ${GRADIENT_COLORS[index]} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            <CardHeader className="pb-3">
              <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${ICON_COLORS[index]}`}>
                {ICON_MAP[service.icon]}
              </div>
              <CardTitle className="font-heading text-lg">
                {service.title}
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {service.shortDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline" size="lg" className="gap-2 border-primary/30 text-primary hover:bg-primary/5">
          <Link href="/services">
            Explore All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
