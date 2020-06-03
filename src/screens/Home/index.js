import React, { Component } from "react";
import { ScrollView, View } from "react-native";

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
          contentContainerStyle={classes.contentScroll}
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
