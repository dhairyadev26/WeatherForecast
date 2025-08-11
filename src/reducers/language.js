import * as types from '../constants/ActionTypes';
import { DEFAULT_LANGUAGE } from '../constants/localization';

// Initial state
const initialState = {
  currentLanguage: localStorage.getItem('weatherForecast_language') || DEFAULT_LANGUAGE
};

/**
 * Language reducer to handle language setting changes
 * @param {Object} state - Current state
 * @param {Object} action - Action object
 * @returns {Object} - New state
 */
const language = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LANGUAGE:
      // Save language preference to localStorage
      localStorage.setItem('weatherForecast_language', action.payload);
      
      return {
        ...state,
        currentLanguage: action.payload
      };
    default:
      return state;
  }
};

export default language;
