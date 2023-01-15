import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

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
        <div className="col-md-7">
          <h1>{props.data.cityName}</h1>
        </div>
        <div className="col-md-5 d-none d-md-block heading-item">
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
