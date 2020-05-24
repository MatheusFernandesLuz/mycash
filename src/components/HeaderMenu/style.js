import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      borderBottomColor: common.color.background,
      borderBottomWidth: 1.2,
      flexDirection: "row",
      paddingHorizontal: 5,
      paddingVertical: 5,
      width: "100%",
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
      color: "#F1F1F1",
      fontFamily: common.fontFamily.bold,
    },
  });
