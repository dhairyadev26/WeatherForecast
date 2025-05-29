import React, { useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { fetchData } from "../actions/weatherStation";

/**
 * Header component displays the application title
 */
const Header = () => (
  <header>
    <h1 className="heading">5-Day Weather Forecast</h1>
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
      />
      <input
        type="button"
        value=">"
        className="search"
        onClick={handleSubmit}
        id="change-city-btn"
        aria-label="Search city"
      />
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
 * Combines Header, SearchBar and error messaging
 * @param {Object} props - Component props
 * @param {string} props.city - Current city name
 */
const Dashboard = ({ city }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.weatherStation.status);

  const handleSearch = useCallback((searchTerm) => {
    dispatch(fetchData(searchTerm));
  }, [dispatch]);

  const isError = status === "error";
  const wrapperClass = isError ? "weather-dashboard invalid-city" : "weather-dashboard";

  return (
    <div className={wrapperClass} data-testid="weather-dashboard">
      <Header />
      <section className="controls">
        <SearchBar defaultCity={city} onSearch={handleSearch} />
      </section>
      <ErrorMessage 
        visible={isError} 
        message="Please enter valid city name!" 
      />
    </div>
  );
};

Dashboard.propTypes = {
  city: PropTypes.string
};

Dashboard.defaultProps = {
  city: "London"
};

export default Dashboard;






