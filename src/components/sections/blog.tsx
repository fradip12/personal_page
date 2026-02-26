"use client";

import Image from "next/image";
import { useState } from "react";
import { blogPosts } from "@/lib/data";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

type BlogPost = (typeof blogPosts)[number];

export function BlogSection() {
  const [selected, setSelected] = useState<BlogPost | null>(null);

  return (
    <div className="space-y-8">
      <SectionTitle>Blog, Talks &amp; Speakers</SectionTitle>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            onClick={() => setSelected(post)}
            className="group cursor-pointer overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            {/* Image — clicking opens URL, not dialog */}
            <div className="relative aspect-[16/10] overflow-hidden">
              {"url" in post && post.url ? (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute inset-0 z-10"
                  aria-label={`Open reference for ${post.title}`}
                />
              ) : null}
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Card body */}
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="secondary" className="text-[10px] font-medium">
                  {post.category}
                </Badge>
                <span className="text-[10px] text-muted-foreground">
                  {post.date}
                </span>
              </div>
              <h4 className="text-sm font-semibold leading-snug group-hover:text-muted-foreground transition-colors">
                {post.title}
              </h4>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {post.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Detail dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>

              <DialogHeader className="mt-2">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <Badge variant="secondary" className="text-[10px] font-medium">
                    {selected.category}
                  </Badge>
                  <span className="text-[10px] text-muted-foreground">
                    {selected.date}
                  </span>
                </div>
                <DialogTitle className="text-base leading-snug">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>

              <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                {selected.description}
              </p>

              {"url" in selected && selected.url && (
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline mt-1"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View reference
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
