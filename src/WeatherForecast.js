import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coord]);

  function showForecast(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <ul className="WeatherForecast">
        {forecast.map(function (day, index) {
          if (index > 0 && index < 6) {
            return <WeatherForecastDay key={index} data={day} />;
          } else {
            return null;
          }
        })}
      </ul>
    );
  } else {
    let apiKey = `c670fa7c4d1ccad9ebab8f9eb49cae65`;
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${props.units}`;
    axios.get(apiUrl).then(showForecast);
    return `loading....`;
  }
}
