/**
 * Tree Service hub-and-spoke internal-linking cluster.
 *
 * Single source of truth for the cluster's pages. The hub links to every
 * spoke; every spoke links back to the hub and laterally to the other
 * spokes (each page filters itself out via its slug).
 *
 * ONLY list pages that actually exist — never add an entry before the
 * page ships, or the build's broken-link gate will fail the deploy.
 */
export interface ClusterPage {
  /** Exact page title, used verbatim as anchor text. */
  title: string;
  /** Root-relative URL with trailing slash (matches canonical form). */
  slug: string;
}

export const treeServiceHub: ClusterPage = {
  title: "Tree Service",
  slug: "/tree-services/",
};

export const treeServiceSpokes: ClusterPage[] = [
  { title: "Tree Removal", slug: "/tree-removal/" },
  { title: "Emergency Tree Removal", slug: "/emergency-tree-removal-denver-co/" },
  { title: "Hazardous Tree Removal", slug: "/hazardous-tree-removal-denver-co/" },
  // Planned spokes — uncomment each once its page exists:
  // { title: "Tree Damage", slug: "/tree-damage-denver-co/" },
  // { title: "Storm Damage Tree Removal", slug: "/storm-damage-tree-removal-denver-co/" },
  // { title: "Fallen Tree Removal", slug: "/fallen-tree-removal-denver-co/" },
  // { title: "Ash Tree Removal", slug: "/ash-tree-removal-denver-co/" },
  // { title: "Snow Damage Tree Repair", slug: "/snow-damage-tree-repair-denver-co/" },
];

/** Hub + spokes together, for building "everything except me" link lists. */
export const treeServiceCluster: ClusterPage[] = [treeServiceHub, ...treeServiceSpokes];
