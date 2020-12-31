import React, { useContext } from "react";

import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../contexts/location.context";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);
  const { map } = styles;

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={map}
      initialRegion={{
        ...currentLocation.coords,
        // initial zoom
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={20}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={locations.map((location) => location.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 250,
  },
});

export default Map;
