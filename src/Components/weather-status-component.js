import React from "react";
import { getWeatherByCoordinates } from "../util/dark-sky-api-util";

class WeatherStatusComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: "Florida",
      json: {}
    };
  }

  componentDidMount() {
    this.getValues();
  }

  async getValues() {
    this.setState({ json: await getWeatherByCoordinates() });
  }

  render() {
    console.log(this.state.json);

    return (
      <div>
        <h1>
          Hello, it's raining like shit, at{" "}
          {this.state.json.daily && this.state.json.daily.summary}
        </h1>
      </div>
    );
  }
}

export default WeatherStatusComponent;
