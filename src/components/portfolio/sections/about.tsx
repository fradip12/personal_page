import { about, services, techStack } from "@/lib/data";
import { cn } from "@/lib/utils";
import { BrandIcon, Card, CardTitle } from "../ui";

export function AboutSection() {
  return (
    <>
      <Card>
        <CardTitle className="mb-3.5">About</CardTitle>
        <p className="m-0 text-[17px] leading-[1.55] text-pretty">{about.lead}</p>
        <p className="mt-3.5 mb-0 text-[17px] leading-[1.55] text-pretty text-muted">{about.followUp}</p>
      </Card>

      <Card>
        <CardTitle className="mb-5">What I do</CardTitle>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
          {services.map((s, i) => (
            <div key={s.title} className="rounded-tile bg-canvas p-5">
              <div className="text-xs font-semibold tracking-[0.02em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 mb-1.5 text-[17px] font-semibold tracking-[-0.01em]">{s.title}</h3>
              <p className="m-0 text-sm leading-normal text-pretty text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <CardTitle className="mb-5">Tech stack</CardTitle>
        <div className="flex flex-col gap-7">
          {techStack.map((g) => (
            <div key={g.group}>
              <h3 className="mb-1 text-xs font-semibold tracking-[0.04em] text-subtle uppercase">{g.group}</h3>
              {g.items.map((item, i) => (
                <div
                  key={item.name}
                  className={cn("flex items-start gap-4 py-4", i > 0 && "border-t border-line")}
                >
                  <div className="flex size-12 flex-none items-center justify-center rounded-xl bg-canvas">
                    {item.icon ? (
                      <BrandIcon icon={item.icon} className="size-[26px]" />
                    ) : (
                      <span className="text-[13px] font-semibold text-muted" aria-hidden>
                        {item.monogram ?? item.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h4 className="m-0 text-[17px] font-semibold tracking-[-0.01em]">{item.name}</h4>
                      <span className="text-[13px] text-subtle">{item.years}</span>
                    </div>
                    <p className="mt-1 mb-0 text-[15px] leading-normal text-pretty text-ink-2">
                      {item.description}
                    </p>
                    {item.libraries.length > 0 && (
                      <ul className="m-0 mt-2.5 flex list-none flex-wrap gap-1.5 p-0">
                        {item.libraries.map((lib) => (
                          <li
                            key={lib}
                            className="rounded-full bg-canvas px-2.5 py-1 font-mono text-xs text-ink-2"
                          >
                            {lib}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
