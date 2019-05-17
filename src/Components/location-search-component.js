import React from "react";
import { geolocated } from "react-geolocated";

class LocationSearchComponent extends React.Component {
  render() {
    return (
      <div>
        <div>Search by City</div>
        <input />
        <div>or</div>
        <button>Allow Location</button>
      </div>
    );
  }
}

export default geolocated()(LocationSearchComponent);
