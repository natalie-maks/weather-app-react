import React from "react";

export default function CurrentTemp(props) {
  if (props.units === "metric") {
    return (
      <div className="CurrentTemp">
        <span className="temp-digit">{Math.round(props.temp)}</span>
        <span className="temp-unit">°C</span>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemp">
        <span className="temp-digit">{Math.round(props.temp)}</span>
        <span className="temp-unit">°F</span>
      </div>
    );
  }
}
