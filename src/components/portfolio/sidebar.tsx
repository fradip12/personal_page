import { siteConfig, socialLinks } from "@/lib/data";
import type { Contributions } from "@/lib/github";
import { cn } from "@/lib/utils";
import { GithubActivity } from "./github-activity";
import { BrandIcon, SideCard } from "./ui";

export function Sidebar({ contributions }: { contributions: Contributions | null }) {
  return (
    <aside className="flex max-w-full min-w-[260px] flex-[0_1_300px] flex-col gap-5 lg:sticky lg:top-[72px]">
      <SideCard>
        <h2 className="m-0 mb-3.5 text-[17px] font-semibold">Contact</h2>
        <dl className="m-0 flex flex-col gap-3.5 text-sm">
          <div>
            <dt className="text-xs text-subtle">Email</dt>
            <dd className="m-0 break-all">
              <a href={`mailto:${siteConfig.email}`} className="text-link">
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs text-subtle">Phone</dt>
            <dd className="m-0">
              <a href={`tel:${siteConfig.phone.tel}`} className="text-link">
                {siteConfig.phone.display}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs text-subtle">Location</dt>
            <dd className="m-0">
              {siteConfig.location} · {siteConfig.timezone}
            </dd>
          </div>
        </dl>
      </SideCard>

      <SideCard className="py-2">
        {socialLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-between py-3.5 text-[15px] text-ink no-underline hover:no-underline",
              i > 0 && "border-t border-line",
            )}
          >
            <span className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-[9px] bg-canvas">
                <BrandIcon icon={link.icon} className="size-[18px]" />
              </span>
              {link.label}
            </span>
            <span className="text-[13px] text-subtle">{link.handle} ›</span>
          </a>
        ))}
      </SideCard>

      <SideCard>
        <h2 className="m-0 mb-3.5 text-[17px] font-semibold">At a glance</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-[28px] font-semibold tracking-[-0.02em]">{siteConfig.experienceYears}</div>
            <div className="text-[13px] text-muted">years shipping</div>
          </div>
          <div>
            <div className="text-[28px] font-semibold tracking-[-0.02em]">{siteConfig.countriesReached}</div>
            <div className="text-[13px] text-muted">countries reached</div>
          </div>
        </div>
      </SideCard>

      <GithubActivity user={siteConfig.githubUser} data={contributions} />
    </aside>
  );
}
