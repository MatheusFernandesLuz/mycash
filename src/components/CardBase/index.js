import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FlatLine from "../FlatLine";
import Style from "./style";
const classes = Style();

const cardButton = ({ destiny, title }) => {
  return (
    <TouchableOpacity
      style={classes.cardButton}
      onPress={() => navigation.navigate(destiny)}
    >
      <Text style={classes.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ({ title, body, buttonProps }) => {
  return (
    <View style={classes.card}>
      <View style={classes.cardHeader}>
        <Text style={classes.mainText}>{title}</Text>
        {buttonProps && cardButton(buttonProps)}
      </View>
      <FlatLine></FlatLine>
      <View style={classes.cardBody}>{body}</View>
    </View>
  );
};