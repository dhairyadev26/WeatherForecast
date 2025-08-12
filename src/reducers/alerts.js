import {
  FETCH_ALERTS_REQUEST,
  FETCH_ALERTS_SUCCESS,
  FETCH_ALERTS_FAILURE,
  DISMISS_ALERT,
  ADD_NOTIFICATION,
  DISMISS_NOTIFICATION
} from "../constants/ActionTypes";

// Initial state for the alerts reducer
const initialState = {
  alerts: [],
  notifications: [],
  loading: false,
  error: null
};

/**
 * Alerts reducer to handle weather alerts and notifications
 * @param {Object} state - Current state 
 * @param {Object} action - Action dispatched
 * @returns {Object} New state
 */
export default function alertsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALERTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case FETCH_ALERTS_SUCCESS:
      return {
        ...state,
        alerts: action.payload,
        loading: false,
        error: null
      };
    
    case FETCH_ALERTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    case DISMISS_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== action.payload)
      };
      
    case ADD_NOTIFICATION:
      // Create notification with unique id and timestamp
      const newNotification = {
        ...action.payload,
        id: `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date().toISOString()
      };
      
      return {
        ...state,
        notifications: [newNotification, ...state.notifications].slice(0, 5) // Keep only 5 most recent
      };
      
    case DISMISS_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(notification => notification.id !== action.payload)
      };
      
    default:
      return state;
  }
}
