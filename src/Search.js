import React, { useState, useEffect } from "react";
import "./Search.css";

import SearchForm from "./SearchForm";
import SearchCurrentCity from "./SearchCurrentCity";
import SearchCitiesList from "./SearchCitiesList";
import SearchMobileBtns from "./SearchMobileBtns";

export default function Search(props) {
  const [closeBtn, setCloseBtn] = useState(`expand_less`);
  const [cities, setCities] = useState(() => {
    const localData = localStorage.getItem("cities");
    return localData
      ? JSON.parse(localData)
      : [
          { name: "Berlin", id: 1 },
          { name: "San Francisco", id: 2 },
          { name: "Sydney", id: 3 },
        ];
  });

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  useEffect(() => {
    if (
      window.innerWidth > 1100 ||
      (window.innerWidth > 700 && window.innerHeight < 550)
    ) {
      setCloseBtn(`navigate_next`);
    } else {
      setCloseBtn(`expand_less`);
    }
  }, [props.dimensions]);

  const translateFrom =
    window.innerWidth > 1100 ||
    (window.innerWidth > 700 && window.innerHeight < 550)
      ? `translateX(100%)`
      : `translateY(-100%)`;

  const translateTo =
    window.innerWidth > 1100 ||
    (window.innerWidth > 700 && window.innerHeight < 550)
      ? `translateX(0%)`
      : `translateY(0%)`;

  return (
    <div
      className="Search"
      style={{
        opacity: props.show ? 1 : 0,
        pointerEvents: props.show ? `all` : `none`,
        transform: props.visible ? translateTo : translateFrom,
      }}
    >
      <button className="close-btn" onClick={() => props.change()}>
        <span className="material-symbols-outlined">{closeBtn}</span>{" "}
      </button>

      <div className="main-container">
        <SearchForm
          cityName={props.cityName}
          search={props.search}
          city={props.city}
          change={props.change}
          setCity={props.setCity}
        />

        <SearchCurrentCity
          city={props.city}
          cityName={props.cityName}
          cities={cities}
          setCities={setCities}
        />

        <SearchCitiesList
          cities={cities}
          setCities={setCities}
          setCity={props.setCity}
          search={props.search}
          change={props.change}
        />

        <SearchMobileBtns
          position={props.position}
          change={props.change}
          changeUnits={props.changeUnits}
        />
      </div>
    </div>
  );
}
