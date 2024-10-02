import { FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from "../constants/ActionTypes";
import { APP_ID } from "../constants/generalConstants";

import axios from "axios";

export const fetchData = (region) => (dispatch) => {
  const { latitude, longitude } = region || {};

  const getDataByCity = `https://api.openweathermap.org/data/2.5/forecast?q=${region}&units=metric&appid=${APP_ID}`;

  let location = typeof(region) === "object" ? getDataByCoords : getDataByCity;

  return axios.get(location)
    .then((response) => {
      dispatch({type: FETCH_DATA_FULFILLED, payload: response.data});
    })
    .catch((err) => {
      dispatch({type: FETCH_DATA_REJECTED, payload: err}); // Error handling
    });
};





// Commit: layout++ @ 2024-10-03T02:54:20
