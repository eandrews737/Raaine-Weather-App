import React from "react";
import { connect } from "react-redux";
import { geolocated } from "react-geolocated";
import { getWeatherByCoordinates, getCoordinatesbyIp } from "../util/api-util";

class LocationSearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: ""
    };
  }

  async handleSearchByCity() {}

  async handleLocationButton() {
    const { dispatch, history } = this.props;

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
      .then(() => history.push("/search"))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="location-search-box">
        <div className="ip-search-button">
          <button onClick={() => this.handleLocationButton()}>
            Search By Your Location
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationInfo: state.locationInfo,
  darkSkyJson: state.darkSkyJson
});

export default connect(mapStateToProps)(LocationSearchComponent);
