import React, { useState } from "react";
import PropTypes from "prop-types";
import DetailedInfo from "./DetailedInfo";
import { TEMPERATURE_UNITS } from "../constants/generalConstants";

/**
 * ForecastTiles component for displaying a 5-day weather forecast
 * @param {Object} props - Component props
 * @param {Array} props.forecasts - Array of forecast data
 * @param {string} props.unit - Temperature unit (metric or imperial)
 */
const ForecastTiles = ({ forecasts, unit = TEMPERATURE_UNITS.CELSIUS }) => {
  const [expandedTileIndex, setExpandedTileIndex] = useState(null);

  // Filters the data by date and returns an Object containing a list of 5-day forecast
  const groupByDays = (data) => {
    return data.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0, 10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);
      return list;
    }, {});
  };

  // Returns day of the week
  const getDayInfo = (data) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
  };

  // Fetches the weather icon
  const getIcon = (data) => `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;

  // Gets the Minimum, Maximum temperatures and Avg Humidity of the day
  const getInfo = (data) => {
    const temps = {
      min: [],
      max: [],
      humidity: []
    };

    data.forEach(item => {
      temps.max.push(item.main.temp_max);
      temps.min.push(item.main.temp_min);
      temps.humidity.push(item.main.humidity);
    });

    const minTemp = Math.round(Math.min(...temps.min));
    const maxTemp = Math.round(Math.max(...temps.max));
    const avgHumidity = Math.round(
      temps.humidity.reduce((curr, next) => curr + next) / temps.humidity.length
    );

    // Temperature unit symbol
    const unitSymbol = unit === TEMPERATURE_UNITS.CELSIUS ? '°C' : '°F';

    return (
      <div className="weather-info">
        <div className="min-max">
          <strong>{`${maxTemp}${unitSymbol}`}</strong> / {`${minTemp}${unitSymbol}`}
        </div>
        <div className="more-info">
          {`Avg. Humidity: ${avgHumidity}%`}
        </div>
      </div>
    );
  };

  // Toggles accordion to display hourly weather information
  const showMoreInfo = (index) => {
    setExpandedTileIndex(expandedTileIndex === index ? null : index);
  };

  // Group forecasts by day
  const tiles = Object.values(groupByDays(forecasts));

  // Ensure we only show 5 days of forecast
  const forecastTiles = tiles.length > 5 ? tiles.slice(0, 5) : tiles;

  return (
    <div className="forecast-tiles">
      {forecastTiles.map((item, i) => (
        <div
          className={`forecast-tile ${expandedTileIndex === i ? 'expanded' : ''}`}
          key={i}
          onClick={() => showMoreInfo(i)}
          data-testid={`forecast-tile-${i}`}
        >
          <div className="primary-info">
            <div className="icon">
              <img src={getIcon(item)} alt={item[0].weather[0].description} />
              <span className="day">{getDayInfo(item)}</span>
            </div>
            {getInfo(item)}
          </div>
          {expandedTileIndex === i && (
            <div className="detailed-info">
              <DetailedInfo data={item} unit={unit} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

ForecastTiles.propTypes = {
  forecasts: PropTypes.array.isRequired,
  unit: PropTypes.string
};

export default ForecastTiles;






