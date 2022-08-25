import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import Heading from "./Heading";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [units, setUnits] = useState("celsius");

  function getPosition(position) {
    let apiKey = `c670fa7c4d1ccad9ebab8f9eb49cae65`;
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlCurrent).then(showWeather);
  }

  function position() {
    navigator.geolocation.getCurrentPosition(getPosition);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
    search();
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
    search();
  }

  function showWeather(response) {
    if (units === "celsius") {
      setWeatherData({
        cityName: response.data.name,
        temp: response.data.main.temp,
        description: response.data.weather[0].description,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        feelsLike: response.data.main.feels_like,
        date: new Date(response.data.dt * 1000),
        icon: response.data.weather[0].icon,
        units: "celsius",
        coord: response.data.coord,
        ready: true,
      });
      setCity(response.data.name);
    } else {
      setWeatherData({
        cityName: response.data.name,
        temp: response.data.main.temp,
        description: response.data.weather[0].description,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        feelsLike: response.data.main.feels_like,
        date: new Date(response.data.dt * 1000),
        icon: response.data.weather[0].icon,
        units: "fahrenheit",
        coord: response.data.coord,
        ready: true,
      });
      setCity(response.data.name);
    }
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
              autoComplete="off"
              className="city-input"
              onChange={handleCityChange}
            />
            <button type="submit" className="search-button">
              <FontAwesomeIcon
                icon={solid("magnifying-glass")}
                className="search-icon"
              />
            </button>
          </form>
          <div>
            <button className="current-button" onClick={position}>
              Current
            </button>
          </div>
          <button className="temperature-button" onClick={showCelsius}>
            ℃
          </button>
          <button className="temperature-button" onClick={showFahrenheit}>
            ℉
          </button>
        </div>
        <Heading data={weatherData} />

        <CurrentWeather data={weatherData} />

        <h3>Weather forecast</h3>

        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();

    return `Loading...`;
  }
}
