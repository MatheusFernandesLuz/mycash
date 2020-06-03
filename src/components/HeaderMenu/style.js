import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      backgroundColor: common.color.backgroundBlue,
      paddingTop: Constants.statusBarHeight,
      paddingBottom: 5,
      paddingHorizontal: 15,
    },

    menuIcon: {
      color: "#FEFEFE",
      fontSize: 25,
    },

    arrowIcon: {
      color: "#FEFEFE",
      fontSize: 25,
    },

    iconButton: {
      alignItems: "center",
      height: 50,
      justifyContent: "center",
      width: 50,
    },

    selectMounth: {
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row",
      flex: 1,
      height: 50,
    },

    mounth: {
      marginHorizontal: 8,
      fontSize: 18,
      color: common.color.textLight,
      fontFamily: common.fontFamily.bold,
    },
  });
