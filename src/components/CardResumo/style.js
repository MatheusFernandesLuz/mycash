import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-end",
      paddingVertical: 10,
    },

    indicadores: {
      flex: 1,
      height: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#e5e5e5",
      borderRadius: 10,
      marginRight: 10,
    },

    valores: {
      height: "100%",
    },

    touchArea: {
      alignItems: "flex-start",
      marginVertical: 3,
    },

    tituloValor: {
      color: "#424242",
      fontSize: 14,
    },

    valorReceitas: {
      fontWeight: "bold",
      fontSize: 15,
      color: "#008234",
    },

    valorDespesas: {
      fontWeight: "bold",
      fontSize: 15,
      color: "#AA3F3F",
    },

    valorEconomia: {
      fontWeight: "bold",
      fontSize: 15,
      color: "#005AE2",
    },

    footer: {
      fontSize: 12,
      padding: 5,
    },

    acimaPlanejado: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#AA3F3F",
    },
  });
