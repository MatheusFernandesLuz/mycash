import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./screens/Home";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator headerMode="none">
          <Drawer.Screen name="App Cash" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
