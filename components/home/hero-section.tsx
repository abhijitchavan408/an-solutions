import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_POINTS = [
  "Modern tech stack",
  "Agile delivery",
  "24/7 support",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Animated gradient orbs */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center lg:px-8 lg:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm shadow-primary/10">
          <Sparkles className="h-3.5 w-3.5" />
          Now accepting new projects for 2026
        </div>

        <h1 className="max-w-4xl text-balance font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          We Build Digital Products That{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Drive Growth
          </span>
        </h1>

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          From responsive websites to custom enterprise software, AN Solutions
          helps businesses transform with modern technology and scalable
          digital solutions.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-primary to-primary/90 shadow-lg shadow-primary/25 transition-shadow hover:shadow-xl hover:shadow-primary/30">
            <Link href="/contact">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href="/services">View Services</Link>
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
