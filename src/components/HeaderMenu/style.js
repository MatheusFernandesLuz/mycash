import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
      backgroundColor: common.color.backgroundBlue,
      paddingTop: Constants.statusBarHeight + 5,
      paddingBottom: 5,
      elevation: 10,
    },

    menuIcon: {
      color: "#FEFEFE",
      fontSize: 22,
    },

    arrowIcon: {
      color: "#FEFEFE",
      fontSize: 22,
    },

    iconButton: {
      alignItems: "center",
      height: 50,
      justifyContent: "center",
      width: 50,
    },

    selectMounth: {
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10%",
      flexDirection: "row",
      flex: 1,
    },

    mounth: {
      marginHorizontal: 8,
      fontSize: 18,
      color: common.color.textLight,
      fontFamily: common.fontFamily.bold,
    },
  });
