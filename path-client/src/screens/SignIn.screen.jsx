import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AuthForm, NavLink } from "../components";
import { Context as AuthContext } from "../contexts/auth.context";

const SignIn = () => {
  const { state, signin } = useContext(AuthContext);

  const { container } = styles;

  return (
    <View style={container}>
      <AuthForm
        headerText="Sign In to Path Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink text="Don't have an account? Register here" routeName="SignUp" />
    </View>
  );
};

SignIn.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default SignIn;
