import React from "react";
import errorIcon from "../assets/svg/404-error.svg";

class NotFoundComponent extends React.Component {
  render() {
    return (
      <div>
        <img alt="error icon" style={{ height: "350px", paddingTop: "10%" }} src={errorIcon} />
        <h3>Go back traveler, you've gone too far</h3>
      </div>
    );
  }
}

export default NotFoundComponent;
