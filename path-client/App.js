import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from "./src/navigationRef";
import { FontAwesome } from "@expo/vector-icons";

import {
  Account,
  ResolveAuth,
  SignIn,
  SignUp,
  TrackCreate,
  TrackDetail,
  TrackList,
} from "./src/screens";
import { Provider as AuthProvider } from "./src/contexts/auth.context";
import { Provider as LocationProvider } from "./src/contexts/location.context";
import { Provider as TrackProvider } from "./src/contexts/track.context";

const trackListFlow = createStackNavigator({
  TrackList: TrackList,
  TrackDetail: TrackDetail,
});

trackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuth,
  loginFlow: createStackNavigator({
    SignIn: SignIn,
    SignUp: SignUp,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreate,
    Account: Account,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
