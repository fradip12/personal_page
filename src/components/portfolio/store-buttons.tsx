import { siAppstore, siGoogleplay } from "simple-icons";
import type { Project } from "@/lib/data";
import { BrandIcon } from "./ui";

const STORES = {
  "google-play": { name: "Google Play", icon: siGoogleplay },
  "app-store": { name: "App Store", icon: siAppstore },
} as const;

const pill = "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-medium no-underline";

/** One button per store. Stores without a link are greyed out with their note ("Coming soon" by default). */
export function StoreButtons({ stores }: { stores: NonNullable<Project["stores"]> }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {stores.map(({ store, href, note = "Coming soon" }) => {
        const { name, icon } = STORES[store];

        if (!href) {
          return (
            <span
              key={store}
              aria-disabled="true"
              title={`${name} — ${note.toLowerCase()}`}
              className={`${pill} cursor-not-allowed border-line bg-canvas text-subtle`}
            >
              <BrandIcon icon={icon} className="size-[18px] opacity-40 grayscale" />
              {name}
              <span className="text-xs font-normal">· {note}</span>
            </span>
          );
        }

        return (
          <a
            key={store}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get it on ${name}`}
            className={`${pill} border-field bg-surface text-ink transition-colors hover:border-ink hover:no-underline`}
          >
            <BrandIcon icon={icon} className="size-[18px]" />
            {name}
          </a>
        );
      })}
    </div>
  );
}
