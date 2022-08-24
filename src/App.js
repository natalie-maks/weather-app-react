import "./App.css";
import Search from "./Search";
import Heading from "./Heading";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
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
