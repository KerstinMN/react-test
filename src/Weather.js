import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h4 id="current-date">New York</h4>
          <span id="city"> </span>
        </div>
        <div className="col-3">
          <h4>
            <span className="temperature" id="temperature">
              14
            </span>
            <span className="units">
              <a href="#" id="celsius-link" className="active">
                °C
              </a>
              <div id="description"></div>
            </span>
            <ul id="additional-information">
              <li>
                Humidity: <span id="humidity">77</span>%
              </li>
              <li>
                Wind: <span id="wind"> 8</span> km/h
              </li>
            </ul>
          </h4>
        </div>
        <div className="col-3">
          <img src="" alt="Clear" id="icon" />
        </div>
      </div>
      <br />
      <hr />
      <div class="weather-forecast" id="forecast"></div>
    </div>
  );
}
