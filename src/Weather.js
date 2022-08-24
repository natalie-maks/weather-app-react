import React, { useState } from "react";

import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      cityName: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      ready: true,
    });
  }

  function search() {
    let apiKey = `c670fa7c4d1ccad9ebab8f9eb49cae65`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="page">
        <div className="search-block">
          <form className="search-block-item" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a city..."
              autocomplete="off"
              className="city-input"
              id="city-input"
              onChange={handleCityChange}
            />
            <button type="submit" className="search-button">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </button>
          </form>
          <div>
            <button className="current-button" id="current-button">
              Current
            </button>
          </div>
          <button className="temperature-button" id="celsius-button">
            ℃
          </button>
          <button className="temperature-button" id="fahrenheit-button">
            ℉
          </button>
        </div>
        <div className="heading">
          <div>
            <h1>
              <i className="fa-solid fa-location-dot pin-icon"></i>
            </h1>
            <h1 id="city-heading">{weatherData.cityName}</h1>
          </div>
          <div className="heading-item">
            <h4>
              <span id="day-of-week">
                <FormattedDate date={weatherData.date} />
              </span>{" "}
              <br />
              <span id="date">
                <FormattedTime time={weatherData.date} />
              </span>
            </h4>
          </div>
        </div>
        <div className="current-weather">
          <h3>Current weather</h3>

          <div className="current-weather-main">
            <div className="current-weather-icon">
              <WeatherIcon code={weatherData.icon} />
            </div>

            <div className="current-weather-temp">
              <h2 id="temperature-digit">{weatherData.temp}</h2>
              <h3 className="temperature-unit" id="temperature-unit">
                °C
              </h3>
            </div>

            <div className="current-weather-discription">
              <h3 className="description" id="description">
                {weatherData.description}
              </h3>
              <h4 className="feels-like">
                Feels like:{" "}
                <span id="feels-like-digit">{weatherData.feelsLike}</span>
                <span id="feels-like-unit">°C</span>
              </h4>
            </div>
          </div>

          <div className="current-weather-indicators">
            <div>
              <h4>WIND</h4>
              <p id="wind">{weatherData.wind} km/h</p>
            </div>
            <div>
              <h4>HUMIDITY</h4>
              <p id="humidity">{weatherData.humidity} %</p>
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
      </div>
    );
  } else {
    search();

    return `Loading...`;
  }
}
