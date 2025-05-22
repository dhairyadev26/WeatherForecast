import { 
  FETCH_DATA_REQUEST,
  FETCH_DATA_FULFILLED, 
  FETCH_DATA_REJECTED 
} from "../constants/ActionTypes";
import { 
  API_BASE_URL,
  API_ENDPOINTS,
  APP_ID,
  ERROR_MESSAGES,
  DEFAULT_TEMPERATURE_UNIT
} from "../constants/generalConstants";

import axios from "axios";

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
 * Fetch weather forecast data by location (city name or coordinates)
 * @param {string|Object} location - City name or coordinates object
 * @param {string} unit - Temperature unit (metric or imperial)
 * @returns {Function} Thunk function
 */
export const fetchData = (location, unit = DEFAULT_TEMPERATURE_UNIT) => async (dispatch) => {
  // Dispatch request action to indicate loading state
  dispatch({ type: FETCH_DATA_REQUEST });
  
  try {
    // Create request URL based on location type
    const requestUrl = createRequestUrl(location, unit);
    
    // Make API request
    const response = await axios.get(requestUrl);
    
    // Dispatch success action with data
    dispatch({
      type: FETCH_DATA_FULFILLED, 
      payload: response.data
    });
    
    return response.data;
  } catch (error) {
    // Handle different error types
    let errorMessage = ERROR_MESSAGES.API_ERROR;
    
    if (error.response) {
      // Server responded with an error status
      if (error.response.status === 404) {
        errorMessage = ERROR_MESSAGES.LOCATION_NOT_FOUND;
      }
    } else if (error.request) {
      // Request made but no response received (network error)
      errorMessage = "Network error. Please check your connection.";
    }
    
    // Dispatch error action
    dispatch({
      type: FETCH_DATA_REJECTED, 
      payload: errorMessage
    });
    
    // Re-throw for component-level error handling if needed
    throw new Error(errorMessage);
  }
};





