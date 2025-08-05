import React from "react";
import PropTypes from "prop-types";
import { THEMES } from "../constants/generalConstants";

/**
 * ThemeToggle component allows users to switch between light and dark themes
 * @param {Object} props - Component props
 * @param {string} props.theme - Current theme (light or dark)
 * @param {Function} props.onToggle - Function to call when theme is toggled
 */
const ThemeToggle = ({ theme = THEMES.LIGHT, onToggle }) => {
  const isDarkMode = theme === THEMES.DARK;
  
  const handleToggle = () => {
    onToggle(isDarkMode ? THEMES.LIGHT : THEMES.DARK);
  };

  return (
    <div className="theme-toggle" data-testid="theme-toggle">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleToggle}
          data-testid="theme-toggle-input"
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        />
        <span className="slider round">
          <span className="toggle-icon">
            {isDarkMode ? (
              // Moon icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </span>
        </span>
      </label>
    </div>
  );
};

ThemeToggle.propTypes = {
  theme: PropTypes.oneOf([THEMES.LIGHT, THEMES.DARK]),
  onToggle: PropTypes.func.isRequired
};

export default ThemeToggle;
