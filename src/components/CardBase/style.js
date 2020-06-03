import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    card: {
      backgroundColor: common.color.backgroundCard,
      width: "95%",
      minHeight: 100,
      marginBottom: 12,
      borderRadius: 12,
      elevation: 2,
      borderWidth: 0.5,
      borderColor: "#d9d9d9",
    },

    mainText: {
      fontFamily: common.fontFamily.bold,
      color: common.color.textMain,
      fontSize: 18,
    },

    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 5,
      paddingHorizontal: 15,
      paddingTop: 8,
    },

    cardBody: {
      paddingHorizontal: 15,
      paddingBottom: 8,
    },

    cardFooter: {
      backgroundColor: "#EEEEEE",
      borderTopWidth: 0.5,
      borderTopColor: "#D1D1D1",
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 12,
      padding: 8,
    },
  });
