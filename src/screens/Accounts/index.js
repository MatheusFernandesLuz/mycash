import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import CardAccount from "../../components/CardAccount";
import Style from "./style";

const classes = Style();

const DATA = [
  {
    id: "1",
    nome: "NuBank",
    title: "conta corrente",
    saldo: "R$ 1.200,00",
  },
  {
    id: "2",
    nome: "Inter",
    title: "conta corrente",
    saldo: "R$ 1.200,00",
  },
  {
    id: "3",
    nome: "Caixa",
    title: "conta poupança",
    saldo: "R$ 1.200,00",
  },
];

export default function App() {
  return (
    <View style={classes.container}>
      <FlatList
        style={classes.flatList}
        data={DATA}
        renderItem={({ item }) => <CardAccount {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
