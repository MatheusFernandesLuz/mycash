import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    card: {
      backgroundColor: "#F1F1F1",
      width: "95%",
      minHeight: 100,
      marginTop: 60,
      borderRadius: 8,
      elevation: 10,
      padding: 20,
    },

    mainText: {
      fontFamily: common.fontFamily,
      color: common.color,
      fontSize: 20,
      fontWeight: "bold",
    },
  });
