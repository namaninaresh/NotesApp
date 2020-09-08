import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../Screens/Home";

import ViewNote from "../Screens/ViewNote";

import StackNavigation from "../Navigation/StackNavigation";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackNavigation} />
        <Drawer.Screen name="Notifications" component={ViewNote} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
