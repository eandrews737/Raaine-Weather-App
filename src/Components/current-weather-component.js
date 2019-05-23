import React from "react";
import { connect } from "react-redux";
import { getWeatherByCoordinates, getCoordinatesbyIp } from "../util/api-util";
import TodayWeatherComponent from "./today-weather-component";
import WeeklyForecastComponent from "./weekly-forecast-component";
import CircularProgress from "@material-ui/core/CircularProgress";

class CurrentWeatherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: "",
      json: {}
    };
  }

  componentDidMount() {
    this.handleFreshReload();
  }

  // get data on reload
  // by default search by IP
  async handleFreshReload() {
    const { dispatch, history } = this.props;

    history.push("/search");

    // get location by ip
    await getCoordinatesbyIp()
      .then(results => {
        this.setState({ latitude: results.lat, longitude: results.lon });
      })
      .catch(error => console.log(error));

    // load dark sky results in props
    // send the user to the next page
    await getWeatherByCoordinates(
      `${this.state.latitude},${this.state.longitude}`
    )
      .then(results => {
        dispatch({ type: "DARK_SKY", value: results });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { darkSkyJson } = this.props;

    console.log("darksky ", darkSkyJson);

    if (darkSkyJson && darkSkyJson.daily)
      return (
        <React.Fragment>
          <TodayWeatherComponent />
          <WeeklyForecastComponent />
        </React.Fragment>
      );
    else return <CircularProgress />;
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson
});

export default connect(mapStateToProps)(CurrentWeatherComponent);
