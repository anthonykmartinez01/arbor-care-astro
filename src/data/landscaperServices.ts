/**
 * Landscaper service cluster.
 *
 * These four pages link ONLY to each other and back to the landscaper hub
 * (/landscaper-denver-co/). The RelatedLandscaperServices component renders
 * the sibling links; the hub link is rendered by that component too.
 */
export interface LandscaperService {
  title: string;
  slug: string;
  blurb: string;
}

export const LANDSCAPER_HUB = "/landscaper-denver-co/";

export const landscaperServices: LandscaperService[] = [
  {
    title: "Bush & Shrub Trimming",
    slug: "/bush-shrub-trimming-denver-co/",
    blurb: "Shape overgrown bushes and shrubs with proper cuts that keep them healthy and looking clean.",
  },
  {
    title: "Tree Planting",
    slug: "/tree-planting-denver-co/",
    blurb: "The right species, planted at the right depth, so your new tree actually thrives in Denver soil.",
  },
  {
    title: "Holiday Lights & Decor",
    slug: "/holiday-lights-denver-co/",
    blurb: "Professional holiday light and décor install, takedown, and in-season maintenance.",
  },
  {
    title: "Brush Removal",
    slug: "/brush-removal-denver-co/",
    blurb: "Storm cleanup, scrub oak, and tangled overgrowth cleared out and hauled away.",
  },
];
