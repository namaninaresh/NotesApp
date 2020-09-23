import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import cache from "../Utilities/cache";
import AsyncStorage from "@react-native-community/async-storage";

const NOtes = (dat) => console.log("jo");

const All = () => {
  const [Loaded, setLoaded] = useState(false);
  const [Data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let items = await cache.getALlData();
      setData(items);
      setLoaded(true);
    })();
    return () => {};
  }, []);

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>hai</Text>
      {Loaded && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>
            {Data.filter((_, i) => i % 2 === 0).map((item, i) => (
              <Text key={i}>{item[0]}</Text>
            ))}
          </Text>
        </View>
      )}
    </View>
  );
};
