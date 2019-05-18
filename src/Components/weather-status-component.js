import React from "react";
import { getWeatherByCoordinates } from "../util/dark-sky-api-util";
import { connect } from "react-redux";

class WeatherStatusComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: "",
      json: {}
    };
  }

  componentDidMount() {
    this.getValues();
  }

  async getValues() {
    const { coords, dispatch } = this.props;

    if (coords) {
      this.setState({
        json: await getWeatherByCoordinates(
          `${coords.latitude},${coords.longitude}`
        )
      });
      dispatch({ type: "DARK_SKY", value: this.props.coords });
    }
  }

  render() {
    const {
      json: { daily }
    } = this.state;

    return (
      <div>
        <h1>Hello, {daily ? daily.summary : "loading..."}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  locationInfo: state.locationInfo
});

export default connect(mapStateToProps)(WeatherStatusComponent);
