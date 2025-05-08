import { FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from "../constants/ActionTypes";

// Initial state for the weather station reducer
const initialState = {
  data: null,
  status: "idle", // idle, loading, success, or error
  error: null
};

/**
 * Weather station reducer to handle fetch data actions
 * @param {Object} state - Current state 
 * @param {Object} action - Action dispatched
 * @returns {Object} New state
 */
export default function weatherStationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_FULFILLED:
      return {
        ...state,
        data: action.payload,
        status: "success",
        error: null
      };
    
    case FETCH_DATA_REJECTED:
      console.error(`Could not fetch the data from webservice. ${action.payload}.`);
      return {
        ...state,
        status: "error",
        error: action.payload
      };
      
    default:
      return state;
  }
}




