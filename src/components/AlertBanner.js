import React from "react";
import PropTypes from "prop-types";
import { SEVERITY_LEVELS } from "../constants/generalConstants";

/**
 * AlertBanner component displays weather alerts in a banner
 * @param {Object} props - Component props
 * @param {Array} props.alerts - Array of alerts to display
 * @param {Function} props.onDismiss - Function to call when an alert is dismissed
 */
const AlertBanner = ({ alerts = [], onDismiss }) => {
  if (!alerts || alerts.length === 0) {
    return null;
  }
  
  // Get the most severe alert to display first
  const severityOrder = {
    [SEVERITY_LEVELS.EXTREME]: 1,
    [SEVERITY_LEVELS.SEVERE]: 2,
    [SEVERITY_LEVELS.WARNING]: 3,
    [SEVERITY_LEVELS.INFO]: 4
  };
  
  const sortedAlerts = [...alerts].sort((a, b) => {
    return severityOrder[a.severity] - severityOrder[b.severity];
  });
  
  const handleDismiss = (alertId) => {
    onDismiss(alertId);
  };
  
  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  
  return (
    <div className="alert-banner" data-testid="alert-banner">
      {sortedAlerts.map((alert) => (
        <div 
          key={alert.id} 
          className={`alert-item severity-${alert.severity}`}
          data-testid={`alert-${alert.id}`}
        >
          <div className="alert-content">
            <div className="alert-header">
              <h3 className="alert-title">{alert.title}</h3>
              <span className="alert-severity">{alert.severity.toUpperCase()}</span>
            </div>
            <p className="alert-description">{alert.description}</p>
            <div className="alert-footer">
              {alert.start && alert.end && (
                <span className="alert-time">
                  {`Valid: ${formatDate(alert.start)} - ${formatDate(alert.end)}`}
                </span>
              )}
              {alert.source && (
                <span className="alert-source">Source: {alert.source}</span>
              )}
            </div>
          </div>
          <button 
            className="alert-dismiss"
            onClick={() => handleDismiss(alert.id)}
            aria-label="Dismiss alert"
            data-testid={`dismiss-${alert.id}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

AlertBanner.propTypes = {
  alerts: PropTypes.array,
  onDismiss: PropTypes.func.isRequired
};

export default AlertBanner;
