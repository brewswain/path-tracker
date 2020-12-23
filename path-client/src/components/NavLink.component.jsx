import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation: { navigate }, text, routeName }) => {
  const { link } = styles;

  return (
    <TouchableOpacity
      onPress={() => {
        navigate(routeName);
      }}
    >
      <Text style={link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
    marginTop: 25,
  },
});

export default withNavigation(NavLink);
