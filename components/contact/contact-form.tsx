"use client";

import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SITE_CONFIG } from "@/lib/constants";

const WHATSAPP_NUMBER = SITE_CONFIG.phone.replace(/[\s+\-]/g, "");

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function buildWhatsAppUrl(customMessage?: string) {
    const text =
      customMessage ||
      [
        name ? `Hi, I'm ${name}.` : "Hi,",
        message || "I'd like to discuss a project with AN Solutions.",
      ].join(" ");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Quick Connect Card */}
      <Card className="overflow-hidden border-[#25D366]/20">
        <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <WhatsAppIcon className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold">
                Chat with Us on WhatsApp
              </h3>
              <p className="text-sm text-white/80">
                Typically replies within minutes
              </p>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              Tap the button below to start a conversation instantly. No waiting,
              no forms — just a direct chat with our team.
            </p>
            <a
              href={buildWhatsAppUrl(
                "Hi, I'd like to know more about AN Solutions services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex"
            >
              <Button
                size="lg"
                className="w-full gap-2 bg-[#25D366] text-white hover:bg-[#1da851]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Start Chat Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Personalised Message Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle className="font-heading text-2xl">
              Send a Personalised Message
            </CardTitle>
            <Badge
              variant="secondary"
              className="gap-1 bg-[#25D366]/10 text-[#25D366]"
            >
              <WhatsAppIcon className="h-3 w-3" />
              WhatsApp
            </Badge>
          </div>
          <CardDescription>
            Fill in your details below and we will open WhatsApp with your
            message ready to send.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="wa-name">Your Name</Label>
              <Input
                id="wa-name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="wa-message">Your Message</Label>
              <Textarea
                id="wa-message"
                placeholder="Tell us about your project, goals, and timeline..."
                className="min-h-[120px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full gap-2 bg-[#25D366] text-white hover:bg-[#1da851]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Message on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </Button>
            </a>

            <Separator />

            <p className="text-center text-xs text-muted-foreground">
              This will open WhatsApp on your device with a pre-filled message.
              <br />
              Available on{" "}
              <span className="font-medium text-foreground">
                Mobile &amp; Desktop
              </span>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
