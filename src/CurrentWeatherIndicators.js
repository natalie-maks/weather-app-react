import React from "react";

export default function CurrentWeatherIndicators(props) {
  let airPolution = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor",
  };

  let uv = ``;

  switch (true) {
    case props.indicators.uvi < 3:
      uv = `Low Risk`;
      break;
    case props.indicators.uvi < 6:
      uv = `Moderate Risk`;
      break;
    case props.indicators.uvi < 8:
      uv = `High Risk`;
      break;
    case props.indicators.uvi < 10:
      uv = `Very High  Risk`;
      break;
    case props.indicators.uvi >= 10:
      uv = `Extreme Risk`;
      break;
    default:
      uv = `Low Risk`;
  }

  return (
    <ul className="CurrentWeatherIndicators">
      <li>
        <span>Humidity</span>
        <span>{props.data.humidity} %</span>
      </li>
      <li>
        <span>Visibility</span>
        <span>{props.indicators.visibility / 1000} km</span>
      </li>
      <li>
        <span>Wind</span>
        <span>{props.data.wind} km/h</span>
      </li>
      <li>
        <span>Air Quality</span>
        <span>{airPolution[props.air]}</span>
      </li>
      <li>
        <span>UV</span>
        <span>{uv}</span>
      </li>
    </ul>
  );
}
