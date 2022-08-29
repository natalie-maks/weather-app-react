import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <small>
        <a href="https://github.com/natalie-maks/weather-app-react">
          Open-source code
        </a>
        , by Natalia Maksymenko
      </small>
    </div>
  );
}

export default App;
