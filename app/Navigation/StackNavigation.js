import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "../Screens/Home";

import { createStackNavigator } from "@react-navigation/stack";
import AddNew from "../Screens/AddNew";
import Account from "../Screens/Account";
import ViewNote from "../Screens/ViewNote";
import EditNotes from "../Components/EditNotes";

const Stack = createStackNavigator();
const HomeStackNavigation = ({ navigation }) => {
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
        component={AccountStackNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewNotes"
        component={ViewNote}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditNotes"
        component={EditNotes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AccountStackNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Acount"
        component={Account}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;

const styles = StyleSheet.create({});
