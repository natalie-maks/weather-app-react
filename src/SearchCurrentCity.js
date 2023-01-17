import React, { useEffect, useState } from "react";

export default function SearchCurrentCity(props) {
  const [exist, setExist] = useState(false);

  useEffect(() => {
    let citiesNameArr = [];
    props.cities.forEach((city) => {
      citiesNameArr.push(city.name);
    });
    console.log(citiesNameArr);

    if (citiesNameArr.includes(props.cityName)) {
      setExist(true);
      console.log(`setExist`);
    } else {
      setExist(false);
    }
  }, [props.cities, props.cityName]);

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
        <button onClick={() => props.addCity(props.cityName)}>
          <span className="material-symbols-outlined">add_circle</span>
        </button>
      </p>
    );
  }
}
