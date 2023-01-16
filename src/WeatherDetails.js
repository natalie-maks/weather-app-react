import React from "react";
import CurrentWeatherIndicators from "./CurrentWeatherIndicators";
import WeatherForecast from "./WeatherForecast";

import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div
      className="WeatherDetails"
      style={{
        opacity: props.show ? 1 : 0,
        pointerEvents: props.show ? `all` : `none`,
      }}
    >
      <button onClick={() => props.change()}>Close</button>
      <h3>Weather Details</h3>
      <CurrentWeatherIndicators data={props.data} />
      <h3>Weather Forecast</h3>
      <WeatherForecast coord={props.data.coord} units={props.units} />
    </div>
  );
}
