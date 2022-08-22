import React from "react";

export default function Heading() {
  return (
    <div className="heading">
      <div>
        <h1>
          <i className="fa-solid fa-location-dot pin-icon"></i>
        </h1>
        <h1 id="city-heading">London</h1>
      </div>
      <div className="heading-item">
        <h4>
          <span id="day-of-week">Wednesday, Aug 17</span> <br />
          <span id="date">14:14</span>
        </h4>
      </div>
    </div>
  );
}
