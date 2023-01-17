import React, { useState, useEffect } from "react";
import CurrentWeatherIndicators from "./CurrentWeatherIndicators";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";

import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [indicators, setIndicators] = useState(null);
  const [air, setAir] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coord, props.units]);

  function showForecast(response) {
    setForecast(response.data.daily);
    setIndicators(response.data.current);
    setReady(true);
  }

  function showAirPolution(response) {
    setAir(response.data.list[0].main.aqi);
  }

  if (ready) {
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
          <CurrentWeatherIndicators
            data={props.data}
            air={air}
            indicators={indicators}
          />
          <h3>Weather Forecast</h3>
          <WeatherForecast forecast={forecast} />
        </div>
      </div>
    );
  } else {
    let apiKey = `c670fa7c4d1ccad9ebab8f9eb49cae65`;
    let lat = props.data.coord.lat;
    let lon = props.data.coord.lon;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${props.units}`;
    axios.get(apiUrl).then(showForecast);

    let apiUr = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios.get(apiUr).then(showAirPolution);

    return `loading....`;
  }
}
