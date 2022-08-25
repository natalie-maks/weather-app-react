import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
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

  return (
    <div className="WeatherForecastDay">
      <h4>{date()}</h4>
      <WeatherIcon code={props.data.weather[0].icon} size={100} />
      <p>
        {" "}
        <span>{maxTemp()}</span> / <span>{minTemp()}</span>
      </p>
    </div>
  );
}
