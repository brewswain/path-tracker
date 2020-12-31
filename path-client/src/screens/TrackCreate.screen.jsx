import React, { useContext, useCallback } from "react";

import { StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Map, TrackForm } from "../components";
import "../_mockLocation";
import { Context as LocationContext } from "../contexts/location.context";
import useLocation from "../hooks/useLocation";
import { LocationSubscriber } from "expo-location/build/LocationSubscribers";

const TrackCreate = ({ isFocused }) => {
  const {} = styles;
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);
  const callback = useCallback((location) => addLocation(location, recording), [
    recording,
  ]);
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <ScrollView>
        <Text h3>TrackCreate</Text>
        <Map />
        <TrackForm />
        {err ? <Text>Please enable location services</Text> : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreate);
