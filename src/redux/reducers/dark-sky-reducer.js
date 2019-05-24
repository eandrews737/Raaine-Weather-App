const initialState = {
  locationInfo: {},
  darkSkyJson: {},
  coordinatesAddress: {}
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_LOCATION":
      return {
        locationInfo: action.value
      };
    case "DARK_SKY":
      return {
        ...state,
        darkSkyJson: action.value
      };
    case "SET_ADDRESS":
      return {
        ...state,
        coordinatesAddress: action.value
      };
    default:
      return state;
  }
}
