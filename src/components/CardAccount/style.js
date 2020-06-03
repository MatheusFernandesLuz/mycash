import { StyleSheet } from "react-native";
import commom from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      marginBottom: 0,
      borderRadius: 5,
    },

    buttons: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: 80,
    },

    touch: {
      width: 40,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
    },

    icon: {
      fontSize: 22,
      color: commom.color.textMain,
    },

    descriptionText: {
      fontFamily: commom.fontFamily.regular,
      fontSize: 14,
      color: commom.color.textMain,
    },
  });
