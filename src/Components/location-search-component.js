import React from "react";
import { connect } from "react-redux";
import { geolocated } from "react-geolocated";
import { getWeatherByCoordinates } from "../util/dark-sky-api-util";

class LocationSearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  async handleLocationButton() {
    const { coords, dispatch, history } = this.props;

    // Add coordinates to props
    await dispatch({
      type: "ADD_LOCATION",
      value: this.props.coords
    });

    this.setState({
      json: await getWeatherByCoordinates(
        `${coords.latitude},${coords.longitude}`
      )
    });

    // add dark sky results to props
    await dispatch({ type: "DARK_SKY", value: this.state.json });

    history.push("/search");
  }

  render() {
    return (
      <div className="location-search-box">
        <div>Search by City</div>
        <input />
        <div>or</div>
        <button onClick={() => this.handleLocationButton()}>
          Allow Location
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationInfo: state.locationInfo,
  darkSkyJson: state.darkSkyJson
});

export default connect(mapStateToProps)(geolocated()(LocationSearchComponent));
