"use client";

import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { CalendarCheck, Clock, User, Phone, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TIME_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
];

export function BookAppointment() {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleTimeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, time: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.customerName.trim() || !formData.phone.trim() || !formData.date || !formData.time) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone.trim())) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "appointments"), {
        customerName: formData.customerName.trim(),
        phone: formData.phone.trim(),
        date: formData.date,
        time: formData.time,
        status: "Booked",
        createdAt: Timestamp.now(),
      });

      setShowSuccess(true);
      setFormData({ customerName: "", phone: "", date: "", time: "" });
    } catch (err) {
      console.error("Error booking appointment:", err);
      setError("Failed to book appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <CalendarCheck className="h-7 w-7 text-primary" />
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Book an Appointment
          </h1>
          <p className="mt-3 text-muted-foreground">
            Schedule a consultation with our team. We&apos;ll get back to you shortly!
          </p>
        </div>

        {/* Form Card */}
        <Card className="border-border/60 shadow-xl shadow-primary/5">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="h-5 w-5 text-primary" />
              Appointment Details
            </CardTitle>
            <CardDescription>
              Fill in your details below and pick a convenient date & time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="customerName" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  Full Name
                </Label>
                <Input
                  id="customerName"
                  name="customerName"
                  placeholder="e.g. Abhijit"
                  value={formData.customerName}
                  onChange={handleChange}
                  maxLength={100}
                  className="h-11"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className="h-11"
                />
              </div>

              {/* Date & Time Row */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <CalendarCheck className="h-4 w-4 text-muted-foreground" />
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    className="h-11"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    Preferred Time
                  </Label>
                  <Select value={formData.time} onValueChange={handleTimeChange}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_SLOTS.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="rounded-md bg-destructive/10 px-4 py-2 text-sm text-destructive">
                  {error}
                </p>
              )}

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full text-base font-semibold"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Booking...
                  </>
                ) : (
                  <>
                    <CalendarCheck className="mr-2 h-5 w-5" />
                    Book Appointment
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="text-center sm:max-w-md">
          <DialogHeader className="items-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="h-9 w-9 text-green-600 dark:text-green-400" />
            </div>
            <DialogTitle className="text-xl">Appointment Booked!</DialogTitle>
            <DialogDescription className="pt-2 text-base">
              Your appointment has been successfully booked. Our team will reach out to you shortly to confirm.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowSuccess(false)} className="mt-4 w-full">
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
