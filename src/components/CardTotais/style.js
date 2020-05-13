import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },

    titleText: {
      color: common.color,
    },

    totalText: {
      fontWeight: "bold",
      color: common.color,
    },
  });
