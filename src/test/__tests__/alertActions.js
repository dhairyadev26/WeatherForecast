import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/alerts';
import * as types from '../../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Alerts Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      alerts: {
        alerts: [],
        notifications: []
      }
    });
  });

  test('addAlert creates an ADD_ALERT action with correct payload', () => {
    const alertData = {
      title: 'Severe Weather Warning',
      message: 'Thunderstorms expected in your area',
      severity: 'severe'
    };
    
    const expectedAction = {
      type: types.ADD_ALERT,
      payload: {
        id: expect.any(String),
        title: 'Severe Weather Warning',
        message: 'Thunderstorms expected in your area',
        severity: 'severe',
        timestamp: expect.any(Number)
      }
    };
    
    store.dispatch(actions.addAlert(alertData));
    const dispatchedActions = store.getActions();
    
    expect(dispatchedActions).toHaveLength(1);
    expect(dispatchedActions[0].type).toBe(types.ADD_ALERT);
    expect(dispatchedActions[0].payload).toMatchObject({
      id: expect.any(String),
      title: alertData.title,
      message: alertData.message,
      severity: alertData.severity,
      timestamp: expect.any(Number)
    });
  });

  test('dismissAlert creates a DISMISS_ALERT action with correct ID', () => {
    const alertId = 'test-alert-123';
    const expectedAction = {
      type: types.DISMISS_ALERT,
      payload: alertId
    };
    
    store.dispatch(actions.dismissAlert(alertId));
    
    expect(store.getActions()).toEqual([expectedAction]);
  });

  test('addNotification creates an ADD_NOTIFICATION action with correct payload', () => {
    const notificationData = {
      title: 'Location Updated',
      message: 'Weather data refreshed for London',
      type: 'info'
    };
    
    const expectedAction = {
      type: types.ADD_NOTIFICATION,
      payload: {
        id: expect.any(String),
        title: 'Location Updated',
        message: 'Weather data refreshed for London',
        type: 'info',
        timestamp: expect.any(Number)
      }
    };
    
    store.dispatch(actions.addNotification(notificationData));
    const dispatchedActions = store.getActions();
    
    expect(dispatchedActions).toHaveLength(1);
    expect(dispatchedActions[0].type).toBe(types.ADD_NOTIFICATION);
    expect(dispatchedActions[0].payload).toMatchObject({
      id: expect.any(String),
      title: notificationData.title,
      message: notificationData.message,
      type: notificationData.type,
      timestamp: expect.any(Number)
    });
  });

  test('dismissNotification creates a DISMISS_NOTIFICATION action with correct ID', () => {
    const notificationId = 'test-notification-456';
    const expectedAction = {
      type: types.DISMISS_NOTIFICATION,
      payload: notificationId
    };
    
    store.dispatch(actions.dismissNotification(notificationId));
    
    expect(store.getActions()).toEqual([expectedAction]);
  });

  test('clearAllAlerts creates a CLEAR_ALL_ALERTS action', () => {
    const expectedAction = {
      type: types.CLEAR_ALL_ALERTS
    };
    
    store.dispatch(actions.clearAllAlerts());
    
    expect(store.getActions()).toEqual([expectedAction]);
  });

  test('clearAllNotifications creates a CLEAR_ALL_NOTIFICATIONS action', () => {
    const expectedAction = {
      type: types.CLEAR_ALL_NOTIFICATIONS
    };
    
    store.dispatch(actions.clearAllNotifications());
    
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
