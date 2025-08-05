import { combineReducers } from "redux";
import weatherStation from "./weatherStation";
import theme from "./theme";

/**
 * Root reducer that combines all reducers in the application
 * Includes weatherStation and theme reducers
 */
const rootReducer = combineReducers({
  weatherStation,
  theme
});

export default rootReducer;
