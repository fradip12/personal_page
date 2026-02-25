"use client";

import Image from "next/image";
import { useState } from "react";
import { aboutText, services, testimonials, clients } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionTitle } from "@/components/section-title";

export function AboutSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(
    null
  );

  return (
    <div className="space-y-8">
      <SectionTitle>About me</SectionTitle>

      {/* Bio */}
      <div className="space-y-3">
        {aboutText.map((text, i) => (
          <p key={i} className="text-sm leading-relaxed text-muted-foreground">
            {text}
          </p>
        ))}
      </div>

      {/* Services */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">What I&apos;m Doing</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="border shadow-sm">
              <CardContent className="flex gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{service.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Testimonials</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Card
              key={testimonial.name}
              className="cursor-pointer border shadow-sm transition-shadow hover:shadow-md"
              onClick={() => setSelectedTestimonial(i)}
            >
              <CardContent className="p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-sm font-semibold capitalize">
                    {testimonial.name}
                  </h4>
                </div>
                <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog
          open={selectedTestimonial !== null}
          onOpenChange={() => setSelectedTestimonial(null)}
        >
          {selectedTestimonial !== null && (
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={testimonials[selectedTestimonial].avatar}
                      alt={testimonials[selectedTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <DialogTitle className="capitalize">
                    {testimonials[selectedTestimonial].name}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {testimonials[selectedTestimonial].text}
              </p>
            </DialogContent>
          )}
        </Dialog>
      </div>

      {/* Clients */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Clients</h3>
        <div className="flex flex-wrap items-center gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="relative h-8 w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={80}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
