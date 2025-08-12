import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions/weatherStation";
import { dismissAlert, dismissNotification } from "./actions/alerts";
import WeatherForecast from './components/WeatherForecast';
import AlertBanner from './components/AlertBanner';
import NotificationCenter from './components/NotificationCenter';
import { THEMES } from "./constants/generalConstants";

/**
 * App component - Main application entry point
 * Handles initial data loading using geolocation when available
 * @param {Object} props - Component props
 * @param {Function} props.dispatch - Redux dispatch function
 * @param {string} props.status - Current status of the data fetch
 * @param {string} props.temperatureUnit - Current temperature unit (metric or imperial)
 * @param {string} props.theme - Current theme (light or dark)
 * @param {Array} props.alerts - Weather alerts
 * @param {Array} props.notifications - System notifications
 */
const App = ({ dispatch, status, temperatureUnit, theme, alerts, notifications }) => {
  // Fetches data by using geolocation. If the user blocks, or if the browser does not support the API, 
  // fallsback to default location of London
  useEffect(() => {
    const detectLocation = new Promise((resolve) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position.coords);
          }, 
          (error) => {
            if(error.code === error.PERMISSION_DENIED) {
              console.error("Error detecting location: Permission denied");
            } else {
              console.error(`Error detecting location: ${error.message}`);
            }
            resolve(null);
          },
          { timeout: 10000 } // 10 second timeout for geolocation
        );
      } else {
        console.warn("Geolocation not supported by this browser");
        resolve(null);
      }
    });

    detectLocation.then((location) => {
      dispatch(fetchData(location, temperatureUnit));
    }).catch((err) => {
      console.error("Failed to get location, falling back to default city:", err);
      dispatch(fetchData("london", temperatureUnit));
    });
  }, [dispatch, temperatureUnit]);

  return (
    <div className={`app-container ${theme === THEMES.DARK ? 'dark-theme' : ''}`}>
      {status === "initial" ? (
        <div className="loading">
          <div className="spinner" aria-label="Initializing application"></div>
        </div>
      ) : (
        <div>
          <NotificationCenter 
            notifications={notifications} 
            onDismiss={(id) => dispatch(dismissNotification(id))} 
          />
          <AlertBanner 
            alerts={alerts} 
            onDismiss={(id) => dispatch(dismissAlert(id))} 
          />
          <WeatherForecast />
          <div className="fork">
            <a href="https://github.com/dhairyadev26/WeatherForecast" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="View source code on GitHub">
              Fork it on Github
            </a>
          </div> 
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  status: state.weatherStation.status,
  temperatureUnit: state.weatherStation.temperatureUnit,
  theme: state.theme.currentTheme,
  alerts: state.alerts.alerts,
  notifications: state.alerts.notifications
});

export default connect(mapStateToProps)(App);