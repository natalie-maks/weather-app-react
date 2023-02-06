import React from "react";

import MainInfoCityDate from "./MainInfoCityDate";
import MainInfoTempBlock from "./MainInfoTempBlock";
import MainInfoMenuBtns from "./MainInfoMenuBtns";

export default function WeatherMainInfo(props) {
  return (
    <div
      className="WeatherMainInfo"
      style={{ opacity: props.mainHidden ? 0 : 1 }}
    >
      <MainInfoCityDate weatherData={props.weatherData} />

      <MainInfoTempBlock units={props.units} weatherData={props.weatherData} />

      <MainInfoMenuBtns
        changeDetailsVisib={props.changeDetailsVisib}
        changeSearchVisib={props.changeSearchVisib}
        position={props.position}
        changeUnits={props.changeUnits}
        detailsIsVisible={props.detailsIsVisible}
        searchIsVisible={props.searchIsVisible}
      />

      <button
        className="details-mob-btn mobile"
        onClick={props.changeDetailsVisib}
      >
        <span className="material-symbols-outlined">expand_less</span>
      </button>

      <button className="search-mob-btn mobile">
        <span
          className="material-symbols-outlined"
          onClick={props.changeSearchVisib}
        >
          menu
        </span>
      </button>
    </div>
  );
}
