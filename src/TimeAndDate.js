import React from "react";

import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function TimeAndDate(props) {
  let currentDate = new Date(props.date * 1000);

  let locationTime =
    (props.date + currentDate.getTimezoneOffset() * 60 + props.timezone) * 1000;

  return (
    <p className="TimeAndDate">
      <span>
        <FormattedTime time={new Date(locationTime)} />
      </span>{" "}
      —{" "}
      <span>
        <FormattedDate date={new Date(locationTime)} />
      </span>
    </p>
  );
}
