import React from "react";
import { connect } from "react-redux";
import {
  temperatureConversion,
  getWeatherStatusIcon
} from "../util/weather-util";
import Tooltip from "@material-ui/core/Tooltip";

class TodayWeatherComponent extends React.Component {
  render() {
    const { darkSkyJson, coordinatesAddress } = this.props;

    return (
      <div style={{ width: "200px" }}>
        <div>
          {coordinatesAddress.city
            ? coordinatesAddress.city
            : coordinatesAddress.town}
          ,{" "}
          {coordinatesAddress.country === "USA"
            ? coordinatesAddress.state_code
            : coordinatesAddress.country}
        </div>
        <Tooltip title={darkSkyJson.currently.icon} placement="bottom">
          <img
            style={{ float: "left" }}
            src={getWeatherStatusIcon(darkSkyJson.currently.icon)}
          />
        </Tooltip>
        <h1>{temperatureConversion(darkSkyJson.currently.temperature)}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  coordinatesAddress: state.coordinatesAddress
});

export default connect(mapStateToProps)(TodayWeatherComponent);
