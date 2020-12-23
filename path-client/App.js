import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from "./src/navigationRef";

import {
  Account,
  SignIn,
  SignUp,
  TrackCreate,
  TrackDetail,
  TrackList,
} from "./src/screens";
import { Provider as AuthProvider } from "./src/contexts/auth.context";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignUp,
    SignIn: SignIn,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackList,
      TrackDetail: TrackDetail,
    }),
    TrackCreate: TrackCreate,
    Account: Account,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
