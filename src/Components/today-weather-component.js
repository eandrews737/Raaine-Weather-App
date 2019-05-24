import React from "react";
import { connect } from "react-redux";
import * as moment from "moment";
import {
  temperatureConversion,
  getWeatherStatusIcon
} from "../util/weather-util";
import Tooltip from "@material-ui/core/Tooltip";

class TodayWeatherComponent extends React.Component {
  render() {
    const {
      darkSkyJson: { currently },
      coordinatesAddress
    } = this.props;

    return (
      <div className="current-weather-component">
        <div>
          <div>
            <b>
              {coordinatesAddress.neighborhood}
              {coordinatesAddress.city
                ? coordinatesAddress.city
                : coordinatesAddress.town}
              ,{" "}
              {coordinatesAddress.country === "USA"
                ? coordinatesAddress.state_code
                : coordinatesAddress.country}
            </b>
          </div>
          <div>{moment.unix(currently.time).format("llll")}</div>
        </div>
        <div>
          <Tooltip
            style={{ float: "left", height: "140px" }}
            title={currently.icon}
            placement="left"
          >
            <img src={getWeatherStatusIcon(currently.icon)} />
          </Tooltip>
          <div className="current-weather-temp">
            {temperatureConversion(currently.temperature)}
          </div>
        </div>
        <div style={{ paddingLeft: "200px", paddingTop: "20px" }}>
          <div>Chance of Rain: {currently.precipProbability * 100}%</div>
          <div>Humidity: {currently.humidity * 100}%</div>
          <div>Wind Speed: {currently.windSpeed} MPH</div>
          <div>UV Index: {currently.uvIndex} mW</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  coordinatesAddress: state.coordinatesAddress
});

export default connect(mapStateToProps)(TodayWeatherComponent);
