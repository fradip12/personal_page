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
  ChevronDown,
  Linkedin,
  Github,
} from "lucide-react";

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

const BANNER_IMAGE = "/images/banner.jpg";

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
    Linkedin,
    Github,
    Medium: MediumIcon,
    Email: Mail,
  };

export function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="w-full">
      <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
        {/* Cover / Banner Image */}
        <div
          className="relative h-44 sm:h-52 md:h-60 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(1 0 0) 0%, oklch(0.96 0 0) 50%, oklch(0.85 0 0) 100%)",
          }}
        >
          <Image
            src={BANNER_IMAGE}
            alt="Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Profile Section - Avatar overlapping the banner */}
        <div className="relative px-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-5">
            {/* Avatar - overlaps the banner */}
            <div className="relative -mt-14 sm:-mt-16 z-10 shrink-0">
              <div className="h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-2xl border-4 border-card bg-muted shadow-lg">
                <Image
                  src={siteConfig.avatar}
                  alt={siteConfig.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="pt-1 sm:pb-3">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
                {siteConfig.name}
              </h1>
              <span className="mt-1.5 inline-block rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                {siteConfig.title}
              </span>
            </div>

            {/* Social Links - desktop, right-aligned */}
            <div className="hidden sm:flex items-center gap-2 sm:ml-auto sm:pb-3">
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

        {/* Mobile Toggle */}
        <div className="px-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 flex w-full items-center justify-center gap-1 text-sm text-muted-foreground sm:hidden"
          >
            Show Contacts
            <ChevronDown
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Contact Info */}
        <div
          className={`px-6 pb-6 transition-all duration-300 sm:block ${expanded ? "max-h-96" : "max-h-0 sm:max-h-none overflow-hidden"}`}
        >
          <Separator className="my-4" />
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-x-8 sm:gap-y-4">
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

          {/* Social Links - mobile only */}
          <Separator className="my-4 sm:hidden" />
          <div className="flex items-center justify-center gap-3 sm:hidden">
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
