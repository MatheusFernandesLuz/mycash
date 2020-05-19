import { StyleSheet } from "react-native";
import common from "./../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      justifyContent: "flex-end",
      alignItems: "center",
    },

    percentagem: {
      fontSize: 18,
      marginLeft: 5,
      fontFamily: common.fontFamily.bold,
    },

    grafico: {
      borderRadius: 5,
      width: 60,
    },

    textoGrafico: {
      fontSize: 12,
      fontFamily: common.fontFamily.bold,
    },
  });
