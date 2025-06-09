import React from "react";
import PropTypes from "prop-types";
import { TEMPERATURE_UNITS } from "../constants/generalConstants";

/**
 * UnitToggle component that allows switching between Celsius and Fahrenheit
 * @param {Object} props - Component props
 * @param {string} props.unit - Current temperature unit
 * @param {Function} props.onToggle - Function to call when unit is toggled
 */
const UnitToggle = ({ unit, onToggle }) => {
  const isCelsius = unit === TEMPERATURE_UNITS.CELSIUS;
  const isFahrenheit = unit === TEMPERATURE_UNITS.FAHRENHEIT;

  return (
    <div className="unit-toggle" data-testid="unit-toggle">
      <div className="toggle-button-group">
        <button
          className={`toggle-button ${isCelsius ? 'active' : ''}`}
          onClick={() => onToggle(TEMPERATURE_UNITS.CELSIUS)}
          aria-pressed={isCelsius}
          aria-label="Switch to Celsius"
          data-testid="celsius-button"
        >
          °C
        </button>
        <button
          className={`toggle-button ${isFahrenheit ? 'active' : ''}`}
          onClick={() => onToggle(TEMPERATURE_UNITS.FAHRENHEIT)}
          aria-pressed={isFahrenheit}
          aria-label="Switch to Fahrenheit"
          data-testid="fahrenheit-button"
        >
          °F
        </button>
      </div>
      <span className="toggle-label">Temperature Unit</span>
    </div>
  );
};

UnitToggle.propTypes = {
  unit: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default UnitToggle;
