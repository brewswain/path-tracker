import React from "react";

import { StyleSheet, View } from "react-native";

const Spacer = ({ children }) => {
  const { spacer } = styles;

  return <View style={spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});

export default Spacer;
