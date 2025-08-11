import React, { useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { fetchData, setTemperatureUnit, setLocation, getWeatherByGeolocation } from "../actions/weatherStation";
import { applyTheme } from "../actions/theme";
import { setLanguage } from "../actions/language";
import UnitToggle from "./UnitToggle";
import LocationSearch from "./LocationSearch";
import GeolocationButton from "./GeolocationButton";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { getText } from "../constants/localization";

/**
 * Header component displays the application title
 */
const Header = () => (
  <header>
    <h1 className="heading" id="main-heading" tabIndex="-1">5-Day Weather Forecast</h1>
  </header>
);

/**
 * SearchBar component for entering and submitting city names
 * @param {Object} props - Component props
 * @param {string} props.defaultCity - Default city name for placeholder
 * @param {Function} props.onSearch - Callback function when search is triggered
 */
const SearchBar = ({ defaultCity, onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = useCallback(() => {
    if (inputValue.trim().length > 0) {
      onSearch(inputValue.trim());
      setInputValue("");
    }
  }, [inputValue, onSearch]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }, [handleSubmit]);

  return (
    <div className="search-container">
      <input
        type="text"
        className="city-input"
        id="city-name"
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={defaultCity || "Enter city name"}
        aria-label="City name"
        aria-describedby="search-instructions"
      />
      <span id="search-instructions" className="sr-only">
        Enter a city name and press Enter or click the search button
      </span>
      <button
        type="button"
        className="search"
        onClick={handleSubmit}
        id="change-city-btn"
        aria-label="Search for weather in this city"
      >
        <span aria-hidden="true">&gt;</span>
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  defaultCity: PropTypes.string,
  onSearch: PropTypes.func.isRequired
};

/**
 * ErrorMessage component to display validation errors
 * @param {Object} props - Component props
 * @param {boolean} props.visible - Whether the error should be visible
 * @param {string} props.message - The error message to display
 */
const ErrorMessage = ({ visible, message }) => (
  <span className="error" style={{ display: visible ? 'block' : 'none' }}>
    {message}
  </span>
);

ErrorMessage.propTypes = {
  visible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

/**
 * Dashboard component that serves as the main control panel
 * Combines Header, LocationSearch and error messaging
 */
const Dashboard = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.weatherStation.status);
  const error = useSelector((state) => state.weatherStation.error);
  const temperatureUnit = useSelector((state) => state.weatherStation.temperatureUnit);
  const recentLocations = useSelector((state) => state.weatherStation.recentLocations);
  const currentLocation = useSelector((state) => state.weatherStation.currentLocation);
  const geoStatus = useSelector((state) => state.weatherStation.geolocation.status);
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const currentLanguage = useSelector((state) => state.language.currentLanguage);

  const handleSearch = useCallback((searchTerm) => {
    dispatch(setLocation(searchTerm, temperatureUnit));
  }, [dispatch, temperatureUnit]);

  const handleUnitToggle = useCallback((unit) => {
    dispatch(setTemperatureUnit(unit, currentLocation));
  }, [dispatch, currentLocation]);

  const handleGeolocation = useCallback(() => {
    dispatch(getWeatherByGeolocation(temperatureUnit));
  }, [dispatch, temperatureUnit]);

  const handleThemeToggle = useCallback((theme) => {
    dispatch(applyTheme(theme));
  }, [dispatch]);

  const handleLanguageChange = useCallback((language) => {
    dispatch(setLanguage(language));
  }, [dispatch]);

  const isError = status === "error";
  const wrapperClass = isError ? "weather-dashboard invalid-city" : "weather-dashboard";
  const errorMessage = error || "Please enter valid city name!";

  return (
    <div className={wrapperClass} data-testid="weather-dashboard">
      <Header />
      <section className="controls" aria-label="Weather controls">
        <div className="search-row">
          <LocationSearch 
            onSearch={handleSearch} 
            defaultLocation={currentLocation} 
            recentLocations={recentLocations} 
          />
          <GeolocationButton 
            onGetLocation={handleGeolocation}
            status={geoStatus}
          />
        </div>
        <div className="settings-row" role="group" aria-label="Display settings">
          <UnitToggle unit={temperatureUnit} onToggle={handleUnitToggle} />
          <ThemeToggle theme={currentTheme} onToggle={handleThemeToggle} />
          <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
        </div>
      </section>
      <div aria-live="assertive">
        <ErrorMessage 
          visible={isError} 
          message={errorMessage} 
        />
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;






