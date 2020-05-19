import { StyleSheet } from "react-native";
import commom from "./../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 10,
    },

    middle: {
      flex: 1,
      marginHorizontal: 10,
    },

    right: {
      alignItems: "flex-end",
    },

    description: {
      fontSize: 14,
      fontFamily: commom.fontFamily.medium,
    },

    value: {
      fontFamily: commom.fontFamily.medium,
    },

    secondary: {
      fontSize: 11,
      fontFamily: commom.fontFamily.regular,
      color: commom.color.secondary,
    },
  });
