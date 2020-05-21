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

    icon: {
      color: commom.color.textMain,
      fontSize: 24,
    },

    description: {
      fontSize: 14,
      color: commom.color.textMain,
      fontFamily: commom.fontFamily.medium,
    },

    value: {
      color: commom.color.textMain,
      fontFamily: commom.fontFamily.medium,
    },

    secondary: {
      fontSize: 11,
      fontFamily: commom.fontFamily.regular,
      color: commom.color.textSecondary,
    },
  });
