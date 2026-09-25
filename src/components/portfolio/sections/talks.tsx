"use client";

import { Dialog } from "radix-ui";
import { useState } from "react";
import { talks } from "@/lib/data";
import { GalleryDialog } from "../gallery-dialog";
import { MediaCard, MediaGrid } from "../media-card";
import { Card, CardTitle } from "../ui";

export function TalksSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const talk = openIndex == null ? null : talks[openIndex];

  return (
    <Card>
      <CardTitle className="mb-5">Talks &amp; mentoring</CardTitle>
      <MediaGrid>
        {talks.map((t, i) => (
          <MediaCard
            key={t.title}
            title={t.title}
            meta={`${t.date} · ${t.location}`}
            description={t.description}
            image={t.images[0]}
            badge={t.images.length > 1 ? `${t.images.length} photos` : undefined}
            onClick={() => setOpenIndex(i)}
          />
        ))}
      </MediaGrid>

      <Dialog.Root open={talk != null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        {talk && (
          <GalleryDialog
            key={openIndex}
            title={talk.title}
            meta={[talk.date, talk.location, talk.category]}
            description={talk.description}
            images={talk.images}
            link={talk.url ? { href: talk.url, label: "View post" } : undefined}
          />
        )}
      </Dialog.Root>
    </Card>
  );
}
