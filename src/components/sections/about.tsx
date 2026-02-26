"use client";

import Image from "next/image";
import { useState } from "react";
import { aboutText, services, techStackCategories } from "@/lib/data";
import StackIcon from "tech-stack-icons";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/section-title";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [displayCategory, setDisplayCategory] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [gridKey, setGridKey] = useState(0);

  const handleCategoryChange = (idx: number) => {
    if (idx === activeCategory || isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      setDisplayCategory(idx);
      setActiveCategory(idx);
      setGridKey((k) => k + 1);
      setIsExiting(false);
    }, 180);
  };

  const currentTechs = techStackCategories[displayCategory].techs;

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

      {/* Tech Stack */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Tech Stack</h3>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {techStackCategories.map((cat, idx) => (
            <button
              key={cat.label}
              onClick={() => handleCategoryChange(idx)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer select-none",
                activeCategory === idx
                  ? "bg-primary text-primary-foreground shadow-sm scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground hover:scale-105"
              )}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div
          key={gridKey}
          className={cn(
            "flex flex-wrap gap-3 transition-opacity duration-150",
            isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          {currentTechs.map((tech, i) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2 cursor-default animate-in fade-in slide-in-from-bottom-3"
              style={{ animationDelay: `${i * 45}ms`, animationFillMode: "both" }}
              title={tech.name}
            >
              {/* Icon container */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-muted/60 p-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-muted group-hover:shadow-lg group-hover:-translate-y-1.5 group-hover:shadow-primary/10">
                <StackIcon name={tech.icon} />
                {/* Subtle glow ring on hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-primary/20 transition-all duration-300" />
              </div>
              {/* Label */}
              <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200 max-w-[56px] text-center leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
