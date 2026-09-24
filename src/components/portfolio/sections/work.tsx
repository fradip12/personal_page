"use client";

import Image from "next/image";
import { useState } from "react";
import { projectCategories, projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Card, CardTitle } from "../ui";

type Filter = (typeof projectCategories)[number];

export function WorkSection() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Card>
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <CardTitle>Selected work</CardTitle>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter projects">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={c === filter}
              onClick={() => setFilter(c)}
              className={cn(
                "cursor-pointer rounded-full px-3 py-[5px] text-[13px]",
                c === filter ? "bg-ink text-white" : "bg-canvas text-ink hover:bg-line",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
        {visible.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Card>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-tile">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 360px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="placeholder-stripes flex h-full items-center justify-center font-mono text-[11px] text-subtle">
            screenshot coming soon
          </div>
        )}
      </div>
      <div className="mt-3 text-xs text-subtle">{project.tag}</div>
      <h3 className="mt-0.5 mb-1 text-[17px] font-semibold tracking-[-0.01em]">{project.title}</h3>
      <p className="m-0 text-sm leading-[1.45] text-pretty text-muted">{project.description}</p>
    </>
  );

  if (!project.url) return <article>{body}</article>;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-ink no-underline transition-opacity hover:no-underline hover:opacity-85"
    >
      {body}
    </a>
  );
}
