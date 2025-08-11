import { combineReducers } from "redux";
import weatherStation from "./weatherStation";
import theme from "./theme";
import alerts from "./alerts";
import language from "./language";

/**
 * Root reducer that combines all reducers in the application
 * Includes weatherStation, theme, alerts, and language reducers
 */
const rootReducer = combineReducers({
  weatherStation,
  theme,
  alerts,
  language
});

export default rootReducer;
