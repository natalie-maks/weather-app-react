import React from "react";

export default function SearchCitiesList(props) {
  function removeCity(id) {
    props.setCities(props.cities.filter((city) => city.id !== id));
  }
  return (
    <ul className="SearchCitiesList">
      {props.cities.map((city) => {
        return (
          <li key={city.id}>
            <span
              onClick={(e) => {
                props.setCity(e.target.innerText);
                props.search(e.target.innerText);
                if (window.innerWidth < 1100) {
                  props.change();
                }
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
  );
}
