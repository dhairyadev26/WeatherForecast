/**
 * Action type constants for Redux actions
 * Used to maintain consistency between actions and reducers
 */

// Weather data fetching action types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_FULFILLED = "FETCH_DATA_FULFILLED";
export const FETCH_DATA_REJECTED = "FETCH_DATA_REJECTED";

// Forecast display settings action types
export const SET_TEMPERATURE_UNIT = "SET_TEMPERATURE_UNIT";
export const SET_DISPLAY_MODE = "SET_DISPLAY_MODE";

// User preferences action types
export const SET_DEFAULT_LOCATION = "SET_DEFAULT_LOCATION";
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const SET_LOCATION = "SET_LOCATION";
export const ADD_RECENT_LOCATION = "ADD_RECENT_LOCATION";
export const GEOLOCATION_REQUEST = "GEOLOCATION_REQUEST";
export const GEOLOCATION_SUCCESS = "GEOLOCATION_SUCCESS";
export const GEOLOCATION_ERROR = "GEOLOCATION_ERROR";

/* eslint-enable */