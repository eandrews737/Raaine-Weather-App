import React from "react";
import { connect } from "react-redux";
import { geolocated } from "react-geolocated";

class LocationSearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  render() {
    return (
      <div>
        <div>Search by City</div>
        <input />
        <div>or</div>
        <button
          onClick={() => {
            this.props.dispatch({
              type: "ADD_LOCATION",
              value: this.props.coords
            });
            this.props.history.push("/search");
          }}
        >
          Allow Location
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationInfo: state.locationInfo
});

export default connect(mapStateToProps)(geolocated()(LocationSearchComponent));
