import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_POINTS = [
  "Modern tech stack",
  "Agile delivery",
  "24/7 support",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b bg-card">
      {/* Decorative background grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.08)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 text-center lg:px-8 lg:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Now accepting new projects for 2026
        </div>

        <h1 className="max-w-4xl text-balance font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          We Build Digital Products That{" "}
          <span className="text-primary">Drive Growth</span>
        </h1>

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
          From responsive websites to custom enterprise software, AN Solutions
          Solutions helps businesses transform with modern technology and
          scalable digital solutions.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <Link href="/contact">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {HERO_POINTS.map((point) => (
            <li key={point} className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
