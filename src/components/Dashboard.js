import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { fetchData } from "../actions/weatherStation";

/**
 * Dashboard component that displays the main controls and header
 * @param {Object} props - Component props
 * @param {string} props.city - Current city name
 */
const Dashboard = ({ city }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.weatherStation.status);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const wrapperClass = status === "error" 
    ? "weather-dashboard invalid-city" 
    : "weather-dashboard";

  const updateCity = () => {
    if (inputValue.trim().length > 0) {
      dispatch(fetchData(inputValue.trim()));
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      updateCity();
    }
  };

  return (
    <div className={wrapperClass}>
      <header>
        <h1 className="heading">5-Day Weather Forecast</h1>
      </header>
      <section className="controls">
        <div className="search-container">
          <input
            type="text"
            className="city-input"
            id="city-name"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={city || "Enter city name"}
            aria-label="City name"
          />
          <input
            type="button"
            value=">"
            className="search"
            onClick={updateCity}
            id="change-city-btn"
            aria-label="Search city"
          />
        </div>
      </section>
      <span className="error">Please enter valid city name!</span>
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






