import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./screens/Home";
import Accounts from "./screens/Accounts";
import common from "./commonStyles";

const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: common.color.textLight,
        labelStyle: { fontSize: 12 },
        style: {
          backgroundColor: common.color.blue,
          height: "10%",
          justifyContent: "center",
          paddingTop: 20,
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contas" component={Accounts} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Main" component={Home} />
          <Drawer.Screen name="Contas" component={Accounts} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
