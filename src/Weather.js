import React, { useState, useEffect } from "react";

import WeatherDetails from "./WeatherDetails";
import Search from "./Search";

import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

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

  function search(object) {
    let apiKey = `c670fa7c4d1ccad9ebab8f9eb49cae65`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${object}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
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
      <div className="Weather">
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

        <div className="main-info">
          <div>
            <h1>{weatherData.cityName}</h1>

            <p className="time-date">
              <span>
                <FormattedTime time={new Date(locationTime)} />
              </span>{" "}
              —{" "}
              <span>
                <FormattedDate date={new Date(locationTime)} />
              </span>
            </p>
          </div>

          <div className="temp-block">
            <CurrentTemp units={units} temp={weatherData.temp} />
            <div className="temp-descr">
              <h2 className="description">{weatherData.description}</h2>
              <CurrentFeelsLike
                units={units}
                feelsLike={weatherData.feelsLike}
              />
            </div>
          </div>
          <div className="menu-btns">
            <button className="btn">D</button>
            <button className="btn">S</button>
            <button className="btn">L</button>
            <button className="btn">C</button>
          </div>
        </div>

        <WeatherDetails data={weatherData} units={units} />
        <Search
          city={city}
          setCity={setCity}
          search={search}
          cityName={weatherData.cityName}
        />
      </div>
    );
  } else {
    search(city);

    return `Loading...`;
  }
}
