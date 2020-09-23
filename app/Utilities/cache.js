import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const randomNUmber = () => Math.floor(Math.random() * 10000);

const storeData = async (data) => {
  try {
    var key = data.title;
    data.title === "Unknown Title"
      ? (key = randomNUmber() + data.title)
      : (key = data.title);

    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const getALlData = async () => {
  const keys = await AsyncStorage.getAllKeys();

  const result = await AsyncStorage.multiGet(
    keys.filter((key) => key !== "UserLoggedIn")
  );

  return result;
};

const UpdateData = async (data, key) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("errors in Ccahe Update");
    // saving error
  }
};

const RemoveData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);

    return true;
  } catch (error) {}
};

export default { storeData, getData, getALlData, UpdateData, RemoveData };

const styles = StyleSheet.create({});
