import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NOTIFICATION_TIMEOUT, SEVERITY_LEVELS } from "../constants/generalConstants";

/**
 * NotificationCenter component displays toast-style notifications
 * @param {Object} props - Component props
 * @param {Array} props.notifications - Array of notifications to display
 * @param {Function} props.onDismiss - Function to call when a notification is dismissed
 */
const NotificationCenter = ({ notifications = [], onDismiss }) => {
  useEffect(() => {
    // Set up auto-close timers for notifications
    const timers = notifications
      .filter(notification => notification.autoClose)
      .map(notification => {
        return setTimeout(() => {
          onDismiss(notification.id);
        }, NOTIFICATION_TIMEOUT);
      });
      
    // Clear timers on unmount
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [notifications, onDismiss]);
  
  if (!notifications || notifications.length === 0) {
    return null;
  }
  
  const handleDismiss = (notificationId) => {
    onDismiss(notificationId);
  };
  
  const getIconBySeverity = (severity) => {
    switch (severity) {
      case SEVERITY_LEVELS.INFO:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        );
      case SEVERITY_LEVELS.WARNING:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
          </svg>
        );
      case SEVERITY_LEVELS.SEVERE:
      case SEVERITY_LEVELS.EXTREME:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="notification-center" data-testid="notification-center">
      {notifications.map((notification) => (
        <div 
          key={notification.id} 
          className={`notification-item severity-${notification.severity}`}
          data-testid={`notification-${notification.id}`}
        >
          <div className="notification-icon">
            {getIconBySeverity(notification.severity)}
          </div>
          <div className="notification-content">
            <h4 className="notification-title">{notification.title}</h4>
            <p className="notification-message">{notification.message}</p>
          </div>
          <button 
            className="notification-dismiss"
            onClick={() => handleDismiss(notification.id)}
            aria-label="Dismiss notification"
            data-testid={`dismiss-${notification.id}`}
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

NotificationCenter.propTypes = {
  notifications: PropTypes.array,
  onDismiss: PropTypes.func.isRequired
};

export default NotificationCenter;
