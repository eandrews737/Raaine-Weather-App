const initialState = {
  locationInfo: {},
  darkSkyJson: {}
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_LOCATION":
      return {
        locationInfo: action.value
      };
    case "DARK_SKY":
      return {
        darkSkyJson: action.value
      };
    default:
      return state;
  }
}
