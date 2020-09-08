import React, { useEffect } from "react";

import { StyleSheet, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Theme from "../Constants/Theme";
import Constants from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <>
      <StatusBar translucent backgroundColor={Theme.primary} />
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: Theme.primary,
  },
});
