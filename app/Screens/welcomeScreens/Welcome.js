import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import AppScreen from "../../Components/AppScreen";
import Theme from "../../Constants/Theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const Welcome = ({ navigation }) => {
  return (
    <AppScreen>
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 0.9,
          }}
        >
          <Text
            style={{ color: Theme.mainColor, fontSize: 60, fontWeight: "bold" }}
          >
            NOTES
          </Text>
          <Text style={{ color: Theme.mainColor }}>Beta</Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 25 }}>WELCOME </Text>
          <Text
            style={{ color: Theme.textColor, paddingTop: 10, fontSize: 10 }}
          >
            Thank You for Downloading..This App is in Beta Version
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("UserRegistration")}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: Theme.mainColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
    </AppScreen>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
