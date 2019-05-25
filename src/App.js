import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherPageComponent from "./Components/weather-page-component";
import LocationSearchComponent from "./Components/location-search-component";
import HeaderComponent from "./Components/header-component";
import FooterComponent from "./Components/footer-component";
import NotfoundComponent from "./Components/not-found-component";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#FA991C" },
    secondary: { main: "#FC4445" },
    thirdary: "#eeeeee",
    fourthary: "#eeeeee"
  },
  status: {
    danger: "orange"
  }
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={LocationSearchComponent} />
            <Route path="/search" component={WeatherPageComponent} />
            <Route component={NotfoundComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
