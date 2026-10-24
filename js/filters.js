/**
 * Category definitions and filtering logic for DevStarter.
 *
 * Keeping the category list here means both the filter buttons and the
 * rendering code use one source of truth.
 */

export const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "programming", label: "Programming" },
  { key: "web-development", label: "Web Development" },
  { key: "git-github", label: "Git & GitHub" },
  { key: "design", label: "Design" },
  { key: "tools-deployment", label: "Tools & Deployment" },
];

/** Return a human-friendly label for a category key. */
export function getCategoryLabel(categoryKey) {
  const match = CATEGORIES.find((category) => category.key === categoryKey);
  return match ? match.label : categoryKey;
}

/**
 * Filter a list of resources by category.
 * An empty or "all" category returns the full list.
 */
export function filterByCategory(resources, category) {
  const selectedCategory = category || "all";
  if (selectedCategory === "all") {
    return resources;
  }
  return resources.filter((resource) => resource.category === selectedCategory);
}
