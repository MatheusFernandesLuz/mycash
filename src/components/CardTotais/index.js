import React from "react";
import { View, Text } from "react-native";
import Card from "../CardBase";
import Style from "./style";

const classes = Style();

const cardBody = () => {
  return (
    <View style={classes.container}>
      <View style={classes.sideTitles}>
        <Text style={classes.titleText}>Saldo em contas: </Text>
        <Text style={classes.titleText}>Faturas: </Text>
        <Text style={classes.titleText}>Investimentos: </Text>
        <Text style={classes.titleText}>Reserva financeira: </Text>
      </View>
      <View style={classes.sideTotals}>
        <Text style={classes.totalText}>R$ 1.251,80</Text>
        <Text style={classes.totalText}>R$ 1.251,80</Text>
        <Text style={classes.totalText}>R$ 1.251,80</Text>
        <Text style={classes.totalText}>R$ 1.251,80</Text>
      </View>
    </View>
  );
};

export default () => {
  return <Card title="Totais" body={cardBody()}></Card>;
};
