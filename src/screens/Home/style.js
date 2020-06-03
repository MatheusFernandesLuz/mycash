import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },

    absolute: {
      position: "absolute",
      top: 80,
    },

    scroll: {
      flex: 1,
      width: "100%",
      paddingTop: 10,
    },

    contentScroll: {
      alignItems: "center",
      paddingBottom: 75,
    },
  });
