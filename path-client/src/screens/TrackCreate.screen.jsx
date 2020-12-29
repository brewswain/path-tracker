import React, { useContext } from "react";

import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Map } from "../components";
import "../_mockLocation";
import { Context as LocationContext } from "../contexts/location.context";
import useLocation from "../hooks/useLocation";

const TrackCreate = ({ isFocused }) => {
  const {} = styles;
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>TrackCreate</Text>
      <Map />
      {/* <NavigationEvents onWillBlur={() => console.log("im closing")} /> */}
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreate);
