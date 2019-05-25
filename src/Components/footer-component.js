import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class FooterComponent extends React.Component {
  render() {
    return (
      <div id="footer" className="App-footer">
        <div style={{ backgroundColor: "#ed5121" }} className="footer-stripe" />
        <div style={{ backgroundColor: "#f9a500" }} className="footer-stripe" />
        <div style={{ backgroundColor: "#00b6ef" }} className="footer-stripe" />
        <div style={{ backgroundColor: "#6dd5f4" }} className="footer-stripe" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  darkSkyJson: state.darkSkyJson,
  coordinatesAddress: state.coordinatesAddress
});

export default connect(mapStateToProps)(withRouter(FooterComponent));
