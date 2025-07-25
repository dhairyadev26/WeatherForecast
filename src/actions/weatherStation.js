import { 
  FETCH_DATA_REQUEST,
  FETCH_DATA_FULFILLED, 
  FETCH_DATA_REJECTED,
  SET_TEMPERATURE_UNIT,
  SET_LOCATION,
  ADD_RECENT_LOCATION,
  GEOLOCATION_REQUEST,
  GEOLOCATION_SUCCESS,
  GEOLOCATION_ERROR
} from "../constants/ActionTypes";
import { 
  API_BASE_URL,
  API_ENDPOINTS,
  APP_ID,
  ERROR_MESSAGES,
  DEFAULT_TEMPERATURE_UNIT
} from "../constants/generalConstants";

import axios from "axios";
import { getCurrentPosition, getLocationNameFromCoords } from "../utils/geolocationUtils";

/**
 * Create and configure API request URLs
 * @param {string|Object} location - City name or coordinates object
 * @param {string} unit - Temperature unit (metric or imperial)
 * @returns {string} URL to fetch data from
 */
const createRequestUrl = (location, unit = DEFAULT_TEMPERATURE_UNIT) => {
  // If location is an object with latitude and longitude
  if (typeof location === "object" && location.latitude && location.longitude) {
    return `${API_BASE_URL}${API_ENDPOINTS.FORECAST}?lat=${location.latitude}&lon=${location.longitude}&units=${unit}&appid=${APP_ID}`;
  }
  
  // If location is a string (city name)
  return `${API_BASE_URL}${API_ENDPOINTS.FORECAST}?q=${location}&units=${unit}&appid=${APP_ID}`;
};

/**
 * Log error details to the console for debugging
 * @param {Error} error - The error object
 * @param {string} location - The location that was being requested
 * @returns {string} Error message for user display
 */
const handleApiError = (error, location) => {
  let errorMessage = ERROR_MESSAGES.API_ERROR;
  let errorDetails = {};
  
  if (error.response) {
    // Server responded with an error status
    const { status, data } = error.response;
    errorDetails = {
      status,
      statusText: error.response.statusText,
      data,
      endpoint: error.config.url
    };
    
    if (status === 404) {
      errorMessage = `${ERROR_MESSAGES.LOCATION_NOT_FOUND} (${location})`;
    } else if (status === 401) {
      errorMessage = "API key is invalid or missing.";
    } else if (status === 429) {
      errorMessage = "API rate limit exceeded. Please try again later.";
    } else if (status >= 500) {
      errorMessage = "Weather service is currently unavailable. Please try again later.";
    }
  } else if (error.request) {
    // Request made but no response received (network error)
    errorMessage = "Network error. Please check your connection.";
    errorDetails = {
      request: error.request,
      message: error.message
    };
  } else {
    // Error in setting up the request
    errorMessage = "An unexpected error occurred.";
    errorDetails = {
      message: error.message
    };
  }
  
  // Log detailed error information for debugging
  console.error("Weather API Error:", {
    message: errorMessage,
    location,
    details: errorDetails,
    originalError: error
  });
  
  return errorMessage;
};

/**
 * Fetch weather forecast data by location (city name or coordinates)
 * @param {string|Object} location - City name or coordinates object
 * @param {string} unit - Temperature unit (metric or imperial)
 * @returns {Function} Thunk function
 */
export const fetchData = (location, unit = DEFAULT_TEMPERATURE_UNIT) => async (dispatch) => {
  // Input validation
  if (!location) {
    const errorMessage = "Location is required";
    dispatch({ type: FETCH_DATA_REJECTED, payload: errorMessage });
    return Promise.reject(new Error(errorMessage));
  }
  
  // Dispatch request action to indicate loading state
  dispatch({ type: FETCH_DATA_REQUEST });
  
  try {
    // Create request URL based on location type
    const requestUrl = createRequestUrl(location, unit);
    
    // Configure timeout and headers
    const config = {
      timeout: 10000, // 10 second timeout
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    
    // Make API request
    const response = await axios.get(requestUrl, config);
    
    // Validate response data
    if (!response.data || !response.data.list || response.data.list.length === 0) {
      throw new Error("Invalid data received from weather service");
    }
    
    // Dispatch success action with data
    dispatch({
      type: FETCH_DATA_FULFILLED, 
      payload: response.data
    });
    
    return response.data;
  } catch (error) {
    // Process error and generate user-friendly message
    const errorMessage = handleApiError(error, location);
    
    // Dispatch error action
    dispatch({
      type: FETCH_DATA_REJECTED, 
      payload: errorMessage
    });
    
    return Promise.reject(new Error(errorMessage));
  }
};

/**
 * Set the temperature unit (Celsius or Fahrenheit)
 * @param {string} unit - The unit to set (metric or imperial)
 * @param {string|Object} currentLocation - Current location to refresh data with new unit
 * @returns {Function} Thunk function that updates unit and refreshes data
 */
export const setTemperatureUnit = (unit, currentLocation) => (dispatch) => {
  // First, update the temperature unit in the store
  dispatch({
    type: SET_TEMPERATURE_UNIT,
    payload: unit
  });
  
  // Then, if we have a current location, refresh the data with the new unit
  if (currentLocation) {
    return dispatch(fetchData(currentLocation, unit));
  }
  
  return Promise.resolve();
};

/**
 * Set the current location and fetch data for it
 * @param {string} location - The location name to set and fetch data for
 * @param {string} unit - Temperature unit to use for fetching data
 * @returns {Function} Thunk function that updates location, adds it to recent locations, and fetches data
 */
export const setLocation = (location, unit = DEFAULT_TEMPERATURE_UNIT) => (dispatch) => {
  // Update the current location
  dispatch({
    type: SET_LOCATION,
    payload: location
  });
  
  // Add to recent locations
  dispatch({
    type: ADD_RECENT_LOCATION,
    payload: location
  });
  
  // Fetch weather data for the new location
  return dispatch(fetchData(location, unit));
};

/**
 * Add a location to the recent locations list
 * @param {string} location - The location to add to recent locations
 * @returns {Object} Action object
 */
export const addRecentLocation = (location) => ({
  type: ADD_RECENT_LOCATION,
  payload: location
});

/**
 * Use browser geolocation to get weather for user's current location
 * @param {string} unit - Temperature unit (metric or imperial)
 * @returns {Function} Thunk function that gets location, fetches weather, and updates state
 */
export const getWeatherByGeolocation = (unit = DEFAULT_TEMPERATURE_UNIT) => async (dispatch) => {
  dispatch({ type: GEOLOCATION_REQUEST });
  
  try {
    // Get coordinates from browser geolocation API
    const coords = await getCurrentPosition();
    
    // Fetch location name using reverse geocoding
    const locationName = await getLocationNameFromCoords(coords);
    
    // Update state with successful geolocation
    dispatch({
      type: GEOLOCATION_SUCCESS,
      payload: {
        coords,
        locationName
      }
    });
    
    // Update current location
    dispatch({
      type: SET_LOCATION,
      payload: locationName
    });
    
    // Add to recent locations
    dispatch({
      type: ADD_RECENT_LOCATION,
      payload: locationName
    });
    
    // Fetch weather data using coordinates
    return dispatch(fetchData(coords, unit));
  } catch (error) {
    // Handle geolocation error
    console.error("Geolocation error:", error);
    
    dispatch({
      type: GEOLOCATION_ERROR,
      payload: error.message
    });
    
    return Promise.reject(error);
  }
};





