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

const { width } = Dimensions.get("window");

const NotesList = ({ data }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          borderRadius: 15,
          height: width * data.aspectRation,
          backgroundColor: data.color,
          margin: 10,
          justifyContent: "space-between",
        }}
      >
        {data.image && (
          <Image
            source={data.image}
            style={{
              width: "100%",
              height: "50%",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />
        )}

        <View style={{ paddingHorizontal: 10, overflow: "hidden" }}>
          <Text style={styles.title}>{data.name}</Text>
          {data.des && (
            <Text
              style={[
                styles.description,
                { height: 100 * 1.02 - data.aspectRation },
              ]}
            >
              {data.des}
            </Text>
          )}
        </View>

        <View style={styles.footer}>
          <View style={styles.timeBox}>
            <Text style={styles.time}>Jan 2015,7th</Text>
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
    fontSize: 20,
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
});
