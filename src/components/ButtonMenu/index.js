import React from "react";
import { AntDesign } from "@expo/vector-icons";
import ActionButton from "react-native-action-button";

export default function ButtonMenu() {
  return (
    <ActionButton
      buttonColor="rgba(15, 64, 107, 1)"
      bgColor="black"
      bgOpacity={0.5}
      size={60}
      nativeFeedbackRippleColor={"transparent"}
      spacing={10}
    >
      <ActionButton.Item buttonColor="#9b59b6" title="Nova conta" size={45}>
        <AntDesign name="back" />
      </ActionButton.Item>
      <ActionButton.Item buttonColor="#3498db" title="Nova transação" size={45}>
        <AntDesign name="back" />
      </ActionButton.Item>
      <ActionButton.Item buttonColor="#1abc9c" title="Planejamento" size={45}>
        <AntDesign name="back" />
      </ActionButton.Item>
    </ActionButton>
  );
}
