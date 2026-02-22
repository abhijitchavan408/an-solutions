import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <section className="border-b bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Badge
            variant="secondary"
            className="border-primary/20 bg-primary/10 text-primary"
          >
            {badge}
          </Badge>
          <h1 className="text-balance font-heading text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            {title}
          </h1>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
