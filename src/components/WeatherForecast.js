import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ForecastTiles from "./ForecastTiles";
import Dashboard from "./Dashboard";

/**
 * WeatherForecast component that displays the complete weather forecast UI
 * Including the dashboard and forecast tiles
 * @param {Object} props - Component props
 * @param {Object} props.data - Weather data object
 * @param {string} props.status - Current status of the weather data fetch
 * @param {string} props.temperatureUnit - Current temperature unit (metric or imperial)
 */
const WeatherForecast = ({ data, status, temperatureUnit }) => {
  // Only show forecast tiles if we have data and no errors
  const showForecast = data && data.list && data.list.length > 0 && status === "success";
  
  // Get city name if available
  const cityName = data && data.city ? data.city.name : "";
  
  return (
    <div className="weather-forecast-wrapper">
      <Dashboard city={cityName} />
      {showForecast && <ForecastTiles forecasts={data.list} unit={temperatureUnit} />}
      {status === "loading" && (
        <div className="loading">
          <div className="spinner" aria-label="Loading weather data"></div>
        </div>
      )}
    </div>
  );
};

WeatherForecast.propTypes = {
  data: PropTypes.object,
  status: PropTypes.string,
  temperatureUnit: PropTypes.string
};

const mapStateToProps = (state) => ({
  data: state.weatherStation.data,
  status: state.weatherStation.status,
  temperatureUnit: state.weatherStation.temperatureUnit
});

export default connect(mapStateToProps)(WeatherForecast);




