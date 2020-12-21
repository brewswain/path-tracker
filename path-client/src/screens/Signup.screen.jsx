import React from "react";

import { StyleSheet, Text, View, Button } from "react-native";

const Signup = ({ navigation: { navigate } }) => {
  const {} = styles;

  return (
    <>
      <Text>Signup</Text>
      <Button
        title="Go to SignIn"
        onPress={() => {
          navigate("SignIn");
        }}
      />
      <Button
        title="Go to main flow"
        onPress={() => {
          navigate("mainFlow");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Signup;
