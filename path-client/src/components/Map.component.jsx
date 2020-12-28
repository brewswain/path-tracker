import React from "react";

import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  const { map } = styles;
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 10.65026552440038 + i * 0.001,
        longitude: -61.36485628173352 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 10.65026552440038 + i * 0.002,
        longitude: -61.36485628173352 + i * 0.001,
      });
    }
  }

  return (
    <MapView
      style={map}
      initialRegion={{
        latitude: 10.65026552440038,
        longitude: -61.36485628173352,
        // affects initial zoom
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
