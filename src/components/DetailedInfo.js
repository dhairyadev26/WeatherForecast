import React from "react";
import PropTypes from "prop-types";
import { TEMPERATURE_UNITS } from "../constants/generalConstants";

/**
 * DetailedInfo component displays hourly weather information for a selected day
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of hourly forecast data for a specific day
 * @param {string} props.unit - Temperature unit (metric or imperial)
 */
const DetailedInfo = ({ data, unit = TEMPERATURE_UNITS.CELSIUS }) => {
  // Get current hour and date for comparison
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentDay = currentDate.getDate();

  // Get hour from timestamp
  const getHour = timestamp => {
    const date = new Date(timestamp * 1000);
    return date.getHours();
  };

  // Get date from timestamp
  const getDate = timestamp => {
    const date = new Date(timestamp * 1000);
    return date.getDate();
  };

  // Format timestamp to display time in 12-hour format with AM/PM
  const formatTime = timestamp => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    return `${formattedHours}:00 ${ampm}`;
  };

  // Get weather icon URL
  const getIconUrl = iconCode => `https://openweathermap.org/img/w/${iconCode}.png`;

  // Get wind direction from degrees
  const getWindDirection = degrees => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  // Display detailed information for an hourly forecast
  const renderHourlyInfo = (item, index) => {
    const itemHour = getHour(item.dt);
    const itemDate = getDate(item.dt);
    const windDirection = getWindDirection(item.wind.deg);
    const unitSymbol = unit === TEMPERATURE_UNITS.CELSIUS ? '°C' : '°F';
    const windUnit = unit === TEMPERATURE_UNITS.CELSIUS ? 'm/s' : 'mph';
    
    const feelsLike = Math.round(item.main.feels_like);
    const temp = Math.round(item.main.temp);
    const humidity = item.main.humidity;
    const windSpeed = Math.round(item.wind.speed);
    const cloudCoverage = item.clouds.all;
    const weatherDescription = item.weather[0].description;
    const iconCode = item.weather[0].icon;
    
    return (
      <div className="hourly-info" key={index} data-testid={`hourly-info-${index}`}>
        <div className="hour-header">
          <div className="hour-of-the-day">{formatTime(item.dt)}</div>
          <div className="weather-icon">
            <img src={getIconUrl(iconCode)} alt={weatherDescription} />
          </div>
        </div>
        
        <div className="hour-details">
          <div className="hour-temperature">
            <span className="temp-value">{`${temp}${unitSymbol}`}</span>
            <span className="feels-like">{`Feels like: ${feelsLike}${unitSymbol}`}</span>
          </div>
          
          <div className="weather-details">
            <div className="weather-description">{weatherDescription}</div>
            <div className="humidity">{`Humidity: ${humidity}%`}</div>
            <div className="wind">{`Wind: ${windSpeed} ${windUnit} ${windDirection}`}</div>
            <div className="clouds">{`Clouds: ${cloudCoverage}%`}</div>
          </div>
        </div>
      </div>
    );
  };

  // Filter and render hourly forecasts
  // Show hours from current hour if it's today, otherwise show all hours
  const filteredData = data.filter(item => {
    const itemHour = getHour(item.dt);
    const itemDate = getDate(item.dt);
    
    if (itemDate === currentDay) {
      // For today, only show future hours
      return itemHour >= currentHour;
    } else {
      // For other days, show all reasonable hours (5 AM to 11 PM)
      return itemHour >= 5 && itemHour <= 23;
    }
  });

  return (
    <div className="hourly-container">
      <h3 className="hourly-title">Hourly Forecast</h3>
      {filteredData.length > 0 ? (
        <div className="hourly-forecast" data-testid="hourly-forecast">
          {filteredData.map(renderHourlyInfo)}
        </div>
      ) : (
        <div className="no-data">No hourly data available for this period</div>
      )}
    </div>
  );
};

DetailedInfo.propTypes = {
  data: PropTypes.array.isRequired,
  unit: PropTypes.string
};

export default DetailedInfo;





