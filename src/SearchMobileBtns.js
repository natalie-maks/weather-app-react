import React from "react";

export default function SearchMobileBtns(props) {
  return (
    <div className=" SearchMobileBtns mobile">
      <button
        className="btn"
        onClick={() => {
          props.position();
          props.change();
        }}
      >
        <span className="material-symbols-outlined">location_on</span>
      </button>
      <button
        className="btn"
        onClick={(e) => {
          props.changeUnits(e);
          props.change();
        }}
      >
        <span className="material-symbols-outlined">device_thermostat</span>
      </button>
    </div>
  );
}
