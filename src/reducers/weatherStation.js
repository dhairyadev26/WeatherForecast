import { 
  FETCH_DATA_REQUEST,
  FETCH_DATA_FULFILLED, 
  FETCH_DATA_REJECTED,
  SET_TEMPERATURE_UNIT
} from "../constants/ActionTypes";
import { DEFAULT_TEMPERATURE_UNIT } from "../constants/generalConstants";

// Initial state for the weather station reducer
const initialState = {
  data: null,
  status: "idle", // idle, loading, success, or error
  error: null,
  lastUpdated: null,
  temperatureUnit: DEFAULT_TEMPERATURE_UNIT
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
      
    default:
      return state;
  }
}




