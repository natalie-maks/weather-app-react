import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
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
        <span>{Math.round(props.data.temp.max)}°</span> /{" "}
        <span>{Math.round(props.data.temp.min)}°</span>
      </p>
    </div>
  );
}
