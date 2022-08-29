import React from "react";
import WeatherIcon from "./WeatherIcon";
import CurrentWeatherIndicators from "./CurrentWeatherIndicators";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  function calculateFahrenheit(number) {
    return Math.round((number * 9) / 5 + 32);
  }

  if (props.data.units === "celsius") {
    return (
      <div className="CurrentWeather">
        <h3>Current weather</h3>

        <div className="current-weather-main">
          <div>
            <WeatherIcon code={props.data.icon} size={94} />
          </div>

          <div>
            <h2>{Math.round(props.data.temp)}</h2>
            <h3 className="temperature-unit">°C</h3>
          </div>

          <div>
            <h3 className="description">{props.data.description}</h3>
            <h4>
              Feels like: <span>{Math.round(props.data.feelsLike)}</span>
              <span>°C</span>
            </h4>
          </div>
        </div>
        <CurrentWeatherIndicators data={props.data} />
      </div>
    );
  } else {
    return (
      <div className="CurrentWeather">
        <h3>Current weather</h3>

        <div className="current-weather-main">
          <div>
            <WeatherIcon code={props.data.icon} size={94} />
          </div>

          <div>
            <h2>{calculateFahrenheit(props.data.temp)}</h2>
            <h3 className="temperature-unit">°F</h3>
          </div>

          <div>
            <h3 className="description">{props.data.description}</h3>
            <h4>
              Feels like:{" "}
              <span>{calculateFahrenheit(props.data.feelsLike)}</span>
              <span>°F</span>
            </h4>
          </div>
        </div>
        <CurrentWeatherIndicators data={props.data} />
      </div>
    );
  }
}
