import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../Screens/Home";

import StackNavigation from "../Navigation/StackNavigation";
import Account from "../Screens/Account";
import CustomDrawer from "./CustomDrawer";
import Appinfo from "../Screens/DrawerScreens/Appinfo";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      lazy={true}
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={StackNavigation} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Appinfo" component={Appinfo} />
    </Drawer.Navigator>
  );
}
