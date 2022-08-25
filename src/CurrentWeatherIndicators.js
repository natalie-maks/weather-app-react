import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CurrentWeatherIndicators(props) {
  const [ready, setReady] = useState(false);
  const [indicators, setIndicators] = useState(null);
  const [air, setAir] = useState(null);

  let apiKey = `c670fa7c4d1ccad9ebab8f9eb49cae65`;
  let lat = props.data.coord.lat;
  let lon = props.data.coord.lon;

  useEffect(() => {
    setReady(false);
  }, [props.data.coord]);

  let airPolution = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor",
  };

  function uv() {
    if (indicators.uvi < 3) {
      return `Low Risk`;
    } else {
      if (indicators.uvi < 6) {
        return `Moderate Risk`;
      } else {
        if (indicators.uvi < 8) {
          return `High Risk`;
        } else {
          if (indicators.uvi < 10) {
            return `Very High Risk`;
          } else {
            return `Extreme Risk`;
          }
        }
      }
    }
  }

  function showForecast(response) {
    setIndicators(response.data.current);
    setReady(true);
  }

  function showAirPolution(response) {
    setAir(response.data.list[0].main.aqi);
  }

  function airQuality() {
    let apiUr = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios.get(apiUr).then(showAirPolution);
  }

  function visibilityUv() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
  }

  if (ready) {
    return (
      <div className="CurrentWeatherIndicators">
        <div>
          <h4>WIND</h4>
          <p>{props.data.wind} km/h</p>
        </div>
        <div>
          <h4>HUMIDITY</h4>
          <p>{props.data.humidity} %</p>
        </div>
        <div>
          <h4>VISIBILITY</h4>
          <p>{indicators.visibility / 1000} km</p>
        </div>
        <div>
          <h4>UV</h4>
          <p>{uv()}</p>
        </div>
        <div>
          <h4>AIR QUALITY</h4>
          <p>{airPolution[air]}</p>
        </div>
      </div>
    );
  } else {
    airQuality();
    visibilityUv();

    return `loading....`;
  }
}
