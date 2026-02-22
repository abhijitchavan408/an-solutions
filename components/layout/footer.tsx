import Link from "next/link";
import { Code2, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const SOCIAL_LINKS = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-lg font-bold text-foreground">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {SITE_CONFIG.address}
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Follow Us
            </h3>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} ${SITE_CONFIG.name}. All rights reserved.`}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
