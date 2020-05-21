import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: common.color.background,
    },

    section: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: common.color.background,
      borderBottomWidth: 1,
      borderBottomColor: "#005A96",
    },

    iconMenu: {
      fontSize: 22,
      color: common.color.textLight,
      marginLeft: "5%",
    },

    iconArrow: {
      fontSize: 22,
      color: common.color.textLight,
    },

    monthSelection: {
      width: "60%",
      marginVertical: 15,
      marginLeft: "10%",
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
      flex: 1,
      width: "100%",
    },
  });
