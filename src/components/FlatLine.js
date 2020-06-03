import React from "react";
import { View } from "react-native";

export default () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: "90%",
          borderBottomColor: "#E1E1E1",
          borderBottomWidth: 0.5,
          marginTop: 5,
        }}
      ></View>
    </View>
  );
};
