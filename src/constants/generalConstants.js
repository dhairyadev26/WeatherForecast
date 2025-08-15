/**
 * General application constants
 */

// API settings
export const API_BASE_URL = "https://api.openweathermap.org/data/2.5";
export const API_ENDPOINTS = {
  FORECAST: "/forecast",
  CURRENT: "/weather"
};
export const APP_ID = "17a6438b1d63d5b05f7039e7cb52cde7"; // Free OpenWeather API key for demo

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

// Theme settings
export const THEMES = {
  LIGHT: "light",
  DARK: "dark"
};
export const DEFAULT_THEME = THEMES.LIGHT;

// Alert and notification settings
export const ALERT_TYPES = {
  WEATHER: "weather",
  SYSTEM: "system"
};

export const SEVERITY_LEVELS = {
  INFO: "info",
  WARNING: "warning",
  SEVERE: "severe",
  EXTREME: "extreme"
};

export const NOTIFICATION_TIMEOUT = 5000; // 5 seconds

// Error messages
export const ERROR_MESSAGES = {
  LOCATION_NOT_FOUND: "Location not found. Please try another city name.",
  API_ERROR: "Error fetching weather data. Please try again later.",
  GEOLOCATION_ERROR: "Could not determine your location. Using default location."
};






