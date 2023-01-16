import React, { useEffect, useState } from "react";

export default function SearchCurrentCity(props) {
  const [exist, setExist] = useState(false);

  useEffect(() => {
    props.cities.forEach((city) => {
      if (city.name === props.cityName) {
        console.log("here");
        setExist(true);
      } else {
        setExist(false);
      }
    });
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
        <button onClick={() => props.addCity(props.cityName)}>+</button>
      </p>
    );
  }
}
