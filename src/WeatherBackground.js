import React from "react";

import clearSkyDay from "./images/clear-sky.jpg";
import clearSkyNight from "./images/clear-sky-night.jpg";
import fewCloudsDay from "./images/few-clouds.jpg";
import fewCloudsNight from "./images/few-clouds-night.jpg";
import scatteredClouds from "./images/scattered-clouds.jpg";
import scatteredCloudsNight from "./images/scattered-clouds-night.jpg";
import brokenClouds from "./images/broken-clouds.jpg";
import brokenCloudsNight from "./images/broken-clouds-night.jpg";
import rain from "./images/rain.jpg";
import drizzle from "./images/drizzle.jpg";
import thunderstorm from "./images/thunder.jpg";
import thunderstormNight from "./images/thunder-night.jpg";
import snow from "./images/snow.jpg";
import mist from "./images/mist.jpg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearSkyDay,
    "01n": clearSkyNight,
    "02d": fewCloudsDay,
    "02n": fewCloudsNight,
    "03d": scatteredClouds,
    "03n": scatteredCloudsNight,
    "04d": brokenClouds,
    "04n": brokenCloudsNight,
    "09d": drizzle,
    "09n": drizzle,
    "10d": rain,
    "10n": rain,
    "11d": thunderstorm,
    "11n": thunderstormNight,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
  };

  return (
    <img
      src={codeMapping[props.icon]}
      alt="weather"
      className="background-img"
    />
  );
}
