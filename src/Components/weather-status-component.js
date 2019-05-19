import React from "react";
import { connect } from "react-redux";

class WeatherStatusComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: "",
      json: {}
    };
  }

  render() {
    const { darkSkyJson } = this.props;

    return (
      <div>
        <h1>
          Hello, {darkSkyJson.daily ? darkSkyJson.daily.summary : "loading..."}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  locationInfo: state.locationInfo
});

export default connect(mapStateToProps)(WeatherStatusComponent);
