import React from "react";
import WeatherIcon from "./WeatherIcon";
import CurrentWeatherIndicators from "./CurrentWeatherIndicators";
import CurrentTemp from "./CurrentTemp";
import CurrentFeelsLike from "./CurrentFeelsLIke";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h3>Current weather</h3>

      <div className="current-weather-main">
        <h3 className="d-block d-md-none description">
          {props.data.description}
        </h3>
        <div className="row gx-2">
          <div className="col-4 col-sm-3 col-md-2">
            <WeatherIcon code={props.data.icon} size={94} />
          </div>

          <div className="col-7 col-sm-9 col-md-3">
            <CurrentTemp units={props.units} temp={props.data.temp} />
          </div>

          <div className="col col-md-7">
            <h3 className="d-none d-md-block description">
              {props.data.description}
            </h3>
            <CurrentFeelsLike
              units={props.units}
              feelsLike={props.data.feelsLike}
            />
          </div>
        </div>
      </div>
      <CurrentWeatherIndicators data={props.data} />
    </div>
  );
}
