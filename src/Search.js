import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import "./Search.css";

import SearchCurrentCity from "./SearchCurrentCity";

export default function Search(props) {
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

  return (
    <div className="Search">
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
        <input type="submit" value="S" className="search-btn" />
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
                  console.log(e.target.innerText);

                  props.search(e.target.innerText);
                }}
              >
                {city.name}
              </span>
              <button onClick={() => removeCity(city.id)}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
