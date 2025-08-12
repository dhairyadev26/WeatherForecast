import { combineReducers } from "redux";
import weatherStation from "./weatherStation";
import theme from "./theme";
import alerts from "./alerts";

/**
 * Root reducer that combines all reducers in the application
 * Includes weatherStation, theme, and alerts reducers
 */
const rootReducer = combineReducers({
  weatherStation,
  theme,
  alerts
});

export default rootReducer;
