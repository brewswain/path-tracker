import { useContext } from "react";
import { Context as TrackContext } from "../contexts/track.context";
import { Context as LocationContext } from "../contexts/location.context";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(name, locations);
  };

  return [saveTrack];
};
