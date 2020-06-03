import React from "react";
import { View, Text, TouchableOpacity as Touch } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import Style from "./style";

const classes = Style();

export default function Header({ height }) {
  const navigation = useNavigation();

  function handleMenuPress() {
    navigation.openDrawer();
  }

  function handleArrowDownPress() {
    navigation.navigate("Accounts");
  }

  return (
    <View style={[classes.container, { height: height }]}>
      <Touch style={classes.iconButton} onPress={handleMenuPress}>
        <MaterialIcons name="menu" style={classes.menuIcon} />
      </Touch>
      <View style={classes.selectMounth}>
        <Text style={classes.mounth}>Maio 2020</Text>
        <Touch style={classes.iconButton} onPress={handleArrowDownPress}>
          <MaterialIcons name="arrow-downward" style={classes.arrowIcon} />
        </Touch>
      </View>
    </View>
  );
}
