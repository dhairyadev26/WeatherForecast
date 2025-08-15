/**
 * Utility functions for responsive UI
 * These functions help determine the current viewport size and adjust the UI accordingly
 */

/**
 * Viewport size breakpoints (in pixels)
 */
export const BREAKPOINTS = {
  MOBILE_XS: 320,
  MOBILE_SM: 375,
  MOBILE: 480,
  TABLET_SM: 576,
  TABLET: 768,
  DESKTOP_SM: 992,
  DESKTOP: 1200
};

/**
 * Check if the viewport is mobile size
 * @returns {boolean} True if viewport is mobile size
 */
export const isMobile = () => {
  return window.innerWidth < BREAKPOINTS.TABLET;
};

/**
 * Check if the viewport is tablet size
 * @returns {boolean} True if viewport is tablet size
 */
export const isTablet = () => {
  return window.innerWidth >= BREAKPOINTS.TABLET && window.innerWidth < BREAKPOINTS.DESKTOP_SM;
};

/**
 * Check if the viewport is desktop size
 * @returns {boolean} True if viewport is desktop size
 */
export const isDesktop = () => {
  return window.innerWidth >= BREAKPOINTS.DESKTOP_SM;
};

/**
 * Get the current viewport size category
 * @returns {string} 'mobile', 'tablet', or 'desktop'
 */
export const getViewportSize = () => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};

/**
 * Register a window resize listener
 * @param {Function} callback - Function to call when window resizes
 * @returns {Function} Function to remove the listener
 */
export const addResizeListener = (callback) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};

/**
 * Get the number of items to display in a grid based on viewport size
 * @param {Object} options - Configuration options
 * @param {number} options.mobile - Number of items for mobile
 * @param {number} options.tablet - Number of items for tablet
 * @param {number} options.desktop - Number of items for desktop
 * @returns {number} Number of items to display
 */
export const getResponsiveItemCount = ({ mobile = 1, tablet = 2, desktop = 4 }) => {
  if (isMobile()) return mobile;
  if (isTablet()) return tablet;
  return desktop;
};

/**
 * Calculate responsive dimensions for elements
 * @param {Object} options - Configuration options
 * @param {number} options.baseSize - Base size in pixels
 * @param {number} options.minSize - Minimum size in pixels
 * @param {number} options.maxSize - Maximum size in pixels
 * @returns {string} CSS value with responsive size
 */
export const getResponsiveSize = ({ baseSize, minSize, maxSize }) => {
  const viewportSize = getViewportSize();
  
  switch (viewportSize) {
    case 'mobile':
      return `${minSize}px`;
    case 'tablet':
      return `${baseSize}px`;
    case 'desktop':
      return `${maxSize}px`;
    default:
      return `${baseSize}px`;
  }
};
