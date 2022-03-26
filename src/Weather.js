import React, { useState } from "react";

import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleRespsonse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = `d78e071d9d2a90c9a4f0918bd303e097`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleRespsonse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <h1>Your weather App</h1>
        <form onSubmit={handleSubmit}>
          <div className="row mt-5">
            <div className="col-6">
              <input
                type="search"
                name="Enter your city"
                autofocus="on"
                autocomplete="off"
                placeholder="Enter your city"
                className="form-control shadow-sm"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                id="search-button"
                className="form-control btn btn-primary shadow-sm"
              />
            </div>
            <div className="col-3">
              <button
                className="btn btn-primary shadow-sm w-100"
                id="current-location-button"
              >
                Current location
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />

        <br />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <br />
        <hr />
        <div className="weather-forecast" id="forecast"></div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
