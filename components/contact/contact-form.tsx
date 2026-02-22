"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-4 p-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <CheckCircle2 className="h-8 w-8 text-accent" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground">
            Message Sent!
          </h3>
          <p className="max-w-sm text-muted-foreground">
            Thank you for reaching out. Our team will get back to you within 24
            hours.
          </p>
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            className="mt-2"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl">
          Send Us a Message
        </CardTitle>
        <CardDescription>
          Fill out the form below and we will get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register("name")}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Your company name"
                {...register("company")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="subject">
                Subject <span className="text-destructive">*</span>
              </Label>
              <Input
                id="subject"
                placeholder="Project inquiry"
                {...register("subject")}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <p className="text-xs text-destructive">
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project, goals, and timeline..."
              className="min-h-[140px]"
              {...register("message")}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-xs text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" size="lg" className="gap-2" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
