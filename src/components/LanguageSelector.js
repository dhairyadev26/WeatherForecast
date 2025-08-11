import React from 'react';
import PropTypes from 'prop-types';
import { LANGUAGES, LANGUAGE_NAMES } from '../constants/localization';

/**
 * LanguageSelector component for changing the application language
 * @param {Object} props - Component props
 * @param {string} props.currentLanguage - Current language code
 * @param {Function} props.onLanguageChange - Callback when language is changed
 */
const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  // Handler for language change event
  const handleLanguageChange = (e) => {
    onLanguageChange(e.target.value);
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select" className="language-label">
        <i className="language-icon" aria-hidden="true">🌐</i>
        <span className="sr-only">Select language</span>
      </label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={handleLanguageChange}
        aria-label="Select language"
        className="language-select"
      >
        {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

LanguageSelector.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired
};

export default LanguageSelector;
