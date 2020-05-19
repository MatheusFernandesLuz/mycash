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
      marginVertical: 20,
      alignItems: "center",
      justifyContent: "center",
    },

    titleHeader: {
      color: "#F1F1F1",
      fontSize: 22,
      fontFamily: common.fontFamily.bold,
    },

    scroll: {
      width: "100%",
    },
  });
