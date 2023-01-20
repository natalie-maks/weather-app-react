import React, { useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";

export default function SearchCurrentCity(props) {
  const [exist, setExist] = useState(false);

  useEffect(() => {
    let citiesNameArr = [];
    props.cities.forEach((city) => {
      citiesNameArr.push(city.name);
    });
    if (citiesNameArr.includes(props.cityName)) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [props.cities, props.cityName]);

  function addCity(name) {
    props.setCities([...props.cities, { name, id: uuidv1() }]);
  }

  if (exist) {
    return (
      <p className="CurrentCity">
        <span>{props.cityName}</span>
      </p>
    );
  } else {
    return (
      <p className="CurrentCity">
        <span>{props.cityName}</span>
        <button onClick={() => addCity(props.cityName)}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </p>
    );
  }
}
