import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AN Solutions Solutions. Let us discuss your next project and how we can help your business grow.",
};

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email Us",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: SITE_CONFIG.address,
    href: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM PST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Contact Us"
        title="Let's Build Something Great"
        description="Have a project in mind? We'd love to hear about it. Reach out to start a conversation about your digital goals."
      />

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Whether you have a question, want to start a project, or simply
                want to say hello, we are here for you.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map((item) => (
                <Card key={item.label}>
                  <CardContent className="flex items-start gap-4 p-4">
                    {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div> */}
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-foreground">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
