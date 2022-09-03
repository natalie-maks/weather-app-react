import React from "react";

export default function CurrentFeelsLike(props) {
  if (props.units === "metric") {
    return (
      <h4 className="feels-like">
        Feels like: <span>{Math.round(props.feelsLike)}</span>
        <span>°C</span>
      </h4>
    );
  } else {
    return (
      <h4 className="feels-like">
        Feels like: <span>{Math.round(props.feelsLike)}</span>
        <span>°F</span>
      </h4>
    );
  }
}
