import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Theme from "../Constants/Theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import cache from "../Utilities/cache";

const items = [
  {
    label: "All Notes",
    icon: "bookmark-outline",
    status: "active",
    navigationTo: "Appinfo",
  },
  {
    label: "Remainders",
    icon: "bell-outline",
    status: "inactive",
    navigationTo: "Appinfo",
  },
  {
    label: "Trash",
    icon: "delete-outline",
    status: "inactive",
    navigationTo: "Appinfo",
  },
  {
    label: "App Info",
    icon: "information-outline",
    status: "inactive",
    navigationTo: "Appinfo",
  },
];

const CustomDrawerItem = ({ label, icon, status }) => {
  return (
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
    />
  );
};

export default function CustomDrawerContent(props) {
  const [username, setusername] = useState();

  useEffect(() => {
    (async () => {
      const data = await cache.getData("UserLoggedIn");

      setusername(data.username);
    })();
  }, []);

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
          <Image
            source={require("../assets/icons/default.png")}
            style={{ width: 30, height: 30, borderRadius: 15 }}
          />
          <Text
            style={{
              color: "white",
              flex: 1,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {username} Notes
          </Text>
        </View>
      </View>

      {items.map((item, i) => (
        <CustomDrawerItem {...item} key={i} />
      ))}
    </DrawerContentScrollView>
  );
}
