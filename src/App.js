import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherStatusComponent from "./Components/weather-status-component";
import LocationSearchComponent from "./Components/location-search-component";
import HeaderComponent from "./Components/header-component";
import FooterComponent from "./Components/footer-component";
import NotfoundComponent from "./Components/not-found-component";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <Switch>
          <Route exact path="/" component={LocationSearchComponent} />
          <Route path="/search" component={WeatherStatusComponent} />
          <Route component={NotfoundComponent} />
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
