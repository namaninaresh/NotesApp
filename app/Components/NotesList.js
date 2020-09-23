import React from "react";
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Theme from "../Constants/Theme";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");

const NotesList = ({ data }) => {
  const Rdata = JSON.parse(data[1]);
  const Notes = { ...Rdata, id: data[0] };

  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ViewNotes", Notes)}>
      <View style={styles.Note}>
        <View style={{ paddingHorizontal: 10, overflow: "hidden" }}>
          <Text style={styles.title}>{Notes.title}</Text>
          <Text style={[styles.description, { height: 100 * 1.02 }]}>
            {Notes.des}
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.timeBox}>
            <Text style={styles.time}>{Notes.timestamp}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotesList;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    color: Theme.textColor,
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 15,
  },
  description: {
    color: Theme.textColor,
    paddingTop: 10,
  },
  footer: {
    padding: 10,
  },
  infoButton: {
    width: "45%",
    height: "100%",
    alignItems: "center",
    padding: 5,
    borderWidth: 1,
    color: "white",

    borderRadius: 15,
    borderColor: Theme.borderC,
  },
  timeBox: {
    alignSelf: "flex-end",
  },
  time: {
    color: Theme.timeText,
    fontSize: 10,
  },
  Note: {
    backgroundColor: Theme.secondary,
    borderRadius: 15,
    margin: 10,
    justifyContent: "space-between",
  },
});
