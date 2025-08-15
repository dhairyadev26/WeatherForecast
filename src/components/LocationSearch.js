import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { debounce } from '../utils/performance';

/**
 * LocationSearch component allows users to search for weather in different locations
 * @param {Object} props - Component props
 * @param {Function} props.onSearch - Function to call when a search is submitted
 * @param {string} props.defaultLocation - Default location to display in the search box
 * @param {Array} props.recentLocations - Recently searched locations
 */
const LocationSearch = ({ onSearch, defaultLocation = '', recentLocations = [] }) => {
  const [searchTerm, setSearchTerm] = useState(defaultLocation);
  const [showRecent, setShowRecent] = useState(false);

  // Debounced search for better performance
  const debouncedSearch = useCallback(
    debounce((term) => {
      if (term.trim()) {
        onSearch(term.trim());
      }
    }, 500),
    [onSearch]
  );

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setShowRecent(false);
    }
  }, [searchTerm, onSearch]);

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  }, [debouncedSearch]);

  const handleFocus = useCallback(() => {
    if (recentLocations.length > 0) {
      setShowRecent(true);
    }
  }, [recentLocations]);

  const handleBlur = useCallback(() => {
    // Delay hiding the recent searches to allow clicking on them
    setTimeout(() => {
      setShowRecent(false);
    }, 200);
  }, []);

  const selectRecentLocation = useCallback((location) => {
    setSearchTerm(location);
    onSearch(location);
    setShowRecent(false);
  }, [onSearch]);

  return (
    <div className="location-search" data-testid="location-search">
      <form onSubmit={handleSubmit}>
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Enter city name..."
            value={searchTerm}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-testid="search-input"
            aria-label="Search for a location"
          />
          <button 
            type="submit" 
            className="search-button"
            data-testid="search-button"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </div>
        
        {showRecent && recentLocations.length > 0 && (
          <div className="recent-locations" data-testid="recent-locations">
            <h4>Recent Searches</h4>
            <ul>
              {recentLocations.map((location, index) => (
                <li 
                  key={`${location}-${index}`}
                  onClick={() => selectRecentLocation(location)}
                  data-testid={`recent-location-${index}`}
                >
                  {location}
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

LocationSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultLocation: PropTypes.string,
  recentLocations: PropTypes.array
};

export default React.memo(LocationSearch);
