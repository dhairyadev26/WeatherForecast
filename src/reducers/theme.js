import { SET_THEME } from "../constants/ActionTypes";
import { DEFAULT_THEME } from "../constants/generalConstants";

// Initial state
const initialState = {
  currentTheme: DEFAULT_THEME
};

/**
 * Reducer for theme state
 * @param {Object} state - Current state
 * @param {Object} action - Action to process
 * @returns {Object} New state
 */
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        currentTheme: action.payload
      };
      
    default:
      return state;
  }
};

export default themeReducer;
