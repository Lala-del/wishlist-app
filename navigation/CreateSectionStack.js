import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CreateSectionScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const CreateSectionStack = () => (
  <Navigator headerMode="none">
    <Screen name="CreateSection" component={CreateSectionScreen} />
  </Navigator>
);
