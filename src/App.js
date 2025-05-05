import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./actions/weatherStation";
import WeatherForecast from './components/WeatherForecast';

const App = ({ dispatch, forecast }) => {
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
              console.error("Error detecting location.");
            }
            resolve(null);
          }
        );
      } else {
        resolve(null);
      }
    });

    detectLocation.then((location) => {
      dispatch(fetchData(location));
    }).catch(() => {
      dispatch(fetchData("london"));
    });
  }, [dispatch]);

  return (
    <>
      {forecast === null ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <WeatherForecast data={forecast} />
          <div className="fork">
            <a href="https://github.com/dhairyadev26/WeatherForecast" target="_blank" rel="noopener noreferrer">
              Fork it on Github
            </a>
          </div> 
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  forecast: state.weatherStation.data
});

export default connect(mapStateToProps)(App);