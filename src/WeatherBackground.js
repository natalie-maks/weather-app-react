import React, { useEffect } from "react";

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

  const colorBlackArr = [`09d`, `09n`, `03d`, `02d`];
  if (colorBlackArr.includes(props.icon)) {
    props.setWhite(false);
  } else {
    props.setWhite(true);
  }

  function setColor(color1, color2, color3, color4, color5, color6) {
    document.documentElement.style.setProperty("--main-color", color1);
    document.documentElement.style.setProperty("--second-color", color2);
    document.documentElement.style.setProperty("--third-color", color3);
    document.documentElement.style.setProperty("--fourth-color", color4);
    document.documentElement.style.setProperty("--text-color", color5);
    document.documentElement.style.setProperty("--main-color-tr", color6);
  }

  const iconColor = {
    "01d": [
      `#0E5C8C`,
      `#10689E`,
      `#1274B0`,
      `#1380C3`,
      `white`,
      `rgba(14, 92, 140, 0.7)`,
    ],
    "01n": [
      `#010E2D`,
      `#011441`,
      `#021A55`,
      `#022069`,
      `white`,
      `rgba(1, 14, 45, 0.7)`,
    ],
    "02d": [
      `#81B4F7`,
      `#95C0F8`,
      `#A9CCFA`,
      `#BCD7FB`,
      `black`,
      `rgba(129, 180, 247, 0.7)`,
    ],
    "02n": [
      `#151618`,
      `#1F2023`,
      `#282A2E`,
      `#323439`,
      `white`,
      `rgba(21, 22, 24, 0.7)`,
    ],
    "03d": [
      `#97ACBE`,
      `#A4B6C6`,
      `#B1C0CE`,
      `#BDCAD6`,
      `black`,
      `rgba(151, 172, 190, 0.7)`,
    ],
    "03n": [
      `#27394F`,
      `#2E435C`,
      `#344C6A`,
      `#3B5678`,
      `white`,
      `rgba(39, 57, 79, 0.7)`,
    ],
    "04d": [
      `#2B3E4C`,
      `#324858`,
      `#395265`,
      `#415D72`,
      `white`,
      `rgba(43, 62, 76, 0.7)`,
    ],
    "04n": [
      `#0D0D17`,
      `#141424`,
      `#1C1C31`,
      `#23233E`,
      `white`,
      `rgba(13, 13, 23, 0.7)`,
    ],
    "09d": [
      `#B5B4B0`,
      `#BFBEBB`,
      `#C9C8C5`,
      `#D3D2D0`,
      `black`,
      `rgba(181, 180, 176, 0.7)`,
    ],
    "09n": [
      `#B5B4B0`,
      `#BFBEBB`,
      `#C9C8C5`,
      `#D3D2D0`,
      `black`,
      `rgba(181, 180, 176, 0.7)`,
    ],
    "10d": [
      `#1C2C2C`,
      `#223535`,
      `#2A4141`,
      `#324E4E`,
      `white`,
      `rgba(28, 44, 44, 0.7)`,
    ],
    "10n": [
      `#1C2C2C`,
      `#223535`,
      `#2A4141`,
      `#324E4E`,
      `white`,
      `rgba(28, 44, 44, 0.7)`,
    ],
    "11d": [
      `#080A1F`,
      `#0D1031`,
      `#111541`,
      `#151A51`,
      `white`,
      `rgba(8, 10, 31, 0.7)`,
    ],
    "11n": [
      `#180719`,
      `#260B28`,
      `#361038`,
      `#451448`,
      `white`,
      `rgba(24, 7, 25, 0.7)`,
    ],
    "13d": [
      `#282238`,
      `#322A46`,
      `#3B3253`,
      `#443A5F`,
      `white`,
      `rgba(40, 34, 56, 0.7)`,
    ],
    "13n": [
      `#282238`,
      `#322A46`,
      `#3B3253`,
      `#443A5F`,
      `white`,
      `rgba(40, 34, 56, 0.7)`,
    ],
    "50d": [
      `#2A2B2D`,
      `#343537`,
      `#3E3F42`,
      `#47494C`,
      `white`,
      `rgba(42, 43, 45, 0.7)`,
    ],
    "50n": [
      `#2A2B2D`,
      `#343537`,
      `#3E3F42`,
      `#47494C`,
      `white`,
      `rgba(42, 43, 45, 0.7)`,
    ],
  };

  useEffect(() => {
    setColor(
      iconColor[props.icon][0],
      iconColor[props.icon][1],
      iconColor[props.icon][2],
      iconColor[props.icon][3],
      iconColor[props.icon][4],
      iconColor[props.icon][5]
    );

    console.log(props.icon);
  }, [props.icon]);

  return (
    <img
      src={codeMapping[props.icon]}
      alt="weather"
      className="background-img"
    />
  );
}
