import React from "react";

import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function Heading(props) {
  return (
    <div className="Heading">
      <div>
        <h1>
          <i className="fa-solid fa-location-dot pin-icon"></i>
        </h1>
        <h1 id="city-heading">{props.data.cityName}</h1>
      </div>
      <div className="heading-item">
        <h4>
          <span id="day-of-week">
            <FormattedDate date={props.data.date} />
          </span>{" "}
          <br />
          <span id="date">
            <FormattedTime time={props.data.date} />
          </span>
        </h4>
      </div>
    </div>
  );
}
