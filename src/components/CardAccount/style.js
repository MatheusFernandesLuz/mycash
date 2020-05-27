import { StyleSheet } from "react-native";
import commom from "../../commonStyles";

export default () =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      paddingVertical: 15,
      marginBottom: 20,
      marginHorizontal: 5,
      backgroundColor: commom.color.backgroundDefault,
      borderRadius: 5,
    },
  });
