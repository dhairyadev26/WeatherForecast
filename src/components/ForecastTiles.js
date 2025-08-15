import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import DetailedInfo from "./DetailedInfo";
import { TEMPERATURE_UNITS } from "../constants/generalConstants";
import { memoize } from "../utils/performance";

/**
 * ForecastTiles component for displaying a weather forecast
 * @param {Object} props - Component props
 * @param {Array} props.forecasts - Array of forecast data
 * @param {string} props.unit - Temperature unit (metric or imperial)
 * @param {boolean} props.compactView - Whether to use compact view for smaller screens
 * @param {number} props.displayCount - Number of days to display (default: 5)
 */
const ForecastTiles = ({ 
  forecasts, 
  unit = TEMPERATURE_UNITS.CELSIUS,
  compactView = false,
  displayCount = 5
}) => {
  const [expandedTileIndex, setExpandedTileIndex] = useState(null);

  // Filters the data by date and returns an Object containing a list of 5-day forecast
  // Memoized for performance
  const groupByDays = useMemo(() => memoize((data) => {
    return data.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0, 10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);
      return list;
    }, {});
  }), []);

  // Returns day of the week - memoized for performance
  const getDayInfo = useMemo(() => memoize((data) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
  }), []);

  // Fetches the weather icon - memoized for performance
  const getIcon = useMemo(() => memoize((data) => 
    `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`
  ), []);

  // Gets the Minimum, Maximum temperatures and Avg Humidity of the day
  // Memoized for performance
  const getInfo = useMemo(() => memoize((data, unit) => {
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
          <strong>{`${maxTemp}${unitSymbol}`}</strong> <span className="sr-only">high</span> / <span aria-hidden="true">{`${minTemp}${unitSymbol}`}</span>
          <span className="sr-only">low of {`${minTemp}${unitSymbol}`}</span>
        </div>
        <div className="more-info">
          <span>{`Avg. Humidity: ${avgHumidity}%`}</span>
        </div>
      </div>
    );
  }), []);

  // Toggles accordion to display hourly weather information
  const showMoreInfo = useCallback((index) => {
    setExpandedTileIndex(expandedTileIndex === index ? null : index);
  }, [expandedTileIndex]);

  // Group forecasts by day - memoized for performance
  const groupedForecasts = useMemo(() => {
    const tiles = Object.values(groupByDays(forecasts));
    return tiles.length > displayCount ? tiles.slice(0, displayCount) : tiles;
  }, [forecasts, displayCount, groupByDays]);

  // Determine CSS classes based on compact view
  const tileClass = useMemo(() => 
    compactView ? 'forecast-tile compact' : 'forecast-tile', 
  [compactView]);
  
  const tilesContainerClass = useMemo(() => 
    compactView ? 'forecast-tiles compact' : 'forecast-tiles', 
  [compactView]);

  return (
    <div className={tilesContainerClass} role="region" aria-label="5-Day Weather Forecast">
      {groupedForecasts.map((item, i) => (
        <div
          className={`${tileClass} ${expandedTileIndex === i ? 'expanded' : ''}`}
          key={i}
          onClick={() => showMoreInfo(i)}
          onKeyPress={(e) => e.key === 'Enter' && showMoreInfo(i)}
          data-testid={`forecast-tile-${i}`}
          tabIndex="0"
          role="button"
          aria-expanded={expandedTileIndex === i}
          aria-controls={`details-${i}`}
          aria-label={`${getDayInfo(item)} weather forecast. ${item[0].weather[0].description}. Click to ${expandedTileIndex === i ? 'hide' : 'show'} hourly details`}
        >
          <div className="primary-info">
            <div className="icon">
              <img src={getIcon(item)} alt="" aria-hidden="true" />
              <span className="day">
                {compactView ? getDayInfo(item).substring(0, 3) : getDayInfo(item)}
              </span>
            </div>
            {getInfo(item, unit)}
          </div>
          {expandedTileIndex === i && (
            <div className="detailed-info" id={`details-${i}`}>
              <DetailedInfo data={item} unit={unit} compactView={compactView} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

ForecastTiles.propTypes = {
  forecasts: PropTypes.array.isRequired,
  unit: PropTypes.string,
  compactView: PropTypes.bool,
  displayCount: PropTypes.number
};

export default React.memo(ForecastTiles);






