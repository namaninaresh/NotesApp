import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "../Screens/Home";

import { createStackNavigator } from "@react-navigation/stack";
import AddNew from "../Screens/AddNew";
import Account from "../Screens/Account";

const Stack = createStackNavigator();
const StackNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ paddingRight: 20 }}
            >
              <MaterialCommunityIcons name="menu" size={38} color={"white"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AddNew"
        component={AddNew}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="account"
        component={Account}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
