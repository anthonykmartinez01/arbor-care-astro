/**
 * WordPress-style scheduled publishing.
 *
 * HOW TO SCHEDULE A PAGE (two steps, both required — opt-in only):
 *   1. Add the page's path + publish date to SCHEDULED_PAGES below.
 *   2. Add the guard to the top of that page's frontmatter:
 *
 *        import { scheduleGuard } from "../lib/schedule";
 *        const guard = scheduleGuard(Astro);
 *        if (guard) return guard;
 *
 * Until the publish date (00:00 UTC), the page builds as a noindex
 * redirect stub pointing at the 404 page — no real content is rendered,
 * and astro.config.mjs excludes it from the XML sitemap. The GitHub
 * Actions workflow rebuilds and redeploys the site daily at 12:00 UTC,
 * so the page goes live automatically on its date with no manual step.
 *
 * Pages NOT listed here (or listed but without the guard call) are
 * completely unaffected.
 *
 * NOTE: on its publish day the page must have at least one inbound
 * internal link or the build gate will fail the deploy (orphan check).
 * Use isScheduledFuture() on a live page to add a link that appears
 * automatically the same day (see bottom of this file).
 */

/** Page path -> publish date (YYYY-MM-DD, interpreted as 00:00 UTC). */
export const SCHEDULED_PAGES: Record<string, string> = {
  // "/example-future-page": "2026-08-15",
  "/fallen-tree-removal-denver-co/": "2026-07-12",
  "/ash-tree-removal-denver-co/": "2026-07-13",
  "/crown-thinning-denver-co/": "2026-07-17",
  "/tree-health-maintenance-denver-co/": "2026-07-18",
};

/** Normalize to the site's canonical trailing-slash form. */
const normalize = (path: string): string =>
  path.endsWith("/") ? path : `${path}/`;

/**
 * True if `path` is in the registry AND its publish date hasn't arrived
 * yet (UTC). Unregistered paths always return false.
 */
export function isScheduledFuture(path: string): boolean {
  const date = SCHEDULED_PAGES[normalize(path)];
  if (!date) return false;
  // "YYYY-MM-DD" parses as 00:00 UTC per the ECMAScript spec.
  return Date.now() < Date.parse(date);
}

/** Minimal slice of Astro's global we need (keeps this importable anywhere). */
interface AstroLike {
  url: URL;
  redirect: (path: string) => Response;
}

/**
 * Call at the top of a page's frontmatter. Returns a redirect Response
 * while the page's publish date is in the future — Astro renders that as
 * a noindex meta-refresh stub (same pattern as the site's slug-rename
 * stubs), so no content leaks and nothing gets indexed early. Returns
 * undefined once published (page renders normally).
 */
export function scheduleGuard(astro: AstroLike): Response | undefined {
  if (isScheduledFuture(astro.url.pathname)) {
    return astro.redirect("/404");
  }
  return undefined;
}
