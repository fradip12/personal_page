"use client";

import { Dialog } from "radix-ui";
import { useState } from "react";
import { projectCategories, projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { GalleryDialog } from "../gallery-dialog";
import { StoreButtons } from "../store-buttons";
import { MediaCard, MediaGrid } from "../media-card";
import { Card, CardTitle } from "../ui";

type Filter = (typeof projectCategories)[number];

// Only offer filters that match at least one project; with a single category there is nothing to filter.
const usedCategories = projectCategories.filter(
  (c) => c === "All" || projects.some((p) => p.category === c),
);
const showFilters = usedCategories.length > 2;

export function WorkSection() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Card>
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <CardTitle>Selected work</CardTitle>
        {showFilters && (
          <div
            className="flex flex-wrap gap-1.5"
            role="group"
            aria-label="Filter projects"
          >
            {usedCategories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={c === filter}
                onClick={() => setFilter(c)}
                className={cn(
                  "cursor-pointer rounded-full px-3 py-[5px] text-[13px]",
                  c === filter
                    ? "bg-ink text-white"
                    : "bg-canvas text-ink hover:bg-line",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      <MediaGrid>
        {visible.map((p) => (
          <MediaCard
            key={p.title}
            title={p.title}
            description={p.description}
            image={p.cover?.src ?? p.images?.[0]}
            imagePosition={
              !p.cover && p.imageShape === "portrait" ? "top" : "center"
            }
            imageFit={p.cover ? "icon" : "cover"}
            imageBackground={p.cover?.background}
            iconShape={p.cover?.shape}
            badge={
              p.images && p.images.length > 1
                ? `${p.images.length} screenshots`
                : undefined
            }
            // Projects with screenshots or details open a dialog; the rest link straight out.
            {...(p.images?.length || p.details
              ? { onClick: () => setOpen(p) }
              : { href: p.url })}
          />
        ))}
      </MediaGrid>

      <Dialog.Root
        open={open != null}
        onOpenChange={(o) => !o && setOpen(null)}
      >
        {open && (
          <GalleryDialog
            key={open.title}
            title={open.title}
            description={open.details ?? open.description}
            images={open.images ?? []}
            shape={open.imageShape}
            imageNoun="screenshot"
            link={
              open.url
                ? { href: open.url, label: open.urlLabel ?? "View project" }
                : undefined
            }
            actions={
              open.stores ? (
                <StoreButtons stores={open.stores} />
              ) : open.availability ? (
                <span className="inline-flex rounded-full border border-line bg-canvas px-4 py-2 text-[14px] text-muted">
                  {open.availability}
                </span>
              ) : undefined
            }
          />
        )}
      </Dialog.Root>
    </Card>
  );
}
