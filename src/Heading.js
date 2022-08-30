import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./Heading.css";

export default function Heading(props) {
  let currentDate = new Date(props.data.date * 1000);

  let locationTime =
    (props.data.date +
      currentDate.getTimezoneOffset() * 60 +
      props.data.timezone) *
    1000;

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
            <FormattedDate date={new Date(locationTime)} />
            <br />
            <FormattedTime time={new Date(locationTime)} />
          </h4>
        </div>
      </div>
    </div>
  );
}
