import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherPageComponent from "./Components/weather-page-component";
import LocationSearchComponent from "./Components/location-search-component";
import HeaderComponent from "./Components/header-component";
import FooterComponent from "./Components/footer-component";
import NotfoundComponent from "./Components/not-found-component";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={LocationSearchComponent} />
          <Route path="/search" component={WeatherPageComponent} />
          <Route component={NotfoundComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
