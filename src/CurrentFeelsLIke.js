import React from "react";

export default function CurrentFeelsLike(props) {
  function calculateFahrenheit(number) {
    return Math.round((number * 9) / 5 + 32);
  }

  if (props.units === "celsius") {
    return (
      <h4 className="feels-like">
        Feels like: <span>{Math.round(props.feelsLike)}</span>
        <span>°C</span>
      </h4>
    );
  } else {
    return (
      <h4 className="feels-like">
        Feels like: <span>{calculateFahrenheit(props.feelsLike)}</span>
        <span>°F</span>
      </h4>
    );
  }
}
