import React from "react";
import { View } from "react-native";

import Card from "../CardBase";
import Style from "./style";
const classes = Style();

export default function CardResumo() {
  const buttonPlanejamento = {
    destiny: "Planejamento",
    title: "Planejamento",
  };

  return (
    <Card
      title="Resumo mensal"
      buttonProps={buttonPlanejamento}
      body={<View></View>}
    ></Card>
  );
}
