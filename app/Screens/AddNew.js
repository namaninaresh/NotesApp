import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../Components/AppScreen";
import Theme from "../Constants/Theme";

import cache from "../Utilities/cache";

const Header = ({ navigation, onValue }) => {
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
        <TextInput
          onChangeText={(text) => onValue(text)}
          defaultValue="Note Title"
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "white",
          }}
        />
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

const Footer = ({ onPress, visible }) => {
  return (
    visible && (
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          bottom: 30,
          right: 30,
        }}
      >
        {/** <TouchableOpacity>
          <View
            style={{
              marginHorizontal: 10,
              backgroundColor: Theme.mainColor,
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            }}
          >
            <MaterialCommunityIcons name="attachment" size={24} color="white" />
          </View>
          </TouchableOpacity>**/}

        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              backgroundColor: Theme.success,
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            }}
          >
            <MaterialCommunityIcons name="check-bold" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    )
  );
};

const AddNew = ({ navigation }) => {
  const [Notes, setNotes] = useState({
    title: "Unknown Title",
    des: "",
    timestamp: "",
  });

  const onNotes = (Des) => {
    setNotes({ ...Notes, des: Des });
  };

  const onValue = (title) => {
    setNotes({ ...Notes, title });
  };

  const Finish = () => {
    const times = new Date().toDateString();
    const res = { ...Notes, timestamp: times };
    cache.storeData(res);
    navigation.navigate("Home");
  };
  return (
    <AppScreen>
      <Header navigation={navigation} onValue={onValue} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: Theme.secondary,
            borderRadius: 20,
            flex: 1,
            height: 800,
            marginBottom: 80,
            padding: 10,
          }}
        >
          <TextInput
            onChangeText={(text) => onNotes(text)}
            placeholder="Notes Text"
            multiline
            style={{
              textAlignVertical: "top",

              padding: 10,
              color: "white",
              width: "100%",
              height: "100%",
            }}
          />
        </View>
      </ScrollView>
      <Footer onPress={Finish} visible={Notes.des.length > 0 ? true : false} />
    </AppScreen>
  );
};

export default AddNew;

const styles = StyleSheet.create({});
