export interface ServiceRoute {
  title: string;
  path: string;
  parentPath?: string;
  parentTitle?: string;
}

export interface ServiceCategory {
  title: string;
  path: string;
  children: ServiceRoute[];
}

export const coreServices: ServiceCategory[] = [
  {
    title: "Tree Trimming & Pruning",
    path: "/tree-trimming",
    children: [
      { title: "Bush & Shrub Trimming", path: "/bush-shrub-trimming-denver-co", parentPath: "/tree-trimming", parentTitle: "Tree Trimming & Pruning" },
      { title: "Crown Reduction", path: "/crown-reduction-denver-co", parentPath: "/tree-trimming", parentTitle: "Tree Trimming & Pruning" },
      { title: "Deadwooding", path: "/deadwooding-denver-co", parentPath: "/tree-trimming", parentTitle: "Tree Trimming & Pruning" },
    ],
  },
  {
    title: "Tree Removal",
    path: "/tree-removal",
    children: [
      { title: "Emergency Tree Removal", path: "/emergency-tree-removal-denver-co", parentPath: "/tree-removal", parentTitle: "Tree Removal" },
      { title: "Hazardous Tree Removal", path: "/hazardous-tree-removal-denver-co", parentPath: "/tree-removal", parentTitle: "Tree Removal" },
      { title: "Bush & Shrub Removal", path: "/bush-shrub-removal-denver-co", parentPath: "/tree-removal", parentTitle: "Tree Removal" },
    ],
  },
  {
    title: "Stump Grinding",
    path: "/stump-grinding-denver-co",
    children: [
      { title: "Stump Removal", path: "/stump-removal-denver-co", parentPath: "/stump-grinding-denver-co", parentTitle: "Stump Grinding" },
    ],
  },
];

export const secondaryCategories: ServiceCategory[] = [
  {
    title: "Arborist Services",
    path: "/arborist-service-denver-co",
    children: [
      { title: "Tree Treatment", path: "/tree-treatment-denver-co", parentPath: "/arborist-service-denver-co", parentTitle: "Arborist Services" },
      { title: "Tree Health Assessment", path: "/tree-health-assessment-denver-co", parentPath: "/arborist-service-denver-co", parentTitle: "Arborist Services" },
      { title: "Tree Planting", path: "/tree-planting-denver-co", parentPath: "/arborist-service-denver-co", parentTitle: "Arborist Services" },
    ],
  },
  {
    title: "Firewood Supply",
    path: "/other-services",
    children: [
      { title: "Seasoned Firewood for Sale", path: "/seasoned-firewood-denver-co", parentPath: "/other-services", parentTitle: "Firewood Supply" },
      { title: "Firewood Delivery", path: "/firewood-delivery-denver-co", parentPath: "/other-services", parentTitle: "Firewood Supply" },
    ],
  },
];

export const generalServices: ServiceRoute[] = [
  { title: "Brush Chipping", path: "/brush-chipping-denver-co", parentPath: "/", parentTitle: "Home" },
  { title: "Land Clearing", path: "/land-clearing-denver-co", parentPath: "/", parentTitle: "Home" },
];

export function getAllServiceRoutes(): ServiceRoute[] {
  const routes: ServiceRoute[] = [];
  [...coreServices, ...secondaryCategories].forEach((cat) => {
    routes.push({ title: cat.title, path: cat.path });
    cat.children.forEach((child) => routes.push(child));
  });
  generalServices.forEach((s) => routes.push(s));
  return routes;
}
