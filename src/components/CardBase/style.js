import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    card: {
      backgroundColor: "#F1F1F1",
      width: "95%",
      minHeight: 100,
      marginTop: 15,
      borderRadius: 20,
      elevation: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },

    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 5,
    },

    mainText: {
      fontFamily: common.fontFamily,
      color: common.color,
      fontSize: 18,
      fontWeight: "bold",
    },

    cardButton: {
      borderWidth: 1,
      borderColor: "#424242",
      borderRadius: 20,
      paddingVertical: 3,
      paddingHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
    },

    textButton: {
      color: "#424242",
    },
  });
