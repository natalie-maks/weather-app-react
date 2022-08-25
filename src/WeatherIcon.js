import React from "react";

import clearSkyDay from "./images/01d.svg";
import clearSkyNight from "./images/01n.svg";
import fewCloudsDay from "./images/02d.svg";
import fewCloudsNight from "./images/02n.svg";
import scatteredClouds from "./images/03d.svg";
import brokenClouds from "./images/04d.svg";
import showerRain from "./images/09d.svg";
import rainDay from "./images/10d.svg";
import rainNight from "./images/10n.svg";
import thunderstorm from "./images/11d.svg";
import snow from "./images/13d.svg";
import mist from "./images/50d.svg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearSkyDay,
    "01n": clearSkyNight,
    "02d": fewCloudsDay,
    "02n": fewCloudsNight,
    "03d": scatteredClouds,
    "03n": scatteredClouds,
    "04d": brokenClouds,
    "04n": brokenClouds,
    "09d": showerRain,
    "09n": showerRain,
    "10d": rainDay,
    "10n": rainNight,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
  };

  return <img src={codeMapping[props.code]} alt="" width={props.size} />;
}
