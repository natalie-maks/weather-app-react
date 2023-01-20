import React from "react";

import CurrentTemp from "./CurrentTemp";
import CurrentFeelsLike from "./CurrentFeelsLIke";

export default function MainInfoTempBlock(props) {
  return (
    <div className="MainInfoTempBlock">
      <CurrentTemp units={props.units} temp={props.weatherData.temp} />
      <div className="temp-descr">
        <h2 className="description">{props.weatherData.description}</h2>
        <CurrentFeelsLike
          units={props.units}
          feelsLike={props.weatherData.feelsLike}
        />
      </div>
    </div>
  );
}
