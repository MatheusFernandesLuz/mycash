import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#005AD2",
    },

    titleText: {
      fontFamily: common.fontFamily,
      color: common.color,
      fontSize: 14,
      marginTop: 4,
    },
  });
