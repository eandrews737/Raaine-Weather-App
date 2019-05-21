import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as moment from "moment";

class WeeklyForecastComponent extends React.Component {
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
    }
  }

  // returns icon by status
  statusToImage(status) {
    return <div>lol</div>;
  }

  render() {
    const { darkSkyJson } = this.props;
    let sevenDayForecast = [];

    // tomorrow - a week today
    if (darkSkyJson.daily)
      sevenDayForecast = darkSkyJson.daily.data.slice(1, 7);

    return (
      <div style={{ paddingBottom: "100px" }}>
        <h2>Seven Day Forecast</h2>
        <div>
          {darkSkyJson.daily &&
            sevenDayForecast.map(day => (
              <div className="week-day-box">
                <div>
                  <div>
                    {this.dayToString(moment.unix(day.time).isoWeekday())}
                  </div>
                  <div>{moment.unix(day.time).format("MMM DD")}</div>
                  <div>insert icon: {day.icon}</div>
                </div>
                <div>{day.summary}</div>
                <div>
                  {day.temperatureHigh}/{day.temperatureLow}
                </div>
                <div>{day.precipProbability * 100}%</div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson
});

export default connect(mapStateToProps)(withRouter(WeeklyForecastComponent));
