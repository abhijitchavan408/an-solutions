import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export function CTASection() {
  return (
    <SectionWrapper>
      <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center lg:px-12 lg:py-20">
        {/* Decorative pattern */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(0_0%_100%/0.1)_0%,transparent_50%)]"
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center gap-6">
          <h2 className="max-w-2xl text-balance font-heading text-3xl font-bold text-primary-foreground lg:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-xl text-pretty text-base text-primary-foreground/80 lg:text-lg">
            Let us discuss how we can help you build scalable digital solutions
            that drive real results. Get a free consultation today.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              <Link href="/contact">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
