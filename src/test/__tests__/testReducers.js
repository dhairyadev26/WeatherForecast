import React from "react";
import * as actionTypes from "../../constants/ActionTypes";
import reducer from "../../reducers";
import mockData from "./data/forecast.json";
import { TEMPERATURE_UNITS } from "../../constants/generalConstants";

describe("Weather Station Reducer", () => {
  
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      "weatherStation": {
        "data": null,
        "status": "idle",
        "error": null,
        "lastUpdated": null,
        "temperatureUnit": TEMPERATURE_UNITS.CELSIUS
      }
    });
  });

  it("should handle FETCH_DATA_REQUEST", () => {
    const action = {
      type: actionTypes.FETCH_DATA_REQUEST
    };

    expect(reducer({}, action)).toEqual({
      "weatherStation": {
        "data": null,
        "status": "loading",
        "error": null,
        "lastUpdated": null,
        "temperatureUnit": TEMPERATURE_UNITS.CELSIUS
      }
    });
  });

  it("should handle FETCH_DATA_FULFILLED", () => {
    const action = {
      type: actionTypes.FETCH_DATA_FULFILLED,
      payload: mockData.weatherStation.data
    };

    const result = reducer({}, action);
    
    expect(result.weatherStation.data).toEqual(mockData.weatherStation.data);
    expect(result.weatherStation.status).toEqual("success");
    expect(result.weatherStation.error).toBeNull();
    expect(result.weatherStation.lastUpdated).toBeInstanceOf(Date);
  });

  it("should handle FETCH_DATA_REJECTED with error message", () => {
    const errorMsg = "City not found";
    const action = {
      type: actionTypes.FETCH_DATA_REJECTED,
      payload: { message: errorMsg }
    };

    expect(reducer({}, action)).toEqual({
      "weatherStation": {
        "data": null,
        "status": "error",
        "error": errorMsg,
        "lastUpdated": null
      }
    });
  });

  it("should handle FETCH_DATA_REJECTED with default error", () => {
    const action = {
      type: actionTypes.FETCH_DATA_REJECTED,
      payload: {}
    };

    expect(reducer({}, action)).toEqual({
      "weatherStation": {
        "data": null,
        "status": "error",
        "error": "Failed to fetch weather data",
        "lastUpdated": null
      }
    });
  });
  
  it("should preserve existing data when an error occurs", () => {
    // Initial state with data
    const initialState = {
      weatherStation: {
        data: mockData.weatherStation.data,
        status: "success",
        error: null,
        lastUpdated: new Date()
      }
    };
    
    // Error action
    const action = {
      type: actionTypes.FETCH_DATA_REJECTED,
      payload: { message: "Network error" }
    };
    
    const result = reducer(initialState, action);
    
    // Status and error should be updated but data should be preserved
    expect(result.weatherStation.status).toEqual("error");
    expect(result.weatherStation.error).toEqual("Network error");
    expect(result.weatherStation.data).toEqual(mockData.weatherStation.data);
    expect(result.weatherStation.lastUpdated).toEqual(initialState.weatherStation.lastUpdated);
  });
  
  it("should handle SET_TEMPERATURE_UNIT action", () => {
    // Initial state with Celsius
    const initialState = {
      weatherStation: {
        data: mockData.weatherStation.data,
        status: "success",
        error: null,
        lastUpdated: new Date(),
        temperatureUnit: TEMPERATURE_UNITS.CELSIUS
      }
    };
    
    // Action to change unit to Fahrenheit
    const action = {
      type: actionTypes.SET_TEMPERATURE_UNIT,
      payload: TEMPERATURE_UNITS.FAHRENHEIT
    };
    
    const result = reducer(initialState, action);
    
    // Only temperatureUnit should be updated
    expect(result.weatherStation.temperatureUnit).toEqual(TEMPERATURE_UNITS.FAHRENHEIT);
    expect(result.weatherStation.status).toEqual("success");
    expect(result.weatherStation.data).toEqual(mockData.weatherStation.data);
    expect(result.weatherStation.error).toBeNull();
    expect(result.weatherStation.lastUpdated).toEqual(initialState.weatherStation.lastUpdated);
  });
});

