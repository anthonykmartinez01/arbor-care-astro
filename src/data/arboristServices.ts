/**
 * Arborist service cluster.
 *
 * These seven pages link ONLY to each other and back to the arborist hub
 * (/arborist-service-denver-co/). The RelatedArboristServices component
 * renders the sibling links plus the hub link, filtering out any page whose
 * scheduled publish date hasn't arrived yet (see src/lib/schedule.ts).
 */
export interface ArboristService {
  title: string;
  slug: string;
  blurb: string;
}

export const ARBORIST_HUB = "/arborist-service-denver-co/";

export const arboristServices: ArboristService[] = [
  {
    title: "Tree Trimming & Pruning",
    slug: "/tree-trimming/",
    blurb: "Proper pruning cuts that protect your property and keep trees structurally sound.",
  },
  {
    title: "Tree Health Assessment",
    slug: "/tree-health-assessment-denver-co/",
    blurb: "An on-site check of canopy, trunk, and roots to catch problems early.",
  },
  {
    title: "Tree Treatment",
    slug: "/tree-treatment-denver-co/",
    blurb: "Targeted treatment for the pests and disease that threaten Denver trees.",
  },
  {
    title: "Crown Reduction",
    slug: "/crown-reduction-denver-co/",
    blurb: "Reduce an overgrown canopy's size while keeping the tree's natural shape.",
  },
  {
    title: "Deadwooding",
    slug: "/deadwooding-denver-co/",
    blurb: "Remove dead and dying limbs before they drop or spread decay.",
  },
  {
    title: "Crown Thinning",
    slug: "/crown-thinning-denver-co/",
    blurb: "Open a dense canopy so wind and light pass through and snow load drops.",
  },
  {
    title: "Tree Health Maintenance",
    slug: "/tree-health-maintenance-denver-co/",
    blurb: "Ongoing care that spots drought stress, pests, and decline before it spreads.",
  },
];
