import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../Screens/welcomeScreens/Welcome";
import UserRegister from "../Screens/welcomeScreens/UserRegister";

const Stack = createStackNavigator();

const AuthNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false, headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="UserRegistration"
        component={UserRegister}
        options={{ headerShown: false, headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
