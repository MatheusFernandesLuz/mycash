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
      color: common.color.main,
      fontFamily: common.fontFamily.regular,
      marginVertical: 2,
    },

    totalText: {
      color: common.color.main,
      fontFamily: common.fontFamily.bold,
      marginVertical: 2,
    },
  });
