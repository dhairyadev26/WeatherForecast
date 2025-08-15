/**
 * General application constants
 */

// API settings
export const API_BASE_URL = "https://api.openweathermap.org/data/2.5";
export const API_ENDPOINTS = {
  FORECAST: "/forecast",
  CURRENT: "/weather"
};
export const APP_ID = "YOUR_OPENWEATHER_API_KEY"; // Replace with your actual API key

// Application settings
export const DEFAULT_LOCATION = "London";
export const TEMPERATURE_UNITS = {
  CELSIUS: "metric",
  FAHRENHEIT: "imperial"
};
export const DEFAULT_TEMPERATURE_UNIT = TEMPERATURE_UNITS.CELSIUS;

// UI settings
export const FORECAST_DAYS = 5;
export const DISPLAY_MODES = {
  DAILY: "daily",
  HOURLY: "hourly"
};
export const DEFAULT_DISPLAY_MODE = DISPLAY_MODES.DAILY;

// Layout types for mobile view
export const LAYOUT_TYPES = {
  GRID: "grid",
  STACKED: "stacked"
};

// Error messages
export const ERROR_MESSAGES = {
  LOCATION_NOT_FOUND: "Location not found. Please try another city name.",
  API_ERROR: "Error fetching weather data. Please try again later.",
  GEOLOCATION_ERROR: "Could not determine your location. Using default location."
};






