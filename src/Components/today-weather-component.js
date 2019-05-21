import React from "react";
import { connect } from "react-redux";

class TodayWeatherComponent extends React.Component {
  render() {
    const { darkSkyJson } = this.props;

    return (
      <div>
        <h1>
          Hello,{" "}
          {darkSkyJson && darkSkyJson.daily
            ? darkSkyJson.daily.summary
            : "loading..."}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson
});

export default connect(mapStateToProps)(TodayWeatherComponent);
