import React, { Component } from "react";
import { connect } from "react-redux";

import ForecastTiles from "./ForecastTiles";
import Dashboard from "./Dashboard";

const WeatherForecast = ({ data }) => {

    const { city, list } = data;
    const { name } = city;
  
    return (
      <div className="weather-forecast-wrapper">
        <Dashboard city={name} />
        <ForecastTiles forecasts={list} />
      </div>
    );
};

export default WeatherForecast;



// Commit: fix- @ 2025-01-04T20:29:43
