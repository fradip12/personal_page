import { siteConfig, socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { BrandIcon, SideCard } from "./ui";

const stats = [
  { value: siteConfig.experienceYears, label: "years experience" },
  { value: siteConfig.companies, label: "companies" },
  { value: siteConfig.appsShipped, label: "apps shipped" },
];

export function Sidebar() {
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
            <dt className="text-xs text-subtle">WhatsApp</dt>
            <dd className="m-0">
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                {siteConfig.whatsapp.display}
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
        <dl className="m-0 grid grid-cols-3 gap-3">
          {stats.map((st) => (
            <div key={st.label} className="flex flex-col-reverse justify-end">
              <dt className="text-[13px] leading-snug text-muted">{st.label}</dt>
              <dd className="m-0 text-2xl font-semibold tracking-[-0.02em]">{st.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 mb-0 text-xs text-subtle">
          Apps shipped to the App Store, Google Play and internal distribution.
        </p>
      </SideCard>
    </aside>
  );
}
