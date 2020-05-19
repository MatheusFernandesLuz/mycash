import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingVertical: 10,
    },

    indicadores: {
      flex: 1,
      height: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-end",
      backgroundColor: "#E5E5E5",
      borderRadius: 10,
      marginRight: 10,
      paddingVertical: 10,
    },

    valores: {
      height: "100%",
      alignItems: "flex-end",
      justifyContent: "flex-start",
    },

    touchArea: {
      alignItems: "flex-end",
      marginVertical: 3,
    },

    tituloValor: {
      color: common.color.main,
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
      color: common.color.main,
      fontFamily: common.fontFamily.medium,
    },
  });
