import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppScreen from "../Components/AppScreen";
import Theme from "../Constants/Theme";
import NotesList from "../Components/NotesList";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import cache from "../Utilities/cache";

const SearchComp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.searchBox}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={require("../assets/icons/menu.png")} />
      </TouchableOpacity>
      <TextInput style={styles.searchTextBox} placeholder="Search for notes" />
      <TouchableOpacity onPress={() => navigation.navigate("account")}>
        <Image source={require("../assets/icons/user.png")} />
      </TouchableOpacity>
    </View>
  );
};

const Footer = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddNew")}
      style={{
        position: "absolute",
        bottom: 10,
        alignSelf: "center",
      }}
    >
      <View
        style={{
          backgroundColor: Theme.mainColor,

          shadowColor: Theme.mainColor,
          shadowRadius: 10,
          shadowOpacity: 0.6,
          elevation: 8,
          shadowOffset: { width: 0, height: 4 },
          alignItems: "center",
          justifyContent: "center",

          width: 80,
          height: 80,
          borderRadius: 50,
        }}
      >
        <MaterialIcons name="add" size={50} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const items2 = [
  {
    id: 1,
    name: "first",
    aspectRation: 0.8,
    containImage: "yes",
    color: Theme.secondary,
    des:
      "This is a bag and it's information of bag. Short Description of it and about details.",
    image: require("../assets/icons/img1.jpg"),
  },
  {
    id: 2,
    name: "sec",
    aspectRation: 0.5,
    containImage: "no",
    des:
      "Amazon - lovelychinna799@gmail.com pwd: chinna8686, FaceBook - chinnaNamani pwd: chinnaworld ………..",
    color: Theme.mainColor,
  },
  {
    id: 3,
    name: "third",
    aspectRation: 0.5,
    containImage: "no",
    color: Theme.secondary,
  },
  {
    id: 4,
    name: "fourth",
    aspectRation: 0.8,
    containImage: "yes",
    color: Theme.secondary,
  },
  {
    id: 5,
    name: "fifth",
    aspectRation: 0.8,
    containImage: "yes",
    color: Theme.secondary,
  },
];

const Home = ({ navigation }) => {
  const [Loaded, setLoaded] = useState(false);
  const isFocused = useIsFocused();
  const [Data, setData] = useState([]);
  //getDate,toDateString,toString
  useEffect(() => {
    (async () => {
      let items = await cache.getALlData();
      setData(items);
      setLoaded(true);
    })();
    return () => {};
  }, [isFocused]);
  return (
    <AppScreen>
      <View>
        <SearchComp />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.header}>Notes</Text>
          <View
            style={{
              backgroundColor: "white",
              width: "40%",
              height: 2,
              marginLeft: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          ></View>
        </View>
        <View>
          <Text style={styles.header}>Remainders</Text>
        </View>
      </View>

      {Loaded &&
        (Data.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 15 }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "50%", margin: 0 }}>
                {Data.filter((_, i) => i % 2 === 0).map((item) => (
                  <NotesList data={item} key={item[0]} />
                ))}
              </View>
              <View style={{ width: "50%", margin: 0 }}>
                {Data.filter((_, i) => i % 2 !== 0).map((item) => (
                  <NotesList data={item} key={item[0]} />
                ))}
              </View>
            </View>
          </ScrollView>
        ) : (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              opacity: 0.4,
            }}
          >
            <Text style={{ color: Theme.title }}>
              No Notes to Show , Please Create One
            </Text>
          </View>
        ))}

      <Footer navigation={navigation} />
    </AppScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: Theme.secondary,
    borderRadius: 40,
  },
  searchTextBox: {
    height: 60,
    flex: 1,
    paddingHorizontal: 10,

    color: "white",
    fontWeight: "bold",
    textAlign: "center",

    borderColor: "gray",

    borderRadius: 40,
  },
  header: {
    color: Theme.textColor,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
  },
  addNew: {},
});
