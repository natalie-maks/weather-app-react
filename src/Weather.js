import React, { useState, useEffect } from "react";

import WeatherBackground from "./WeatherBackground";
import WeatherMainInfo from "./WeatherMainInfo.js";
import WeatherDetails from "./WeatherDetails";
import Search from "./Search";

import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [units, setUnits] = useState("metric");
  const [detailsIsVisible, setDetailsIsVisible] = useState(false);
  const [searchIsVisible, setSearchIsVisible] = useState(false);
  const [mainHidden, setMainHidden] = useState(false);
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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

  function changeUnits(event) {
    event.preventDefault();
    if (units === "metric") {
      setUnits("imperial");
    } else {
      setUnits("metric");
    }
  }

  useEffect(() => {
    setWeatherData({ ready: false });
  }, [units]);

  useEffect(() => {
    if (window.innerWidth > 1100) {
      setMainHidden(false);
    } else {
      if (detailsIsVisible || searchIsVisible) {
        setMainHidden(true);
      }
    }
  }, [dimensions, detailsIsVisible, searchIsVisible]);

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
        <WeatherMainInfo
          weatherData={weatherData}
          mainHidden={mainHidden}
          units={units}
          changeDetailsVisib={changeDetailsVisib}
          changeSearchVisib={changeSearchVisib}
          position={position}
          changeUnits={changeUnits}
        />

        <WeatherDetails
          data={weatherData}
          units={units}
          show={detailsIsVisible}
          change={changeDetailsVisib}
          visible={detailsIsVisible}
          dimensions={dimensions}
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
          dimensions={dimensions}
        />
      </div>
    );
  } else {
    search(city);

    return `Loading...`;
  }
}
