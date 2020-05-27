import React from "react";
import { View, Text } from "react-native";

import Styles from "./style";

const classes = Styles();

export default function CardAccount(account) {
  return (
    <View style={classes.container}>
      <Text style={{}}>{account.nome}</Text>
      <Text style={{}}>{account.title}</Text>
      <Text style={{}}>{account.saldo}</Text>
    </View>
  );
}
