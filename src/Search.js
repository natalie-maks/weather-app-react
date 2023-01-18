import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import "./Search.css";

import SearchCurrentCity from "./SearchCurrentCity";

export default function Search(props) {
  const [closeBtn, setCloseBtn] = useState(`navigate_next`);
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

  function addCity(name) {
    setCities([...cities, { name, id: uuidv1() }]);
  }

  function removeCity(id) {
    setCities(cities.filter((city) => city.id !== id));
  }

  useEffect(() => {
    if (window.innerWidth < 800) {
      setCloseBtn(`expand_less`);
    }
  }, []);

  return (
    <div
      className="Search"
      style={{
        opacity: props.show ? 1 : 0,
        pointerEvents: props.show ? `all` : `none`,
      }}
    >
      <button className="close-btn" onClick={() => props.change()}>
        <span class="material-symbols-outlined">{closeBtn}</span>{" "}
      </button>

      <div className="main-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (
              e.target[0].value.toLowerCase() === props.cityName.toLowerCase()
            ) {
              e.target[0].value = "";
              return;
            } else {
              props.search(props.city);
              e.target[0].value = "";
            }

            if (window.innerWidth < 800) {
              props.change();
            }
          }}
        >
          <input
            type="text"
            placeholder="Enter a city..."
            onChange={(e) => {
              props.setCity(e.target.value);
            }}
            autoComplete="off"
            className="city-input"
          />
          <button type="submit" className="search-btn">
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>

        <SearchCurrentCity
          addCity={addCity}
          city={props.city}
          cityName={props.cityName}
          cities={cities}
          setCities={setCities}
        />

        <ul className="cities-list">
          {cities.map((city) => {
            return (
              <li key={city.id}>
                <span
                  onClick={(e) => {
                    props.setCity(e.target.innerText);
                    props.search(e.target.innerText);
                  }}
                >
                  {city.name}
                </span>
                <button onClick={() => removeCity(city.id)}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mobile search-cont-mob-btns">
          <button
            className="btn"
            onClick={() => {
              props.position();
              props.change();
            }}
          >
            <span className="material-symbols-outlined">location_on</span>
          </button>
          <button
            className="btn"
            onClick={(e) => {
              props.changeUnits(e);
              props.change();
            }}
          >
            <span className="material-symbols-outlined">device_thermostat</span>
          </button>
        </div>
      </div>
    </div>
  );
}
