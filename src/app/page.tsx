import { Portfolio } from "@/components/portfolio";
import { siteConfig } from "@/lib/data";
import { getContributions } from "@/lib/github";

// Rebuild the page at most once a day so the GitHub activity stays fresh.
export const revalidate = 86400;

export default async function Home() {
  const contributions = await getContributions(siteConfig.githubUser);
  return <Portfolio contributions={contributions} />;
}
