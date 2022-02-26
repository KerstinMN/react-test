import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleRespsonse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Tuesday 07:00",
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <h1>Your weather App</h1>
        <form>
          <div className="row mt-5">
            <div className="col-6">
              <input
                type="search"
                name="Enter your city"
                autofocus="on"
                autocomplete="off"
                placeholder="Enter your city"
                className="form-control shadow-sm"
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
        <br />
        <div className="row">
          <div className="col-6">
            <h4 id="current-date">{weatherData.date}</h4>
            <span id="city">{weatherData.city}</span>
          </div>
          <div className="col-3">
            <h4>
              <span className="temperature" id="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="#" id="celsius-link" className="active">
                  °C
                </a>
                <div id="description" className="text-capitalize">
                  {weatherData.description}
                </div>
              </span>
              <ul id="additional-information">
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="wind"> {weatherData.wind}</span> km/h
                </li>
              </ul>
            </h4>
          </div>
          <div className="col-3">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              id="icon"
            />
          </div>
        </div>
        <br />
        <hr />
        <div class="weather-forecast" id="forecast"></div>
      </div>
    );
  } else {
    const apiKey = `d78e071d9d2a90c9a4f0918bd303e097`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleRespsonse);

    return "Loading";
  }
}
