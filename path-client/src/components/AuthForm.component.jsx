import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer.component";

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error } = styles;

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => {
            onSubmit({ email, password });
          }}
        />
      </Spacer>
      {errorMessage ? <Text style={error}>{errorMessage}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

export default AuthForm;
