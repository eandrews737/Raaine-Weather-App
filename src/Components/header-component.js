import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CurrentWeatherComponent from "./current-weather-component";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldHideCurrentWeatherComponent: true
    };
  }

  render() {
    const { shouldShowWeatherComponents } = this.props;

    return (
      <div id="header" className="App-header">
        {shouldShowWeatherComponents && <CurrentWeatherComponent />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  locationInfo: state.locationInfo
});

export default connect(mapStateToProps)(withRouter(HeaderComponent));
