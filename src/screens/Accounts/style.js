import { StyleSheet } from "react-native";
import commom from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: commom.color.backgroundDefault,
    },

    flatList: {
      backgroundColor: "transparent",
    },
  });
