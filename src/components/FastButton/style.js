import { StyleSheet } from "react-native";
import common from "../../commonStyles";

export default () =>
  StyleSheet.create({
    cardButton: {
      borderWidth: 0.7,
      borderColor: common.color.textSecondary,
      borderRadius: 22,
      paddingVertical: 5,
      paddingHorizontal: 8,
      justifyContent: "center",
      alignItems: "center",
    },

    textButton: {
      color: common.color.textSecondary,
      fontSize: 12,
      fontFamily: common.fontFamily.regular,
    },
  });
