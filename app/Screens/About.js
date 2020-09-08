import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Theme from "../Constants/Theme";

const About = () => {
  return (
    <View style={styles.box}>
      <View style={styles.footer}>
        <>
          <Text>aga</Text>
        </>
      </View>
      <View style={styles.footer}>
        <>
          <Text>aga</Text>
        </>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  box: {
    width: "50%",
    height: 199,
    justifyContent: "space-between",
    backgroundColor: Theme.mainColor,
  },
  header: { backgroundColor: "red", height: 50 },
  body: { backgroundColor: "tomato", height: 50 },
  footer: { backgroundColor: "tomato", height: 50, justifyContent: "flex-end" },
});
