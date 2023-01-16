import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import "./Search.css";

export default function Search() {
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

  const [currentCity, setCurrentCity] = useState(`London`);

  function addCity(name) {
    setCities([...cities, { name, id: uuidv1() }]);
  }

  function removeCity(id) {
    setCities(cities.filter((city) => city.id !== id));
  }

  function changeCurrent(e) {
    e.preventDefault();
    console.log(e);
    setCurrentCity(e.target[0].value);
  }

  return (
    <div className="Search">
      <form onSubmit={(e) => changeCurrent(e)}>
        <input type="text" placeholder="Enter a city..." />
        <input type="submit" value="add" />
      </form>

      <p className="current-city">
        <span>{currentCity}</span>
        <button onClick={() => addCity(currentCity)}>+</button>
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
