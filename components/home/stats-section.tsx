import { STATS } from "@/lib/constants";

const STAT_COLORS = [
  "from-blue-500 to-blue-600",
  "from-violet-500 to-violet-600",
  "from-emerald-500 to-emerald-600",
  "from-orange-500 to-orange-600",
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-accent py-12 lg:py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.08)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1.5 rounded-xl bg-white/10 px-4 py-6 text-center backdrop-blur-sm transition-transform hover:scale-105"
            >
              <span className="font-heading text-3xl font-bold text-white lg:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-white/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
