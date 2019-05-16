import axios from "axios";

export function getWeatherByCoordinates(coordinates = "42.3601,-71.0589") {
  return axios
    .get(
      `https://cors.io/?https://api.darksky.net/forecast/409df4b9cbf9886dd035ff029dd7063b/${coordinates}`
    )
    .then(Response => {
      return Response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}
