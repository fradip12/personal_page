"use client";

import Image from "next/image";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { talks, type Talk } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Card, CardTitle } from "../ui";

export function TalksSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const talk = openIndex == null ? null : talks[openIndex];

  return (
    <Card>
      <CardTitle className="mb-5">Talks &amp; mentoring</CardTitle>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
        {talks.map((t, i) => (
          <button
            key={t.title}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group block cursor-pointer rounded-tile text-left transition-opacity hover:opacity-85"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-tile bg-canvas">
              <Image
                src={t.images[0]}
                alt=""
                fill
                sizes="(min-width: 768px) 260px, 100vw"
                className="object-cover"
              />
              {t.images.length > 1 && (
                <span className="absolute right-2.5 bottom-2.5 rounded-full bg-white/85 px-[9px] py-[3px] text-xs font-medium text-ink backdrop-blur-md">
                  {t.images.length} photos
                </span>
              )}
            </div>
            <div className="mt-3 text-xs text-subtle">
              {t.date} · {t.location}
            </div>
            <h3 className="mt-0.5 mb-0 text-[17px] font-semibold tracking-[-0.01em] text-pretty text-ink">
              {t.title}
            </h3>
          </button>
        ))}
      </div>

      <Dialog.Root open={talk != null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        {/* key resets the photo index whenever a different talk opens. */}
        {talk && <TalkDialog key={openIndex} talk={talk} />}
      </Dialog.Root>
    </Card>
  );
}

function TalkDialog({ talk }: { talk: Talk }) {
  const [photo, setPhoto] = useState(0);
  const count = talk.images.length;
  const step = (delta: number) => setPhoto((p) => (p + delta + count) % count);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-canvas/55 backdrop-blur-[24px] backdrop-saturate-[1.6]" />
      <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-5">
        <Dialog.Content
          onKeyDown={(e) => {
            if (count < 2) return;
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
          }}
          className="pointer-events-auto relative max-h-[calc(100vh-40px)] w-full max-w-[860px] overflow-auto rounded-3xl bg-surface shadow-[0_30px_80px_rgba(0,0,0,0.18)] outline-none"
        >
          <Dialog.Close
            aria-label="Close"
            className="absolute top-3.5 right-3.5 z-10 size-8 cursor-pointer rounded-full bg-white/85 text-[17px] leading-none text-ink shadow-[0_2px_8px_rgba(0,0,0,0.1)] backdrop-blur-md hover:bg-white"
          >
            ✕
          </Dialog.Close>

          <div className="px-5 pt-5">
            <div className="relative aspect-[16/10] max-h-[min(46vh,520px)] w-full overflow-hidden rounded-tile bg-canvas">
              <Image
                src={talk.images[photo]}
                alt={`${talk.title} — photo ${photo + 1} of ${count}`}
                fill
                sizes="820px"
                className="object-cover"
              />
              {count > 1 && (
                <>
                  <ArrowButton side="left" label="Previous photo" onClick={() => step(-1)} />
                  <ArrowButton side="right" label="Next photo" onClick={() => step(1)} />
                </>
              )}
            </div>

            {count > 1 && (
              <div className="mt-2.5 flex gap-2 overflow-x-auto pb-1">
                {talk.images.map((src, k) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`Photo ${k + 1}`}
                    aria-current={k === photo}
                    onClick={() => setPhoto(k)}
                    className={cn(
                      "relative h-12 w-[72px] flex-none cursor-pointer overflow-hidden rounded-lg border-2",
                      k === photo ? "border-accent" : "border-transparent opacity-70",
                    )}
                  >
                    <Image src={src} alt="" fill sizes="72px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="px-7 pt-[18px] pb-7">
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-subtle">
              <span>{talk.date}</span>
              <span>{talk.location}</span>
              <span>{talk.category}</span>
            </div>
            <Dialog.Title className="mt-1.5 mb-2.5 text-[28px] leading-[1.15] font-bold tracking-[-0.02em] text-pretty">
              {talk.title}
            </Dialog.Title>
            <Dialog.Description className="m-0 text-[17px] leading-[1.55] whitespace-pre-line text-pretty text-ink-2">
              {talk.description}
            </Dialog.Description>
            {talk.url && (
              <a
                href={talk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[15px] text-link"
              >
                View post ›
              </a>
            )}
          </div>
        </Dialog.Content>
      </div>
    </Dialog.Portal>
  );
}

function ArrowButton({
  side,
  label,
  onClick,
}: {
  side: "left" | "right";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "absolute top-1/2 size-9 -translate-y-1/2 cursor-pointer rounded-full bg-white/90 text-xl text-ink shadow-[0_2px_8px_rgba(0,0,0,0.1)]",
        side === "left" ? "left-3" : "right-3",
      )}
    >
      {side === "left" ? "‹" : "›"}
    </button>
  );
}
