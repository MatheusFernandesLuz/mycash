import React from "react";
import { View, Text } from "react-native";
import FlatLine from "../FlatLine";

import Styles from "./style";

export default (props) => {
  const classes = Styles();

  return (
    <View style={classes.card}>
      <Text style={classes.mainText}>{props.cardTitle}</Text>
      <FlatLine></FlatLine>
      {props.cardBody}
    </View>
  );
};
