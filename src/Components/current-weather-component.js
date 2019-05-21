import React from "react";
import { connect } from "react-redux";
import WeeklyForecastComponent from "./weekly-forecast-component";

class CurrentWeatherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: "",
      json: {}
    };
  }

  render() {
    const { darkSkyJson } = this.props;

    console.log("darksky ", darkSkyJson);

    return (
      <div>
        <h1>
          Hello,{" "}
          {darkSkyJson && darkSkyJson.daily
            ? darkSkyJson.daily.summary
            : "loading..."}
        </h1>
        <WeeklyForecastComponent />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  locationInfo: state.locationInfo
});

export default connect(mapStateToProps)(CurrentWeatherComponent);
