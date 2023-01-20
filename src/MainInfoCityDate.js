import React from "react";

import TimeAndDate from "./TimeAndDate";

export default function MainInfoCityDate(props) {
  return (
    <div className="MainInfoCityDate">
      <h1>{props.weatherData.cityName}</h1>

      <TimeAndDate
        date={props.weatherData.date}
        timezone={props.weatherData.timezone}
      />
    </div>
  );
}
