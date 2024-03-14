import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(''); 

  const updateLocation = (e) => {
    e.preventDefault();
    const locationInput = document.getElementById('locationInput').value.toLowerCase();
    setLocation(locationInput);
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=22c34c4452904aa8959130339241403&q=${location}`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    if(location) {
      fetchWeatherData();
    }
  }, [location]);

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={updateLocation}>
        <label htmlFor="locationInput">Enter the Location Name: </label>
        <input type="text" id="locationInput" />
        <input type="submit" value="Search" />
      </form>
      {weatherData && (
        <div>
          <img src={weatherData.current.condition.icon} alt="weather icon" />
          <p>{weatherData.current.temp_c}°C</p>
        </div>
      )}
    </div>
  );
}