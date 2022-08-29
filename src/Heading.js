import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./Heading.css";

export default function Heading(props) {
  return (
    <div className="Heading">
      <div>
        <h1>
          <FontAwesomeIcon icon={solid("location-dot")} className="pin-icon" />
        </h1>
        <h1>{props.data.cityName}</h1>
      </div>
      <div className="heading-item">
        <h4>
          <FormattedDate date={props.data.date} />
          <br />
          <FormattedTime time={props.data.date} />
        </h4>
      </div>
    </div>
  );
}
