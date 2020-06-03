import React from "react";
import { View, Text } from "react-native";

import Style from "./style";
import FlatLine from "../FlatLine";
const classes = Style();

export default function CardBase({ title, body, footer, cardSkill, style }) {
  return (
    <View style={[classes.card, style]}>
      <View style={classes.cardHeader}>
        <Text style={classes.mainText}>{title}</Text>
        {cardSkill ? cardSkill : null}
      </View>
      <FlatLine />
      <View style={classes.cardBody}>{body}</View>
      {footer && <View style={classes.cardFooter}>{footer}</View>}
    </View>
  );
}
