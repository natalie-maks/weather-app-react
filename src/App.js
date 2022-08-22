import "./App.css";
import Search from "./Search";
import Heading from "./Heading";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Search />

        <Heading />

        <Weather />
      </div>
    </div>
  );
}

export default App;
