import alerts from '../../reducers/alerts';
import * as types from '../../constants/ActionTypes';

describe('Alerts Reducer', () => {
  const initialState = {
    alerts: [],
    notifications: []
  };

  test('returns the initial state', () => {
    expect(alerts(undefined, {})).toEqual(initialState);
  });

  test('handles ADD_ALERT', () => {
    const alertPayload = {
      id: 'alert-1',
      title: 'Severe Weather',
      message: 'Heavy rain expected',
      severity: 'severe',
      timestamp: Date.now()
    };
    
    const action = {
      type: types.ADD_ALERT,
      payload: alertPayload
    };
    
    const expectedState = {
      ...initialState,
      alerts: [alertPayload]
    };
    
    expect(alerts(initialState, action)).toEqual(expectedState);
  });

  test('handles DISMISS_ALERT', () => {
    const alertId = 'alert-1';
    const initialStateWithAlert = {
      ...initialState,
      alerts: [
        {
          id: alertId,
          title: 'Severe Weather',
          message: 'Heavy rain expected',
          severity: 'severe',
          timestamp: Date.now()
        },
        {
          id: 'alert-2',
          title: 'Wind Advisory',
          message: 'Strong winds expected',
          severity: 'warning',
          timestamp: Date.now()
        }
      ]
    };
    
    const action = {
      type: types.DISMISS_ALERT,
      payload: alertId
    };
    
    const expectedState = {
      ...initialStateWithAlert,
      alerts: initialStateWithAlert.alerts.filter(alert => alert.id !== alertId)
    };
    
    expect(alerts(initialStateWithAlert, action)).toEqual(expectedState);
  });

  test('handles ADD_NOTIFICATION', () => {
    const notificationPayload = {
      id: 'notification-1',
      title: 'Location Updated',
      message: 'Weather data refreshed',
      type: 'info',
      timestamp: Date.now()
    };
    
    const action = {
      type: types.ADD_NOTIFICATION,
      payload: notificationPayload
    };
    
    const expectedState = {
      ...initialState,
      notifications: [notificationPayload]
    };
    
    expect(alerts(initialState, action)).toEqual(expectedState);
  });

  test('handles DISMISS_NOTIFICATION', () => {
    const notificationId = 'notification-1';
    const initialStateWithNotification = {
      ...initialState,
      notifications: [
        {
          id: notificationId,
          title: 'Location Updated',
          message: 'Weather data refreshed',
          type: 'info',
          timestamp: Date.now()
        },
        {
          id: 'notification-2',
          title: 'Error',
          message: 'Failed to load forecast',
          type: 'error',
          timestamp: Date.now()
        }
      ]
    };
    
    const action = {
      type: types.DISMISS_NOTIFICATION,
      payload: notificationId
    };
    
    const expectedState = {
      ...initialStateWithNotification,
      notifications: initialStateWithNotification.notifications.filter(
        notification => notification.id !== notificationId
      )
    };
    
    expect(alerts(initialStateWithNotification, action)).toEqual(expectedState);
  });

  test('handles CLEAR_ALL_ALERTS', () => {
    const initialStateWithAlerts = {
      ...initialState,
      alerts: [
        {
          id: 'alert-1',
          title: 'Severe Weather',
          message: 'Heavy rain expected',
          severity: 'severe',
          timestamp: Date.now()
        },
        {
          id: 'alert-2',
          title: 'Wind Advisory',
          message: 'Strong winds expected',
          severity: 'warning',
          timestamp: Date.now()
        }
      ]
    };
    
    const action = {
      type: types.CLEAR_ALL_ALERTS
    };
    
    const expectedState = {
      ...initialStateWithAlerts,
      alerts: []
    };
    
    expect(alerts(initialStateWithAlerts, action)).toEqual(expectedState);
  });

  test('handles CLEAR_ALL_NOTIFICATIONS', () => {
    const initialStateWithNotifications = {
      ...initialState,
      notifications: [
        {
          id: 'notification-1',
          title: 'Location Updated',
          message: 'Weather data refreshed',
          type: 'info',
          timestamp: Date.now()
        },
        {
          id: 'notification-2',
          title: 'Error',
          message: 'Failed to load forecast',
          type: 'error',
          timestamp: Date.now()
        }
      ]
    };
    
    const action = {
      type: types.CLEAR_ALL_NOTIFICATIONS
    };
    
    const expectedState = {
      ...initialStateWithNotifications,
      notifications: []
    };
    
    expect(alerts(initialStateWithNotifications, action)).toEqual(expectedState);
  });

  test('maintains alert order by severity and timestamp', () => {
    const currentState = {
      ...initialState,
      alerts: [
        {
          id: 'alert-1',
          title: 'Warning Alert',
          message: 'Wind advisory',
          severity: 'warning',
          timestamp: Date.now() - 1000 // Older timestamp
        }
      ]
    };
    
    // Add a severe alert (higher priority)
    const severeAlert = {
      id: 'alert-2',
      title: 'Severe Alert',
      message: 'Heavy rain',
      severity: 'severe',
      timestamp: Date.now()
    };
    
    const action1 = {
      type: types.ADD_ALERT,
      payload: severeAlert
    };
    
    // Severe should come before warning
    let newState = alerts(currentState, action1);
    expect(newState.alerts[0].id).toBe('alert-2');
    expect(newState.alerts[1].id).toBe('alert-1');
    
    // Add another warning alert (same priority, newer timestamp)
    const newerWarning = {
      id: 'alert-3',
      title: 'Another Warning',
      message: 'Fog advisory',
      severity: 'warning',
      timestamp: Date.now() + 1000 // Newer timestamp
    };
    
    const action2 = {
      type: types.ADD_ALERT,
      payload: newerWarning
    };
    
    // Order should be: severe, newer warning, older warning
    newState = alerts(newState, action2);
    expect(newState.alerts[0].id).toBe('alert-2'); // severe
    expect(newState.alerts[1].id).toBe('alert-3'); // newer warning
    expect(newState.alerts[2].id).toBe('alert-1'); // older warning
  });
});
