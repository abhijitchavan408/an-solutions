import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <div className={cn(align === "center" && "flex justify-center")}>
          <Badge
            variant="secondary"
            className="border-primary/20 bg-primary/10 text-primary"
          >
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
