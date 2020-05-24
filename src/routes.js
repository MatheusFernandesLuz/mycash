import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./screens/Home";
import Accounts from "./screens/Accounts";
import common from "./commonStyles";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Main" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
