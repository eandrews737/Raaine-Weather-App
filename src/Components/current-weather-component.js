import React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
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
          {darkSkyJson && darkSkyJson.daily ? (
            darkSkyJson.daily.summary
          ) : (
            <CircularProgress />
          )}
        </h1>
        {darkSkyJson && darkSkyJson.daily && <WeeklyForecastComponent />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson
});

export default connect(mapStateToProps)(CurrentWeatherComponent);
