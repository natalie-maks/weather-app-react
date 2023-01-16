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
      <button className="close-btn" onClick={() => props.change()}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
      <div className="main-container">
        <h3>Weather Details</h3>
        <CurrentWeatherIndicators data={props.data} />
        <h3>Weather Forecast</h3>
        <WeatherForecast coord={props.data.coord} units={props.units} />
      </div>
    </div>
  );
}
