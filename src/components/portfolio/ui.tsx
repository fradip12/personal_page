import { cn } from "@/lib/utils";
import type { BrandIconData } from "@/lib/brand-icons";

export function Card({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("rounded-card bg-surface p-6 sm:p-8", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("m-0 text-2xl font-semibold tracking-[-0.015em]", className)}
      {...props}
    />
  );
}

export function SideCard({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("rounded-card bg-surface p-6", className)} {...props} />;
}

export function BrandIcon({
  icon,
  className,
}: {
  icon: BrandIconData;
  className?: string;
}) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill={`#${icon.hex}`} className={className}>
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

/** Pill-shaped link or button in the primary (filled) or secondary (tinted) style. */
export function pillClass(variant: "primary" | "secondary", size: "sm" | "md" = "md") {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium no-underline transition-colors hover:no-underline",
    size === "sm" ? "px-3.5 py-1.5 text-[13px]" : "px-5 py-2.5 text-[15px]",
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-hover"
      : "bg-accent/8 text-accent hover:bg-accent/12",
  );
}
