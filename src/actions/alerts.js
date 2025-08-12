import {
  FETCH_ALERTS_REQUEST,
  FETCH_ALERTS_SUCCESS,
  FETCH_ALERTS_FAILURE,
  DISMISS_ALERT,
  ADD_NOTIFICATION,
  DISMISS_NOTIFICATION
} from "../constants/ActionTypes";
import {
  API_BASE_URL,
  APP_ID,
  ALERT_TYPES,
  SEVERITY_LEVELS
} from "../constants/generalConstants";
import axios from "axios";

/**
 * Fetch weather alerts for a specific location
 * @param {Object} location - Location coordinates or name
 * @returns {Function} Thunk function
 */
export const fetchAlerts = (location) => async (dispatch) => {
  dispatch({ type: FETCH_ALERTS_REQUEST });

  try {
    // Build the URL based on location type
    let requestUrl;
    if (typeof location === "object" && location.latitude && location.longitude) {
      requestUrl = `${API_BASE_URL}/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=minutely,hourly,daily&appid=${APP_ID}`;
    } else {
      // For demo purposes, we'll create mock alerts since the free API doesn't have alerts
      // In a real app, you would make a proper API call
      dispatch(createMockAlerts(location));
      return;
    }

    const response = await axios.get(requestUrl);
    
    // Process alerts from the API
    let alerts = [];
    if (response.data && response.data.alerts) {
      alerts = response.data.alerts.map(alert => ({
        id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        type: ALERT_TYPES.WEATHER,
        title: alert.event,
        description: alert.description,
        severity: determineSeverity(alert.event),
        start: alert.start,
        end: alert.end,
        source: alert.sender_name
      }));
    }
    
    dispatch({
      type: FETCH_ALERTS_SUCCESS,
      payload: alerts
    });
    
    // Create a notification for each alert
    alerts.forEach(alert => {
      dispatch(addNotification({
        type: ALERT_TYPES.WEATHER,
        title: `Weather Alert: ${alert.title}`,
        message: alert.description.substring(0, 100) + '...',
        severity: alert.severity,
        autoClose: true
      }));
    });
    
    return alerts;
  } catch (error) {
    console.error("Error fetching weather alerts:", error);
    
    dispatch({
      type: FETCH_ALERTS_FAILURE,
      payload: error.message
    });
    
    return Promise.reject(error);
  }
};

/**
 * Create mock alerts for demonstration purposes
 * @param {string} location - Location name
 * @returns {Function} Dispatch function
 */
export const createMockAlerts = (location) => (dispatch) => {
  // Generate a random number of alerts (0-2)
  const numAlerts = Math.floor(Math.random() * 3);
  
  if (numAlerts === 0) {
    dispatch({
      type: FETCH_ALERTS_SUCCESS,
      payload: []
    });
    return;
  }
  
  const possibleAlerts = [
    {
      title: "Heavy Rain Warning",
      description: `Heavy rainfall expected in ${location} over the next 24 hours. Possible accumulation of 30-50mm. Be cautious of potential flooding in low-lying areas.`,
      severity: SEVERITY_LEVELS.WARNING
    },
    {
      title: "Thunderstorm Watch",
      description: `Thunderstorms possible in ${location} this afternoon. Some storms may be severe with lightning, strong winds, and hail. Stay indoors during storms.`,
      severity: SEVERITY_LEVELS.WARNING
    },
    {
      title: "Extreme Heat Alert",
      description: `Dangerously high temperatures expected in ${location} today. Highs reaching 38-40°C. Limit outdoor activity, stay hydrated, and check on vulnerable individuals.`,
      severity: SEVERITY_LEVELS.SEVERE
    },
    {
      title: "High Wind Advisory",
      description: `Strong winds expected in ${location} with gusts up to 70 km/h. Secure loose objects, exercise caution while driving, and watch for falling branches.`,
      severity: SEVERITY_LEVELS.WARNING
    },
    {
      title: "Flash Flood Warning",
      description: `Flash flooding possible in ${location} due to heavy rainfall. Avoid flood-prone areas and do not attempt to cross flooded roadways.`,
      severity: SEVERITY_LEVELS.SEVERE
    }
  ];
  
  // Select random alerts
  const selectedAlerts = [];
  for (let i = 0; i < numAlerts; i++) {
    const randomIndex = Math.floor(Math.random() * possibleAlerts.length);
    const alert = {
      ...possibleAlerts[randomIndex],
      id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: ALERT_TYPES.WEATHER,
      start: Date.now(),
      end: Date.now() + 24 * 60 * 60 * 1000, // 24 hours from now
      source: "Weather Forecast Demo"
    };
    
    // Only add if not already selected
    if (!selectedAlerts.some(a => a.title === alert.title)) {
      selectedAlerts.push(alert);
    }
  }
  
  dispatch({
    type: FETCH_ALERTS_SUCCESS,
    payload: selectedAlerts
  });
  
  // Create a notification for each alert
  selectedAlerts.forEach(alert => {
    dispatch(addNotification({
      type: ALERT_TYPES.WEATHER,
      title: `Weather Alert: ${alert.title}`,
      message: alert.description.substring(0, 100) + '...',
      severity: alert.severity,
      autoClose: true
    }));
  });
  
  return selectedAlerts;
};

/**
 * Determine severity level based on alert event
 * @param {string} event - Alert event name
 * @returns {string} Severity level
 */
const determineSeverity = (event) => {
  const lowercaseEvent = event.toLowerCase();
  
  if (lowercaseEvent.includes('extreme') || 
      lowercaseEvent.includes('emergency') || 
      lowercaseEvent.includes('tornado') || 
      lowercaseEvent.includes('hurricane')) {
    return SEVERITY_LEVELS.EXTREME;
  } else if (lowercaseEvent.includes('severe') || 
             lowercaseEvent.includes('warning') || 
             lowercaseEvent.includes('flood')) {
    return SEVERITY_LEVELS.SEVERE;
  } else if (lowercaseEvent.includes('watch') || 
             lowercaseEvent.includes('advisory')) {
    return SEVERITY_LEVELS.WARNING;
  } else {
    return SEVERITY_LEVELS.INFO;
  }
};

/**
 * Dismiss an alert by ID
 * @param {string} alertId - ID of the alert to dismiss
 * @returns {Object} Action object
 */
export const dismissAlert = (alertId) => ({
  type: DISMISS_ALERT,
  payload: alertId
});

/**
 * Add a notification
 * @param {Object} notification - Notification object
 * @param {string} notification.type - Type of notification (weather, system)
 * @param {string} notification.title - Notification title
 * @param {string} notification.message - Notification message
 * @param {string} notification.severity - Severity level
 * @param {boolean} notification.autoClose - Whether to auto-close after timeout
 * @returns {Object} Action object
 */
export const addNotification = (notification) => ({
  type: ADD_NOTIFICATION,
  payload: notification
});

/**
 * Dismiss a notification by ID
 * @param {string} notificationId - ID of the notification to dismiss
 * @returns {Object} Action object
 */
export const dismissNotification = (notificationId) => ({
  type: DISMISS_NOTIFICATION,
  payload: notificationId
});
