import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { TESTIMONIALS } from "@/lib/constants";

const CARD_ACCENTS = [
  "hover:border-blue-400/40",
  "hover:border-violet-400/40",
  "hover:border-emerald-400/40",
];

export function TestimonialsSection() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-card to-background">
      <SectionHeader
        badge="Testimonials"
        title="What Our Clients Say"
        description="We take pride in building lasting partnerships and delivering results that speak for themselves."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <Card
            key={testimonial.author}
            className={`relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${CARD_ACCENTS[index]}`}
          >
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-primary/30" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-auto flex items-center gap-3 border-t pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                  {testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
