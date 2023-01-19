import React, { useState, useEffect } from "react";

import WeatherBackground from "./WeatherBackground";
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
  const [detailsIsVisible, setDetailsIsVisible] = useState(false);
  const [searchIsVisible, setSearchIsVisible] = useState(false);
  const [mainHidden, setMainHidden] = useState(false);

  function getPosition(position) {
    let apiKey = `c670fa7c4d1ccad9ebab8f9eb49cae65`;
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrlCurrent).then(showWeather);
  }

  function position() {
    navigator.geolocation.getCurrentPosition(getPosition);
  }

  useEffect(() => {
    setWeatherData({ ready: false });
  }, [units]);

  function changeUnits(event) {
    event.preventDefault();
    if (units === "metric") {
      setUnits("imperial");
    } else {
      setUnits("metric");
    }
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

    setCity(response.data.name);
  }

  function search(object) {
    let apiKey = `c670fa7c4d1ccad9ebab8f9eb49cae65`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${object}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  let currentDate = new Date(weatherData.date * 1000);

  let locationTime =
    (weatherData.date +
      currentDate.getTimezoneOffset() * 60 +
      weatherData.timezone) *
    1000;

  function changeDetailsVisib() {
    if (detailsIsVisible) {
      setDetailsIsVisible(false);

      setTimeout(() => {
        if (window.innerWidth < 1100) {
          setMainHidden(false);
        }
      }, 200);
    } else {
      if (window.innerWidth < 1100) {
        setMainHidden(true);
      }
      setTimeout(() => {
        setDetailsIsVisible(true);
      }, 200);
    }
  }
  function changeSearchVisib() {
    if (searchIsVisible) {
      setSearchIsVisible(false);
      setTimeout(() => {
        if (window.innerWidth < 1100) {
          setMainHidden(false);
        }
      }, 200);
    } else {
      if (window.innerWidth < 1100) {
        setMainHidden(true);
      }

      setTimeout(() => {
        setSearchIsVisible(true);
      }, 200);
    }
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherBackground icon={weatherData.icon} />
        <div className="main-info" style={{ opacity: mainHidden ? 0 : 1 }}>
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
            <button className="btn" onClick={changeDetailsVisib}>
              <span className="material-symbols-outlined">query_stats</span>{" "}
            </button>
            <button className="btn" onClick={changeSearchVisib}>
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="btn" onClick={position}>
              <span className="material-symbols-outlined">location_on</span>
            </button>
            <button className="btn" onClick={changeUnits}>
              <span className="material-symbols-outlined">
                device_thermostat
              </span>
            </button>
          </div>

          <button
            className="details-mob-btn mobile"
            onClick={changeDetailsVisib}
          >
            <span class="material-symbols-outlined">expand_less</span>
          </button>
          <button className="search-mob-btn mobile">
            <span
              className="material-symbols-outlined"
              onClick={changeSearchVisib}
            >
              menu
            </span>
          </button>
        </div>

        <WeatherDetails
          data={weatherData}
          units={units}
          show={detailsIsVisible}
          change={changeDetailsVisib}
          visible={detailsIsVisible}
        />
        <Search
          city={city}
          setCity={setCity}
          search={search}
          cityName={weatherData.cityName}
          show={searchIsVisible}
          visible={searchIsVisible}
          change={changeSearchVisib}
          position={position}
          changeUnits={changeUnits}
        />
      </div>
    );
  } else {
    search(city);

    return `Loading...`;
  }
}
