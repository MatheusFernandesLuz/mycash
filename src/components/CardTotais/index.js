import React from "react";
import { View, Text } from "react-native";

import Card from "../CardBase";
import FastButtom from "../FastButton";
import Style from "./style";

const classes = Style();

export default function CardTotais({ style }) {
  return (
    <Card
      style={style}
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
      cardSkill={<FastButtom destiny="Contas" title="Ver contas" />}
    ></Card>
  );
}
