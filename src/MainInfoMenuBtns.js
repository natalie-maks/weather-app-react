import React from "react";

export default function MainInfoMenuBtns(props) {
  return (
    <div className="MainInfoMenuBtns">
      <button className="btn" onClick={props.changeDetailsVisib}>
        <span className="material-symbols-outlined">query_stats</span>{" "}
      </button>
      <button className="btn" onClick={props.changeSearchVisib}>
        <span className="material-symbols-outlined">search</span>
      </button>
      <button className="btn" onClick={props.position}>
        <span className="material-symbols-outlined">location_on</span>
      </button>
      <button className="btn" onClick={props.changeUnits}>
        <span className="material-symbols-outlined">device_thermostat</span>
      </button>
    </div>
  );
}
