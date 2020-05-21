import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity as Touch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import CardTotais from "../../components/CardTotais";
import CardResumo from "../../components/CardResumo";
import CardTrasacoes from "../../components/CardTransacoes";
import Styles from "./style";

export default function Home() {
  const classes = Styles();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={classes.container}>
      <View style={classes.section}>
        <AntDesign
          name="menu-fold"
          style={classes.iconMenu}
          onPress={() => navigation.openDrawer()}
        ></AntDesign>
        <View style={classes.monthSelection}>
          <Touch style={{ paddingHorizontal: 30 }}>
            <AntDesign name="left" style={classes.iconArrow} />
          </Touch>
          <Text style={classes.textMonth}>Maio</Text>
          <Touch style={{ paddingHorizontal: 30 }}>
            <AntDesign name="right" style={classes.iconArrow} />
          </Touch>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
        style={classes.scroll}
      >
        <CardTotais></CardTotais>
        <CardResumo></CardResumo>
        <CardTrasacoes></CardTrasacoes>
      </ScrollView>
    </SafeAreaView>
  );
}
