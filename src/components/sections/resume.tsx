"use client";

import { education, experience, skills } from "@/lib/data";
import { SectionTitle } from "@/components/section-title";
import { BookOpen, Briefcase } from "lucide-react";

interface TimelineItem {
  title: string;
  period: string;
  description: string;
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
            <div className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground" />
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

      {/* Skills */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">My Skills</h3>
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">
                  {skill.value}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-foreground animate-progress-fill"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
