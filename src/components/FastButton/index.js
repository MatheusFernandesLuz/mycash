import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Style from "./style";
const classes = Style();

export default function cardButton({ destiny, title }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={classes.cardButton}
      onPress={() => navigation.navigate(destiny)}
    >
      <Text style={classes.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}
