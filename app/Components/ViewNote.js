import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
const { width: Dwidth, height: Dheight } = Dimensions.get("window");

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Theme from "../Constants/Theme";

import AppScreen from "../Components/AppScreen";
const Header = ({ navigation }) => {
  return (
    <View
      style={{
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
    </View>
  );
};

const Footer = () => {
  return (
    <View
      style={{
        position: "absolute",
        flexDirection: "row",
        bottom: 30,
        left: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="clock" size={24} color={Theme.title} />
        <Text style={{ color: Theme.title, paddingLeft: 10 }}>
          June 2, 2017
        </Text>
      </View>
      <TouchableOpacity>
        <View
          style={{
            marginHorizontal: 10,
            backgroundColor: Theme.title,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
          }}
        >
          <MaterialCommunityIcons
            name="playlist-edit"
            size={24}
            color="white"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: Theme.danger,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
          }}
        >
          <MaterialCommunityIcons
            name="delete-forever"
            size={24}
            color="white"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const ViewNote = ({ navigation }, data) => {
  return (
    <AppScreen>
      <Header navigation={navigation} />

      <ScrollView
        style={{ marginVertical: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.title}>NOTE TITLE</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodytext}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Text>
          <View>
            <Image
              source={require("../assets/icons/img1.jpg")}
              style={{ width: Dwidth, height: Dwidth, marginVertical: 15 }}
            />
            <Image
              source={require("../assets/icons/img1.jpg")}
              style={{ width: Dwidth, height: Dwidth, marginVertical: 15 }}
            />
            <Image
              source={require("../assets/icons/img1.jpg")}
              style={{ width: Dwidth, height: Dwidth, marginVertical: 15 }}
            />
          </View>
        </View>
      </ScrollView>

      <Footer />
    </AppScreen>
  );
};

export default ViewNote;

const styles = StyleSheet.create({
  title: {
    color: Theme.title,
    fontSize: 30,
  },
  body: {
    paddingTop: 10,
  },
  bodytext: {
    color: "white",
    fontSize: 15,
  },
});
