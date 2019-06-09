import React from "react";
import { connect } from "react-redux";
import * as moment from "moment";
import {
  temperatureConversion,
  getWeatherStatusIcon
} from "../util/weather-util";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";

class TodayWeatherComponent extends React.Component {
  render() {
    const {
      darkSkyJson: { currently },
      coordinatesAddress
    } = this.props;

    return (
      <div className="current-weather-component">
        <div>
          <h3 style={{ color: "gray" }}>Your Location:</h3>
          <div style={{ fontSize: "25px" }}>
            <b>
              {coordinatesAddress.city
                ? coordinatesAddress.city
                : coordinatesAddress.county || coordinatesAddress.neighborhood}
              ,{" "}
              {coordinatesAddress.country === "USA"
                ? coordinatesAddress.state_code
                : coordinatesAddress.country}
            </b>
          </div>
          <div>{moment.unix(currently.time).format("llll")}</div>
          <Tooltip
            style={{ float: "right", height: "180px" }}
            title={currently.icon}
            placement="right"
          >
            <img src={getWeatherStatusIcon(currently.icon)} />
          </Tooltip>
        </div>
        <div>
          <div className="current-weather-temp important-text">
            {temperatureConversion(currently.temperature)}F
          </div>
          <div>{currently.summary}</div>
        </div>
        <Grid
          container
          style={{
            paddingLeft: "200px",
            paddingTop: "20px",
            paddingBottom: "20px",
            float: "right"
          }}
          justify="center"
          spacing={24}
        >
          <Grid item sm={3}>
            <b style={{ fontSize: "13px" }}>Percipitation</b>
            <div
              class="important-text subheader-text
          
        "
            >
              {Math.round(currently.precipProbability * 100)}%
            </div>
          </Grid>
          <Grid item sm={3}>
            <b style={{ fontSize: "13px" }}>Humidity </b>
            <div class="important-text subheader-text">
              {Math.round(currently.humidity * 100)}%
            </div>
          </Grid>
          <Grid item sm={3}>
            <b style={{ fontSize: "13px" }}>Wind Speed </b>
            <div class="important-text subheader-text">
              {Math.round(currently.windSpeed)} MPH
            </div>
          </Grid>
          <Grid item sm={3}>
            <b style={{ fontSize: "13px" }}>UV Index </b>
            <div class="important-text subheader-text">
              {Math.round(currently.uvIndex)} mW
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  coordinatesAddress: state.coordinatesAddress
});

export default connect(mapStateToProps)(TodayWeatherComponent);
