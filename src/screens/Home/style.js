import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: common.color.background,
    },

    header: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: common.color.background,
      borderBottomWidth: 1,
      borderBottomColor: "#005A96",
    },

    touch: {
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },

    icon: {
      fontSize: 22,
      color: common.color.textLight,
    },

    monthSelection: {
      width: "60%",
      marginVertical: 5,
      marginLeft: "6%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },

    textMonth: {
      color: common.color.textLight,
      fontSize: 20,
      marginHorizontal: 15,
      fontFamily: common.fontFamily.bold,
    },

    scroll: {
      backgroundColor: common.color.backgroundScroll,
      flex: 1,
      width: "100%",
    },
  });
