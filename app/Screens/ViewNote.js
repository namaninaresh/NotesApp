import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
const { width: Dwidth, height: Dheight } = Dimensions.get("window");

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Theme from "../Constants/Theme";

import AppScreen from "../Components/AppScreen";
import cache from "../Utilities/cache";
import { useIsFocused } from "@react-navigation/native";
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

const Footer = ({ navigation, data, OnDelete }) => {
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
          {data.timestamp}
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("EditNotes", data)}>
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
      <TouchableOpacity onPress={OnDelete}>
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
const ViewNote = ({ navigation, route }) => {
  var NotesData = route.params;

  useEffect(() => {
    NotesData = route.params;
  }, [useIsFocused()]);

  const Delete = async () => {
    const isDeleted = await cache.RemoveData(NotesData.id);

    console.log(isDeleted);

    isDeleted ? navigation.navigate("Home") : console.log("error");
  };

  return (
    <AppScreen>
      <Header navigation={navigation} />

      <ScrollView
        style={{ marginVertical: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.title}>{NotesData.title}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodytext}>{NotesData.des}</Text>
        </View>
      </ScrollView>

      <Footer navigation={navigation} data={NotesData} OnDelete={Delete} />
    </AppScreen>
  );
};

export default ViewNote;

const styles = StyleSheet.create({
  title: {
    color: Theme.title,
    fontSize: 30,
    textTransform: "uppercase",
  },
  body: {
    paddingTop: 10,
  },
  bodytext: {
    color: "white",
    fontSize: 15,
  },
});
