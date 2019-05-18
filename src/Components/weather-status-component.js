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
    if (this.props.coords) {
      this.setState({
        json: await getWeatherByCoordinates(
          `${this.props.coords.latitude},${this.props.coords.longitude}`
        )
      });
      this.props.dispatch({ type: "DARK_SKY", value: this.props.coords });
    }
  }

  render() {
    return (
      <div>
        <h1>
          Hello,{" "}
          {this.state.json.daily ? this.state.json.daily.summary : "loading..."}
        </h1>
        {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  locationInfo: state.locationInfo
});

export default connect(mapStateToProps)(WeatherStatusComponent);
