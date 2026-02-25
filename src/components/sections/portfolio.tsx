"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, categories, type ProjectCategory } from "@/lib/data";
import { SectionTitle } from "@/components/section-title";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";

export function PortfolioSection() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="space-y-8">
      <SectionTitle>Portfolio</SectionTitle>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-lg px-4 py-2 text-xs font-medium transition-all",
              active === cat
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all group-hover:bg-foreground/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  <Eye className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-semibold">{project.title}</h4>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
