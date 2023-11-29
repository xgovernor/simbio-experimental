/**
 * Check if the application is running as a Progressive Web App (PWA).
 * @returns {boolean} True if the application is a PWA, false otherwise.
 */
export function isPwa() {
    // Check if the 'window' object is defined (in a browser environment).
    if (typeof window !== "undefined") {
        // Define an array of PWA display modes to check.
        const pwaDisplayModes = ["fullscreen", "standalone", "minimal-ui"];

        // Check if any of the specified display modes match the current display mode.
        return pwaDisplayModes.some((displayMode) => window.matchMedia(`(display-mode: ${displayMode})`).matches);
    }

    // If 'window' is undefined, assume it's not a PWA.
    return false;
}