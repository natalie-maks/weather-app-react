import React from "react";

export default function CurrentWeatherIndicators(props) {
  return (
    <div className="CurrentWeatherIndicators">
      <div>
        <h4>WIND</h4>
        <p id="wind">{props.data.wind} km/h</p>
      </div>
      <div>
        <h4>HUMIDITY</h4>
        <p id="humidity">{props.data.humidity} %</p>
      </div>
      <div>
        <h4>VISIBILITY</h4>
        <p id="visibility">10 km</p>
      </div>
      <div>
        <h4>UV</h4>
        <p id="uv">Low Risk</p>
      </div>
      <div>
        <h4>AIR QUALITY</h4>
        <p id="air">Good</p>
      </div>
    </div>
  );
}
