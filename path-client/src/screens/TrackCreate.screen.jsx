import React, { useContext, useCallback } from "react";

import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Map, TrackForm } from "../components";
import "../_mockLocation";
import { Context as LocationContext } from "../contexts/location.context";
import useLocation from "../hooks/useLocation";

const TrackCreate = ({ isFocused }) => {
  const {} = styles;
  const { addLocation, state } = useContext(LocationContext);
  const callback = useCallback(
    (location) => addLocation(location, state.recording),
    [state.recording]
  );
  const [err] = useLocation(isFocused, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>TrackCreate</Text>
      <Map />
      <TrackForm />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreate);
