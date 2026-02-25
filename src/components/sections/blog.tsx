"use client";

import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";

export function BlogSection() {
  return (
    <div className="space-y-8">
      <SectionTitle>Blog</SectionTitle>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.title}
            className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
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
    </div>
  );
}
