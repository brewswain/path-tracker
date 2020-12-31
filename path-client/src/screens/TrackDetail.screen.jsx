import React, { useContext } from "react";

import { StyleSheet, Text } from "react-native";
import { Context as TrackContext } from "../contexts/track.context";
import MapView, { Polyline } from "react-native-maps";
const TrackDetail = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const { map } = styles;

  const _id = navigation.getParam("_id");

  const track = state.find((item) => item._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text>{track.name}</Text>
      <MapView
        style={map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline
          coordinates={track.locations.map((location) => location.coords)}
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetail;
