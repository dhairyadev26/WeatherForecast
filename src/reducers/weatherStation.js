import { 
  FETCH_DATA_REQUEST,
  FETCH_DATA_FULFILLED, 
  FETCH_DATA_REJECTED,
  SET_TEMPERATURE_UNIT,
  SET_LOCATION,
  ADD_RECENT_LOCATION
} from "../constants/ActionTypes";
import { DEFAULT_TEMPERATURE_UNIT, DEFAULT_LOCATION } from "../constants/generalConstants";

// Initial state for the weather station reducer
const initialState = {
  data: null,
  status: "idle", // idle, loading, success, or error
  error: null,
  lastUpdated: null,
  temperatureUnit: DEFAULT_TEMPERATURE_UNIT,
  currentLocation: DEFAULT_LOCATION,
  recentLocations: [DEFAULT_LOCATION]
};

/**
 * Weather station reducer to handle fetch data actions
 * @param {Object} state - Current state 
 * @param {Object} action - Action dispatched
 * @returns {Object} New state
 */
export default function weatherStationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        status: "loading",
        error: null
      };
      
    case FETCH_DATA_FULFILLED:
      return {
        ...state,
        data: action.payload,
        status: "success",
        error: null,
        lastUpdated: new Date().toISOString()
      };
    
    case FETCH_DATA_REJECTED:
      console.error(`Weather data fetch error: ${action.payload}`);
      return {
        ...state,
        status: "error",
        error: action.payload,
        lastUpdated: new Date().toISOString()
      };
    
    case SET_TEMPERATURE_UNIT:
      return {
        ...state,
        temperatureUnit: action.payload
      };
      
    case SET_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      };
      
    case ADD_RECENT_LOCATION:
      // Don't add duplicates to recent locations
      if (state.recentLocations.includes(action.payload)) {
        // Move the location to the front of the list if it already exists
        const filteredLocations = state.recentLocations.filter(
          location => location !== action.payload
        );
        return {
          ...state,
          recentLocations: [action.payload, ...filteredLocations].slice(0, 5) // Keep only the 5 most recent
        };
      }
      
      return {
        ...state,
        recentLocations: [action.payload, ...state.recentLocations].slice(0, 5) // Keep only the 5 most recent
      };
      
    default:
      return state;
  }
}




