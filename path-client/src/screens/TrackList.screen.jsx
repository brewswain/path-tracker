import React from "react";

import { Button, StyleSheet, Text, View } from "react-native";

const TrackList = ({ navigation: { navigate } }) => {
  const {} = styles;

  return (
    <>
      <Text>TrackList</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => {
          navigate("TrackDetail");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackList;
