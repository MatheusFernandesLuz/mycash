import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    container: {
      justifyContent: "flex-end",
      alignItems: "center",
    },

    percentagem: {
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 5,
    },

    grafico: {
      borderRadius: 5,
      width: 60,
    },

    textoGrafico: {
      fontSize: 14,
      fontWeight: "bold",
    },
  });
