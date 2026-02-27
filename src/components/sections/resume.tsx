"use client";

import { education, experience, skills } from "@/lib/data";
import { SectionTitle } from "@/components/section-title";
import { BookOpen, Briefcase } from "lucide-react";

interface TimelineItem {
  title: string;
  period: string;
  description: string;
  favicon?: string;
}

function TimelineIcon({ favicon, title }: { favicon?: string; title: string }) {
  if (favicon) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://www.google.com/s2/favicons?domain=${favicon}&sz=64`}
        alt={title}
        className="h-6 w-6 object-contain"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }
  return <div className="h-4 w-4 rounded-full bg-foreground" />;
}

function Timeline({
  items,
  icon: Icon,
  title,
}: {
  items: TimelineItem[];
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-muted-foreground" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="relative ml-3 border-l border-border pl-6 space-y-6">
        {items.map((item) => (
          <div key={item.title} className="relative">
            <div className="absolute -left-9.5 -top-0.5 h-7 w-7 flex items-center justify-center">
              <TimelineIcon favicon={item.favicon} title={item.title} />
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              {item.period}
            </span>
            <h4 className="mt-0.5 text-sm font-semibold capitalize">
              {item.title}
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResumeSection() {
  return (
    <div className="space-y-8">
      <SectionTitle>Resume</SectionTitle>

      <div className="grid gap-8 lg:grid-cols-2">
        <Timeline items={education} icon={BookOpen} title="Education" />
        <Timeline items={experience} icon={Briefcase} title="Experience" />
      </div>

    
    </div>
  );
}
