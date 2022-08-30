import React from "react";

export default function CurrentTemp(props) {
  function calculateFahrenheit(number) {
    return Math.round((number * 9) / 5 + 32);
  }

  if (props.units === "celsius") {
    return (
      <div className="CurrentTemp">
        <h2>{Math.round(props.temp)}</h2>
        <h3 className="temperature-unit">°C</h3>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemp">
        <h2>{calculateFahrenheit(props.temp)}</h2>
        <h3 className="temperature-unit">°F</h3>
      </div>
    );
  }
}
