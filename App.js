import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./app/Screens/Home";
import AddNew from "./app/Screens/AddNew";
import ViewNote from "./app/Screens/ViewNote";
import DrawerNavigation from "./app/Navigation/DrawerNavigation";

export default function App() {
  return <DrawerNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
