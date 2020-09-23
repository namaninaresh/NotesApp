import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./app/Screens/Home";
import AddNew from "./app/Screens/AddNew";
import ViewNote from "./app/Screens/ViewNote";
import DrawerNavigation from "./app/Navigation/DrawerNavigation";
import All from "./app/Screens/All";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import cache from "./app/Utilities/cache";
import { AppLoading } from "expo";
import AuthContext from "./app/Utilities/context";

export default function App() {
  const [User, setUser] = useState();
  const [isReady, setisReady] = useState();

  const isUserLoggedIn = async () => {
    const res = await cache.getData("UserLoggedIn");

    setUser(res);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={isUserLoggedIn}
        onFinish={() => setisReady(true)}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ User, setUser }}>
      <NavigationContainer>
        {User ? <DrawerNavigation /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
