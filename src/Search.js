import React from "react";

export default function Search() {
  return (
    <div className="search-block">
      <form className="search-block-item">
        <input
          type="text"
          placeholder="Enter a city..."
          autocomplete="off"
          className="city-input"
          id="city-input"
        />
        <button type="submit" className="search-button">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </button>
      </form>
      <div>
        <button className="current-button" id="current-button">
          Current
        </button>
      </div>
      <button className="temperature-button" id="celsius-button">
        ℃
      </button>
      <button className="temperature-button" id="fahrenheit-button">
        ℉
      </button>
    </div>
  );
}
