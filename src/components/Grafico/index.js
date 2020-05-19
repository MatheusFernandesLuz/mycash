import React from "react";
import { View, Text } from "react-native";

import Styles from "./style";
const classes = Styles();

export default ({ color, percent, subtitle }) => {
  return (
    <View style={classes.container}>
      <Text style={[classes.percentagem, { color: color }]}>{percent}%</Text>
      <View
        style={[classes.grafico, { height: 100, backgroundColor: color }]}
      />
      <Text style={[classes.textoGrafico, { color: color }]}>{subtitle}</Text>
    </View>
  );
};
