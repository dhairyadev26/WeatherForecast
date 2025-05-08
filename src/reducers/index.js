import { combineReducers } from "redux";
import weatherStation from "./weatherStation";

/**
 * Root reducer that combines all reducers in the application
 * Currently only includes the weatherStation reducer
 */
const rootReducer = combineReducers({
  weatherStation
});

export default rootReducer;
