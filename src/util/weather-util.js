import clearDayIcon from "../assets/animated/day.svg";
import clearNightIcon from "../assets/animated/night.svg";
import rainIcon from "../assets/animated/rainy-1.svg";
import snowIcon from "../assets/animated/snowy-1.svg";
import sleekIcon from "../assets/animated/snowy-2.svg";
import fogIcon from "../assets/animated/cloudy.svg";
import cloudyIcon from "../assets/animated/cloudy.svg";
import cloudyDayIcon from "../assets/animated/cloudy-day-2.svg";
import cloudyNightIcon from "../assets/animated/cloudy-night-2.svg";
import hailIcon from "../assets/animated/snowy-3.svg";
import thunderstormIcon from "../assets/animated/thunder.svg";
import tornadoIcon from "../assets/animated/weather.svg";

// returns day of the week by name
export function dayOfWeek(dayByNumber) {
  switch (dayByNumber) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    default:
      return "Sun";
  }
}

// returns temperature based on selected scale
export function temperatureConversion(temperature, isFahrenheit = true) {
  if (isFahrenheit) {
    return Math.round(temperature) + `${`\xB0`}` + 'F';
  }
  else {
    return Math.round(temperature * (5 / 9) - 32) + `${`\xB0`}` + 'C';
  }
}

// returns the correct icon for each weather status
export function getWeatherStatusIcon(status) {
  switch (status) {
    case "clear-day":
      return clearDayIcon;
    case "clear-night":
      return clearNightIcon;
    case "rain":
      return rainIcon;
    case "snow":
      return snowIcon;
    case "sleet":
      return sleekIcon;
    case "wind":
      return cloudyIcon;
    case "fog":
      return fogIcon;
    case "cloudy":
      return cloudyIcon;
    case "partly-cloudy-day":
      return cloudyDayIcon;
    case "partly-cloudy-night":
      return cloudyNightIcon;
    case "hail":
      return hailIcon;
    case "thunderstorm":
      return thunderstormIcon;
    case "tornado":
      return tornadoIcon;
    default:
      return clearDayIcon;
  }
}
