import React from "react";

export default function CurrentFeelsLike(props) {
  if (props.units === "metric") {
    return (
      <h3 className="FeelsLike">
        Feels like: <span>{Math.round(props.feelsLike)}</span>
        <span>°C</span>
      </h3>
    );
  } else {
    return (
      <h3 className="FeelsLike">
        Feels like: <span>{Math.round(props.feelsLike)}</span>
        <span>°F</span>
      </h3>
    );
  }
}
