import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Card from "../CardBase";
import Grafico from "../Grafico";
import Style from "./style";
const classes = Style();

export default function CardResumo() {
  return (
    <Card
      title="Resumo mensal"
      buttonProps={{
        destiny: "Planejamento",
        title: "Ver Planejamento",
      }}
      body={
        <View style={classes.container}>
          <View style={classes.indicadores}>
            <Grafico color="#AA3F3F" percent={43} subtitle="Despesas"></Grafico>
            <Grafico color="#005AE2" percent={57} subtitle="Economia"></Grafico>
          </View>
          <View style={classes.valores}>
            <TouchableOpacity style={classes.touchArea}>
              <Text style={classes.tituloValor}>Receitas</Text>
              <Text style={[classes.valor, { color: "#008234" }]}>
                R$ 1770,51
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={classes.touchArea}>
              <Text style={classes.tituloValor}>Despesas</Text>
              <Text style={[classes.valor, { color: "#AA3F3F" }]}>
                R$ 749,50
              </Text>
            </TouchableOpacity>
            <Text style={classes.tituloValor}>Economia</Text>
            <Text style={[classes.valor, { color: "#005AE2" }]}>
              R$ 1.045,50
            </Text>
          </View>
        </View>
      }
      footer={
        <Text style={classes.footer}>
          <Text>Dica</Text>: Você gastou{" "}
          <Text style={[classes.valor, { color: "#AA3F3F" }]}>R$ 145,55</Text>{" "}
          acima do planejado. Revise o Planejamento e melhore as metas!
        </Text>
      }
    ></Card>
  );
}
