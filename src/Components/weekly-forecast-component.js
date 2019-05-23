import React from "react";
import { connect } from "react-redux";
import * as moment from "moment";
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
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
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

  // returns day of the week by name
  dayToString(dayByNumber) {
    switch (dayByNumber) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
      case 7:
        return "Sun";
    }
  }

  // returns temperature based on selected scale
  temperatureConversion(temperature) {
    const { isFahrenheit } = this.state;

    if (isFahrenheit) return temperature;
    else return temperature * (5 / 9) - 32;
  }

  // returns icon by status
  statusToImage(status) {
    return <div>lol</div>;
  }

  render() {
    const { classes, darkSkyJson } = this.props;
    let sevenDayForecast = [];

    // tomorrow - a week today
    if (darkSkyJson.daily)
      sevenDayForecast = darkSkyJson.daily.data.slice(1, 8);

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
                    <div>
                      <div>
                        {this.dayToString(moment.unix(day.time).isoWeekday())}
                      </div>
                      <div>{moment.unix(day.time).format("MMM DD")}</div>
                      <div>insert icon: {day.icon}</div>
                    </div>
                  </CustomTableCell>
                  <CustomTableCell align="right">{day.summary}</CustomTableCell>
                  <CustomTableCell align="right">
                    {Math.round(
                      this.temperatureConversion(day.temperatureHigh)
                    )}
                    {`\xB0`}/
                    {Math.round(this.temperatureConversion(day.temperatureLow))}
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
