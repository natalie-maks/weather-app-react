import React from "react";

export default function WeatherForecastDay(props) {
  let today = new Date(props.data.dt * 1000);
  function date() {
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

    function formateYear(year) {
      let yearString = `${year}`;
      return yearString.slice(2);
    }

    let month = months[today.getMonth()];
    let day = today.getDate();
    let year = formateYear(today.getFullYear());

    return `${day} ${month} ${year}`;
  }

  function day() {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[today.getDay()];

    return day;
  }

  return (
    <li className="WeatherForecastDay">
      <span>
        <span className="forecast-day">{day()}</span>
        <span className="forecast-date">{date()}</span>
      </span>
      <span>
        <span className="forecast-temp">
          {Math.round(props.data.temp.day)}°
        </span>
        <span className="forecast-descr">{props.data.weather[0].main}</span>
      </span>
    </li>
  );
}
