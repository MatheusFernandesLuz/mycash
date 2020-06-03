import { StyleSheet } from "react-native";
import common from "./../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      padding: 4,
    },

    indicadores: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 3,
    },

    areaPlotagem: {
      backgroundColor: "#E1E1E1",
      borderRadius: 5,
    },

    percentagem: {
      fontSize: 16,
      marginLeft: 5,
      fontFamily: common.fontFamily.bold,
    },

    volume: {
      borderRadius: 5,
      minWidth: 1,
      maxWidth: "100%",
      height: 16,
    },

    textoGrafico: {
      fontSize: 12,
      fontFamily: common.fontFamily.bold,
    },
  });
