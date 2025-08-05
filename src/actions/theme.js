import { SET_THEME } from "../constants/ActionTypes";

/**
 * Set the application theme
 * @param {string} theme - The theme to set (light or dark)
 * @returns {Object} Action object
 */
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme
});

/**
 * Apply theme to document by adding/removing class and storing preference
 * @param {string} theme - The theme to apply
 * @returns {Function} Thunk function
 */
export const applyTheme = (theme) => (dispatch) => {
  // Add or remove dark-theme class on document body
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
  
  // Save theme preference to local storage
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    console.warn("Failed to save theme preference to local storage", error);
  }
  
  // Update theme in Redux store
  dispatch(setTheme(theme));
  
  return Promise.resolve(theme);
};

/**
 * Initialize theme from saved preference or system preference
 * @returns {Function} Thunk function
 */
export const initializeTheme = () => (dispatch) => {
  let savedTheme;
  
  // Try to get theme from local storage
  try {
    savedTheme = localStorage.getItem("theme");
  } catch (error) {
    console.warn("Failed to get theme from local storage", error);
  }
  
  // If no saved theme, check for system preference
  if (!savedTheme) {
    const prefersDark = window.matchMedia && 
                        window.matchMedia("(prefers-color-scheme: dark)").matches;
    savedTheme = prefersDark ? "dark" : "light";
  }
  
  // Apply the theme
  return dispatch(applyTheme(savedTheme));
};
