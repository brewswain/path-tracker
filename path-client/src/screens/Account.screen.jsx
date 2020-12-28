import React, { useContext } from "react";

import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { AuthForm, Spacer } from "../components";
import { Context as AuthContext } from "../contexts/auth.context";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  const {} = styles;

  return (
    <View>
      <Text>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
