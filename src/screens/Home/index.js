import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import CardTotais from "../../components/CardTotais";
import CardResumo from "../../components/CardResumo";
import Styles from "./style";
const classes = Styles();

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={classes.container}>
        <CardTotais></CardTotais>
        <CardResumo></CardResumo>
      </SafeAreaView>
    );
  }
}
