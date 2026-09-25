"use client";

import Image from "next/image";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { cn } from "@/lib/utils";

type GalleryDialogProps = {
  title: string;
  /** Short facts shown above the title, e.g. date and location. */
  meta?: string[];
  description: string;
  /** May be empty: the dialog then shows only the text. */
  images: string[];
  /** "portrait" gives phone screenshots a taller frame and upright thumbnails. */
  shape?: "landscape" | "portrait";
  /** Word used in accessible labels: "photo", "screenshot", … */
  imageNoun?: string;
  link?: { href: string; label: string };
  /** Extra controls under the text, e.g. store buttons. */
  actions?: React.ReactNode;
};

/**
 * Dialog content with an image gallery (arrows, thumbnails, ← → keys) and a
 * text block. Render inside a <Dialog.Root>, keyed by the item, so the image
 * index resets when a different item opens.
 */
export function GalleryDialog({
  title,
  meta,
  description,
  images,
  shape = "landscape",
  imageNoun = "photo",
  link,
  actions,
}: GalleryDialogProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const step = (delta: number) => setIndex((i) => (i + delta + count) % count);
  const portrait = shape === "portrait";

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

          {count > 0 && (
            <div className="px-5 pt-5">
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-tile bg-canvas",
                  portrait
                    ? "h-[min(62vh,640px)]"
                    : "aspect-[16/10] max-h-[min(46vh,520px)]",
                )}
              >
                <Image
                  src={images[index]}
                  alt={`${title} — ${imageNoun} ${index + 1} of ${count}`}
                  fill
                  sizes="820px"
                  className="object-contain"
                />
                {count > 1 && (
                  <>
                    <ArrowButton
                      side="left"
                      label={`Previous ${imageNoun}`}
                      onClick={() => step(-1)}
                    />
                    <ArrowButton
                      side="right"
                      label={`Next ${imageNoun}`}
                      onClick={() => step(1)}
                    />
                  </>
                )}
              </div>

              {count > 1 && (
                <div className="mt-2.5 flex gap-2 overflow-x-auto pb-1">
                  {images.map((src, k) => (
                    <button
                      key={src}
                      type="button"
                      aria-label={`${imageNoun} ${k + 1}`}
                      aria-current={k === index}
                      onClick={() => setIndex(k)}
                      className={cn(
                        "relative flex-none cursor-pointer overflow-hidden rounded-lg border-2",
                        portrait ? "h-16 w-9" : "h-12 w-[72px]",
                        k === index
                          ? "border-accent"
                          : "border-transparent opacity-70",
                      )}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="72px"
                        className={cn("object-cover", portrait && "object-top")}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div
            className={cn("px-7 pb-7", count > 0 ? "pt-[18px]" : "pt-7 pr-14")}
          >
            {meta && meta.length > 0 && (
              <div className="mb-1.5 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-subtle">
                {meta.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            )}
            <Dialog.Title className="mb-2.5 text-[28px] leading-[1.15] font-bold tracking-[-0.02em] text-pretty">
              {title}
            </Dialog.Title>
            <Dialog.Description asChild>
              <div className="flex flex-col gap-3 text-[17px] leading-[1.55] text-pretty text-ink-2">
                <RichText text={description} />
              </div>
            </Dialog.Description>
            {link && (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[15px] text-link"
              >
                {link.label} ›
              </a>
            )}
            {actions && <div className="mt-5">{actions}</div>}
          </div>
        </Dialog.Content>
      </div>
    </Dialog.Portal>
  );
}

/**
 * Paragraphs are separated by blank lines; a paragraph whose lines all start
 * with "- " becomes a bullet list.
 */
function RichText({ text }: { text: string }) {
  return text.split(/\n\s*\n/).map((block, i) => {
    const lines = block.split("\n");
    if (lines.every((l) => l.startsWith("- "))) {
      return (
        <ul
          key={i}
          className="m-0 flex list-disc flex-col gap-1 pl-5 marker:text-subtle"
        >
          {lines.map((l) => (
            <li key={l}>{l.slice(2)}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="m-0 whitespace-pre-line">
        {block}
      </p>
    );
  });
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
