import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { DownloadMenu } from "./download-menu";
import { pillClass } from "./ui";

export function Hero() {
  return (
    <section className="overflow-hidden rounded-card bg-surface">
      <div className="relative h-[200px] bg-line">
        <Image
          src={siteConfig.banner}
          alt=""
          fill
          priority
          sizes="(min-width: 1080px) 760px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="px-6 pb-7 sm:px-8">
        <Image
          src={siteConfig.avatar}
          alt={siteConfig.name}
          width={132}
          height={132}
          priority
          className="relative -mt-[66px] block size-[132px] rounded-full border-4 border-white bg-line object-cover"
        />

        <div className="mt-3.5 flex flex-wrap items-end justify-between gap-5">
          <div className="min-w-0">
            <h1 className="m-0 text-[34px] leading-[1.1] font-bold tracking-[-0.022em]">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-[19px] leading-[1.4] tracking-[-0.01em] text-pretty">
              {siteConfig.tagline}
            </p>
            <div className="mt-2 flex flex-wrap gap-x-3.5 gap-y-1.5 text-sm text-muted">
              <span>{siteConfig.location}</span>
              <span>{siteConfig.experienceYears} years</span>
              {siteConfig.openToWork && (
                <span className="flex items-center gap-1.5">
                  <span className="size-[7px] rounded-full bg-live" aria-hidden />
                  Open to opportunities
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a href={`mailto:${siteConfig.email}`} className={pillClass("primary")}>
              Get in touch
            </a>
            <DownloadMenu />
          </div>
        </div>
      </div>
    </section>
  );
}
