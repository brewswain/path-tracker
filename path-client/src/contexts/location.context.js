import createData from "./createData.context";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {};

const stopRecording = (dispatch) => () => {};

const addLocation = (dispatch) => (location) => {
  console.log("hi from addLocation");
  dispatch({ type: "add_current_location", payload: location });
};

export const { Context, Provider } = createData(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
