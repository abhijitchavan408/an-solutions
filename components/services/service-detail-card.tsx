import { CheckCircle2, Globe, Smartphone, Palette, Code } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const ICON_MAP: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-7 w-7" />,
  Smartphone: <Smartphone className="h-7 w-7" />,
  Palette: <Palette className="h-7 w-7" />,
  Code: <Code className="h-7 w-7" />,
};

interface ServiceDetailCardProps {
  id: string;
  title: string;
  fullDescription: string;
  features: readonly string[];
  icon: string;
  index: number;
}

export function ServiceDetailCard({
  id,
  title,
  fullDescription,
  features,
  icon,
  index,
}: ServiceDetailCardProps) {
  const isEven = index % 2 === 0;

  return (
    <Card id={id} className="overflow-hidden scroll-mt-24">
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
        {/* Icon Side */}
        <div className="flex items-center justify-center bg-primary/5 p-8 lg:w-2/5 lg:p-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            {ICON_MAP[icon]}
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col p-6 lg:w-3/5 lg:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="font-heading text-2xl">{title}</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {fullDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              What We Deliver
            </h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
