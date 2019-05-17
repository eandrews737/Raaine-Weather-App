import React from "react";
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
            this.setState({ redirect: true });
          }}
        >
          Allow Location
        </button>
      </div>
    );
  }
}

export default geolocated()(LocationSearchComponent);
