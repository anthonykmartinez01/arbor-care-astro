#!/usr/bin/env node
/**
 * Build-time SEO validation gate.
 *
 * Runs after `astro build` and scans dist/. If any ERROR-level rule fails,
 * it exits non-zero so the deploy fails and the broken build never ships.
 * This is what keeps the Layer-1 fundamentals from silently regressing.
 *
 * Run standalone with:  npm run validate   (against an existing dist/)
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const SITE = "https://arborcaretreesolutions.com";
const DIST = "dist";

// Pages intentionally left with NO inbound internal links (owner's call).
// They stay indexable and in the sitemap — discoverable via the sitemap, just
// not linked from anywhere on the site. Exempt from the orphan check only.
const ORPHAN_ALLOWLIST = new Set([
  "/debris-removal-service-denver-co/",
]);

const errors = [];
const warnings = [];
const err = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

if (!existsSync(DIST)) {
  console.error(`✗ ${DIST}/ not found — run "astro build" first.`);
  process.exit(1);
}

// ---------- collect all HTML files ----------
const htmlFiles = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (p.endsWith(".html")) htmlFiles.push(p);
  }
})(DIST);

// route (with leading slash, trailing slash for dirs) -> file path
const routeOf = (file) => {
  let r = "/" + relative(DIST, file).replace(/\\/g, "/");
  r = r.replace(/index\.html$/, "");
  if (r === "") r = "/";
  return r;
};

const pages = new Map(); // route -> page data
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const isStub = /http-equiv=["']?refresh/i.test(html);
  const noindex = /<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html);
  const titleM = html.match(/<title>([\s\S]*?)<\/title>/i);
  const descM = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
  const canonM = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;

  // JSON-LD parse + type collection
  const ldTypes = new Set();
  let ldOk = true;
  const ldRe = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = ldRe.exec(html))) {
    try {
      const data = JSON.parse(m[1]);
      collectTypes(data, ldTypes);
    } catch (e) {
      ldOk = false;
    }
  }

  // images
  const imgs = html.match(/<img\b[^>]*>/gi) || [];

  // internal anchor hrefs
  const links = new Set();
  const aRe = /<a\b[^>]+href=["'](\/[^"']*)["']/gi;
  while ((m = aRe.exec(html))) {
    let href = m[1].split("#")[0].split("?")[0];
    if (href) links.add(href);
  }

  pages.set(routeOf(file), {
    file, html, isStub, noindex,
    title: titleM ? decode(titleM[1].trim()) : null,
    desc: descM ? decode(descM[1].trim()) : null,
    canonical: canonM ? canonM[1] : null,
    h1Count, ldTypes, ldOk, imgs, links,
  });
}

function collectTypes(node, set) {
  if (Array.isArray(node)) return node.forEach((n) => collectTypes(n, set));
  if (node && typeof node === "object") {
    if (typeof node["@type"] === "string") set.add(node["@type"]);
    for (const k of Object.keys(node)) collectTypes(node[k], set);
  }
}
function decode(s) {
  return s.replace(/&amp;/g, "&").replace(/&#38;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
}

// a route is "indexable" if it's a real page (not a redirect stub) and not noindex
const indexable = [...pages.entries()].filter(([, p]) => !p.isStub && !p.noindex);

// ---------- per-page checks ----------
const seenTitles = new Map();
const seenDescs = new Map();
for (const [route, p] of indexable) {
  const is404 = route === "/404.html" || route === "/404/";
  // title
  if (!p.title) err(`Missing <title>: ${route}`);
  else {
    if (seenTitles.has(p.title)) err(`Duplicate <title> "${p.title}" on ${route} and ${seenTitles.get(p.title)}`);
    else seenTitles.set(p.title, route);
    if (p.title.length > 62) warn(`Title >62 chars (${p.title.length}): ${route}`);
  }
  // description
  if (!p.desc) err(`Missing meta description: ${route}`);
  else {
    if (seenDescs.has(p.desc)) warn(`Duplicate meta description on ${route} and ${seenDescs.get(p.desc)}`);
    else seenDescs.set(p.desc, route);
  }
  // canonical
  if (!p.canonical) err(`Missing canonical: ${route}`);
  else {
    if (!p.canonical.startsWith(SITE)) err(`Canonical wrong host: ${route} -> ${p.canonical}`);
    if (!p.canonical.endsWith("/")) err(`Canonical missing trailing slash: ${route} -> ${p.canonical}`);
  }
  // exactly one H1 (404 exempt)
  if (!is404 && p.h1Count !== 1) err(`Expected exactly one <h1>, found ${p.h1Count}: ${route}`);
  // images: alt + width + height
  for (const img of p.imgs) {
    if (!/\balt=/i.test(img)) err(`<img> missing alt on ${route}: ${img.slice(0, 80)}`);
    if (!/\bwidth=/i.test(img) || !/\bheight=/i.test(img))
      err(`<img> missing width/height on ${route}: ${img.slice(0, 80)}`);
  }
  // JSON-LD parses
  if (!p.ldOk) err(`Invalid JSON-LD (does not parse): ${route}`);
  // schema presence
  if (!is404) {
    if (!p.ldTypes.has("Organization")) err(`Missing Organization schema: ${route}`);
    if (!p.ldTypes.has("WebSite")) err(`Missing WebSite schema: ${route}`);
    if (route === "/") {
      if (!p.ldTypes.has("LocalBusiness")) err(`Homepage missing LocalBusiness schema`);
    } else if (!p.ldTypes.has("BreadcrumbList")) {
      err(`Missing BreadcrumbList schema: ${route}`);
    }
  }
}

// ---------- broken internal links ----------
const resolves = (href) => {
  if (/\.[a-z0-9]+$/i.test(href) && !href.endsWith("/")) {
    // a file reference (asset, .xml, etc.)
    return existsSync(join(DIST, href));
  }
  const clean = href.replace(/\/$/, "");
  return (
    existsSync(join(DIST, clean, "index.html")) ||
    existsSync(join(DIST, clean + ".html")) ||
    (href === "/" && existsSync(join(DIST, "index.html")))
  );
};
const allInternalLinks = new Set();
for (const [route, p] of pages) {
  for (const href of p.links) {
    allInternalLinks.add(href);
    if (!resolves(href)) err(`Broken internal link "${href}" (on ${route})`);
  }
}

// ---------- orphan pages ----------
const linkedRoutes = new Set(
  [...allInternalLinks].map((h) => (h.endsWith("/") || h === "/" ? h : h + "/"))
);
for (const [route, p] of indexable) {
  if (route === "/" || route === "/404.html" || route === "/404/") continue;
  if (ORPHAN_ALLOWLIST.has(route)) continue; // intentional orphan (owner's call)
  if (!linkedRoutes.has(route)) err(`Orphan page (no inbound internal links): ${route}`);
}

// ---------- required files ----------
const required = [
  "robots.txt", "llms.txt", "favicon.ico", "favicon.svg",
  "favicon-16.png", "favicon-32.png", "favicon-192.png", "favicon-512.png",
  "apple-touch-icon.png", "site.webmanifest", "sitemap-index.xml",
];
for (const f of required) if (!existsSync(join(DIST, f))) err(`Required file missing: /${f}`);

// regression guard: a hand-written sitemap.xml must NOT come back
if (existsSync(join(DIST, "sitemap.xml")))
  err(`Stray /sitemap.xml present — remove public/sitemap.xml; use the generated sitemap-index.xml`);

// robots must reference the generated sitemap index
if (existsSync(join(DIST, "robots.txt"))) {
  const robots = readFileSync(join(DIST, "robots.txt"), "utf8");
  if (!/Sitemap:\s*\S*sitemap-index\.xml/i.test(robots))
    err(`robots.txt does not reference sitemap-index.xml`);
}

// GA config must survive the build (guards the minification-strip regression)
const home = pages.get("/");
if (home && !/gtag\(\s*['"]config['"]/.test(home.html))
  err(`Homepage missing gtag('config', …) — GA init was stripped from the build`);

// ---------- sitemap purity ----------
const sitemapFiles = readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f));
const sitemapLocs = [];
for (const sf of sitemapFiles) {
  const xml = readFileSync(join(DIST, sf), "utf8");
  for (const mm of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapLocs.push(mm[1]);
}
for (const loc of sitemapLocs) {
  if (!loc.endsWith("/")) err(`Sitemap URL missing trailing slash: ${loc}`);
  const route = loc.replace(SITE, "") || "/";
  const p = pages.get(route);
  if (!p) err(`Sitemap lists a URL with no built page: ${loc}`);
  else {
    if (p.isStub) err(`Sitemap lists a redirect stub: ${loc}`);
    if (p.noindex) err(`Sitemap lists a noindex page: ${loc}`);
    if (p.canonical && p.canonical !== loc)
      err(`Sitemap URL does not match page canonical: ${loc} (canonical ${p.canonical})`);
  }
}

// ---------- report ----------
console.log(`\nSEO build validation — ${pages.size} pages, ${indexable.length} indexable\n`);
if (warnings.length) {
  console.log(`⚠ ${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`   - ${w}`);
  console.log("");
}
if (errors.length) {
  console.error(`✗ ${errors.length} error(s) — deploy blocked:`);
  for (const e of errors) console.error(`   - ${e}`);
  console.error("");
  process.exit(1);
}
console.log("✓ All build-time SEO checks passed.\n");
