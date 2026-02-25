"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  ChevronDown,
} from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Calendar,
    label: "Birthday",
    value: siteConfig.birthday,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
  },
];

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> =
  {
    Facebook,
    Twitter,
    Instagram,
  };

export function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="w-full xl:w-80 xl:shrink-0">
      <div className="bg-card rounded-2xl border p-6 xl:sticky xl:top-6 shadow-sm">
        {/* Avatar and Name */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-2xl bg-muted">
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">
            {siteConfig.name}
          </h1>
          <span className="mt-1.5 inline-block rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {siteConfig.title}
          </span>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex w-full items-center justify-center gap-1 text-sm text-muted-foreground xl:hidden"
        >
          Show Contacts
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {/* Contact Info */}
        <div
          className={`mt-4 overflow-hidden transition-all duration-300 xl:block ${expanded ? "max-h-96" : "max-h-0 xl:max-h-none"}`}
        >
          <Separator className="mb-4" />
          <ul className="space-y-4">
            {contactItems.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <item.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium truncate block hover:text-foreground/70 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium truncate">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <Separator className="my-4" />

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3">
            {siteConfig.socialLinks.map((link) => {
              const Icon = socialIcons[link.name];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                  aria-label={link.name}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
