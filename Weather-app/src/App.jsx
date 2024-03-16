import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const updateLocation = (e) => {
    e.preventDefault();
    const locationInput = document
      .getElementById("locationInput")
      .value.toLowerCase();
    setLocation(locationInput);
    clear();
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_WEATHER_API_KEY
          }&q=${location}&days=7`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
      setIsLoading(false);
    };

    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  function clear() {
    document.getElementById("locationInput").value = "";
  }

  return (
    <div>
      <div className="top-section">
        <h1>Weather App</h1>
        <form onSubmit={updateLocation}>
          <input
            type="text"
            id="locationInput"
            placeholder="Enter the location"
          />
          <input type="submit" value="Search" id="searchbtn" />
        </form>
      </div>
      {isLoading ? (
        <p id="loadingText">Loading...</p>
      ) : weatherData ? (
        <div className="weatherInfo">
          <div className="weatherSpecs">
            <div>
              <h2 className="capitalize">{location}</h2>
              <img
                src={weatherData.current.condition.icon}
                alt="weather icon"
              />
            </div>
            <div>
              <p>{weatherData.current.temp_c}°C</p>
              <p>{weatherData.current.temp_f}°F</p>
            </div>
          </div>
          <hr>
          <h2>Forecast</h2>
          <div className="forecastInfo grid">
            {weatherData.forecast.forecastday.map((day) => (
              <div key={day.date} id="forecast">
                <h3>{day.date}</h3>
                <img src={day.day.condition.icon} alt="weather icon" />
                <p>Temperature: {day.day.avgtemp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
