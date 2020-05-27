import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderMenu from "../../components/HeaderMenu";
import CardTotais from "../../components/CardTotais";
import CardResumo from "../../components/CardResumo";
import CardTrasacoes from "../../components/CardTransacoes";
import ButtonMenu from "../../components/ButtonMenu";
import Styles from "./style";

const classes = Styles();

export default class Home extends Component {
  render() {
    return (
      <View style={classes.container}>
        <HeaderMenu />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", paddingBottom: 75 }}
          style={classes.scroll}
        >
          <CardTotais />
          <CardResumo />
          <CardTrasacoes />
        </ScrollView>
        <ButtonMenu />
      </View>
    );
  }
}
