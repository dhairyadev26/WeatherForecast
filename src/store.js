import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { fetchData } from "./actions/weatherStation";
import { DEFAULT_LOCATION, DEFAULT_TEMPERATURE_UNIT } from "./constants/generalConstants";

// Create Redux store with thunk middleware for async actions
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// Initialize weather data with default location on app startup
store.dispatch(fetchData(DEFAULT_LOCATION, DEFAULT_TEMPERATURE_UNIT));

export default store;