import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    console.log(response);
    setForecast(response.data.daily[0]);
    setReady(true);
  }

  if (ready) {
    return (
      <div class="eatherForecast">
        <WeatherForecastDay data={forecast} />
      </div>
    );
  } else {
    let apiKey = `c670fa7c4d1ccad9ebab8f9eb49cae65`;
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return `loading....`;
  }
}
