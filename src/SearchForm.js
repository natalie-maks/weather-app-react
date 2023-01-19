import React from "react";

export default function SearchForm(props) {
  return (
    <form
      className="SearchForm"
      onSubmit={(e) => {
        e.preventDefault();
        if (e.target[0].value.toLowerCase() === props.cityName.toLowerCase()) {
          e.target[0].value = "";
          return;
        } else {
          props.search(props.city);
          e.target[0].value = "";
        }

        if (window.innerWidth < 1100) {
          props.change();
        }
      }}
    >
      <input
        type="text"
        placeholder="Enter a city..."
        onChange={(e) => {
          props.setCity(e.target.value);
        }}
        autoComplete="off"
        className="city-input"
      />
      <button type="submit" className="search-btn">
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
}
