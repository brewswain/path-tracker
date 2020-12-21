import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import {
  Account,
  SignIn,
  Signup,
  TrackCreate,
  TrackDetail,
  TrackList,
} from "./src/screens";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: Signup,
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

export default createAppContainer(switchNavigator);
