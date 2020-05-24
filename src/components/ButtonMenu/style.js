import { StyleSheet } from "react-native";
import commom from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: "#1E81D7",
      borderRadius: 29,
      bottom: 30,
      elevation: 10,
      height: 57,
      justifyContent: "center",
      position: "absolute",
      right: 30,
      width: 57,
    },

    icon: {
      color: commom.color.textLight,
      fontSize: 25,
    },
  });
