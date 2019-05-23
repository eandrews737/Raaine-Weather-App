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
    case 7:
      return "Sun";
  }
}

// returns temperature based on selected scale
export function temperatureConversion(temperature, isFahrenheit = true) {
  if (isFahrenheit) return temperature;
  else return temperature * (5 / 9) - 32;
}
