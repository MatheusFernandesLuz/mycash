import React from "react";
import { View, Text } from "react-native";
import Card from "../CardBase";
import Style from "./style";

const classes = Style();

export default function CardTotais() {
  return (
    <Card
      title="Totais"
      body={
        <View style={classes.container}>
          <View>
            <Text style={classes.titleText}>Saldo em contas: </Text>
            <Text style={classes.titleText}>Faturas: </Text>
            <Text style={classes.titleText}>Investimentos: </Text>
            <Text style={classes.titleText}>Reserva financeira: </Text>
          </View>
          <View>
            <Text style={classes.totalText}>R$ 1.251,80</Text>
            <Text style={classes.totalText}>R$ 1.251,80</Text>
            <Text style={classes.totalText}>R$ 1.251,80</Text>
            <Text style={classes.totalText}>R$ 1.251,80</Text>
          </View>
        </View>
      }
    ></Card>
  );
}
