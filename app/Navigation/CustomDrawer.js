import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContent,
} from "@react-navigation/drawer";
import Theme from "../Constants/Theme";
import { color } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const items = [
  {
    label: "All Notes",
    icon: "bookmark-outline",
    status: "active",
  },
  {
    label: "Remainders",
    icon: "bell-outline",
    status: "inactive",
  },
  {
    label: "Trash",
    icon: "delete-outline",
    status: "inactive",
  },
  {
    label: "App Info",
    icon: "information-outline",
    status: "inactive",
  },
];

const CustomDrawerItem = ({ label, onPress, icon, status }) => (
  <DrawerItem
    label={label}
    labelStyle={{
      fontWeight: "bold",
      color: "white",
      padding: 0,
    }}
    icon={({ color, size }) => (
      <MaterialCommunityIcons name={icon} size={size} color="white" />
    )}
    style={{
      padding: 0,
      backgroundColor: status === "active" && Theme.primary,

      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      paddingLeft: 20,
    }}
    onPress={() => console.log("aass")}
  />
);

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: Theme.secondary,
        padding: 0,
        marginLeft: -10,
      }}
    >
      <View>
        <View
          style={{
            backgroundColor: Theme.primary,
            padding: 10,
            margin: 10,
            borderRadius: 50,
            flexDirection: "row",
            justifyContent: "center",

            alignItems: "center",
          }}
        >
          <Image source={require("../assets/icons/user.png")} />
          <Text
            style={{
              color: "white",
              flex: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Chinna Notes
          </Text>
        </View>
      </View>

      {items.map((item, i) => (
        <CustomDrawerItem {...item} key={i} />
      ))}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
