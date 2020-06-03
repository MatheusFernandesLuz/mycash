import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 10,
    },

    indicadores: {
      flex: 2,
      justifyContent: "center",
      backgroundColor: "#F0F0F0",
      padding: 10,
      borderRadius: 12,
    },

    valores: {
      flex: 1,
      height: "100%",
      alignItems: "flex-end",
      justifyContent: "flex-start",
    },

    touchArea: {
      alignItems: "flex-end",
      marginVertical: 3,
    },

    tituloValor: {
      color: common.color.textMain,
      fontSize: 12,
      fontFamily: common.fontFamily.medium,
    },

    valor: {
      fontSize: 14,
      fontFamily: common.fontFamily.bold,
    },

    footer: {
      fontSize: 11,
      padding: 5,
      color: common.color.textMain,
      fontFamily: common.fontFamily.medium,
    },
  });
