import React, { Component } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../../components/Card";
import Styles from "./style";
const classes = Styles();

const totalContent = () => {
  return (
    <View>
      <Text style={classes.titleText}>Saldo em contas: </Text>
      <Text style={classes.titleText}>Faturas: </Text>
      <Text style={classes.titleText}>Investimentos: </Text>
      <Text style={classes.titleText}>Reserva financeira: </Text>
    </View>
  );
};

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={classes.container}>
        <Card cardTitle="Totais" cardBody={totalContent()}></Card>
      </SafeAreaView>
    );
  }
}
