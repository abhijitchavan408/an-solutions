import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <SectionWrapper className="bg-card">
      <SectionHeader
        badge="Testimonials"
        title="What Our Clients Say"
        description="We take pride in building lasting partnerships and delivering results that speak for themselves."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <Card
            key={testimonial.author}
            className="relative overflow-hidden"
          >
            <CardContent className="flex flex-col gap-4 p-6">
              <Quote className="h-8 w-8 text-primary/20" />
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="mt-auto border-t pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
