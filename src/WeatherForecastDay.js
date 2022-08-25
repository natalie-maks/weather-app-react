import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTempCel() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTempCel() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function maxTempFahr() {
    let maxTempFahr = Math.round((props.data.temp.max * 9) / 5 + 32);
    return `${maxTempFahr}°`;
  }

  function minTempFahr() {
    let minTempFahr = Math.round((props.data.temp.min * 9) / 5 + 32);
    return `${minTempFahr}°`;
  }

  function date() {
    let date = new Date(props.data.dt * 1000);
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = months[date.getMonth()];
    let day = date.getDate();

    return `${month} ${day}`;
  }

  if (props.units === "celsius") {
    return (
      <div className="WeatherForecastDay">
        <h4>{date()}</h4>
        <WeatherIcon code={props.data.weather[0].icon} size={100} />
        <p>
          {" "}
          <span>{maxTempCel()}</span> / <span>{minTempCel()}</span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="WeatherForecastDay">
        <h4>{date()}</h4>
        <WeatherIcon code={props.data.weather[0].icon} size={100} />
        <p>
          {" "}
          <span>{maxTempFahr()}</span> / <span>{minTempFahr()}</span>
        </p>
      </div>
    );
  }
}
