import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 10,
    },

    middle: {
      flex: 1,
      marginHorizontal: 8,
    },

    description: {
      fontWeight: "bold",
    },

    category: {
      fontSize: 12,
    },

    right: {
      alignItems: "flex-end",
    },

    value: {
      fontWeight: "bold",
    },

    date: {
      fontSize: 12,
    },
  });
