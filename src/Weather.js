import React, { useState, useEffect } from "react";

import WeatherForecast from "./WeatherForecast";

import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

import CurrentWeatherIndicators from "./CurrentWeatherIndicators";
import CurrentTemp from "./CurrentTemp";
import CurrentFeelsLike from "./CurrentFeelsLIke";

import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [units, setUnits] = useState("metric");

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

  useEffect(() => {
    setWeatherData({ ready: false });
  }, [units]);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("metric");
  }

  function showWeather(response) {
    setWeatherData({
      cityName: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      date: response.data.dt,
      timezone: response.data.timezone,
      icon: response.data.weather[0].icon,
      coord: response.data.coord,
      ready: true,
    });
  }

  function search() {
    let apiKey = `c670fa7c4d1ccad9ebab8f9eb49cae65`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  let currentDate = new Date(weatherData.date * 1000);

  let locationTime =
    (weatherData.date +
      currentDate.getTimezoneOffset() * 60 +
      weatherData.timezone) *
    1000;

  if (weatherData.ready) {
    return (
      <div className="Weather container">
        <div className="search-block">
          <div className="row  gx-2 mb-3 d-md-none">
            <div className="col-8">
              <button className=" current-button" onClick={position}>
                Current
              </button>
            </div>
            <div className="col-2">
              <button className=" temperature-button" onClick={showCelsius}>
                ℃
              </button>
            </div>
            <div className="col-2">
              <button className="temperature-button" onClick={showFahrenheit}>
                ℉
              </button>
            </div>
          </div>
          <div className="row gx-2">
            <div className="col-md-7">
              <form className="search-block-item" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter a city..."
                  autoComplete="off"
                  className="city-input"
                  onChange={handleCityChange}
                />
                <button type="submit" className="search-button"></button>
              </form>
            </div>
            <div className="d-none d-md-block col-md-3">
              <button className=" current-button" onClick={position}>
                Current
              </button>
            </div>
            <div className="d-none d-md-block col-md-1">
              <button className=" temperature-button" onClick={showCelsius}>
                ℃
              </button>
            </div>
            <div className="d-none d-md-block col-1">
              <button className="temperature-button" onClick={showFahrenheit}>
                ℉
              </button>
            </div>
          </div>
        </div>

        <h1>{weatherData.cityName}</h1>

        <div className="col-md-5 d-none d-md-block heading-item">
          <h4>
            <FormattedDate date={new Date(locationTime)} />
            <br />
            <FormattedTime time={new Date(locationTime)} />
          </h4>
        </div>

        <div className="CurrentWeather">
          <h3>Current weather</h3>

          <div className="current-weather-main">
            <h3 className="d-block d-md-none description">
              {weatherData.description}
            </h3>
            <div className="row gx-2">
              <div className="col-7 col-sm-9 col-md-3">
                <CurrentTemp units={units} temp={weatherData.temp} />
              </div>

              <div className="col col-md-7">
                <h3 className="d-none d-md-block description">
                  {weatherData.description}
                </h3>
                <CurrentFeelsLike
                  units={units}
                  feelsLike={weatherData.feelsLike}
                />
              </div>
            </div>
          </div>
          <CurrentWeatherIndicators data={weatherData} />
        </div>

        <WeatherForecast coord={weatherData.coord} units={units} />
      </div>
    );
  } else {
    search();

    return `Loading...`;
  }
}
