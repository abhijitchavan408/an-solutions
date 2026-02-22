import { SectionWrapper } from "@/components/shared/section-wrapper";
import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <SectionWrapper className="bg-primary py-12 lg:py-16">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
            <span className="font-heading text-3xl font-bold text-primary-foreground lg:text-4xl">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-primary-foreground/70">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
