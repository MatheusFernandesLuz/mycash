import React from "react";
import { View, Text, TouchableOpacity as Touch } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CardBase from "../../components/CardBase";
import Styles from "./style";

const classes = Styles();

export default function CardAccount(account) {
  return (
    <View style={classes.container}>
      <CardBase
        title={account.nome}
        body={
          <View>
            <Text style={classes.descriptionText}>{account.title}</Text>
            <Text style={classes.descriptionText}>
              saldo em conta: {account.saldo}
            </Text>
          </View>
        }
        cardSkill={
          <View style={classes.buttons}>
            <Touch style={classes.touch}>
              <AntDesign name="delete" style={classes.icon} />
            </Touch>
            <Touch style={classes.touch}>
              <AntDesign name="edit" style={classes.icon} />
            </Touch>
          </View>
        }
      />
    </View>
  );
}
