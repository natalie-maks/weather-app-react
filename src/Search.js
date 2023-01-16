import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import "./Search.css";

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
          props.search();
        }}
      >
        <input
          type="text"
          placeholder="Enter a city..."
          onChange={(e) => {
            props.setCity(e.target.value);
          }}
        />
        <input type="submit" value="add" />
      </form>

      <p className="current-city">
        <span>{props.cityName}</span>
        <button onClick={() => addCity(props.city)}>+</button>
      </p>

      <ul>
        {cities.map((city) => {
          return (
            <li key={city.id}>
              <span>{city.name}</span>
              <button onClick={() => removeCity(city.id)}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
