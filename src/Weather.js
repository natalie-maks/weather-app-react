import React from "react";

export default function Weather() {
  return (
    <div className="current-weather">
      <h3>Current weather</h3>

      <div className="current-weather-main">
        <div className="current-weather-icon">
          <img src="/images/04d.svg" alt="" width="94px" id="weather-icon" />
        </div>

        <div className="current-weather-temp">
          <h2 id="temperature-digit">24</h2>
          <h3 className="temperature-unit" id="temperature-unit">
            °C
          </h3>
        </div>

        <div className="current-weather-discription">
          <h3 className="description" id="description">
            Overcast Clouds
          </h3>
          <h4 className="feels-like">
            Feels like: <span id="feels-like-digit">24</span>
            <span id="feels-like-unit">°C</span>
          </h4>
        </div>
      </div>

      <div className="current-weather-indicators">
        <div>
          <h4>WIND</h4>
          <p id="wind">2 km/h</p>
        </div>
        <div>
          <h4>HUMIDITY</h4>
          <p id="humidity">62 %</p>
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
    </div>
  );
}
