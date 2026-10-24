/**
 * Theme handling for DevStarter.
 *
 * Responsibilities:
 * - Read the persisted theme (localStorage) or fall back to the OS preference.
 * - Apply the theme by setting the `data-theme` attribute on the <html> element.
 * - Keep the header toggle button in sync (label + aria state).
 */

const STORAGE_KEY = "devstarter-theme";

/** Read the theme the user picked previously, or the OS preference. */
export function getPreferredTheme() {
  try {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch (error) {
    // localStorage can be unavailable (private mode, blocked cookies, etc.).
    // Fall through to the OS preference in that case.
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

/** Apply a theme and update the toggle button's accessible state. */
export function applyTheme(theme) {
  console.log("[DevStarter] Applying theme:", theme);
  document.documentElement.dataset.theme = theme;

  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    const isDark = theme === "dark";
    toggleButton.setAttribute("aria-pressed", String(isDark));
    toggleButton.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  }
}

/** Persist a theme choice and apply it immediately. */
export function setTheme(theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    // Ignore storage failures; the theme still applies for this session.
  }
  applyTheme(theme);
}

/** Initialise the theme on page load and wire the header toggle. */
export function initTheme() {
  applyTheme(getPreferredTheme());

  const toggleButton = document.getElementById("theme-toggle");
  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}
