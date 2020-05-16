import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#005AD2",
    },

    header: {
      width: "100%",
      marginVertical: 20,
      alignItems: "center",
      justifyContent: "center",
    },

    textDefault: {
      color: "#F1F1F1",
      fontSize: 22,
      fontWeight: "bold",
    },

    scroll: {
      width: "100%",
    },

    titleText: {
      fontFamily: common.fontFamily,
      color: common.color,
      fontSize: 14,
      marginTop: 4,
    },
  });
