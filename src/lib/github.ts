export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type Contributions = {
  days: ContributionDay[];
  total: number;
};

type ApiResponse = {
  total?: Record<string, number>;
  contributions?: ContributionDay[];
};

const ONE_DAY_SECONDS = 60 * 60 * 24;

/**
 * Fetches the past year of public GitHub contributions for `user`.
 * Returns null when the API is unavailable, so the page still renders.
 */
export async function getContributions(user: string): Promise<Contributions | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(user)}?y=last`,
      { next: { revalidate: ONE_DAY_SECONDS } },
    );
    if (!res.ok) return null;

    const json = (await res.json()) as ApiResponse;
    const days = json.contributions ?? [];
    if (days.length === 0) return null;

    const total = json.total
      ? Object.values(json.total).reduce((sum, n) => sum + n, 0)
      : days.reduce((sum, d) => sum + d.count, 0);

    return { days, total };
  } catch {
    return null;
  }
}
