import React from "react";
import { View, Text } from "react-native";
import Icon from "@expo/vector-icons/Entypo";

import Style from "./style";
const classes = Style();

export default function Transaction({ description, category, value, date }) {
  return (
    <View>
      <View style={classes.container}>
        <Icon name="star-outlined" size={24} color="black" />
        <View style={classes.middle}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={classes.description}
          >
            {description}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={classes.secondary}
          >
            {category}
          </Text>
        </View>
        <View style={classes.right}>
          <Text style={classes.value}>{value}</Text>
          <Text style={classes.secondary}>{date}</Text>
        </View>
      </View>
    </View>
  );
}
