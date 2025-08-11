import * as types from '../constants/ActionTypes';

/**
 * Action creator to set the application language
 * @param {string} language - Language code (e.g., 'en', 'es')
 * @returns {Object} - Action object
 */
export const setLanguage = (language) => ({
  type: types.SET_LANGUAGE,
  payload: language
});
