import type { Contributions } from "@/lib/github";
import { SideCard } from "./ui";

const LEVEL_COLORS = ["#ebedf0", "#c6dbf7", "#86b6f0", "#3d8ae6", "#0060c7"];

export function GithubActivity({ user, data }: { user: string; data: Contributions | null }) {
  const profile = `https://github.com/${user}`;

  // Pad the first column so every column runs Sunday → Saturday.
  const leading = data ? new Date(data.days[0].date).getUTCDay() : 0;

  return (
    <SideCard>
      <div className="mb-3.5 flex items-baseline justify-between">
        <h2 className="m-0 text-[17px] font-semibold">GitHub activity</h2>
        <a href={profile} className="text-[13px] text-link">
          {user} ›
        </a>
      </div>

      {data ? (
        <>
          {/* rtl keeps the most recent weeks in view when the grid overflows. */}
          <div className="overflow-x-auto pb-1 [direction:rtl]">
            <a
              href={profile}
              aria-label={`${data.total} contributions in the past year on GitHub`}
              className="grid w-max auto-cols-[10px] grid-flow-col grid-rows-[repeat(7,10px)] gap-0.5 [direction:ltr]"
            >
              {Array.from({ length: leading }, (_, i) => (
                <span key={`pad-${i}`} />
              ))}
              {data.days.map((d) => (
                <span
                  key={d.date}
                  title={`${d.count} on ${d.date}`}
                  className="size-[10px] rounded-[2px]"
                  style={{ background: LEVEL_COLORS[d.level] ?? LEVEL_COLORS[0] }}
                />
              ))}
            </a>
          </div>
          <p className="mt-2.5 mb-0 text-xs text-subtle">
            {data.total.toLocaleString("en-US")} contributions in the past year
          </p>
        </>
      ) : (
        <p className="m-0 text-xs text-subtle">
          Couldn’t load activity.{" "}
          <a href={profile} className="text-link">
            View on GitHub
          </a>
        </p>
      )}
    </SideCard>
  );
}
