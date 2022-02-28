import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h4>
          <span className="temperature" id="temperature">
            {Math.round(props.celsius)}
          </span>
          <span className="units">
            <a>°C</a> |
            <a
              href="/"
              id="celsius-link"
              className="active"
              onClick={showFahrenheit}
            >
              F{" "}
            </a>
          </span>
        </h4>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h4>
          <span className="temperature" id="temperature">
            {Math.round(fahrenheit())}
          </span>
          <span className="units">
            <a
              href="/"
              id="celsius-link"
              className="active"
              onClick={showCelsius}
            >
              °C
            </a>{" "}
            | F{" "}
          </span>
        </h4>
      </div>
    );
  }
}
