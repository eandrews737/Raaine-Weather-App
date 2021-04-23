import React from "react";
import { connect } from "react-redux";
import * as moment from "moment";

import {
  dayOfWeek,
  temperatureConversion,
  getWeatherStatusIcon
} from "../util/weather-util";

import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";

import coldIcon from "../assets/svg/cold.svg";
import warmIcon from "../assets/svg/warm.svg";

// customized material UI table cell
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => {
  return {
    root: { flexGrow: 1 },
    grid: {
      paddingTop: "20px",
      maxWidth: "350px",
      minWidth: "300px",
      marginRight: "1%",
      marginLeft: "1%"
    },
    card: {
      minWidth: "200px",
      backgroundColor: "#403d3d"
    }
  };
};

class WeeklyForecastComponent extends React.Component {
  render() {
    const { classes, darkSkyJson } = this.props;
    let sevenDayForecast = [];

    // tomorrow - a week today
    if (darkSkyJson.daily) {
      sevenDayForecast = darkSkyJson.daily.data.slice(1, 8);
      console.log(sevenDayForecast);
    }

    return (
      <Grid
        style={{ paddingBottom: "150px", backgroundColor: "#13131b" }}
        container
        className={classes.root}
        spacing={0}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {sevenDayForecast.map((day, index) => (
          <Grid item className={classes.grid} sm={3} key={index}>
            <Card className={classes.card} style={{ color: "black" }}>
              <CardContent>
                <div>
                  <div>
                    <b className="card-header-title">
                      {dayOfWeek(moment.unix(day.time).isoWeekday())}
                    </b>
                    <div className="card-header-subtitle">
                      {moment.unix(day.time).format("MMM DD")}
                    </div>
                  </div>
                  <Tooltip title={day.icon} placement="bottom">
                    <img
                      alt="Weather Status Icon"
                      style={{ height: "140px", float: "right" }}
                      src={getWeatherStatusIcon(day.icon)}
                    />
                  </Tooltip>
                </div>
                <div style={{ paddingTop: "20px", paddingRight: "50px" }}>
                  <div>
                    <b className="high-temp-font">
                      {" "}
                      <img alt="Warm Temp Icon" style={{ height: "40px" }} src={warmIcon} />
                      {temperatureConversion(day.temperatureHigh)}
                    </b>
                  </div>
                  <div className="low-temp-font">
                    <img alt="Low Temp Icon" style={{ height: "40px" }} src={coldIcon} />
                    {temperatureConversion(day.temperatureLow)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  coordinatesAddress: state.coordinatesAddress
});

export default connect(mapStateToProps)(
  withStyles(styles)(WeeklyForecastComponent)
);
