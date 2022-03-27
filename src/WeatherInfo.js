import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <br />
      <div className="row">
        <div className="col-6">
          <h4 id="current-date">
            <FormattedDate date={props.data.date} />
          </h4>
          <span id="city">{props.data.city}</span>
          <br />
          <ul id="additional-information">
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind"> {Math.round(props.data.wind)}</span> km/h
            </li>
          </ul>
        </div>
        <div className="col-3">
          <WeatherTemperature celsius={props.data.temperature} />
          <div>
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
        </div>
        <div className="col-3">
          <div id="description" className="text-capitalize">
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}
