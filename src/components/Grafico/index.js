import React from "react";
import { View, Text } from "react-native";

import Styles from "./style";
const classes = Styles();

export default ({ color, percent, subtitle }) => {
  return (
    <View style={classes.container}>
      <View style={classes.indicadores}>
        <Text style={[classes.textoGrafico, { color: color }]}>
          {`${subtitle} - `}
        </Text>
        <Text style={[classes.percentagem, { color: color }]}>{percent}%</Text>
      </View>
      <View style={classes.areaPlotagem}>
        <View
          style={[
            classes.volume,
            { width: `${percent}%`, backgroundColor: color },
          ]}
        />
      </View>
    </View>
  );
};
