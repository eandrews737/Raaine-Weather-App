import React from "react";
import "./App.css";
import WeatherStatusComponent from "./Components/weather-status-component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherStatusComponent />
      </header>
    </div>
  );
}

export default App;
