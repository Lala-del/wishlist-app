import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeStack } from "./HomeStack";
import { CreateSectionStack } from "./CreateSectionStack";
import { CreateProjectScreen } from "../screens";

const { Navigator, Screen } = createDrawerNavigator();

export const RootNav = () => (
  <NavigationContainer>
    <Navigator>
      <Screen
        name="HomeStack"
        component={HomeStack}
        options={{ title: "Homepage" }}
      />
      <Screen
        name="CreateSectionStack"
        component={CreateSectionStack}
        options={{ title: "Create Section" }}
      />
      <Screen
        name="CreateProjectScreen"
        component={CreateProjectScreen}
        options={{ title: "Create Project" }}
      />
    </Navigator>
  </NavigationContainer>
);
