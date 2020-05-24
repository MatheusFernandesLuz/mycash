import React from "react";
import { View, Text, TouchableOpacity as Touch } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Style from "./style";

const classes = Style();

export default function Header() {
  return (
    <View style={classes.container}>
      <Touch style={classes.iconButton}>
        <AntDesign name="menu-fold" style={classes.menuIcon}></AntDesign>
      </Touch>
      <View style={classes.selectMounth}>
        <Touch style={classes.iconButton}>
          <AntDesign name="arrowleft" style={classes.arrowIcon}></AntDesign>
        </Touch>
        <Text style={classes.mounth}>Maio 2020</Text>
        <Touch style={classes.iconButton}>
          <AntDesign name="arrowright" style={classes.arrowIcon}></AntDesign>
        </Touch>
      </View>
    </View>
  );
}
