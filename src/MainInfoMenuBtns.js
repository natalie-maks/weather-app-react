import React, { useEffect, useState } from "react";

export default function MainInfoMenuBtns(props) {
  const [btnsHidden, setBtnsHidden] = useState(false);

  useEffect(() => {
    if (props.detailsIsVisible || props.searchIsVisible) {
      setBtnsHidden(true);
    } else {
      setTimeout(() => {
        setBtnsHidden(false);
      }, 300);
    }
  }, [props.detailsIsVisible, props.searchIsVisible]);

  return (
    <div className="MainInfoMenuBtns" style={{ opacity: btnsHidden ? 0 : 1 }}>
      <button className="btn" onClick={props.changeDetailsVisib}>
        <span className="material-symbols-outlined">query_stats</span>
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
