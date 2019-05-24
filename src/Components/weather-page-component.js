import React from "react";
import { connect } from "react-redux";
import {
  getWeatherByCoordinates,
  getCoordinatesbyIp,
  getCityFromCoordinates
} from "../util/api-util";
import TodayWeatherComponent from "./today-weather-component";
import WeeklyForecastComponent from "./weekly-forecast-component";
import CircularProgress from "@material-ui/core/CircularProgress";

class CurrentWeatherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "28.538336",
      longitude: "-81.379234"
    };
  }

  componentDidMount() {
    this.handleFreshReload();
  }

  // get data on reload
  // by default search by IP
  async handleFreshReload() {
    const { dispatch } = this.props;

    // get location by ip
    await getCoordinatesbyIp()
      .then(results => {
        this.setState({ latitude: results.lat, longitude: results.lon });
      })
      .catch(error => console.error(error));

    // load dark sky results in props
    // send the user to the next page
    await getWeatherByCoordinates(
      `${this.state.latitude},${this.state.longitude}`
    )
      .then(results => {
        dispatch({ type: "DARK_SKY", value: results });
      })
      .catch(error => console.error(error));

    // get the address of the IP
    await getCityFromCoordinates(this.state.latitude, this.state.longitude)
      .then(results => {
        dispatch({ type: "SET_ADDRESS", value: results.results[0].components });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { darkSkyJson, coordinatesAddress } = this.props;

    console.log("darksky ", darkSkyJson);
    console.log("frick ", coordinatesAddress);

    // make sure all bases are covered
    if (
      darkSkyJson &&
      darkSkyJson.daily &&
      coordinatesAddress &&
      coordinatesAddress.country
    )
      return (
        <React.Fragment>
          <TodayWeatherComponent />
          <WeeklyForecastComponent />
        </React.Fragment>
      );
    else return <CircularProgress style={{ marginTop: "15vh" }} />;
  }
}

const mapStateToProps = state => ({
  coordinatesAddress: state.coordinatesAddress,
  darkSkyJson: state.darkSkyJson
});

export default connect(mapStateToProps)(CurrentWeatherComponent);
