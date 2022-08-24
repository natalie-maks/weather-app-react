import React from "react";

export default function FormattedDate(props) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()];
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayOfWeek = daysOfWeek[props.date.getDay()];

  let date = props.date.getDate();

  return (
    <span>
      {dayOfWeek}, {month} {date}
    </span>
  );
}
