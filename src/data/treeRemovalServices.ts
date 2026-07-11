/**
 * Tree-removal service cluster — the 8 pages that interlink with each other
 * via the RelatedTreeServices block. Single source of truth: each page
 * renders the block, which links to the other seven (filtering itself out,
 * and hiding any page still scheduled for a future publish date).
 *
 * Keep titles here as the exact anchor text.
 */
export interface TreeRemovalService {
  title: string;
  slug: string;
  blurb: string;
}

export const treeRemovalServices: TreeRemovalService[] = [
  { title: "Tree Removal", slug: "/tree-removal/", blurb: "Safe removal of dead, damaged, or unwanted trees, from small ornamentals to large hazards." },
  { title: "Tree Stump Removal", slug: "/stump-removal-denver-co/", blurb: "Full root-ball excavation when the stump has to be gone for good." },
  { title: "Tree Stump Grinding", slug: "/stump-grinding-denver-co/", blurb: "Fast, below-grade grinding to reclaim your yard without the digging." },
  { title: "Emergency Tree Removal", slug: "/emergency-tree-removal-denver-co/", blurb: "24/7 response when a tree is down and can't wait until morning." },
  { title: "Hazardous Tree Removal", slug: "/hazardous-tree-removal-denver-co/", blurb: "Careful removal of compromised, leaning, or structurally failing trees." },
  { title: "Storm Damage Tree Removal", slug: "/storm-damage-tree-removal-denver-co/", blurb: "Priority assessment and cleanup after Front Range windstorms and blizzards." },
  { title: "Fallen Tree Removal", slug: "/fallen-tree-removal-denver-co/", blurb: "Fast removal of downed trees after high winds and heavy snow." },
  { title: "Ash Tree Removal", slug: "/ash-tree-removal-denver-co/", blurb: "Removal of emerald ash borer-infested and dying ash trees." },
];
