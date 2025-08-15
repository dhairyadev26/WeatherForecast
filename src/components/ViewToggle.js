import React from 'react';
import PropTypes from 'prop-types';

const ViewToggle = ({ activeView, onToggle }) => {
  return (
    <div className="view-toggle" role="tablist" aria-label="View options">
      <button
        role="tab"
        aria-selected={activeView === 'card'}
        className={`toggle-btn ${activeView === 'card' ? 'active' : ''}`}
        onClick={() => onToggle('card')}
      >
        Card View
      </button>
      <button
        role="tab"
        aria-selected={activeView === 'list'}
        className={`toggle-btn ${activeView === 'list' ? 'active' : ''}`}
        onClick={() => onToggle('list')}
      >
        List View
      </button>
    </div>
  );
};

ViewToggle.propTypes = {
  activeView: PropTypes.oneOf(['card', 'list']).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default ViewToggle;
