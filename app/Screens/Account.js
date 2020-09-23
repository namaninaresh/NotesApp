import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from "react-native";
import Theme from "../Constants/Theme";
import AppScreen from "../Components/AppScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import cache from "../Utilities/cache";

const lists = [
  {
    name: "Edit Profile",
    icon: "account-edit",
    press: "",
  },
  {
    name: "Notifications",
    icon: "bell-ring",
    press: "",
  },
  ,
  {
    name: "Clear All Notes",
    icon: "notification-clear-all",
    press: "",
  },
  {
    name: "Sign-out",
    icon: "logout",
    press: "",
  },
];

const ListItems = ({ data }) => (
  <TouchableOpacity>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: Theme.secondary,
        paddingHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 20,
      }}
    >
      <MaterialCommunityIcons
        name={data.icon}
        size={24}
        style={{ paddingRight: 30 }}
        color={Theme.textColor}
      />
      <Text style={{ color: Theme.textColor, flex: 1 }}>{data.name}</Text>
      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color={Theme.textColor}
      />
    </View>
  </TouchableOpacity>
);

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            backgroundColor: Theme.secondary,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <MaterialCommunityIcons name="chevron-left" size={24} color="white" />
        </View>
      </TouchableOpacity>

      <View
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text
          style={{
            textTransform: "uppercase",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Profile
        </Text>
      </View>
      <TouchableOpacity>
        <View
          style={{
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        ></View>
      </TouchableOpacity>
    </View>
  );
};

const Account = ({ navigation }) => {
  const [username, setusername] = useState();
  useEffect(() => {
    (async () => {
      const { username } = await cache.getData("UserLoggedIn");

      setusername(username);
    })();
  }, []);
  return (
    <AppScreen>
      <Header navigation={navigation} />
      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Theme.primary,
            borderWidth: 1,
            borderColor: Theme.mainColor,
            width: 120,
            height: 120,
            marginBottom: 30,
            borderRadius: 60,
          }}
        >
          <Image
            source={require("../assets/icons/default.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: "center",
            }}
          />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              color: Theme.mainColor,
              textTransform: "uppercase",

              fontSize: 18,
            }}
          >
            Chinna Naresh
          </Text>
        </View>
      </View>

      <View style={{ flex: 0.5 }}>
        {lists.map((item, index) => (
          <ListItems data={item} key={index} />
        ))}
      </View>

      <View
        style={{
          flex: 0.1,

          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: Theme.textColor }}>Made By </Text>
          <Text style={{ color: Theme.mainColor }}> Naresh Namani</Text>
        </View>
      </View>
    </AppScreen>
  );
};

export default Account;

const styles = StyleSheet.create({});
