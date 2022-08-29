import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./Heading.css";

export default function Heading(props) {
  return (
    <div className="Heading">
      <div className="row">
        <div className="col-7">
          <p className="pin-icon">
            <FontAwesomeIcon icon={solid("location-dot")} />
          </p>
          <h1>{props.data.cityName}</h1>
        </div>
        <div className="col-5 heading-item">
          <h4>
            <FormattedDate date={props.data.date} />
            <br />
            <FormattedTime time={props.data.date} />
          </h4>
        </div>
      </div>
    </div>
  );
}
