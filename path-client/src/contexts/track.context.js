import createData from "./createData.context";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => (name, locations) => {
  console.log(name, locations.length);
};

export const { Context, Provider } = createData(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
