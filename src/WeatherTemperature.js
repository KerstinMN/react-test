import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h4>
        <span className="temperature" id="temperature">
          {Math.round(props.celsius)}
        </span>
        <span className="units">°C</span>
      </h4>
    </div>
  );
}
