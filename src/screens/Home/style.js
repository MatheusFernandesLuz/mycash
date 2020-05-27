import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },

    scroll: {
      flex: 1,
      width: "100%",
      backgroundColor: common.color.backgroundDefault,
    },
  });
