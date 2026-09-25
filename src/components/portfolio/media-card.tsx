import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Grid of MediaCards. Each card spans three or four rows (image, optional
 * meta, title, description) through subgrid, so those parts line up across a
 * row even when one card's title wraps to two lines.
 */
export function MediaGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-x-5 gap-y-8">
      {children}
    </div>
  );
}

type MediaCardProps = {
  /** Makes the whole card a button. Takes precedence over href. */
  onClick?: () => void;
  /** Makes the whole card a link that opens in a new tab. */
  href?: string;
  title: string;
  /**
   * Small line above the title, e.g. date and place. Without it the card spans three rows
   * instead of four, so give every card in one grid a meta, or none.
   */
  meta?: string;
  description?: string;
  /** Path under /public. A striped placeholder is shown when missing. */
  image?: string;
  /** Small label on the image, e.g. "3 photos". */
  badge?: string;
  /** "top" suits tall phone screenshots, whose headline sits at the top. */
  imagePosition?: "center" | "top";
  /** "icon" shows the image as a rounded app icon centred on `imageBackground`. */
  imageFit?: "cover" | "icon";
  /** CSS background behind an icon. */
  imageBackground?: string;
  /** Icon outline: app-icon rounded square, or a circle for round icons. */
  iconShape?: "rounded" | "circle";
};

export function MediaCard({
  title,
  meta,
  description,
  image,
  badge,
  imagePosition = "center",
  imageFit = "cover",
  imageBackground,
  iconShape = "rounded",
  onClick,
  href,
}: MediaCardProps) {
  // The click target is stretched over the whole card (after:inset-0) rather
  // than wrapping it, so the card's layout stays a plain subgrid.
  const interactive = Boolean(onClick || href);
  const target =
    "after:absolute after:inset-0 after:rounded-tile after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-accent";

  return (
    <article className={cn("group relative grid grid-rows-subgrid gap-0", meta ? "row-span-4" : "row-span-3")}>
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-tile bg-canvas"
        style={imageBackground ? { background: imageBackground } : undefined}
      >
        {image && imageFit === "icon" ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                "relative aspect-square w-[42%] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-transform duration-300",
                // Square icons get a white base in case their edges are slightly transparent.
                iconShape === "circle" ? "rounded-full" : "rounded-[22%] bg-white",
                interactive && "group-hover:scale-[1.04]",
              )}
            >
              <Image src={image} alt="" fill sizes="160px" className="object-cover" />
            </div>
          </div>
        ) : image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 768px) 280px, 100vw"
            className={cn(
              "object-cover transition-transform duration-300",
              imagePosition === "top" && "object-top",
              interactive && "group-hover:scale-[1.03]",
            )}
          />
        ) : (
          <div className="placeholder-stripes flex h-full items-center justify-center font-mono text-[11px] text-subtle">
            screenshot coming soon
          </div>
        )}
        {badge && (
          <span className="absolute right-2.5 bottom-2.5 rounded-full bg-white/85 px-[9px] py-[3px] text-xs font-medium text-ink backdrop-blur-md">
            {badge}
          </span>
        )}
      </div>

      {meta && <div className="mt-3 text-xs text-subtle">{meta}</div>}

      <h3 className={cn("mb-0 text-[17px] font-semibold tracking-[-0.01em] text-pretty text-ink", meta ? "mt-0.5" : "mt-3")}>
        {onClick ? (
          <button type="button" onClick={onClick} className={cn("cursor-pointer text-left", target)}>
            {title}
          </button>
        ) : href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("text-ink no-underline hover:no-underline", target)}
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>

      <p className="mt-1 mb-0 line-clamp-2 text-sm leading-[1.45] text-pretty text-muted">
        {description}
      </p>
    </article>
  );
}
