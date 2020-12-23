import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AuthForm, NavLink } from "../components";
import { Context as AuthContext } from "../contexts/auth.context";

const SignUp = () => {
  const { state, signup } = useContext(AuthContext);

  const { container } = styles;

  return (
    <View style={container}>
      <AuthForm
        headerText="Sign Up for Path Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        text="Already have an account? sign in here"
        routeName="SignIn"
      />
    </View>
  );
};

SignUp.navigationOptions = () => {
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

export default SignUp;
