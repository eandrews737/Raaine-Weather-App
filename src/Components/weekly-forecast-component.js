import React from "react";
import { connect } from "react-redux";
import * as moment from "moment";

import {
  dayOfWeek,
  temperatureConversion,
  getWeatherStatusIcon
} from "../util/weather-util";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// Allows the tablecell to be customized a bit further
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    marginLeft: "5%",
    marginRight: "5%"
  },
  table: {},
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

class WeeklyForecastComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFahrenheit: true
    };
  }

  render() {
    const { classes, darkSkyJson } = this.props;
    let sevenDayForecast = [];

    // tomorrow - a week today
    if (darkSkyJson.daily)
      sevenDayForecast = darkSkyJson.daily.data.slice(2, 8);

    return (
      <Paper className={classes.root}>
        {darkSkyJson.daily && (
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Day</CustomTableCell>
                <CustomTableCell align="right">Description</CustomTableCell>
                <CustomTableCell align="right">High/Low</CustomTableCell>
                <CustomTableCell align="right">Chance of Rain</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sevenDayForecast.map((day, index) => (
                <TableRow className={classes.row} key={index}>
                  <CustomTableCell component="th" scope="row">
                    <div
                      style={{
                        paddingTop: "12px",
                        float: "left"
                      }}
                    >
                      <div>{dayOfWeek(moment.unix(day.time).isoWeekday())}</div>
                      <div>{moment.unix(day.time).format("MMM DD")}</div>
                    </div>
                    <img src={getWeatherStatusIcon(day.icon)} />
                  </CustomTableCell>
                  <CustomTableCell align="right">{day.summary}</CustomTableCell>
                  <CustomTableCell align="right">
                    {Math.round(temperatureConversion(day.temperatureHigh))}
                    {`\xB0`}/
                    {Math.round(temperatureConversion(day.temperatureLow))}
                    {`\xB0`}
                  </CustomTableCell>
                  <CustomTableCell align="right">
                    {Math.round(day.precipProbability * 100)}%
                  </CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson
});

export default connect(mapStateToProps)(
  withStyles(styles)(WeeklyForecastComponent)
);
