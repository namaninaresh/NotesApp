import React from "react";
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
import { useNavigation } from "@react-navigation/native";

const Header = ({ navigation, onValue, Notes }) => {
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
          defaultValue={Notes.title}
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

const Footer = ({ onPress }) => {
  return (
    <View
      style={{
        position: "absolute",
        flexDirection: "row",
        bottom: 30,
        right: 30,
      }}
    >
      <TouchableOpacity>
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
      </TouchableOpacity>

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
  );
};

const EditNotes = ({ navigation, route }) => {
  const Notes = route.params;

  const onNotes = (Des) => {
    Notes.des = Des;
  };

  const onValue = (title) => {
    Notes.title = title;
  };

  const Finish = () => {
    cache.UpdateData(Notes, Notes.id);
    navigation.goBack();
  };
  return (
    <AppScreen>
      <Header navigation={navigation} onValue={onValue} Notes={Notes} />
      <ScrollView>
        <View
          style={{
            backgroundColor: Theme.secondary,
            borderRadius: 15,
            padding: 10,
          }}
        >
          <TextInput
            onChangeText={(text) => onNotes(text)}
            defaultValue={Notes.des}
            placeholder="Edit Notes Text"
            multiline
            style={{
              color: "white",
              width: "100%",
            }}
          />
        </View>
      </ScrollView>
      <Footer onPress={Finish} />
    </AppScreen>
  );
};

export default EditNotes;

const styles = StyleSheet.create({});
