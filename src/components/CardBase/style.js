import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    card: {
      backgroundColor: "#F1F1F1",
      width: "95%",
      minHeight: 100,
      marginBottom: 15,
      borderRadius: 12,
      elevation: 10,
      paddingVertical: 10,
      paddingHorizontal: 15,
    },

    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 5,
    },

    cardBody: {
      padding: 5,
    },

    mainText: {
      fontFamily: common.fontFamily.bold,
      color: common.color.main,
      fontSize: 18,
    },

    cardButton: {
      borderWidth: 0.7,
      borderColor: common.color.main,
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 8,
      justifyContent: "center",
      alignItems: "center",
    },

    textButton: {
      color: common.color.main,
      fontSize: 12,
      fontFamily: common.fontFamily.regular,
    },
  });
