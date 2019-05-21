import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class FooterComponent extends React.Component {
  render() {
    return (
      <div id="footer" className="App-footer">
        Powered by Dark Sky API
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  locationInfo: state.locationInfo,
  isDarkSkyLoading: state.isDarkSkyLoading
});

export default connect(mapStateToProps)(withRouter(FooterComponent));
