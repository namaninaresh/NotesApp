import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

import AppScreen from "../../Components/AppScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Theme from "../../Constants/Theme";

import AuthContext from "../../Utilities/context";
import cache from "../../Utilities/cache";

const UserRegister = ({ navigation }) => {
  const [Username, setUsername] = useState("");

  const [editted, seteditted] = useState(false);

  const Authcontext = useContext(AuthContext);
  return (
    <AppScreen>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Theme.secondary,
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={Theme.mainColor}
            />
          </View>
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              color: Theme.mainColor,
              fontWeight: "bold",
            }}
          >
            USER REGISTRATION
          </Text>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
      </View>

      <View style={{ justifyContent: "center", flex: 0.5 }}>
        <TextInput
          placeholder={"Enter Your name"}
          onChangeText={(text) => {
            setUsername(text), seteditted(true);
          }}
          style={[
            {
              backgroundColor: Theme.secondary,
              padding: 15,
              borderRadius: 40,
              color: Theme.textColor,
              fontWeight: "bold",
              fontSize: 15,
            },
            Username.length < 4 &&
              editted && { borderWidth: 0.4, borderColor: Theme.danger + 80 },
          ]}
        />
        {Username.length < 4 && editted && (
          <Text
            style={{
              color: Theme.danger,
              paddingLeft: 10,
              paddingTop: 4,
              opacity: 0.5,
            }}
          >
            Please Enter Valid Username : More than 4 Characters
          </Text>
        )}

        {/**<View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            paddingTop: 30,
          }}
        >
          <Image
            source={require("../../assets/icons/img1.jpg")}
            style={{
              width: 300,
              height: 300,
              borderRadius: 150,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              paddingVertical: 20,
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: Theme.secondary,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons name="image" size={24} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: 70,
                  marginHorizontal: 10,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: Theme.secondary,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons name="camera" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
              </View> **/}
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 30,
        }}
      >
        {Username.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              const jsonValue = JSON.stringify({
                status: true,
                username: Username,
              });
              AsyncStorage.setItem("UserLoggedIn", jsonValue);
              Authcontext.setUser(true);
            }}
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
                name="check-bold"
                size={24}
                color="white"
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </AppScreen>
  );
};

export default UserRegister;

const styles = StyleSheet.create({});
