import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CardTotais from "../../components/CardTotais";
import CardResumo from "../../components/CardResumo";
import CardTrasacoes from "../../components/CardTransacoes";
import Styles from "./style";
const classes = Styles();

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView scrollenabled style={classes.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
          style={classes.scroll}
        >
          <View style={classes.header}>
            <Text style={classes.textDefault}>Cabeçalho</Text>
          </View>
          <CardTotais></CardTotais>
          <CardResumo></CardResumo>
          <CardTrasacoes></CardTrasacoes>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
