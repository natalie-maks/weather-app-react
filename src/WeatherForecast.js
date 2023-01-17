import React from "react";
import { v1 as uuidv1 } from "uuid";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  return (
    <ul className="WeatherForecast">
      {props.forecast.map(function (day, index) {
        if (index > 0 && index < 6) {
          return <WeatherForecastDay key={uuidv1()} data={day} />;
        } else {
          return null;
        }
      })}
    </ul>
  );
}
