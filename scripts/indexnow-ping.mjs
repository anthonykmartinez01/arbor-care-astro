#!/usr/bin/env node
/**
 * IndexNow ping — notifies search engines (Bing, and via IndexNow sharing,
 * others) of the site's URLs after a deploy. Google killed the sitemap ping
 * in 2023; IndexNow is the remaining push channel.
 *
 * Reads URLs from dist/sitemap-0.xml (only indexable, canonical pages are in
 * there) and POSTs them to api.indexnow.org. The key file is hosted at
 * public/<KEY>.txt so the endpoint can verify site ownership.
 *
 * Run automatically via `npm run deploy` (after the Netlify publish), or
 * manually: node scripts/indexnow-ping.mjs
 */
import { readFileSync } from "node:fs";

const HOST = "arborcaretreesolutions.com";
const KEY = "ec03f61742b97583d41c7ba7a49fc6c2";

const xml = readFileSync("dist/sitemap-0.xml", "utf8");
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urls.length === 0) {
  console.error("indexnow: no URLs found in dist/sitemap-0.xml — did the build run?");
  process.exit(1);
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urls,
};

const resp = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

// 200 = OK, 202 = accepted (key validation pending) — both are success.
if (resp.status === 200 || resp.status === 202) {
  console.log(`indexnow: submitted ${urls.length} URLs (HTTP ${resp.status})`);
} else {
  console.error(`indexnow: submission failed (HTTP ${resp.status}: ${await resp.text()})`);
  process.exit(1);
}
